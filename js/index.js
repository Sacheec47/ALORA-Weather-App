var weatherLink;
var temp = "";
var tempF = ""; 
var backgroundCondition = "";
if (navigator.geolocation){
  navigator.geolocation.getCurrentPosition(function(position){
    var html1 = "";
    var html2 = "";
    html1 += position.coords.longitude;
    html2 += position.coords.latitude;
     
    //Creating the Url based on the user location.
    weatherLink = 'https://api.apixu.com/v1/current.json?key=6acd666563c644979dd170248170205&q=' + html2 + "," + html1;
  
    //Obtaining locat weather data using getJSON.
  $.getJSON( weatherLink, function(result){
  var location = "";
  var condition = "";
  var lastUpdated = "";
  var png =""
  location += (result.location.name) + ", " +(result.location.region) + ", " + (result.location.country) + ".<br>" + (result.location.localtime) + "<br>";
  temp += "<br>" + (result.current.temp_c)+ " Celcius<br>";
  tempF += "<br>" + (result.current.temp_f)+ " Farenheit<br>"; 
  condition += "Condition <br>" + (result.current.condition.text) + "<br>";  
  png += (result.current.condition.icon);
  backgroundCondition = (result.current.condition.text);
  $("#geoLocation").animate({
          opacity: 0
        }, 0,
        function() {
          $(this).animate({
            opacity: 1
          }, 1000);
  $("#geoLocation").html(location);
  });
  $("#temp").animate({
          opacity: 0
        }, 1000,
        function() {
          $(this).animate({
            opacity: 1
          }, 1000);
  $("#temp").html("Current Temperature");
  });
    $("#tempF").animate({
          opacity: 0
        }, 1000,
        function() {
          $(this).animate({
            opacity: 1
          }, 1000);
  $("#tempF").html(temp);
  });
    $("#toggleLabel").animate({
          opacity: 0
        }, 2000,
        function() {
          $(this).animate({
            opacity: 1
          }, 1000);  
 });
  $("#condition").animate({
          opacity: 0
        }, 3000,
        function() {
          $(this).animate({
            opacity: 1
          }, 1000);
  $("#condition").html(condition);
  });
    
  $("img").animate({
          opacity: 0
        }, 4000,
        function() {
          $(this).animate({
            opacity: 1
          }, 1000);  
  $("img").attr("src", png);
  });
      
});
   
  });
  
  
  function generateTxt(){
    //Switch statement to change background image according to weather
  switch(backgroundCondition){  
      case "Sunny":
      case "Clear":
      document.body.style.backgroundImage = "url('https://raw.githubusercontent.com/Sacheec47/ALORA-Weather-App/master/Sunny.jpg')";
      break;
      case "Cloudy":
      case "Partly cloudy":
      document.body.style.backgroundImage = "url('https://raw.githubusercontent.com/Sacheec47/ALORA-Weather-App/master/Cloudy.jpg')";
      break;
      case "Overcast":
      document.body.style.backgroundImage = "url('https://raw.githubusercontent.com/Sacheec47/ALORA-Weather-App/master/Overcast.jpg')";
      break;
      case "Freezing drizzle":
      case "Heavy freezing drizzle":
      case "Light drizzle":
      case "Patchy freezing drizzle possible":
      case "Patchy light drizzle":
      document.body.style.backgroundImage = "url('https://raw.githubusercontent.com/Sacheec47/ALORA-Weather-App/master/Drizzle%20HD.jpg')";
      break;
      case "Mist":
      case "Fog":
      case "Freezing fog":
      document.body.style.backgroundImage = "url('https://raw.githubusercontent.com/Sacheec47/ALORA-Weather-App/master/Fog%20HD.jpg')";
      break;
      case "Ice pellets":
      case "Light showers of ice pellets":
      case "Moderate or heavy showers of ice pellets":
      document.body.style.backgroundImage = "url('https://raw.githubusercontent.com/Sacheec47/ALORA-Weather-App/master/Ice%20Pellets.jpg')";
      break;
      case "Heavy rain at times":
      case "Heavy rain":
      case "Light freezing rain":
      case "Light rain shower":
      case "Light rain":
      case "Moderate or heavy freezing rain":
      case "Moderate or heavy rain shower":
      case "Moderate rain at times":
      case "Moderate rain":
      case "Patchy light rain":
      case "Patchy rain possible":
      case "Torrential rain shower":
      document.body.style.backgroundImage = "url('https://raw.githubusercontent.com/Sacheec47/ALORA-Weather-App/master/Rain%20HD.jpg')";
      break;
      case "Moderate or heavy rain with thunder":
      case "Patchy light rain with thunder":
      case "Moderate or heavy snow with thunder":
      case "Patchy light snow with thunder":
      document.body.style.backgroundImage = "url('https://raw.githubusercontent.com/Sacheec47/ALORA-Weather-App/master/Thunder.jpg')";
      break;
      case "Light sleet showers":
      case "Light sleet":
      case "Moderate or heavy sleet showers":
      case "Moderate or heavy sleet":
      case "Patchy sleet possible":
      document.body.style.backgroundImage = "url('https://raw.githubusercontent.com/Sacheec47/ALORA-Weather-App/master/Sleet.jpg')";
      break;
      case "Blowing snow":
      case "Heavy snow":
      case "Light snow showers":
      case "Light snow":
      case "Moderate or heavy snow showers":
      case "Moderate snow":
      case "Patchy heavy snow":
      case "Patchy light snow":
      case "Patchy moderate snow":
      case "Patchy snow possible":
      document.body.style.backgroundImage = "url('https://raw.githubusercontent.com/Sacheec47/ALORA-Weather-App/master/Snow.jpg')";
      break;
      case "Blizzard":
      document.body.style.backgroundImage = "url('https://raw.githubusercontent.com/Sacheec47/ALORA-Weather-App/master/Blizzard.jpg')";
      break;
};  
    //End of Switch statement
    
  $("#tempF").animate({
          opacity: 0
        }, 500,
        function() {
          $(this).animate({
            opacity: 1
          }, 500);
  if (document.getElementById("checkbox").checked){
    
  $("#tempF").html(tempF);

  } else{
    
  $("#tempF").html(temp);

  }
  });  
  
}
}




//window.setTimeout(bChange,8000);
//function bChange(){
//if (backgroundCondition == "Sunny"){  
//document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1507898152394-7dd0e22fe102?auto=format&fit=crop&w=1500&q=80')";
//};
//}
/* var wBWidth = document.getElementById("weatherBox").offsetWidth;
var innerwidth = document.getElementById("inner").offsetWidth;
var setMiddle = (((wBWidth-innerwidth)/2) -15);
    $("h1").text(wBWidth);
  $(".switch").css("left", setMiddle); */