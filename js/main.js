$(document).ready(function () {
    $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function (data) {
        $('#getData').click(function () {
            $('body').append('<div id="dane-programisty"></div>');
            $('#dane-programisty').append('<p>Imię i nazwisko: ' + data.imie + ' ' + data.nazwisko + '</p>');
            $('#dane-programisty').append('<p>' + data.zawod + ' w firmie: ' + data.firma + '</p>');
        })
    })
})