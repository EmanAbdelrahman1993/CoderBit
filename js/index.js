
// $(window).scroll(function(){
//     if ($(document).scrollTop() > $(".header").height()) {

//         $("#btnUpDown").fadeIn(200);
//     }
//     else
//     {
//         $("#btnUpDown").fadeOut(200);
//     }
    
    
// })



$("#section_scroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#about_me").offset().top
    }, 2000);
});

$("#more").click(function() {
    $('html, body').animate({
        scrollTop: $("#about_me").offset().top
    }, 2000);
});

$(document).ready(function (){
    $("#about").click(function (){
        $('html, body').animate({
            scrollTop: $("#about_me").offset().top
        }, 2000);
    });
});

$(document).ready(function (){
    $("#work").click(function (){
        $('html, body').animate({
            scrollTop: $("#what_i_do").offset().top
        }, 2000);
    });
});

$(document).ready(function (){
    $("#portfolio").click(function (){
        $('html, body').animate({
            scrollTop: $("#my_portfolio").offset().top
        }, 2000);
    });
});


$("#check").click(function() {
    $('html, body').animate({
        scrollTop: $("#my_portfolio").offset().top
    }, 2000);
});

$("#services").click(function() {
    $('html, body').animate({
        scrollTop: $("#what_i_do").offset().top
    }, 2000);
});

$(document).ready(function (){
    $("#hire").click(function (){
        $('html, body').animate({
            scrollTop: $("#hire_me").offset().top
        }, 2000);
    });
});


$("#touch").click(function() {
    $('html, body').animate({
        scrollTop: $("#hire_me").offset().top
    }, 1000);
});

$(document).ready(function (){
    $("#home").click(function (){
        $('html, body').animate({
            scrollTop: $("#home_page").offset().top
        }, 2000);
    });
});



 function countChar(val) {
        var len = val.value.length;
        if (len >= 100) {
          val.value = val.value.substring(0, 100);
        } else {
          $('#charNum').text(100 - len);
        }
      };


