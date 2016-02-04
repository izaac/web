var f = true;
function setCurrentObservation(data){

  var request = new XMLHttpRequest();
  request.open('GET', 'https://api.wunderground.com/api/3989fecc8b3386d5/geolookup/conditions/q/'+data[0]+'/'+data[1]+'.json', true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      // Success!
      var j = JSON.parse(request.responseText);
      var location = j.location.city;
      var temp_f = j.current_observation.temp_f + ' °F';
      var temp_c = j.current_observation.temp_c + ' °C';
      var image = j.current_observation.icon_url;
      image = image.replace('http','https');
      ReactDOM.render(
        React.createElement('img', {src: image}),
        document.getElementById('conditionname')
      );
      if(f){
        ReactDOM.render(
          React.createElement('p', null, temp_f),
          document.getElementById('tempname')
        );
      }
      else {
        ReactDOM.render(
          React.createElement('p', null, temp_c),
          document.getElementById('tempname')
        );
      }

    } else {
      // We reached our target server, but it returned an error
      ReactDOM.render(
        React.createElement('p', null, 'ErrorJson'), // On Error Default to Paris
        document.getElementById('cityname')
      );
    }
  };

  request.onerror = function() {
    // There was a connection error of some sort
  };

  request.send();
}

var onGeoSuccess = function(location) {
    console.log(location);
    if(location.address.city === "" && location.address.region === "Sonora"){
      ReactDOM.render(
        React.createElement('p', null, 'Hermosillo'),
        document.getElementById('cityname')
      );
      setCurrentObservation([location.address.countryCode, 'Hermosillo']);
    }
    else{
      ReactDOM.render(
        React.createElement('p', null, location.address.country),
        document.getElementById('cityname')
      );
      setCurrentObservation([location.address.countryCode, location.address.city]);
    }
};

var onGeoError = function (error) {
  ReactDOM.render(
    React.createElement('p', null, 'Paris'), // On Error Default to Paris
    document.getElementById('cityname')
  );
  setCurrentObservation(['FR', 'Paris']);
};

var html5Options = { enableHighAccuracy: true, timeout: 6000, maximumAge: 0 };
geolocator.locate(onGeoSuccess, onGeoError, 2, html5Options, 'map-canvas');

function update() {
 if(f) f = false;
 else f = true;
 var html5Options = { enableHighAccuracy: true, timeout: 6000, maximumAge: 0 };
 geolocator.locate(onGeoSuccess, onGeoError, 2, html5Options, 'map-canvas');
}
