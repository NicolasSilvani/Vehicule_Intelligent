//--------------------------------------------------------------------------------------------------
/*
 * Catapulte class file.
 */
//--------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------
/*
 * Catapulte constructor function
 */
//--------------------------------------------------------------------------------------------------
function Catapulte(name, localisation, string_object, icon)
{
    this.name = name;
    this.capacity = 1;
    this.occupancy = 0;
    this.localisation = localisation;
    this.goal = null;
    this.string_object = string_object;
    this.icon = icon;
    this.speed = 300;
    this.wait_time = 5000;
}

