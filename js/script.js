function isStop(name)
{
    if (name in STOPS)
        return Boolean(1);
    else
        return Boolean(0);
}

document.addEventListener("DOMContentLoaded", function(event)
{
    svg = document.getElementById("campus");
    
    svg.addEventListener('load', function()
    {
        cdo = svg.contentDocument;

        STOPS = {};
        STOPS["arretrestau"] = SVG.adopt(cdo.getElementById("arretrestau"));
        STOPS["arretstation"] = SVG.adopt(cdo.getElementById("arretstation"));
        STOPS["arretecole"] = SVG.adopt(cdo.getElementById("arretecole"));
        STOPS["arretbuilding2"] = SVG.adopt(cdo.getElementById("arretbuilding2"));
        STOPS["arretbuilding1"] = SVG.adopt(cdo.getElementById("arretbuilding1"));
        STOPS["arretparc"] = SVG.adopt(cdo.getElementById("arretparc"));
        STOPS["arrethopital"] = SVG.adopt(cdo.getElementById("arrethopital"));

        WAYPOINTS = {};
        WAYPOINTS["point1"] = SVG.adopt(cdo.getElementById("point1"));
        WAYPOINTS["point2"] = SVG.adopt(cdo.getElementById("point2"));
        WAYPOINTS["point3"] = SVG.adopt(cdo.getElementById("point3"));
        WAYPOINTS["point4"] = SVG.adopt(cdo.getElementById("point4"));
        WAYPOINTS["point5"] = SVG.adopt(cdo.getElementById("point5"));
        WAYPOINTS["point6"] = SVG.adopt(cdo.getElementById("point6"));
        WAYPOINTS["point7"] = SVG.adopt(cdo.getElementById("point7"));
        WAYPOINTS["point8"] = SVG.adopt(cdo.getElementById("point8"));
        WAYPOINTS["point9"] = SVG.adopt(cdo.getElementById("point9"));
        WAYPOINTS["point10"] = SVG.adopt(cdo.getElementById("point10"));
        WAYPOINTS["point11"] = SVG.adopt(cdo.getElementById("point11"));
        WAYPOINTS["point12"] = SVG.adopt(cdo.getElementById("point12"));
        WAYPOINTS["point13"] = SVG.adopt(cdo.getElementById("point13"));
        WAYPOINTS["point14"] = SVG.adopt(cdo.getElementById("point14"));
        WAYPOINTS["point15"] = SVG.adopt(cdo.getElementById("point15"));
        WAYPOINTS["point16"] = SVG.adopt(cdo.getElementById("point16"));
        WAYPOINTS["point17"] = SVG.adopt(cdo.getElementById("point17"));
        WAYPOINTS["point69"] = SVG.adopt(cdo.getElementById("point69"));
        Service1 = new Service("service1", 100);
        
        var path = ["point1",
            "arretstation",
            "point2",
            "point3",
            "arretecole",
            "point4",
            "point6",
            "point7",
            "point8",
            "point9",
            "arretbuilding1",
            "point10",
            "point11",
            "arrethopital",
            "point12",
            "point13",
            "arretbuilding2",
            "point69",
            "point4",
            "point6",
            "point5",
            "arretparc",
            "point15",
            "point16",
            "arretrestau",
            "point17"
            ];

        global_path = path;

        var path2 = ["point11",
            "arrethopital",
            "point12",
            "point13",
            "arretbuilding2",
            "point69",
            "point4",
            "point6",
            "point5",
            "arretparc",
            "point15",
            "point16",
            "arretrestau",
            "point17",
            "point1",
            "arretstation",
            "point2",
            "point3",
            "arretecole",
            "point4",
            "point6",
            "point7",
            "point8",
            "point9",
            "arretbuilding1",
            "point10"
            ];        

        Bus1 = new Bus("bus1",
                        30,
                        path,
                        document.getElementById("Bus1_txt"),
                        SVG.adopt(cdo.getElementById("bus1")));

        Bus2 = new Bus("bus2",
                        30,
                        path2,
                        document.getElementById("Bus2_txt"),
                        SVG.adopt(cdo.getElementById("bus2")));

        Car1 = new Voiture("car1",
                            [],
                            document.getElementById("Bus2_txt"),
                            SVG.adopt(cdo.getElementById("voiturette1")));

        Bus1.addPersons(4);    
        Bus1.updateString();
        Bus1.runPath();
        //Bus1.setString("Hello");
        Bus2.runPath();
        //busIcon.animate().dmove(1000,0);
        
    });

    spawnButton = document.getElementById("spawnButton");
    var nUsers = 0;
    spawnButton.addEventListener('mouseup', function(){
        var userDiv = document.createElement("user"+nUsers);
        document.body.appendChild(userDiv);
        User = new Utilisateur('randomMan',
                "arretstation",
                "arrethopital",
                userDiv,
                SVG.adopt(cdo.getElementById("user")));
        User.setString("Hello I'm user "+nUsers);
        console.log("Hello user!");


        Car1.transportUser(User, global_path);
    });
});
