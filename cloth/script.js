
$(document).ready(function(){
    $(".brief").css({"top": "-100vh"});
    $(".types").css({"left": "-100vw"});
    $(".expl").css({"top": "150vh"});
    $(".rules").css({"left": "200vw"});

    $(".brief").animate({"top": "10vh"}, 700);
    $(".types").animate({"left": "2vw"}, 700);
    $(".expl").animate({"top": "20vh"}, 700);
    $(".rules").animate({"left": "78vw"}, 700);

    $("#nav-ind").click(function(){
            $("#navboard").slideToggle();
            $("#navboard").css({"display": "flex"});
    })
})

