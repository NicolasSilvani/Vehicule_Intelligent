//--------------------------------------------------------------------------------------------------
/*
 * Voiture class file.
 */
//--------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------
/*
 * Voiture constructor function
 */
//--------------------------------------------------------------------------------------------------
function Voiture(name, path, string_object, icon, starting_position)
{
    Vehicule.call(this, name, 4, path, string_object, icon);
    this.speed = 50;
    this.current_position = starting_position;
    this.available = true;
}

Voiture.prototype = Object.create(Vehicule.prototype);
Voiture.prototype.constructor = Voiture;

//--------------------------------------------------------------------------------------------------
/*
 * Order car to transport a user
 */
//--------------------------------------------------------------------------------------------------
Voiture.prototype.transportUser = function(user, path)
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
Voiture.prototype.runPath = function()
{
    var thisCar = this;

    Vehicule.prototype.runPath.call(thisCar);

    thisCar.icon.animate().afterAll(function()
        {
            thisCar.available = true;
            thisCar.current_position = thisCar.path[thisCar.path.length - 1];
        });
}