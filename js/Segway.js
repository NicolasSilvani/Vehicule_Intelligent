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
function Segway(name, path, string_object, icon, starting_position)
{
    Vehicule.call(this, name, 1, path, string_object, icon);
    this.speed = 20;
    this.current_position = starting_position;
    this.available = true;
}

Segway.prototype = Object.create(Vehicule.prototype);
Segway.prototype.constructor = Segway;

//--------------------------------------------------------------------------------------------------
/*
 * Order car to transport a user
 */
//--------------------------------------------------------------------------------------------------
Segway.prototype.transportUser = function(user, path)
{
    this.available = false;
    this.path = path;
    console.log(path);
    this.users.push(user);
    this.runPath();
}

//--------------------------------------------------------------------------------------------------
/*
 * Run Vehicule's runPath then set itself to available
 */
//--------------------------------------------------------------------------------------------------
Segway.prototype.runPath = function()
{
    var thisSegway = this;

    Vehicule.prototype.runPath.call(thisSegway);

    thisSegway.icon.animate().afterAll(function()
        {
            thisSegway.available = true;
            thisSegway.current_position = thisSegway.path[thisSegway.path.length - 1];
        });
}