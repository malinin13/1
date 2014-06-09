$(document).ready(function() {
    var oferta = document.getElementById("oferta");
    function ajax() {
        $.ajax({
            url: "././test.html",
            cache: false,
            success: function (html) {
                $(".results").html(html);
            }
        })
    }

    oferta.onclick = function () {
        console.log('lalka');
        ajax();
    };
});