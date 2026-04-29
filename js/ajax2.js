let laskuri = 0;

function haeData() {
    const loader = document.getElementById("loader");
    const dataDiv = document.getElementById("data");

    // Näytä loader
    loader.style.display = "block";
    dataDiv.innerHTML = "";

    fetch("https://api.chucknorris.io/jokes/random")
        .then(response => response.json())
        .then(data => {
            // Piilota loader
            loader.style.display = "none";

            // Näytä data
            dataDiv.innerHTML = data.value;

            // Päivitä laskuri
            laskuri++;
            document.getElementById("laskuri").innerText = laskuri;
        })
        .catch(error => {
            loader.style.display = "none";
            dataDiv.innerHTML = "Virhe haussa!";
            console.error(error);
        });
}