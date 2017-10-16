//--------------------------------------------------------------------------------------------------
/*
 * Vehicule class file.
 */
//--------------------------------------------------------------------------------------------------


//--------------------------------------------------------------------------------------------------
/*
 * Vehicule constructor function
 */
//--------------------------------------------------------------------------------------------------
function Vehicule(name, capacity, path, string_object, icon)
{
    Service.call(this, name, capacity, string_object, icon);
    this.path = path;
    this.path_index = 0;
    this.users = [];
}

Vehicule.prototype = Object.create(Service.prototype);
Vehicule.prototype.constructor = Vehicule;


//--------------------------------------------------------------------------------------------------
/*
 * Make the vehicule follow its entire path
 */
//--------------------------------------------------------------------------------------------------
Vehicule.prototype.runPath = function()
{
    for (var i = 0; i < this.path.length; i++)
    {
        this.oneStep();
    }
}

//--------------------------------------------------------------------------------------------------
/*
 * Make the vehicule go one step in its path
 */
//--------------------------------------------------------------------------------------------------
Vehicule.prototype.oneStep = function()
{

    var thisVehicule = this;

    var next_index = thisVehicule.nextPathIndex();
    var destination = thisVehicule.path[next_index];

    var duration = thisVehicule.duration(   thisVehicule.path[thisVehicule.path_index],
                                            thisVehicule.path[thisVehicule.nextPathIndex()]);
    var dest;
    var destination_is_stop;
    if (isStop(thisVehicule.path[next_index]))
    {
        dest = STOPS[thisVehicule.path[next_index]];
        destination_is_stop = true;
    }
    else 
    {
        
        dest = WAYPOINTS[thisVehicule.path[next_index]];
        destination_is_stop = false;
    }

    thisVehicule.path_index = next_index;

    thisVehicule.icon.animate(duration, '-', 0).center( dest.cx(),
                                                        dest.cy())
    .after(function()
        {
            // Si c'est un arrêt
            if (destination_is_stop)
                thisVehicule.stop(next_index);

            Service.prototype.updateString.call(thisVehicule);
        });


}

//--------------------------------------------------------------------------------------------------
/*
 * Returns the next index in the path 
 */
//--------------------------------------------------------------------------------------------------
Vehicule.prototype.nextPathIndex = function() 
{
    return (this.path_index + 1) % (this.path.length);
}

//--------------------------------------------------------------------------------------------------
/*
 * Handle passengers at next stop
 */
//--------------------------------------------------------------------------------------------------
Vehicule.prototype.stop = function(next_index)
{
    var thisVehicule = this;

    //Guy users
    if (this.users.length > 0)
    {   
        this.users.forEach(function(user)
        {
            if (user.inVehicule)
            {   
                if (user.goal == thisVehicule.path[next_index])
                {
                    user.getOut();
                    thisVehicule.removePersons(1);
                    thisVehicule.users.splice(thisVehicule.users.indexOf(user), 1);
                }
            }
            else
            {
                if (user.start_localisation == thisVehicule.path[next_index])
                {
                    user.getIn();
                    thisVehicule.addPersons(1);
                }
            }
        });
    }
}

//--------------------------------------------------------------------------------------------------
/*
 * Compute travel time to go from one point to another
 */
//--------------------------------------------------------------------------------------------------
Vehicule.prototype.duration = function(origin, destination)
{
    /*var src;
    console.log(origin);
    if (isStop(origin))
        src = STOPS[origin];
    else 
        src = WAYPOINTS[origin];

    var dest;
    if (isStop(destination))
        dest = STOPS[destination];
    else 
        dest = WAYPOINTS[destination];


    var distance = Math.pow(dest.cx() - src.cx(), 2);
    distance += Math.pow(dest.cy() - src.cy(), 2);
    distance = Math.sqrt(distance);

    return Math.round(distance*1000/this.speed);
    */
    return 1000;
}