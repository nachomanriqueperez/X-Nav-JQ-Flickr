// Get some JSONP text via Ajax, and write it to the HTML page,
// when clicking on "third"
//
$(document).ready(function() {

    function busqueda(search){
        $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?tags=" + search + "&tagmode=any&format=json&jsoncallback=?")
        .done(function(data) {
            var i = 0;
            $(data.items).each(function (){
                var fotos = data.items[i].media.m
                console.log(fotos);
                $("#fotos").append("<img src = " + fotos + ">")
                i++;
            });
        });
    }

    $("#boton").click(function(){
        var formulario = document.getElementById('form').value;
        console.log(formulario);
        busqueda(formulario);
    });

    $("#fuenla").click(function(){
        console.log("llega");
        busqueda("fuenlabrada");
    });
});
