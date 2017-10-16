/*
*arretrestau, arretstation, arretecole, arretbuilding2, arrethospital, arretbuilding1, arretparc
*/
/*
var path_dict = { "arretrestau":   {
								"arretstation": 	[	
														SVG.adopt(cdo.getElementById("point16")),
														SVG.adopt(cdo.getElementById("point15")),
														SVG.adopt(cdo.getElementById("point5")),
														SVG.adopt(cdo.getElementById("arretstation"))
													],
								"arretecole": 		[
														SVG.adopt(cdo.getElementById("point16")),
														SVG.adopt(cdo.getElementById("point15")),
														SVG.adopt(cdo.getElementById("point5")),
														SVG.adopt(cdo.getElementById("point6")),
														SVG.adopt(cdo.getElementById("point4")),
														SVG.adopt(cdo.getElementById("arretecole"))
													], 
								"arretbuilding2": 	[
														SVG.adopt(cdo.getElementById("point16")),
														SVG.adopt(cdo.getElementById("point15")),
														SVG.adopt(cdo.getElementById("point5")),
														SVG.adopt(cdo.getElementById("point6")),
														SVG.adopt(cdo.getElementById("point4")),
														SVG.adopt(cdo.getElementById("point69")),
														SVG.adopt(cdo.getElementById("arretbuilding2"))
													], 
								"arrethospital": 	[
														SVG.adopt(cdo.getElementById("point16")),
														SVG.adopt(cdo.getElementById("point15")),
														SVG.adopt(cdo.getElementById("point35")),
														SVG.adopt(cdo.getElementById("point7")),
														SVG.adopt(cdo.getElementById("point8")),
														SVG.adopt(cdo.getElementById("point9")),
														SVG.adopt(cdo.getElementById("point10")),
														SVG.adopt(cdo.getElementById("point11")),
														SVG.adopt(cdo.getElementById("arrethospital"))
													], 
								"arretbuilding1": 	[
														SVG.adopt(cdo.getElementById("point16")),
														SVG.adopt(cdo.getElementById("point15")),
														SVG.adopt(cdo.getElementById("point35")),
														SVG.adopt(cdo.getElementById("point7")),
														SVG.adopt(cdo.getElementById("point8")),
														SVG.adopt(cdo.getElementById("point9")),
														SVG.adopt(cdo.getElementById("arretbuilding1"))
													], 
								"arretparc": 		[
														SVG.adopt(cdo.getElementById("point16")),
														SVG.adopt(cdo.getElementById("point15")),
														SVG.adopt(cdo.getElementById("arretparc"))
													]
						      },

			"arretstation":   {
								"arretrestau": 		[	
														SVG.adopt(cdo.getElementById("point5")),
														SVG.adopt(cdo.getElementById("point15")),
														SVG.adopt(cdo.getElementById("point16")),
														SVG.adopt(cdo.getElementById("arretrestau"))
											  		],
								"arretecole": 		[
														SVG.adopt(cdo.getElementById("point2")),
														SVG.adopt(cdo.getElementById("point3")),
														SVG.adopt(cdo.getElementById("arretecole"))
													], 
								"arretbuilding2": 	[
														SVG.adopt(cdo.getElementById("point5")),
														SVG.adopt(cdo.getElementById("point6")),
														SVG.adopt(cdo.getElementById("point4")),
														SVG.adopt(cdo.getElementById("point69")),
														SVG.adopt(cdo.getElementById("arretbuilding2"))	
													], 
								"arrethospital": 	[
														SVG.adopt(cdo.getElementById("point5")),
														SVG.adopt(cdo.getElementById("point6")),
														SVG.adopt(cdo.getElementById("point4")),
														SVG.adopt(cdo.getElementById("point69")),
														SVG.adopt(cdo.getElementById("point13")),
														SVG.adopt(cdo.getElementById("point12")),
														SVG.adopt(cdo.getElementById("arrethospital"))
													], 
								"arretbuilding1": 	[
														SVG.adopt(cdo.getElementById("point5")),
														SVG.adopt(cdo.getElementById("point6")),
														SVG.adopt(cdo.getElementById("point7")),
														SVG.adopt(cdo.getElementById("point8")),
														SVG.adopt(cdo.getElementById("point9")),
														SVG.adopt(cdo.getElementById("arretbuilding1"))
													], 
								"arretparc": 		[
														SVG.adopt(cdo.getElementById("point5")),
														SVG.adopt(cdo.getElementById("arretparc"))
													]
						      },

			"arretecole": 	  {
								"arretrestau": 		[
														SVG.adopt(cdo.getElementById("point4")),
														SVG.adopt(cdo.getElementById("point6")),
														SVG.adopt(cdo.getElementById("point5")),
														SVG.adopt(cdo.getElementById("point15")),
														SVG.adopt(cdo.getElementById("point16")),
														SVG.adopt(cdo.getElementById("arretrestau"))
													], 
								"arretstation": 	[
														SVG.adopt(cdo.getElementById("point3")),
														SVG.adopt(cdo.getElementById("point2")),
														SVG.adopt(cdo.getElementById("arretstation"))
													], 
								"arretbuilding2": 	[
														SVG.adopt(cdo.getElementById("point4")),
														SVG.adopt(cdo.getElementById("point69")),
														SVG.adopt(cdo.getElementById("arretbuilding2"))
													], 
								"arrethospital": 	[
														SVG.adopt(cdo.getElementById("point4")),
														SVG.adopt(cdo.getElementById("point69")),
														SVG.adopt(cdo.getElementById("point13")),
														SVG.adopt(cdo.getElementById("point12")),
														SVG.adopt(cdo.getElementById("arrethospital"))
													], 
								"arretbuilding1": 	[
														SVG.adopt(cdo.getElementById("point4")),
														SVG.adopt(cdo.getElementById("point6")),
														SVG.adopt(cdo.getElementById("point7")),
														SVG.adopt(cdo.getElementById("point8")),
														SVG.adopt(cdo.getElementById("point9")),
														SVG.adopt(cdo.getElementById("arretbuilding1"))
													], 
								"arretparc": 		[
														SVG.adopt(cdo.getElementById("point4")),
														SVG.adopt(cdo.getElementById("point6")),
														SVG.adopt(cdo.getElementById("point5")),
														SVG.adopt(cdo.getElementById("arretparc"))
													]
						      },

			 "arretbuilding2":{
								"arretstation": 	[
														SVG.adopt(cdo.getElementById("point69")),
														SVG.adopt(cdo.getElementById("point4")),
														SVG.adopt(cdo.getElementById("point6")),
														SVG.adopt(cdo.getElementById("point5")),
														SVG.adopt(cdo.getElementById("arretstation"))
													], 
								"arretecole": 		[
														SVG.adopt(cdo.getElementById("point69")),
														SVG.adopt(cdo.getElementById("point4")),
														SVG.adopt(cdo.getElementById("arretecole"))
													], 
								"arretrestau": 		[
														SVG.adopt(cdo.getElementById("point69")),
														SVG.adopt(cdo.getElementById("point4")),
														SVG.adopt(cdo.getElementById("point6")),
														SVG.adopt(cdo.getElementById("point5")),
														SVG.adopt(cdo.getElementById("point15")),
														SVG.adopt(cdo.getElementById("point16")),
														SVG.adopt(cdo.getElementById("arretrestau"))
													], 
								"arrethospital": 	[
														SVG.adopt(cdo.getElementById("point13")),
														SVG.adopt(cdo.getElementById("point12")),
														SVG.adopt(cdo.getElementById("arrethospital"))
													], 
								"arretbuilding1": 	[
														SVG.adopt(cdo.getElementById("point13")),
														SVG.adopt(cdo.getElementById("point12")),
														SVG.adopt(cdo.getElementById("point11")),
														SVG.adopt(cdo.getElementById("point10")),
														SVG.adopt(cdo.getElementById("arretbuilding1"))
													], 
								"arretparc": 		[
														SVG.adopt(cdo.getElementById("point69")),
														SVG.adopt(cdo.getElementById("point4")),
														SVG.adopt(cdo.getElementById("point6")),
														SVG.adopt(cdo.getElementById("point5")),
														SVG.adopt(cdo.getElementById("arretparc"))
													]
						      },

			"arrethospital":  {
								"arretstation": 	[
														SVG.adopt(cdo.getElementById("point12")),
														SVG.adopt(cdo.getElementById("point13")),
														SVG.adopt(cdo.getElementById("point69")),
														SVG.adopt(cdo.getElementById("point4")),
														SVG.adopt(cdo.getElementById("point6")),
														SVG.adopt(cdo.getElementById("point5")),
														SVG.adopt(cdo.getElementById("arretstation"))
													], 
								"arretecole": 		[
														SVG.adopt(cdo.getElementById("point12")),
														SVG.adopt(cdo.getElementById("point13")),
														SVG.adopt(cdo.getElementById("point69")),
														SVG.adopt(cdo.getElementById("point4")),
														SVG.adopt(cdo.getElementById("arretecole"))
													], 
								"arretbuilding2": 	[
														SVG.adopt(cdo.getElementById("point12")),
														SVG.adopt(cdo.getElementById("point13")),
														SVG.adopt(cdo.getElementById("arretbuilding2"))
													], 
								"arretrestau": 		[
														SVG.adopt(cdo.getElementById("point11")),
														SVG.adopt(cdo.getElementById("point10")),
														SVG.adopt(cdo.getElementById("point9")),
														SVG.adopt(cdo.getElementById("point8")),
														SVG.adopt(cdo.getElementById("point7")),
														SVG.adopt(cdo.getElementById("point35")),
														SVG.adopt(cdo.getElementById("point15")),
														SVG.adopt(cdo.getElementById("point16")),
														SVG.adopt(cdo.getElementById("arretrestau"))
													], 
								"arretbuilding1": 	[
														SVG.adopt(cdo.getElementById("point11")),
														SVG.adopt(cdo.getElementById("point10")),
														SVG.adopt(cdo.getElementById("arretbuilding1"))
													], 
								"arretparc": 		[
														SVG.adopt(cdo.getElementById("point12")),
														SVG.adopt(cdo.getElementById("point13")),
														SVG.adopt(cdo.getElementById("point69")),
														SVG.adopt(cdo.getElementById("point4")),
														SVG.adopt(cdo.getElementById("point6")),
														SVG.adopt(cdo.getElementById("point5")),
														SVG.adopt(cdo.getElementById("arretparc"))
													]
						      },

			"arretbuilding1": {
								"arretstation": 	[
														SVG.adopt(cdo.getElementById("point9")),
														SVG.adopt(cdo.getElementById("point8")),
														SVG.adopt(cdo.getElementById("point7")),
														SVG.adopt(cdo.getElementById("point6")),
														SVG.adopt(cdo.getElementById("point5")),
														SVG.adopt(cdo.getElementById("arretstation"))
													],
								"arretecole": 		[
														SVG.adopt(cdo.getElementById("point9")),
														SVG.adopt(cdo.getElementById("point8")),
														SVG.adopt(cdo.getElementById("point7")),
														SVG.adopt(cdo.getElementById("point6")),
														SVG.adopt(cdo.getElementById("point4")),
														SVG.adopt(cdo.getElementById("arretecole"))
													], 
								"arretbuilding2": 	[
														SVG.adopt(cdo.getElementById("point10")),
														SVG.adopt(cdo.getElementById("point11")),
														SVG.adopt(cdo.getElementById("point12")),
														SVG.adopt(cdo.getElementById("point13")),
														SVG.adopt(cdo.getElementById("arretbuilding2"))
													], 
								"arrethospital": 	[
														SVG.adopt(cdo.getElementById("point10")),
														SVG.adopt(cdo.getElementById("point11")),
														SVG.adopt(cdo.getElementById("arrethospital"))
													], 
								"arretrestau": 		[
														SVG.adopt(cdo.getElementById("point9")),
														SVG.adopt(cdo.getElementById("point8")),
														SVG.adopt(cdo.getElementById("point7")),
														SVG.adopt(cdo.getElementById("point35")),
														SVG.adopt(cdo.getElementById("point15")),
														SVG.adopt(cdo.getElementById("point16")),
														SVG.adopt(cdo.getElementById("arretrestau"))
													], 
								"arretparc": 		[
														SVG.adopt(cdo.getElementById("point9")),
														SVG.adopt(cdo.getElementById("point8")),
														SVG.adopt(cdo.getElementById("point7")),
														SVG.adopt(cdo.getElementById("point6")),
														SVG.adopt(cdo.getElementById("point5")),
														SVG.adopt(cdo.getElementById("arretparc"))
													]
						   	  },

			"arretparc": 	  {
								"arretstation": 	[
														SVG.adopt(cdo.getElementById("point5")),
														SVG.adopt(cdo.getElementById("arretstation"))
													], 
								"arretecole": 		[
														SVG.adopt(cdo.getElementById("point5")),
														SVG.adopt(cdo.getElementById("point6")),
														SVG.adopt(cdo.getElementById("point4")),
														SVG.adopt(cdo.getElementById("arretecole"))
													], 
								"arretbuilding2": 	[	
														SVG.adopt(cdo.getElementById("point5")),
														SVG.adopt(cdo.getElementById("point6")),
														SVG.adopt(cdo.getElementById("point4")),
														SVG.adopt(cdo.getElementById("point69")),
														SVG.adopt(cdo.getElementById("arretbuilding2"))
													], 
								"arrethospital": 	[
														SVG.adopt(cdo.getElementById("point5")),
														SVG.adopt(cdo.getElementById("point6")),
														SVG.adopt(cdo.getElementById("point4")),
														SVG.adopt(cdo.getElementById("point69")),
														SVG.adopt(cdo.getElementById("point13")),
														SVG.adopt(cdo.getElementById("point12")),
														SVG.adopt(cdo.getElementById("arrethospital"))
													], 
								"arretbuilding1": 	[
														SVG.adopt(cdo.getElementById("point5")),
														SVG.adopt(cdo.getElementById("point6")),
														SVG.adopt(cdo.getElementById("point7")),
														SVG.adopt(cdo.getElementById("point8")),
														SVG.adopt(cdo.getElementById("point9")),
														SVG.adopt(cdo.getElementById("arretbuilding1"))
													], 
								"arretrestau": 		[
														SVG.adopt(cdo.getElementById("point15")),
														SVG.adopt(cdo.getElementById("point16")),
														SVG.adopt(cdo.getElementById("arretrestau"))
													]
						 	  }

		};
*/
var path_dict = { "arretrestau":   {
								"arretstation": 	[	
														"point16",
														"point15",
														"point5",
														"arretstation"
													],
								"arretecole": 		[
														"point16",
														"point15",
														"point5",
														"point6",
														"point4",
														"arretecole"
													], 
								"arretbuilding2": 	[
														"point16",
														"point15",
														"point5",
														"point6",
														"point4",
														"point69",
														"arretbuilding2"
													], 
								"arrethospital": 	[
														"point16",
														"point15",
														"point35",
														"point7",
														"point8",
														"point9",
														"point10",
														"point11",
														"arrethospital"
													], 
								"arretbuilding1": 	[
														"point16",
														"point15",
														"point35",
														"point7",
														"point8",
														"point9",
														"arretbuilding1"
													], 
								"arretparc": 		[
														"point16",
														"point15",
														"arretparc"
													]
						      },

			"arretstation":   {
								"arretrestau": 		[	
														"point5",
														"point15",
														"point16",
														"arretrestau"
											  		],
								"arretecole": 		[
														"point2",
														"point3",
														"arretecole"
													], 
								"arretbuilding2": 	[
														"point5",
														"point6",
														"point4",
														"point69",
														"arretbuilding2"	
													], 
								"arrethospital": 	[
														"point5",
														"point6",
														"point4",
														"point69",
														"point13",
														"point12",
														"arrethospital"
													], 
								"arretbuilding1": 	[
														"point5",
														"point6",
														"point7",
														"point8",
														"point9",
														"arretbuilding1"
													], 
								"arretparc": 		[
														"point5",
														"arretparc"
													]
						      },

			"arretecole": 	  {
								"arretrestau": 		[
														"point4",
														"point6",
														"point5",
														"point15",
														"point16",
														"arretrestau"
													], 
								"arretstation": 	[
														"point3",
														"point2",
														"arretstation"
													], 
								"arretbuilding2": 	[
														"point4",
														"point69",
														"arretbuilding2"
													], 
								"arrethospital": 	[
														"point4",
														"point69",
														"point13",
														"point12",
														"arrethospital"
													], 
								"arretbuilding1": 	[
														"point4",
														"point6",
														"point7",
														"point8",
														"point9",
														"arretbuilding1"
													], 
								"arretparc": 		[
														"point4",
														"point6",
														"point5",
														"arretparc"
													]
						      },

			 "arretbuilding2":{
								"arretstation": 	[
														"point69",
														"point4",
														"point6",
														"point5",
														"arretstation"
													], 
								"arretecole": 		[
														"point69",
														"point4",
														"arretecole"
													], 
								"arretrestau": 		[
														"point69",
														"point4",
														"point6",
														"point5",
														"point15",
														"point16",
														"arretrestau"
													], 
								"arrethospital": 	[
														"point13",
														"point12",
														"arrethospital"
													], 
								"arretbuilding1": 	[
														"point13",
														"point12",
														"point11",
														"point10",
														"arretbuilding1"
													], 
								"arretparc": 		[
														"point69",
														"point4",
														"point6",
														"point5",
														"arretparc"
													]
						      },

			"arrethospital":  {
								"arretstation": 	[
														"point12",
														"point13",
														"point69",
														"point4",
														"point6",
														"point5",
														"arretstation"
													], 
								"arretecole": 		[
														"point12",
														"point13",
														"point69",
														"point4",
														"arretecole"
													], 
								"arretbuilding2": 	[
														"point12",
														"point13",
														"arretbuilding2"
													], 
								"arretrestau": 		[
														"point11",
														"point10",
														"point9",
														"point8",
														"point7",
														"point35",
														"point15",
														"point16",
														"arretrestau"
													], 
								"arretbuilding1": 	[
														"point11",
														"point10",
														"arretbuilding1"
													], 
								"arretparc": 		[
														"point12",
														"point13",
														"point69",
														"point4",
														"point6",
														"point5",
														"arretparc"
													]
						      },

			"arretbuilding1": {
								"arretstation": 	[
														"point9",
														"point8",
														"point7",
														"point6",
														"point5",
														"arretstation"
													],
								"arretecole": 		[
														"point9",
														"point8",
														"point7",
														"point6",
														"point4",
														"arretecole"
													], 
								"arretbuilding2": 	[
														"point10",
														"point11",
														"point12",
														"point13",
														"arretbuilding2"
													], 
								"arrethospital": 	[
														"point10",
														"point11",
														"arrethospital"
													], 
								"arretrestau": 		[
														"point9",
														"point8",
														"point7",
														"point35",
														"point15",
														"point16",
														"arretrestau"
													], 
								"arretparc": 		[
														"point9",
														"point8",
														"point7",
														"point6",
														"point5",
														"arretparc"
													]
						   	  },

			"arretparc": 	  {
								"arretstation": 	[
														"point5",
														"arretstation"
													], 
								"arretecole": 		[
														"point5",
														"point6",
														"point4",
														"arretecole"
													], 
								"arretbuilding2": 	[	
														"point5",
														"point6",
														"point4",
														"point69",
														"arretbuilding2"
													], 
								"arrethospital": 	[
														"point5",
														"point6",
														"point4",
														"point69",
														"point13",
														"point12",
														"arrethospital"
													], 
								"arretbuilding1": 	[
														"point5",
														"point6",
														"point7",
														"point8",
														"point9",
														"arretbuilding1"
													], 
								"arretrestau": 		[
														"point15",
														"point16",
														"arretrestau"
													]
						 	  }

		};

/*
* Optimal path between two stoppoint
*/
/*
function getPath(localisation, destination)
{
	var d = path_dict[localisation];

	for(var key in d)
	{
		if(key == destination) {return d[key];}
	}
	return [];
}
*/
function getPath(localisation, destination)
{
	var d = path_dict[localisation];

	for(var key in d)
	{
		if(key == destination) {return d[key];}
	}
	return [];
}