let counter = 0;

function init() {
    document.getElementById('num1').value = randomNumber();
    document.getElementById('num2').value = randomNumber();
}

function randomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

// --- NAPIT ---
function minusNro1() {
    let n = parseInt(document.getElementById('num1').value) || 0;
    if (n > 1) document.getElementById('num1').value = n - 1;
}

function plusNro1() {
    let n = parseInt(document.getElementById('num1').value) || 0;
    if (n < 10) document.getElementById('num1').value = n + 1;
}

function minusNro2() {
    let n = parseInt(document.getElementById('num2').value) || 0;
    if (n > 1) document.getElementById('num2').value = n - 1;
}

function plusNro2() {
    let n = parseInt(document.getElementById('num2').value) || 0;
    if (n < 10) document.getElementById('num2').value = n + 1;
}

// --- LASKU ---
function calculate() {
    let n1 = parseInt(document.getElementById('num1').value) || 0;
    let n2 = parseInt(document.getElementById('num2').value) || 0;
    let op = document.getElementById('operation').value;

    let result;

    switch (op) {
        case '+':
            result = n1 + n2;
            break;
        case '-':
            result = n1 - n2;
            break;
        case '*':
            result = n1 * n2;
            break;
        case '/':
            result = n2 !== 0 ? (n1 / n2).toFixed(2) : "Ei voi jakaa nollalla";
            break;
        default:
            result = "Virhe";
    }

    counter++;

    document.getElementById('tulos').innerText = result;
    document.getElementById('clicks').innerText = "Laskuja: " + counter;

    // Historia
    let p = document.createElement('p');
    p.textContent = `${n1} ${op} ${n2} = ${result}`;
    document.getElementById('history').appendChild(p);
}

// --- INFO ---
function showInfo() {
    document.getElementById('infoText').style.display = "block";
}

function hideInfo() {
    document.getElementById('infoText').style.display = "none";
}