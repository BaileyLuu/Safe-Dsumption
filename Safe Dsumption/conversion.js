
  var button = document.querySelector('.button');
  var locationValue = document.querySelector('.locationValue');
  var skinValue = document.querySelector('.skinValue');
  var locationName = document.querySelector('.locationName');
  var temperature = document.querySelector('.temperature');
  
  if(button){
    button.addEventListener('click', function(){
      fetch('http://api.openweathermap.org/data/2.5/weather?q='+ locationValue.value + '&appid=7a1fb1faf7dea9ae404b8ce103551576&units=imperial')
        .then(response => response.json())
        .then(data => 
          // console.log(data)
          {
          var locationVal = data['name'];
          var tempVal = data['main']['temp'];
          locationName.innerHTML = locationVal ;
          temperature.innerHTML = tempVal + "°F";

          var latitutde = data['coord']['lat'];
          var longtitude = data['coord']['lon'];
          const uluru = { lat: latitutde, lng: longtitude };
          // The map, centered at Uluru
          const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 10,
            center: uluru,
          });
          // The marker, positioned at Uluru
          const marker = new google.maps.Marker({
            position: uluru,
            map: map,
          });
          }
        )
    
    .catch(err => alert("Wrong City Name!"))
    
    })
  }
