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
    this.localisation = localisation;
    this.goal = goal;
    this.start_time = new Date().getTime();
    this.end_time = null;
    this.string_object = string_object;
    this.icon = icon;
}
