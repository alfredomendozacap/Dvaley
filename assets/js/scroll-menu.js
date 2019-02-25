$(document).ready(function () {

    var equipo = $('#equipo').offset().top;
    var qdvalley = $('#qdvalley').offset().top;
    var problema = $('#problema').offset().top;
    var solucion = $('#solucion').offset().top;
    var equipo = $('#equipo').offset().top;
    var contacto = $('#contacto').offset().top;


    $('#btn-equipo').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: equipo - 40
        }, 500);
    });


    $('#btn-dvalley').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: qdvalley - 40
        }, 500);
    });

    $('#btn-problema').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: problema - 40
        }, 500);
    });

    $('#btn-solucion').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: solucion- 40
        }, 500);
    });

    $('#btn-contacto').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contacto- 45
        }, 500);
    });

});