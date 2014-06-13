$(document).ready(function() {
    var oferta = document.getElementById("oferta");


    oferta.onclick = function () {
        $.ajax({
            url: "././test.html",
            cache: false,
            success: function (html) {
                $(".results").html(html);
            }
        })
    };
});

