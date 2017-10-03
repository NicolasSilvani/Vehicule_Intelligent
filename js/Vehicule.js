function Vehicule(name, capacity, path, string_object)
{
    Service.call(this, name, capacity, string_object);
    this.path = path;
}

Vehicule.prototype = Object.create(Service.prototype);
Vehicule.prototype.constructor = Vehicule;

