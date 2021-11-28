
var button = document.querySelector('.button');
var button2 = document.querySelector('.button');
var indexBtn = document.querySelector('.uvIndex');
var conversionF = document.querySelector('.convertToF');
var conversionC = document.querySelector('.convertToC');

var locationValue = document.querySelector('.locationValue');
var skinValue = document.querySelector('.skinValue');
var description = document.querySelector('.description');
var image = document.querySelector('.icon');
var locationName = document.querySelector('.locationName');
var temperature = document.querySelector('.temperature');
var latValue = document.querySelector('.latitude');
var lngValue = document.querySelector('.longtitude');




if (button) {
  button.addEventListener('click', function () {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + locationValue.value + ' &appid=5ac9de627de01c6133478bf3b3628ae6&units=metric')
      .then(response => response.json())
      .then(data =>
      // console.log(data)
      {
        var locationVal = data['name'];
        var tempVal = data['main']['temp'];
        var latitutde = data['coord']['lat'];
        var longtitude = data['coord']['lon'];
        var desc = data['weather'][0]['description'];
        var iconcode = data.weather[0].icon;
        var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
        // document.getElementById("lng").value = longtitude;
        // var lat = document.getElementById("lat").value;
        // var lng = document.getElementById("lng").value;
        locationName.innerHTML = locationVal;
        temperature.innerHTML = tempVal + "°C";


        $("#skinType").on('click', function () {
          $('#wicon').attr('src', iconurl);
        })


        latValue.innerHTML = "Latitude: " + data['coord']['lat'];
        lngValue.innerHTML = "Longtitude: " + data['coord']['lon'];
        description.innerHTML = "Description: " + desc;
        //  document.getElementById("lat").value = latitude;
        if (conversionF) {
          conversionF.addEventListener('click', function () {
            fetch('http://api.openweathermap.org/data/2.5/weather?q=' + locationValue.value + ' &appid=5ac9de627de01c6133478bf3b3628ae6&units=imperial')
              .then(response => response.json())
              .then(data => {
                var locationVal = data['name'];
                var tempVal = data['main']['temp'];

                locationName.innerHTML = locationVal;
                temperature.innerHTML = tempVal + "°F";
                description.innerHTML = "Description: " + desc;
                latValue.innerHTML = "Latitude: " + data['coord']['lat'];
                lngValue.innerHTML = "Longtitude: " + data['coord']['lon'];
                if (conversionC) {
                  conversionC.addEventListener('click', function () {
                    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + locationValue.value + ' &appid=5ac9de627de01c6133478bf3b3628ae6&units=metric')
                      .then(response => response.json())
                      .then(data => {
                        var locationVal = data['name'];
                        var tempVal = data['main']['temp'];
                        locationName.innerHTML = locationVal;
                        temperature.innerHTML = tempVal + "°C";
                        description.innerHTML = "Description: " + desc;
                        latValue.innerHTML = "Latitude: " + data['coord']['lat'];
                        lngValue.innerHTML = "Longtitude: " + data['coord']['lon'];

                      })
                  })
                }
              })
          })
        }


        const uluru = { lat: latitutde, lng: longtitude };
        // The map, centered at Uluru
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 10,
          center: uluru,
        });
        const tourStops = [
          [{ lat: 34.01419052839738, lng: -118.5027784842495 }, "Santa Monica State Beach, San Francisco, California"],
          [{ lat: 32.852747505145736, lng: -117.27295028200867 }, "La Jolla Cove, San Diego, California"],
          [{ lat: 25.784753073500774, lng: -80.13193385143302 }, "Miami Beach - South Beach, Miami Beach, Florida"],
          [{ lat: 20.6828, lng: 156.4430 }, "Wailea Beach, Kihei, Hawaii"],
          [{ lat: 20.9178, lng: 156.6966 }, "Kaanapali Beach, Kaanapali, Hawaii"],
          [{ lat: 22.2262, lng: 159.5587 }, "Tunnels Beach, Kauai, Hawaii"],
          [{ lat: 37.801685, lng: -122.479965 }, "Honokalani Beach, Hana, Hawaii"],
          [{ lat: 40.630100, lng: -73.340958 }, "Cedar Beach, Babylon, NY"],
          [{ lat: 39.955673, lng: -74.074303 }, "Ortley Beach, Toms River, New Jersey"],
          [{ lat: 25.912266, lng: -80.121277 }, "Haulover Beach, Miami, Florida"],
          [{ lat: 27.433275288056144, lng: -81.63113084859637 }, "Siesta Key Beach, Sarasota, Florida"],
          [{ lat: 27.1104786448339, lng: -78.23390618194587 }, "Dania Beach, Hollywood, Florida"],
          [{ lat: 27.433275288056144, lng: -81.63113084859637 }, "Cocoa Beach, Florida"],
          [{ lat: 38.52636322498139, lng: -75.05474317309958 }, "Ocean City Beach, Maryland"],

        ];
        // The marker, positioned at Uluru
        const infoWindow = new google.maps.InfoWindow();
        // Create the markers.
        tourStops.forEach(([position, title], i) => {
          const marker = new google.maps.Marker({
            position,
            map,
            title: `${i + 1}. ${title}`,
            label: `${i + 1}`,
            optimized: false,
          });

          // Add a click listener for each marker, and set up the info window.
          marker.addListener("click", () => {
            infoWindow.close();
            infoWindow.setContent(marker.getTitle());
            infoWindow.open(marker.getMap(), marker);
          });
        });

        const marker = new google.maps.Marker({
          position: uluru,
          map: map,
          icon: {
            url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
          }
        });
      }
      )

      .catch(err => alert("Wrong City Name!"));

  })
}

// Initialize and add the map
function initMap() {
  // // The location of Uluru
  // const uluru = { lat: 42.9334370881319, lng: -26.650259381994612 };
  // // The map, centered at Uluru
  // const map = new google.maps.Map(document.getElementById("map"), {
  //   zoom: 3,
  //   center: uluru,
  // });
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: { lat: 42.9334370881319, lng: -26.650259381994612 },
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
    [{ lat: 34.01419052839738, lng: -118.5027784842495 }, "Santa Monica State Beach, Santa Monica, California"],
    [{ lat: 32.852747505145736, lng: -117.27295028200867 }, "La Jolla Cove, San Diego, California"],
    [{ lat: 25.784753073500774, lng: -80.13193385143302 }, "Miami Beach - South Beach, Miami Beach, Florida"],
    [{ lat: 20.6828, lng: 156.4430 }, "Wailea Beach, Kihei, Hawaii"],
    [{ lat: 20.9178, lng: 156.6966 }, "Kaanapali Beach, Kaanapali, Hawaii"],
    [{ lat: 22.2262, lng: 159.5587 }, "Tunnels Beach, Kauai, Hawaii"],
    [{ lat: 37.801685, lng: -122.479965 }, "Honokalani Beach, Hana, Hawaii"],
    [{ lat: 40.630100, lng: -73.340958 }, "Cedar Beach, Babylon, NY"],
    [{ lat: 39.955673, lng: -74.074303 }, "Ortley Beach, Toms River, New Jersey"],
    [{ lat: 25.912266, lng: -80.121277 }, "Haulover Beach, Miami, Florida"],
    [{ lat: 25.912266, lng: -80.121277 }, "Haulover Beach, Miami, Florida"],
    [{ lat: 27.433275288056144, lng: -81.63113084859637 }, "Siesta Key Beach, Sarasota, Florida"],
    [{ lat: 27.1104786448339, lng: -78.23390618194587 }, "Dania Beach, Hollywood, Florida"],
    [{ lat: 27.433275288056144, lng: -81.63113084859637 }, "Cocoa Beach, Florida"],
    [{ lat: 38.52636322498139, lng: -75.05474317309958 }, "Ocean City Beach, Maryland"],

  ];
  //
  // Create an info window to share between markers.
  const infoWindow = new google.maps.InfoWindow();
  // Create the markers.
  tourStops.forEach(([position, title], i) => {
    const marker = new google.maps.Marker({
      position,
      map,
      title: `${i + 1}. ${title}`,
      label: `${i + 1}`,
      optimized: false,
    });
    // Add a click listener for each marker, and set up the info window.
    marker.addListener("click", () => {
      infoWindow.close();
      infoWindow.setContent(marker.getTitle());
      infoWindow.open(marker.getMap(), marker);
    });
  });
}