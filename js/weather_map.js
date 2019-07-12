var js;
var wea;
var fore;
var climacon;
var longlat = "29.4241,-98.4936";
var area = "San Antonio, Texas";
//function to get weather forcast into human readable text
var forCast = function(data,jso,ind) {
    jso.forEach(function (ele) {
        if (data.hourly.data[ind*16].icon === ele.icon) {
            fore = ele.type;
            climacon = ele.image;
            console.log(fore);
        }
    });
};
//function to make html
var dayHtml = function(data,ind){
    var html = "";
    html += "<h3>"+data.daily.data[ind].temperatureLow+" / "+data.daily.data[ind].temperatureHigh+"</h3>";
    html += "<img src='"+climacon+"' alt='a'>";
    html += "<p><b>"+fore+":</b> "+data.hourly.data[0].summary+"</p>";
    console.log(fore);
    html += "<p><b>Humidity:</b> "+(data.daily.data[ind].humidity*100).toFixed(0)+"%</p>";
    html += "<p><b>Wind Speed:</b> "+data.daily.data[ind].windSpeed+"</p>";
    html += "<p><b>Air Pressure:</b> "+data.daily.data[ind].pressure.toFixed(0)+"</p>";
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
var updateWeather = function(geo) {
    $.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSky + "/" + longlat.split(",")).done(function (data) {
        wea = data;
        for (var i = 0; i <= 2; i++) {
            makeDay(data, i)
        }
        var marker = new mapboxgl.Marker()
            .setLngLat(geo)
            .addTo(map);
    });
};
//geocode for the data entered
// $("#refresh").on("click",function(){
//     // area = $("#geo").val();
//     geocode(area, "pk.eyJ1Ijoia3lsZW1hdWxzYnkiLCJhIjoiY2p4YXZpYnIyMDFqZzN1bGl3ejVqcmVodCJ9.PQ3odp_vmyva8RDga2Cw7g").then(function (geo) {
//         longlat = geo.split(",");
//         updateWeather(longlat)
//     });
// });
//calling the function to built the default html
updateWeather(longlat);
//building base map targeting SA
mapboxgl.accessToken = token;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 10,
    center: [-98.4916, 29.4252]
});