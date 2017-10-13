//--------------------------------------------------------------------------------------------------
/*
 * Segway class file.
 */
//--------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------
/*
 * Segway constructor function
 */
//--------------------------------------------------------------------------------------------------
function Segway(name, path, string_object, icon)
{
    Vehicule.call(this, name, 1, path, string_object, icon);
    this.speed = 15;
}

Segway.prototype = Object.create(Vehicule.prototype);
Segway.prototype.constructor = Segway;