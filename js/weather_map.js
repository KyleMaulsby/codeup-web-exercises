//function to take info and build html for each set of days
var js;
var wea;
var fore;
var climacon;
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
    html += "<p><b>Humidity:</b> "+data.daily.data[ind].humidity * 100+"</p>";
    html += "<p><b>Wind Speed:</b> "+data.daily.data[ind].windSpeed+"</p>";
    html += "<p><b>Air Pressure:</b> "+data.daily.data[ind].pressure+"</p>";
    return html;
};
var makeDay = function(data,ind) {
    var day = $(".day" + ind);
    $.get("data/weather_map.json").done(function(jso) {
        forCast(data,jso,ind);
        day.html(dayHtml(data,ind));
    });

};

$.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/"+darkSky+"/29.4241,-98.4936").done(function(data){
    wea = data;
    for(var i=0;i<=2;i++){
        makeDay(data,i)
    }
});
