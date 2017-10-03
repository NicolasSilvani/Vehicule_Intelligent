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
}

Vehicule.prototype = Object.create(Service.prototype);
Vehicule.prototype.constructor = Vehicule;

Vehicule.speed = 50;
//--------------------------------------------------------------------------------------------------
/*
 * Make the vehicule follow its entire path
 */
//--------------------------------------------------------------------------------------------------
Vehicule.prototype.runPath = function()
{
    var thisVehicule = this;
    
    for (i = 0; i < this.path.length; i++)
    {
        // Test code for animation speed
        var distance = Math.pow(thisVehicule.path[i].cx() - thisVehicule.icon.cx(), 2)
        distance += Math.pow(thisVehicule.path[i].cy() - thisVehicule.icon.cy(), 2)
        distance = Math.sqrt(distance);

        var duration = Math.round(distance*1000/Vehicule.speed);

        console.log("Animation duration: " + duration + "\tDistance: " + distance + "\tSpeed: " + (distance/duration));

        thisVehicule.icon.animate(duration).center(thisVehicule.path[i].cx(),
                                           thisVehicule.path[i].cy())
        .after(function()
            {
                if (Math.random() > 0.5)
                    thisVehicule.addPersons(1);
                else 
                    thisVehicule.removePersons(1);
                console.log(thisVehicule.occupancy)
            });


    }
}