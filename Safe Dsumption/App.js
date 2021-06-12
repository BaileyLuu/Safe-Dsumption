
var button = document.querySelector('.button');
var conversionF = document.querySelector('.convertToF');
var conversionC = document.querySelector('.convertToC');

var locationValue = document.querySelector('.locationValue');
var skinValue = document.querySelector('.skinValue');
var locationName = document.querySelector('.locationName');
var temperature = document.querySelector('.temperature');



if (button) {
  button.addEventListener('click', function () {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + locationValue.value + '&appid=5ac9de627de01c6133478bf3b3628ae6&units=metric')
      .then(response => response.json())
      .then(data =>
      // console.log(data)
      {
        var locationVal = data['name'];
        var tempVal = data['main']['temp'];
        locationName.innerHTML = locationVal;
        temperature.innerHTML = tempVal + "°C";
        if (conversionF) {
          conversionF.addEventListener('click', function () {
            fetch('http://api.openweathermap.org/data/2.5/weather?q=' + locationValue.value + '&appid=5ac9de627de01c6133478bf3b3628ae6&units=imperial')
              .then(response => response.json())
              .then(data => {
                var locationVal = data['name'];
                var tempVal = data['main']['temp'];
                locationName.innerHTML = locationVal;
                temperature.innerHTML = tempVal + "°F";
                if (conversionC) {
                  conversionC.addEventListener('click', function () {
                    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + locationValue.value + '&appid=5ac9de627de01c6133478bf3b3628ae6&units=metric')
                      .then(response => response.json())
                      .then(data => {
                        var locationVal = data['name'];
                        var tempVal = data['main']['temp'];
                        locationName.innerHTML = locationVal;
                        temperature.innerHTML = tempVal + "°C";
                      })
                  })
                }
              })
          })
        }

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

// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: 42.9334370881319, lng: -26.650259381994612 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: uluru,
  });
}