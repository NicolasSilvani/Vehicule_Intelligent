//--------------------------------------------------------------------------------------------------
/*
 * Building class file.
 */
//--------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------
/*
 * Building constructor function
 */
//--------------------------------------------------------------------------------------------------
function Building(name, capacity, path, string_object, icon)
{
    Service.call(this, name, capacity, string_object, icon);
    this.path = path;
}

Building.prototype = Object.create(Service.prototype);
Building.prototype.constructor = Building;

