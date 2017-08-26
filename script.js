(function () {

    var vrednosti = function () {

        return {
            naslov: document.getElementById("#naslov"),
            pisac: document.getElementById("#pisac"),
            cena: document.getElementById("#cena")
        }
    };

}());



$("#btn").on("click", dodaj);

$(document).keypress(function (e) {
    if (e.which == 13 || event.keyCode == 13) {
        dodaj();
    }
});

function dodaj() {

    if (/\S/.test(naslov.value) && /\S/.test(pisac.value) && /\S/.test(cena.value)) {

        var a = "<span id='tekst' class='lista'>Naslov: " + naslov.value + " Pisac: " + pisac.value + " Cena: " + cena.value + "<img src='bitmap.png' id='del_img'></span>";

        $("#lista").append(a);
    } else {
        alert("Popunite ispravno sva polja!")
    };

    $('#form').children('input').val('');

    $("#naslov").focus();

}


$('body').on('click', '#del_img', function () {
//    $(this).parent().remove();
    
    $(this).parent().fadeOut(300, function(){ $(this).remove(); });
});