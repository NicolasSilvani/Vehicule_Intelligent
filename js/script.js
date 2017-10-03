function Service(name,capacity, string_object){
	this.name = name;
	this.capacity = capacity;
	this.occupancy = 0;
	this.string_object = string_object;
}

Service.prototype.addPersons = function(n){
	this.occupancy += n;
}

Service.prototype.Update_String = function()
{
	this.string_object.innerHTML = 	this.name
					+":\t"
					+this.occupancy
					+"/"
					+this.capacity;
}

function Vehicule(name, capacity, path, string_object){
	Service.call(this, name, capacity, string_object);
	this.path = path;
}

Vehicule.prototype = Object.create(Service.prototype);
Vehicule.prototype.constructor = Vehicule;

document.addEventListener("DOMContentLoaded", function(event){
	svg = document.getElementById("campus");
	
	svg.addEventListener('load', function(){
		cdo = svg.contentDocument;
		test_str = document.getElementById("test_str");
		busIcon = SVG.adopt(cdo.getElementById("bus"));

		Service1 = new Service("service1", 100);
		
		Bus1 = new Vehicule("bus", 30, null, document.getElementById("Bus1_txt"));

		Bus1.addPersons(4);	
		Bus1.Update_String();
		//busIcon.animate().dmove(1000,0);
		svgpoint = SVG.adopt(cdo.getElementById("point6"));
		console.log(svgpoint.attr("cx"));
		//test_str.innerHTML = svgpoint.getBoundingClientRect();
		//busIcon.animate().dmove(svgpoint.attr("cx"), svgpoint.attr("cy"));
		//busIcon.move(svgpoint.attr("cx"),0);
		console.log(busIcon.x());
	});

});

function Bus(name, capacity, path, string_object)
{
	Vehicule.call(this, name, capacity, path, string_object);
}
