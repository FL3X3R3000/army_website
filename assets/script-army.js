
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
   }

$(document).ready(function(){
    async function onStart(){
        $(".main-box").css({"display":"none"});
        $(".main-box").slideDown(500);
    }

    onStart();
    $("#nav-ind").click(function(){
            $("#navboard").slideToggle();
    })
})

