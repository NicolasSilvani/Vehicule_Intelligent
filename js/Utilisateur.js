//--------------------------------------------------------------------------------------------------
/*
 * Utilisateur class file.
 */
//--------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------
/*
 * Utilisateur constructor function.
 */
//--------------------------------------------------------------------------------------------------
function Utilisateur(name, start_localisation, goal, string_object, icon)
{
    this.name = name;
    this.start_localisation = start_localisation;
    this.localisation = start_localisation;
    this.goal = goal;
    this.start_time = new Date().getTime();
    this.end_time = null;
    this.string_object = string_object;
    this.icon = icon;

    this.inVehicule = false;
}

//--------------------------------------------------------------------------------------------------
/*
 * Set name string.
 */
//--------------------------------------------------------------------------------------------------
Utilisateur.prototype.setString = function(newString)
{
    this.string_object.innerHTML = newString;
}


//--------------------------------------------------------------------------------------------------
/*
 * Calculate and print user's travel time.
 */
//--------------------------------------------------------------------------------------------------
Utilisateur.prototype.printTime = function()
{
    if(this.end_time != null)
    {
        var travelTime = this.end_time - this.start_time;
        var travelTimeStr = this.name+"'s travel time is "+travelTime;
        this.setString(travelTime);
    }
    else
    {
        console.log("error: end_time is null.");
    }
}

//--------------------------------------------------------------------------------------------------
/*
 * User gets in the vehicule
 */
//--------------------------------------------------------------------------------------------------
Utilisateur.prototype.getIn = function()
{
    this.inVehicule = true;
}

//--------------------------------------------------------------------------------------------------
/*
 * User gets out of the vehicule
 */
//--------------------------------------------------------------------------------------------------
Utilisateur.prototype.getOut = function()
{
    this.inVehicule = false;
    this.end_time = new Date().getTime();
    this.printTime();
}

