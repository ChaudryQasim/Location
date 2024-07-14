let map;

// Function to initialize the map
function initializeMap() {
    // Create a map centered at a default location
    map = L.map('map').setView([0, 0], 2);

    // Add a tile layer to the map (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
}

// Function to add a circular dot to the map
function addDot(latitude, longitude, name) {
    const circle = L.circle([latitude, longitude], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 100
    }).addTo(map);

    circle.bindPopup(`${name}<br>Latitude: ${latitude}<br>Longitude: ${longitude}`);
}

// Function to get coordinates from input fields and add dots
function addLocations() {
    const mortarLat = parseFloat(document.getElementById('mortarLat').value);
    const mortarLng = parseFloat(document.getElementById('mortarLng').value);
    const observerLat = parseFloat(document.getElementById('observerLat').value);
    const observerLng = parseFloat(document.getElementById('observerLng').value);
    const targetLat = parseFloat(document.getElementById('targetLat').value);
    const targetLng = parseFloat(document.getElementById('targetLng').value);

    if (isNaN(mortarLat) || isNaN(mortarLng) || isNaN(observerLat) || isNaN(observerLng) || isNaN(targetLat) || isNaN(targetLng)) {
        alert('Please enter valid coordinates.');
        return;
    }

    addDot(mortarLat, mortarLng, 'Mortar Location');
    addDot(observerLat, observerLng, 'Observer Location');
    addDot(targetLat, targetLng, 'Target Location');

    // Center the map to the first location (Mortar Location) and adjust zoom
    map.setView([mortarLat, mortarLng], 13);
}

// Initialize map on page load
document.addEventListener('DOMContentLoaded', (event) => {
    initializeMap();
});
