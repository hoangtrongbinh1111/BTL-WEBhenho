$(document).ready(function() {
    var isSwitch = false;
    $("input#switch-ios").click(function() {
        if (!isSwitch) {
            $("#myModal-hide-age").css("display", "block");
            isSwitch = true;
        } else {
            isSwitch = false;
        }
    });

    // Hide age
    $("sup#hide-age").click(function() {
        $("#myModal-info-hide-age").css("display", "block");
    });
    $(".modal-footer").click(function() {
        $("#myModal-info-hide-age").css("display", "none");
        $("#myModal-hide-age").css("display", "none");
    });
});
$(document).ready(function() {
    $(window).scroll(function() {
        var leng = $(window).scrollTop();
        if (leng != 0) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });
    $("#back-to-top").click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    })
});
$(document).ready(function() {
    $("#tab-personal").click(function() {
        $("#side-bar").css("transform", "translateX(0)");
    });
    $(document).mouseup(function(e) {
        if ($(e.target).closest("#side-bar").length ===
            0) {
            $("#side-bar").css("transform", "translateX(25rem)");
        }
    });
});