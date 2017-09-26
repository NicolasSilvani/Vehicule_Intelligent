function Service(name,capacity){
	this.name = name;
	this.capacity = capacity;
	this.occupancy = 0;
}

Service.prototype.addPersons = function(n){
	this.occupancy += n;
}

function Vehicule(name, capacity, path){
	Service.call(this, name, capacity);
	this.path = path;
}

Vehicule.prototype = Object.create(Service.prototype);
Vehicule.prototype.constructor = Vehicule;

document.addEventListener("DOMContentLoaded", function(event){
	svg = document.getElementById("campus");

	svg.addEventListener('load', function(){
		cdo = svg.contentDocument;
		busIcon = SVG.adopt(cdo.getElementById("bus"));

			Service1 = new Service("service1", 100);
			Bus1 = new Vehicule("bus", 30, null);

			Bus1.addPersons(4);
	});

});
