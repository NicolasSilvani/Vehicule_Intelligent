//--------------------------------------------------------------------------------------------------
/*
 * Guy class file.
 */
//--------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------
/*
 * Guy constructor function
 */
//--------------------------------------------------------------------------------------------------
function Guy(vehicules, average_string)
{
    this.vehicules = vehicules;
    this.users = [];
    this.travel_times = [];
    this.average_string = average_string;
}

//--------------------------------------------------------------------------------------------------
/*
 * Order car to transport a user
 */
//--------------------------------------------------------------------------------------------------
Guy.prototype.newTime = function(travel_time)
{
    this.travel_times.push(travel_time);
    var sum = 0;
    this.travel_times.forEach(function(value)
        {
            sum += value;
        });
    this.average = Math.floor(sum / this.travel_times.length);
    var string = "AVERAGE TRAVEL TIME: "+this.average;
    this.average_string.innerHTML = string;
}
//--------------------------------------------------------------------------------------------------
/*
 * Order car to transport a user
 */
//--------------------------------------------------------------------------------------------------
Guy.prototype.handleUser = function(user)
{
    this.users.push(user);
    // Find best vehicule
    //user.start_localisation;
    var best_transport = this.best_transport(user.start_localisation, user.goal);
    // Get path for vehicule

    console.log(user.name+" should use "+best_transport.name+" to go from "+user.start_localisation+" to "+user.goal);

    if (best_transport instanceof Bus)
    {   
        best_transport.transportUser(user);
    }
    else if (best_transport instanceof Voiture)
    {
        var path = [best_transport.current_position];
        if (best_transport.current_position != user.start_localisation)
            path = path.concat(path_dict[best_transport.current_position][user.start_localisation]);

        path = path.concat(path_dict[user.start_localisation][user.goal]);

        best_transport.transportUser(user, path);
    }
    else if (best_transport instanceof Segway)
    {
        var path = [best_transport.current_position];
        path = path.concat(path_dict[user.start_localisation][user.goal]);

        best_transport.transportUser(user, path);
    }
    user.setString(user.name+" is waiting for "+best_transport.name);
    // Call vehicule
}

//--------------------------------------------------------------------------------------------------
/*
 * Find the best vehicle for the user using travel time
 */
//--------------------------------------------------------------------------------------------------
Guy.prototype.best_transport = function(origin, destination)
{
    var thisGuy = this;
    var best_transport;
    var shortest_travel_time = 999999999999;


    thisGuy.vehicules['Bus'].forEach(function(thisBus)
        {
            var user_index = thisBus.path.indexOf(origin);
            var current_index = thisBus.current_index_in_path;

            var path = [];
            if (current_index > user_index)
            {
                path = path.concat(thisBus.path.slice(current_index, thisBus.path.length-1));
                path = path.concat(thisBus.path.slice(0, user_index));
            }
            else
            {
                path = path.concat(thisBus.path.slice(current_index, user_index));
            }


            var travel_time = thisGuy.distancePath(path) / thisBus.speed;

            if (shortest_travel_time > travel_time) 
            {
                shortest_travel_time = travel_time;
                best_transport = thisBus;
            }

            console.log(thisBus.name+" user index "+user_index+" current_index "+current_index+" travel_time "+travel_time);
        });


    thisGuy.vehicules['Car'].forEach(function(thisCar)
        {
            if (thisCar.available)
            {
                var path = [];
                if (thisCar.current_position != origin)
                    path = path.concat(path_dict[thisCar.current_position][origin]);

                path = path.concat(path_dict[origin][destination]);

                var travel_time = thisGuy.distancePath(path) / thisCar.speed;

                if (shortest_travel_time > travel_time) 
                {
                    shortest_travel_time = travel_time;
                    best_transport = thisCar;
                }
            }
        });

    thisGuy.vehicules['Segway'].forEach(function(thisSegway)
        {
            if (thisSegway.available)
            {
                if (thisSegway.current_position == origin)
                {
                    var path = [];
                    path = path.concat(path_dict[origin][destination]);

                    var travel_time = thisGuy.distancePath(path) / thisSegway.speed;

                    if (shortest_travel_time > travel_time) 
                    {
                        shortest_travel_time = travel_time;
                        best_transport = thisSegway;
                    }
                }
            }
        });

    return best_transport;
}


//--------------------------------------------------------------------------------------------------
/*
 * Compute distance along the path
 */
//--------------------------------------------------------------------------------------------------
Guy.prototype.distancePath = function(path)
{
    var distance = 0;

    for (var i = 0; i < path.length-1; i++) 
    {
        distance += this.distance(path[i], path[i+1]);
    }

    return distance;
}
//--------------------------------------------------------------------------------------------------
/*
 * Compute distance between 2 waypoints
 */
//--------------------------------------------------------------------------------------------------

Guy.prototype.distance = function(origin, destination)
{
    var src;
    if (isStop(origin))
        src = STOPS[origin];
    else 
        src = WAYPOINTS[origin];

    var dest;
    if (isStop(destination))
        dest = STOPS[destination];
    else 
        dest = WAYPOINTS[destination];

    var dist = Math.pow(dest.cx() - src.cx(), 2);
    dist += Math.pow(dest.cy() - src.cy(), 2);
    dist = Math.sqrt(dist);

    return dist;
}


