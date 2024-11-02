// open tab
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    
    // hide rest
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    
    // remove active
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    // show current tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// default active
document.querySelector(".tab button").click();

// Map initialization
var map = L.map('map').setView([42.3509,-71.1089], 12);

// Base OSM layer 
var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

osm.addTo(map);

// All markers
var singleMarker = L.marker([42.3509,-71.1089]).addTo(map);
var popup = singleMarker.bindPopup('This is Boston').openPopup();
popup.addTo(map);

var ilc = L.marker([42.427132, -71.067299]).addTo(map);
var popup1 = ilc.bindPopup('This is The Immigrant Learning Center').openPopup();
popup1.addTo(map);



// Add user location function
function addLocation() {
    document.getElementById('addLocationBtn').addEventListener('click', function () {
        var name = document.getElementById('locationName').value;
        var lat = parseFloat(document.getElementById('latitude').value);
        var lng = parseFloat(document.getElementById('longitude').value);
        var description = document.getElementById('description').value;

        if (name && !isNaN(lat) && !isNaN(lng) && description) {
            var newMarker = L.marker([lat, lng])
                .bindPopup(`<b>${name}</b><br>${description}`)
                .addTo(map);

            alert('Location added successfully!');
        } else {
            alert('Please fill in all fields with valid data.');
        }
    });
}
addLocation();