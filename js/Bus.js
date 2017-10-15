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

Bus.prototype.stop = function(next_index)
{
    var thisBus = this;
    if (Math.random() > 0.5)
        this.addPersons(Math.floor(Math.random()*3));
    else 
        this.removePersons(Math.floor(Math.random()*3));
    Service.prototype.updateString.call(this);


    if (this.users.length > 0)
    {   
        //var users_that_got_out = [];
        this.users.forEach(function(user)
        {
            if (user.inVehicule)
            {   
                if (user.goal == thisBus.path[next_index])
                {
                    user.getOut();
                    //users_that_got_out.push(user);
                    thisBus.users.splice(thisBus.users.indexOf(user), 1);

                }
            }
            else
            {
                if (user.start_localisation == thisBus.path[next_index])
                    user.getIn();
            }
        });

        /*users_that_got_out.forEach(function(user)
        {
            this.users.splice(users.indexOf(user), 1);
        });*/

    }
}

