path_dict = {};
path_dict["arretrestau"]    = {};
path_dict["arretstation"]   = {};
path_dict["arretecole"]     = {};
path_dict["arretbuilding2"] = {};
path_dict["arrethopital"]   = {};
path_dict["arretbuilding1"] = {};
path_dict["arretparc"]      = {};

//---------------------------------------------------
// arretrestau
//---------------------------------------------------
path_dict["arretrestau"]["arretstation"] = [    
                                                "point16",
                                                "point15",
                                                "point5",
                                                "arretstation"
                                            ];
path_dict["arretrestau"]["arretecole"] = [    
                                                "point16",
                                                "point15",
                                                "point5",
                                                "point6",
                                                "point4",
                                                "arretecole"
                                            ];
path_dict["arretrestau"]["arretbuilding2"] = [    
                                                "point16",
                                                "point15",
                                                "point5",
                                                "point6",
                                                "point4",
                                                "point69",
                                                "arretbuilding2"
                                            ];
path_dict["arretrestau"]["arrethopital"] = [    
                                                "point16",
                                                "point15",
                                                "point35",
                                                "point7",
                                                "point8",
                                                "point9",
                                                "point10",
                                                "point11",
                                                "arrethopital"
                                            ];
path_dict["arretrestau"]["arretbuilding1"] = [    
                                                "point16",
                                                "point15",
                                                "point35",
                                                "point7",
                                                "point8",
                                                "point9",
                                                "arretbuilding1"
                                            ];            
path_dict["arretrestau"]["arretparc"] = [    
                                                "point16",
                                                "point15",
                                                "arretparc"
                                            ];     

//---------------------------------------------------
// arretstation
//---------------------------------------------------
path_dict["arretstation"]["arretrestau"] = [    
                                            "point5",
                                            "point15",
                                            "point16",
                                            "arretrestau"
                                        ];
path_dict["arretstation"]["arretecole"] = [
                                            "point2",
                                            "point3",
                                            "arretecole"
                                        ];
path_dict["arretstation"]["arretbuilding2"] = [
                                                "point5",
                                                "point6",
                                                "point4",
                                                "point69",
                                                "arretbuilding2"    
                                            ];
path_dict["arretstation"]["arrethopital"] = [
                                                "point5",
                                                "point6",
                                                "point4",
                                                "point69",
                                                "point13",
                                                "point12",
                                                "arrethopital"
                                            ];
path_dict["arretstation"]["arretbuilding1"] = [
                                                "point5",
                                                "point6",
                                                "point7",
                                                "point8",
                                                "point9",
                                                "arretbuilding1"
                                            ];
path_dict["arretstation"]["arretparc"] = [
                                            "point5",
                                            "arretparc"
                                        ];



//---------------------------------------------------
// arretecole
//---------------------------------------------------
path_dict["arretecole"]["arretrestau"] = [
                                                        "point4",
                                                        "point6",
                                                        "point5",
                                                        "point15",
                                                        "point16",
                                                        "arretrestau"
                                                    ];
path_dict["arretecole"]["arretstation"] = [
                                                        "point3",
                                                        "point2",
                                                        "arretstation"
                                                    ];
path_dict["arretecole"]["arretbuilding2"] = [
                                                        "point4",
                                                        "point69",
                                                        "arretbuilding2"
                                                    ];
path_dict["arretecole"]["arrethopital"] = [
                                                        "point4",
                                                        "point69",
                                                        "point13",
                                                        "point12",
                                                        "arrethopital"
                                                    ];
path_dict["arretecole"]["arretbuilding1"] = [
                                                        "point4",
                                                        "point6",
                                                        "point7",
                                                        "point8",
                                                        "point9",
                                                        "arretbuilding1"
                                                    ];
path_dict["arretecole"]["arretparc"] = [
                                                        "point4",
                                                        "point6",
                                                        "point5",
                                                        "arretparc"
                                                    ];


//---------------------------------------------------
// arretbuilding2
//---------------------------------------------------
path_dict["arretbuilding2"]["arretstation"] = [
                                                        "point69",
                                                        "point4",
                                                        "point6",
                                                        "point5",
                                                        "arretstation"
                                                    ];
path_dict["arretbuilding2"]["arretecole"] = [
                                                        "point69",
                                                        "point4",
                                                        "arretecole"
                                                    ];
path_dict["arretbuilding2"]["arretrestau"] = [
                                                        "point69",
                                                        "point4",
                                                        "point6",
                                                        "point5",
                                                        "point15",
                                                        "point16",
                                                        "arretrestau"
                                                    ];
path_dict["arretbuilding2"]["arrethopital"] = [
                                                        "point13",
                                                        "point12",
                                                        "arrethopital"
                                                    ];
path_dict["arretbuilding2"]["arretbuilding1"] = [
                                                        "point13",
                                                        "point12",
                                                        "point11",
                                                        "point10",
                                                        "arretbuilding1"
                                                    ];
path_dict["arretbuilding2"]["arretparc"] = [
                                                        "point69",
                                                        "point4",
                                                        "point6",
                                                        "point5",
                                                        "arretparc"
                                                    ];



//---------------------------------------------------
// arrethopital
//---------------------------------------------------
path_dict["arrethopital"]["arretstation"] = [
                                                        "point12",
                                                        "point13",
                                                        "point69",
                                                        "point4",
                                                        "point6",
                                                        "point5",
                                                        "arretstation"
                                                    ];
path_dict["arrethopital"]["arretecole"] = [
                                                        "point12",
                                                        "point13",
                                                        "point69",
                                                        "point4",
                                                        "arretecole"
                                                    ];
path_dict["arrethopital"]["arretbuilding2"] = [
                                                        "point12",
                                                        "point13",
                                                        "arretbuilding2"
                                                    ];
path_dict["arrethopital"]["arretrestau"] = [
                                                        "point11",
                                                        "point10",
                                                        "point9",
                                                        "point8",
                                                        "point7",
                                                        "point35",
                                                        "point15",
                                                        "point16",
                                                        "arretrestau"
                                                    ];
path_dict["arrethopital"]["arretbuilding1"] = [
                                                        "point11",
                                                        "point10",
                                                        "arretbuilding1"
                                                    ];
path_dict["arrethopital"]["arretparc"] = [
                                                        "point12",
                                                        "point13",
                                                        "point69",
                                                        "point4",
                                                        "point6",
                                                        "point5",
                                                        "arretparc"
                                                    ];

//---------------------------------------------------
// arretbuilding1
//---------------------------------------------------
path_dict["arretbuilding1"]["arretstation"] = [
                                                        "point9",
                                                        "point8",
                                                        "point7",
                                                        "point6",
                                                        "point5",
                                                        "arretstation"
                                                    ];
path_dict["arretbuilding1"]["arretecole"] = [
                                                        "point9",
                                                        "point8",
                                                        "point7",
                                                        "point6",
                                                        "point4",
                                                        "arretecole"
                                                    ];
path_dict["arretbuilding1"]["arretbuilding2"] = [
                                                        "point10",
                                                        "point11",
                                                        "point12",
                                                        "point13",
                                                        "arretbuilding2"
                                                    ];
path_dict["arretbuilding1"]["arrethopital"] = [
                                                        "point10",
                                                        "point11",
                                                        "arrethopital"
                                                    ];
path_dict["arretbuilding1"]["arretrestau"] = [
                                                        "point9",
                                                        "point8",
                                                        "point7",
                                                        "point35",
                                                        "point15",
                                                        "point16",
                                                        "arretrestau"
                                                    ];
path_dict["arretbuilding1"]["arretparc"] = [
                                                        "point9",
                                                        "point8",
                                                        "point7",
                                                        "point6",
                                                        "point5",
                                                        "arretparc"
                                                    ];


//---------------------------------------------------
// arretparc
//---------------------------------------------------
path_dict["arretparc"]["arretstation"] = "arretstation":    [
                                                        "point5",
                                                        "arretstation"
                                                    ];
path_dict["arretparc"]["arretecole"] = [
                                                        "point5",
                                                        "point6",
                                                        "point4",
                                                        "arretecole"
                                                    ];
path_dict["arretparc"]["arretbuilding2"] = [    
                                                        "point5",
                                                        "point6",
                                                        "point4",
                                                        "point69",
                                                        "arretbuilding2"
                                                    ];
path_dict["arretparc"]["arrethopital"] = [
                                                        "point5",
                                                        "point6",
                                                        "point4",
                                                        "point69",
                                                        "point13",
                                                        "point12",
                                                        "arrethopital"
                                                    ];
path_dict["arretparc"]["arretbuilding1"] = [
                                                        "point5",
                                                        "point6",
                                                        "point7",
                                                        "point8",
                                                        "point9",
                                                        "arretbuilding1"
                                                    ];
path_dict["arretparc"]["arretrestau"] = [
                                                        "point15",
                                                        "point16",
                                                        "arretrestau"
                                                    ];
