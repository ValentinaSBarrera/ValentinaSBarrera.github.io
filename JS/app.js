$(function () {
    console.log("ready!");
    initViz();
});

let diViz = document.getElementById('myViz');

let url = "https://public.tableau.com/views/tEST_16691983962120/Dashboard1";

let viz;

let opt = {
    hideTabs: true,
    onFirstInteractive: function () {
        console.log("Hey, its ready");
    }
}

function initViz() {
    viz = new tableau.Viz(diViz, url, opt);
}

var filter = 0

$('.flr').on({
    click: function () {
        switch ($(this).prop('id')) {
            case 'db':
                $(this).toggleClass('btnDbClicked');
                $('#nrgy').removeClass('btnNrgyClicked');
                $('#dnce').removeClass('btnDnceClicked');
                filter = 1;
                break;
            case 'nrgy':
                $(this).toggleClass('btnNrgyClicked');
                $('#db').removeClass('btnDbClicked');
                $('#dnce').removeClass('btnDnceClicked');
                filter = 2;
                break;
            case 'dnce':
                $(this).toggleClass('btnDnceClicked');
                $('#nrgy').removeClass('btnNrgyClicked');
                $('#db').removeClass('btnDbClicked');
                filter = 3;
                break;
        }
    }
});

var modal = $('#modalFilter'); 

$('#btnSearch').on("click", function (e) {
    if ($("button").hasClass("btnDbClicked") || $("button").hasClass("btnNrgyClicked") || $("button").hasClass("btnDnceClicked")) { //Si alguna de las clases "clicked" existe, ejecuta la busqueda
        if (filter == 1) {
            url = "https://public.tableau.com/views/Estridente-Song/MyTableauJourney";
            viz.dispose();
            initViz();
            console.log('soy 1');
        }
        if (filter == 2) {
            url = "https://public.tableau.com/views/Energico-Song/MyTableauJourney?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link";
            viz.dispose();
            initViz();
            console.log('soy 2');
        }
        if (filter == 3) {
            url = "https://public.tableau.com/shared/CS86Y3KZD?:display_count=n&:origin=viz_share_link";
            viz.dispose();
            initViz();
            console.log('soy 3');
        }

    }
    else { //Si no, nos limpiara la pantalla (si hemos hecho una busqueda anterior) y nos avisara de elegir un filtro personalizando la ventana modal
        $('#modalFilter').modal('show');
        console.log('soy hola');
    }
});

