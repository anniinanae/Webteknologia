function laskeHinta() {
    let perushinta = parseFloat(document.getElementById('operation').value) || 0;
    let taytteet = document.querySelectorAll('input[name="taytteet"]:checked');
    let yhteishinta = perushinta + (taytteet.length * 2);

    document.getElementById('hinta').value = yhteishinta;
}

function init() {
    console.log("Sivu ladattu");
}

function tilaaPizza() {
    let summa = document.getElementById('hinta').value;
    alert("Kiitos tilauksesta! Loppusumma on: " + summa + "€");
}