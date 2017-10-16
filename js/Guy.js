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

//Guy.prototype.constructor = Guy;

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
        console.log(user.name+" should use "+best_transport.name);
        best_transport.users.push(user);
    }
    // Call vehicule
}

Guy.prototype.best_transport = function(origin, destination)
{
    var best_transport;
    var shortest_travel_time = 999999999999;

    var best_bus;
    this.vehicules['Bus'].forEach(function(Bus)
        {
            var user_index = Bus.path.indexOf(origin);
            var current_index = Bus.current_index_in_path;

            var travel_time = user_index - current_index; //TODO: CORRECT THIS
            if (current_index > user_index)
                travel_time += Bus.path.length;

            if (shortest_travel_time > travel_time) 
            {
                shortest_travel_time = travel_time;
                best_bus = Bus;
            }
            console.log(Bus.name+" "+travel_time);
        });

    best_transport = best_bus;

    return best_transport;
}