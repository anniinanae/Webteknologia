var counter = 0;

function init() {
    document.getElementById("gif").style.display = "none";
}

function getData() {
    document.getElementById("gif").style.display = "block";

    fetch("https://api.chucknorris.io/jokes/random")

        .then(function (response) {
            //.then, palauttaa tässä Promisen (lupauksen), jota käytetään seuraavassa then-funktiossa. 
            return response.json(); //huom. tässä response tulee JSON-muodossa
        })
        .then(function (result) {

            document.getElementById("text").innerHTML += "<br>" + "<i>" + result.value + "</i>";
            document.getElementById("gif").style.display = "none";
        })
        .catch(function (error) {
            //Jos lupaus epäonnistuu (eli lupaus on hylätty), tämä toiminto suoritetaan
            console.log(error);
        });

    counter = counter + 1;
    document.getElementById('clicks').innerHTML = "Laskuri: " + counter;
}

function getData1(buttonId) {

    fetch("https://api.chucknorris.io/jokes/random")

        .then(function (response) {
            return response.json();
        })
        .then(function (result) {

            if (buttonId === "bn1")
                document.querySelector("#flush-collapseOne .accordion-body").innerHTML
                    = "<i>" + result.value + "</i>";
            if (buttonId === "bn2")
                document.querySelector("#flush-collapseTwo .accordion-body").innerHTML
                    = "<i>" + result.value + "</i>";
        })
        .catch(function (error) {
            console.log(error);
        });
}

$("#accordion").accordion({ collapsible: true });
fetch("https://api.chucknorris.io/jokes/random")

    .then(function (response) {
        return response.json();
    })
    .then(function (result) {
        document.getElementById("p1").innerHTML = "<i>" + result.value + "</i>";
    })
    .catch(function (error) {
        console.log(error);
    });
$("#accordion").accordion("refresh");

function getData2(hId) {

    fetch("https://api.chucknorris.io/jokes/random")

        .then(function (response) {
            return response.json();
        })
        .then(function (result) {

            if (hId === "h1")
                document.getElementById("p1").innerHTML = "<i>" + result.value + "</i>";
            if (hId === "h2")
                document.getElementById("p2").innerHTML = "<i>" + result.value + "</i>";
        })
        .catch(function (error) {
            console.log(error);
        });
}