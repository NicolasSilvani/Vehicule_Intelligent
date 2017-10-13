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
var Pcx;
var Pcy;
var Vcx;
var Vcy;
//--------------------------------------------------------------------------------------------------
/*
 * Make the vehicule follow its entire path
 */
//--------------------------------------------------------------------------------------------------
Vehicule.prototype.runPath = function()
{
    var thisVehicule = this;
    
    var duration = 0;
    var prevX = thisVehicule.icon.cx();
    var prevY = thisVehicule.icon.cy();
    for (i = 0; i < this.path.length; i++)
    {
        var distance = Math.pow(thisVehicule.path[i].cx() - prevX, 2);
        distance += Math.pow(thisVehicule.path[i].cy() - prevY, 2);
        distance = Math.sqrt(distance);

        duration = Math.round(distance*1000/Vehicule.speed);

        prevX = thisVehicule.path[i].cx();
        prevY = thisVehicule.path[i].cy();

        console.log("Animation duration: " + duration + "\tDistance: " + distance + "\tSpeed: " + (distance/duration));

        console.log("x "+thisVehicule.icon.cx()+ "   y "+thisVehicule.icon.cy());
        thisVehicule.icon.animate(duration, '-', 0).center(thisVehicule.path[i].cx(),
                                           thisVehicule.path[i].cy())
        .after(function()
            {
                if (Math.random() > 0.3)
                    thisVehicule.addPersons(1);
                else 
                    thisVehicule.removePersons(1);
                Service.prototype.updateString.call(thisVehicule);
            });

    }
}
