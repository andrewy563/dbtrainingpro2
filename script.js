$(document).ready(function() {

    $(".refresh").click(function(){
        $.get("http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson", function(data, status){
            console.log(data);
        });
    });
});