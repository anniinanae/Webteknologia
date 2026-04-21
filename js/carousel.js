let cats_array = [{ "name": "Mauno", "src": "kuvat/Kissa1.jpg" }, { "name": "Manu", "src": "kuvat/Kissa2.jpg" },
{ "name": "Monni", "src": "kuvat/Kissa3.jpg" }];
let index;
window.onload = function () {
    index = 0;
    document.getElementById("catImage").src = cats_array[index].src;
    document.getElementById("catName").textContent = cats_array[index].name;

}
function showNext() {
    index = index + 1;
    if (index >= cats_array.length) {
        index = 0;
    }
    console.log(index);
    document.getElementById("catImage").src = cats_array[index].src;
    document.getElementById("catName").textContent = cats_array[index].name;
}

function showPrevious() {
    index = index - 1;

    if (index < 0) {
        index = cats_array.length - 1;
    }

    console.log(index);
    document.getElementById("catImage").src = cats_array[index].src;
    document.getElementById("catName").textContent = cats_array[index].name;
}