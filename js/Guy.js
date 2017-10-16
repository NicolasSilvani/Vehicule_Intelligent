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
function Guy(vehicules)
{
    this.vehicules = vehicules;
    this.users = [];
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

    if (best_transport instanceof Bus)
    {   
        console.log(user.name+" should use "+best_transport.name+" to go from "+user.start_localisation+" to "+user.goal);
        best_transport.users.push(user);
    }
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

    var best_bus;
    thisGuy.vehicules['Bus'].forEach(function(thisBus)
        {
            var user_index = thisBus.path.indexOf(origin);
            var current_index = thisBus.current_index_in_path;

            var path = [];
            if (current_index > user_index)
            {
                path.push(thisBus.path.slice(current_index, thisBus.path.length-1));
                path.push(thisBus.path.slice(0, user_index));
            }
            else
            {
                path.push(thisBus.path.slice(current_index, user_index));
            }

            var travel_time = thisGuy.distancePath(path);

            if (shortest_travel_time > travel_time) 
            {
                shortest_travel_time = travel_time;
                best_bus = thisBus;
            }

            console.log(thisBus.name+" user index "+user_index+" current_index "+current_index+" travel_time "+travel_time);
        });


    best_transport = best_bus;

best_transport = thisGuy.vehicules['Bus'][0];
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


