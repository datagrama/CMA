/* 
 Google Maps Location
 */


function initMap() {
  const address = { lat: 38.95533, lng: -8.98853 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 19,
    center: address,
  });
  const marker = new google.maps.Marker({
    position: address,
    map: map,
  });
}