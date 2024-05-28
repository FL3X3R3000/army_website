
$(document).ready(function(){
    $(".main").animate({left: "0"}, 800);
    $(".bar").animate({right: "0"}, 800);
    $("#nav-ind").click(function(){
            $("#navboard").slideToggle();
    })
})

