var wea;
var fore;
var climacon;
var longlat;
var area = "San Antonio";
var marker;
var temp = "F";
var lowTemp;
var highTemp;
//function to get weather forcast into human readable text
var forCast = function(data,jso,ind) {
    jso.forEach(function (ele) {
        if (data.hourly.data[ind*16].icon === ele.icon) {
            fore = ele.type;
            climacon = ele.image;
        }
    });
};
//function to make html
var dayHtml = function(data,ind){
    lowTemp = data.daily.data[ind].temperatureLow;
    highTemp  = data.daily.data[ind].temperatureHigh;
    if(temp === "C"){
        lowTemp = (lowTemp - 32) * (5 / 9);
        highTemp = (highTemp - 32) * (5 / 9);
    }
    html = "";
    html += "<h3 class='temp'>"+lowTemp.toFixed(2)+"˚/ "+highTemp.toFixed(2)+"˚"+"</h3>";
    html += "<img src='"+climacon+"' alt='a'>";
    html += "<p><b>"+fore+":</b> "+data.hourly.data[ind*16].summary+"</p>";
    html += "<p><b>Humidity:</b> "+(data.daily.data[ind].humidity*100).toFixed(0)+"%</p>";
    html += "<p><b>Wind Speed:</b> "+(data.daily.data[ind].windSpeed).toFixed(1)+" mph</p>";
    html += "<p><b>Precipitation Chance:</b> "+(data.daily.data[ind].precipProbability*100).toFixed(0)+"%</p>";
    return html;
};
//running all the functions after both personal json file and api objects are loaded
var makeDay = function(data,ind) {
    var day = $(".day" + ind);
    $.get("data/weather_map.json").done(function(jso) {
        forCast(data,jso,ind);
        day.html(dayHtml(data,ind));
    });
};
//function to take info and build html for each set of days
var updateWeather = function() {
    geocode(area, token).then(function (geo) {
        longlat = geo;
        mark();
        //getting the lng+lat of the new location of the marker after it is released
            marker.on('dragend', function(){
                longlat = marker.getLngLat();
                //taking the lng+lat and reverse geocode to get the address
                reverseGeocode(longlat, token).then(function(address) {
                   area = address
                });
                longlat = [longlat.lng,longlat.lat];
                $.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSky + "/"+(longlat.reverse().join(','))).done(function (data) {
                    wea = data;
                    for (var i = 0; i <= 2; i++) {
                        makeDay(data, i)
                    }
                    $("#area").html(area);
                });
            });
        longlat = geo;
        $.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSky + "/"+(longlat.reverse().join(','))).done(function (data) {
        wea = data;
        $("#area").html(area);
        for (var i = 0; i <= 2; i++) {
            makeDay(data, i)
            }
        });

    });
};
// function to make the marker on load and then move it when a new location is searched
var mark = function(){
    if(marker === undefined){
        marker = new mapboxgl.Marker({
            draggable: true
        })
        .setLngLat(longlat)
        .addTo(map);
    } else{
        marker.setLngLat(longlat)
    }
    map.panTo(longlat, {
        zoom: 10,
        duration: 1500,
        animate: true
    });
};
//button to change all the degrees on the page to either celcius or farenhiet
$("#degree").on("click",function(){
    if(temp === "C"){
        $(this).html("<img class='deg' src='img/far.png'>");
        temp = "F";
        lowTemp = (lowTemp * 9/5) + 32 ;
        highTemp = (highTemp * 9/5) + 32 ;
    }else {
        temp = "C";
        $(this).html("<img class='deg' src='img/cel.png'>");
        lowTemp = (lowTemp - 32) * (5 / 9);
        highTemp = (highTemp - 32) * (5 / 9);
    }
    $(".temp").html(lowTemp.toFixed(2)+"˚/ "+highTemp.toFixed(2)+"˚");
});
//geocode for the area inputed on button click
$("#refresh").on("click",function(){
    area = $("#geo").val();
    updateWeather()
});
//geocoe for the area entered on input entered
$("#update").submit(function(e){
    e.preventDefault();
    area = $("#geo").val();
    updateWeather()
});
//calling the function to built the default html
updateWeather();
//building base map targeting SA
mapboxgl.accessToken = token;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 1,
    center: [-98.4916, 29.4252]
});
// add a button on the map that locates the users current location and pans to that location
map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true
}));


