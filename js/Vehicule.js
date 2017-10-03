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
Vehicule.prototype.runPath = async function()
{
    var thisVehicule = this;
    
    for (i = 0; i < this.path.length; i++)
    {
        thisVehicule.icon.animate(duration).center( thisVehicule.path[i].cx(),
                                                    thisVehicule.path[i].cy());
    }
}