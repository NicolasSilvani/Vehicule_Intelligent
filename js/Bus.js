//--------------------------------------------------------------------------------------------------
/*
 * Bus class file.
 */
//--------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------
/*
 * Bus constructor function
 */
//--------------------------------------------------------------------------------------------------
function Bus(name, capacity, path, string_object, icon)
{
    Vehicule.call(this, name, capacity, path, string_object, icon);
}

Bus.prototype = Object.create(Vehicule.prototype);
Bus.prototype.constructor = Bus;



//--------------------------------------------------------------------------------------------------
/*
 * Run Vehicule's runPath then repeat it when all animations are done
 */
//--------------------------------------------------------------------------------------------------
Bus.prototype.runPath = function()
{
    thisBus = this;

    Vehicule.prototype.runPath.call(thisBus);

    thisBus.icon.animate().afterAll(function()
            {
                thisBus.runPath();
            });
    console.log(this.name);
}

