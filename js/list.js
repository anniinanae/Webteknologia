function showList() {
    index = index + 1;
    if (index >= cats_array.length) {
        index = 0;
    }
    console.log(index);
    document.getElementById("catImage").src = cats_array[index].src;
    document.getElementById("catName").textContent = cats_array[index].name;
}

function showGrid() {
}