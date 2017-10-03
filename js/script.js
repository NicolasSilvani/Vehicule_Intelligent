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
            SVG.adopt(cdo.getElementById("point13"))
            ];

        Bus1 = new Vehicule("bus1",
                            30,
                            path,
                            document.getElementById("Bus1_txt"),
                            SVG.adopt(cdo.getElementById("bus1")));
        Bus2 = new Vehicule("bus2",
                    30,
                    path,
                    document.getElementById("Bus1_txt"),
                    SVG.adopt(cdo.getElementById("bus2")));

        Bus1.addPersons(4);    
        Bus1.updateString();
        //Bus1.icon.animate(100).center(path[0].cx(), path[0].cy());
        Bus1.runPath();
        //busIcon.animate().dmove(1000,0);
        //Bus1.icon.animate(500).center(path[0].cx(), path[0].cy());
        //Bus2.icon.animate(500).center(0,0);

        p = SVG.adopt(cdo.getElementById("point13"));
        




    });

});