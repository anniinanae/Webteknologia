let counter = 0;

$(document).ready(function () {

    init();
    $("#accordion").accordion({
        collapsible: true,
        active: false,
        heightStyle: "content"
    });

    $("#button").click(function () {

        $("#gif").show();

        fetch("https://api.chucknorris.io/jokes/random")
            .then(response => response.json())
            .then(result => {

                $("#gif").hide();

                $("#text").html("<i>" + result.value + "</i>");

                counter++;
                $("#clicks").text("Laskuri: " + counter);
            })
            .catch(error => {
                $("#gif").hide();
                $("#text").text("Virhe haussa");
                console.log(error);
            });
    });


    $(".jq-header").click(function () {

        let target = $(this).data("target");

        // Näytetään lataus
        $("#" + target).html("Ladataan...");

        fetch("https://api.chucknorris.io/jokes/random")
            .then(response => response.json())
            .then(result => {

                $("#" + target).html("<i>" + result.value + "</i>");
            })
            .catch(error => {
                $("#" + target).text("Virhe haussa");
                console.log(error);
            });
    });

    $(".bs-btn").click(function () {

        let target = $(this).data("target");

        $("#" + target).html("Ladataan...");

        fetch("https://api.chucknorris.io/jokes/random")
            .then(response => response.json())
            .then(result => {

                $("#" + target).html("<i>" + result.value + "</i>");
            })
            .catch(error => {
                $("#" + target).text("Virhe haussa");
                console.log(error);
            });
    });

});

function init() {
    $("#gif").hide();
}