function myMap(lat=19.0760,lng=72.8777) {
    var mapProp= {
        center:new google.maps.LatLng(lat,lng),
        zoom:7,
    };
    var map = new google.maps.Map(document.getElementById("map-box"),mapProp);

    let marker = new google.maps.Marker({
        position : {lat:lat,lng:lng},
        map: map
    });
}
