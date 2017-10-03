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

