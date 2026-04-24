let cats_array = [
    { "name": "Mauno", "src": "kuvat/Kissa1.jpg" },
    { "name": "Manu", "src": "kuvat/Kissa2.jpg" },
    { "name": "Monni", "src": "kuvat/Kissa3.jpg" }
];

let index = 0;
let interval = null;

// 🔹 Kun sivu latautuu
window.onload = function () {

    // haetaan localStorage
    let saved = localStorage.getItem("catIndex");
    if (saved !== null) {
        index = parseInt(saved);
    }

    showCat();
}

// 🔹 YKSI funktio näyttää kaiken
function showCat() {
    let cat = cats_array[index];

    // jQuery efekti
    $("#catImage").fadeOut(200, function () {
        $(this).attr("src", cat.src).fadeIn(200);
    });

    $("#catName").fadeOut(200, function () {
        $(this).text(cat.name).fadeIn(200);
    });

    // tallennetaan localStorageen
    localStorage.setItem("catIndex", index);
}

// 🔹 Next
function showNext() {
    index++;
    if (index >= cats_array.length) index = 0;
    showCat();
}

// 🔹 Previous
function showPrevious() {
    index--;
    if (index < 0) index = cats_array.length - 1;
    showCat();
}

// 🔹 Play / Stop
function togglePlay() {
    if (interval === null) {
        interval = setInterval(showNext, 1500);
        document.getElementById("playBtn").innerText = "Stop";
    } else {
        clearInterval(interval);
        interval = null;
        document.getElementById("playBtn").innerText = "Play";
    }
}