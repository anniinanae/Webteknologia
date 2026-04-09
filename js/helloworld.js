// Kartan oletusosoite, joka näkyy sivun latautuessa
window.onload = function () {
    let address = 'Yrjönkatu 7';
    let city = 'Lappeenranta';
    updateMap(address, city);
}

// Funktio HAE-painikkeelle
function haeKartta() {
    // Luetaan käyttäjän syöttämät arvot
    let address = document.getElementById('addr-field').value.trim();
    let city = document.getElementById('city-field').value.trim();

    if (address === "" || city === "") {
        alert("Täytä sekä katuosoite että kaupunki!");
        return;
    }

    updateMap(address, city);
}

// Yksittäinen funktio kartan päivittämiseen
function updateMap(address, city) {
    // Muodostetaan turvallinen Google Maps URL
    let place = 'https://www.google.com/maps?q=' + encodeURIComponent(address + ' ' + city) + '&output=embed';

    // Päivitetään iframe src
    document.getElementById('map-frame').src = place;
}