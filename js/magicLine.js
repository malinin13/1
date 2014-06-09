// DOM Ready
$(function() {

    var $el, leftPos, newWidth;
    $mainNav = $("#nav-links");
    /*
     EXAMPLE ONE
     */

    /* Add Magic Line markup via JavaScript, because it ain't gonna work without */
    $("#example-one").append("<li id='magic-line'></li>");

    /* Cache it */
    var $magicLine = $("#magic-line");

    var $currentItem =  $(".current_page_item a");
    var padding = ($currentItem.outerWidth() - $currentItem.width()) / 2;
    setTimeout(function () {
        $magicLine
            .width($currentItem.width())
            .css("left", $currentItem.position().left + padding)
            .data("origLeft", $magicLine.position().left)
            .data("origWidth", $magicLine.width());
    }, 300);
    $("#example-one li").find("a").hover(function() {
        $el = $(this);
        var padding = ($el.outerWidth() - $el.width()) / 2;
        console.log($el.outerWidth(),$el.width(), padding)
        leftPos = $el.position().left + padding;
        newWidth = $el.width();

        $magicLine.stop().animate({
            left: leftPos,
            width: newWidth
        });
    }, function() {
        $magicLine.stop().animate({
            left: $magicLine.data("origLeft"),
            width: $magicLine.data("origWidth")
        });
    }).click(function() {
        $mainNav.find('li').removeClass('current_page_item');
        $(this).parent().addClass('current_page_item');
        $magicLine
            .data("origLeft", $magicLine.position().left)
            .data("origWidth", $magicLine.width());
    });

});