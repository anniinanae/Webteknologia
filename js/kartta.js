
window.onload = function () {
    let address = 'Yliopistonkatu 36';
    let city = 'Lappeenranta';
    updateMap(address, city);
}

function haeKartta() {
    let address = document.getElementById('addr-field').value.trim();
    let city = document.getElementById('city-field').value.trim();

    if (address === "" || city === "") {
        alert("Täytä sekä katuosoite että kaupunki!");
        return;
    }

    updateMap(address, city);
}

function updateMap(address, city) {
    let place = 'https://www.google.com/maps?q=' + encodeURIComponent(address + ' ' + city) + '&output=embed';

    document.getElementById('map-frame').src = place;
}