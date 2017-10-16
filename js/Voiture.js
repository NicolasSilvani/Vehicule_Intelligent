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
function Voiture(name, path, string_object, icon)
{
    Vehicule.call(this, name, 4, path, string_object, icon);
    this.speed = 50;
}

Voiture.prototype = Object.create(Vehicule.prototype);
Voiture.prototype.constructor = Voiture;
/*
Voiture.prototype.runPath = function()
{
    var thisVoiture = this;

    Vehicule.prototype.runPath.call(thisVoiture);
}
*/

//--------------------------------------------------------------------------------------------------
/*
 * Order car to transport a user
 */
//--------------------------------------------------------------------------------------------------
Voiture.prototype.transportUser = function(user, path)
{
    this.path = path;
    this.users.push(user);
    this.runPath();
}