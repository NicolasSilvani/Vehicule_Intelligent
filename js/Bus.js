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
Bus.prototype.runPath = function()
{
    var thisBus = this;

    Vehicule.prototype.runPath.call(thisBus);

    thisBus.icon.animate().afterAll(function()
        {
            thisBus.runPath();
        });
}


//--------------------------------------------------------------------------------------------------
/*
 * Handle passengers at next stop
 */
//--------------------------------------------------------------------------------------------------
Bus.prototype.stop = function(next_index)
{
    var thisBus = this;


    //Guy users
    Vehicule.prototype.stop.call(thisBus, next_index);

    // Normal passengers
    var rand = Math.floor(Math.random()*3)

    if (Math.random() > 0.5)
    {
        if((this.occupancy + rand) < this.capacity)
            this.addPersons(rand);
    }
    else 
    {
        if((this.occupancy - rand) > 0)
            this.removePersons(rand);
    }
    Service.prototype.updateString.call(this);
}


//--------------------------------------------------------------------------------------------------
/*
 * Order bus to transport a user
 */
//--------------------------------------------------------------------------------------------------
Bus.prototype.transportUser = function(user)
{
    this.users.push(user);
}
