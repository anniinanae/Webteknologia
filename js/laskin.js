window.onload = function () {
    document.getElementById("numberA").value = randomNumber();
    document.getElementById("numberB").value = randomNumber();
};

function randomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

// A luku
function increaseA() {
    let a = document.getElementById("numberA");
    a.value = parseInt(a.value) + 1;
}

function decreaseA() {
    let a = document.getElementById("numberA");
    a.value = parseInt(a.value) - 1;
}

// B luku
function increaseB() {
    let b = document.getElementById("numberB");
    b.value = parseInt(b.value) + 1;
}

function decreaseB() {
    let b = document.getElementById("numberB");
    b.value = parseInt(b.value) - 1;
}

// Laske
function calculate() {

    let numberA = document.getElementById("numberA").value;
    let numberB = document.getElementById("numberB").value;
    let operation = document.getElementById("operation").value;

    let total = eval(numberA + operation + numberB);

    document.getElementById("result").value = total;
}