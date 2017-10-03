function Service(name,capacity, string_object)
{
    this.name = name;
    this.capacity = capacity;
    this.occupancy = 0;
    this.string_object = string_object;
}

Service.prototype.addPersons = function(n)
{
    this.occupancy += n;
}

Service.prototype.removePersons = function(n)
{
    this.occupancy -= n;
}

Service.prototype.Update_String = function()
{
    this.string_object.innerHTML =     this.name
                    +":\t"
                    +this.occupancy
                    +"/"
                    +this.capacity;
                
}

