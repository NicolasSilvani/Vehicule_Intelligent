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