function Bus(name, capacity, path, string_object)
{
    Vehicule.call(this, name, capacity, path, string_object);
}

Bus.prototype = Object.create(Vehicule.prototype);
Bus.prototype.constructor = Bus;

