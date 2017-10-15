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
    this.speed = 25;
}

Bus.prototype = Object.create(Vehicule.prototype);
Bus.prototype.constructor = Bus;



//--------------------------------------------------------------------------------------------------
/*
 * Run Vehicule's runPath then repeat it when all animations are done
 */
//--------------------------------------------------------------------------------------------------
/*Bus.prototype.runPath = function()
{
    thisBus = this;

    Vehicule.prototype.runPath.call(thisBus);

    thisBus.icon.animate().afterAll(function()
            {
                thisBus.runPath();
            });
    console.log(this.name);
}*/

Bus.prototype.runPath = function()
{
    var thisBus = this;

    for (var i = 0; i < this.path.length - 1; i++)
    {
        thisBus.oneStep();
    }

    thisBus.icon.animate().afterAll(function()
        {
            thisBus.runPath();
        });

}

Bus.prototype.stop = function()
{
    if (Math.random() > 0.5)
        this.addPersons(Math.floor(Math.random()*3));
    else 
        this.removePersons(Math.floor(Math.random()*3));
    Service.prototype.updateString.call(this);

}

