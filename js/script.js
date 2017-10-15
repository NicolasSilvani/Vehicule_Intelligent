document.addEventListener("DOMContentLoaded", function(event)
{
    svg = document.getElementById("campus");
    
    svg.addEventListener('load', function()
    {
        cdo = svg.contentDocument;

        Service1 = new Service("service1", 100);
        
        var path = [SVG.adopt(cdo.getElementById("point1")),
            SVG.adopt(cdo.getElementById("point2")),
            SVG.adopt(cdo.getElementById("point3")),
            SVG.adopt(cdo.getElementById("point4")),
            SVG.adopt(cdo.getElementById("point6")),
            SVG.adopt(cdo.getElementById("point7")),
            SVG.adopt(cdo.getElementById("point8")),
            SVG.adopt(cdo.getElementById("point9")),
            SVG.adopt(cdo.getElementById("point10")),
            SVG.adopt(cdo.getElementById("point11")),
            SVG.adopt(cdo.getElementById("point12")),
            SVG.adopt(cdo.getElementById("point13")),
            SVG.adopt(cdo.getElementById("point4")),
            SVG.adopt(cdo.getElementById("point6")),
            SVG.adopt(cdo.getElementById("point5")),
            SVG.adopt(cdo.getElementById("point15")),
            SVG.adopt(cdo.getElementById("point16")),
            SVG.adopt(cdo.getElementById("point4-5"))
            ];

        Bus1 = new Bus("bus1",
                        30,
                        path,
                        document.getElementById("Bus1_txt"),
                        SVG.adopt(cdo.getElementById("bus1")));

        Bus2 = new Bus("bus2",
                        30,
                        path,
                        document.getElementById("Bus2_txt"),
                        SVG.adopt(cdo.getElementById("bus2")));

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
                SVG.adopt(cdo.getElementById("point1")),
                SVG.adopt(cdo.getElementById("point3")),
                userDiv,
                SVG.adopt(cdo.getElementById("user")));
        User.setString("Hello I'm user "+nUsers);
        console.log("Hello user!");
    });
});
