var header_object = document.getElementById("header");
var header_contain = document.getElementById("header_contain");
var ban_button = document.getElementById("ban_button");
var ban_head = document.getElementById("ban_head");
var ban_contain = document.getElementById("ban_contain");
var body_contain = document.getElementById("body_contain");
var a = 0;
var b = 0;
var c = 0;
var k = 30;

$(document).ready(function() {
    $("#body_contain").load("histoire.html");
    document.getElementById("header_contain").style.top = header.offsetHeight/2 - document.getElementById("header_contain").offsetHeight/2;
    document.getElementById("header_contain").style.left= header.offsetWidth/2 - document.getElementById("header_contain").offsetWidth/2;
});

$(document).mousemove(function(event) {
    if(header.offsetTop + header.offsetHeight > event.pageY) {
        var x = Math.round((header.offsetWidth/2 - (event.pageX/k))) - document.getElementById("header_contain").offsetWidth/2;
        var y = Math.round((header.offsetHeight/2 - (event.pageY/k))) - document.getElementById("header_contain").offsetHeight/2;
        document.getElementById("header_contain").style.top = y;
        document.getElementById("header_contain").style.left = x;
    }
});


function parallax() {
    header_object.style.backgroundPosition = "-20vw " + (-25-window.pageYOffset/30) + "vh";
    header_object.style.filter = "sepia(" + (window.pageYOffset/200) + ")";
    header_contain.style.opacity = 1-(window.pageYOffset/100);
    if(window.pageYOffset < header.offsetTop + header.offsetHeight) {
        body_contain.style.paddingTop = "1vh";
        ban_head.style.position = "relative";
        if(ban_contain.offsetHeight < 400) {
            ban_contain.style.height = window.pageYOffset/15 + "vh";
        }
        if(ban_head.style.backgroundSize != "80vw 40vh" ) {
            ban_head.style.backgroundSize = "80vw" + Math.round(window.pageYOffset/15) + "vh";
        }
        if(ban_head.offsetTop != header.offsetTop + header.offsetHeight) {
            ban_head.offsetTop == header.offsetTop + header.offsetHeight;
        }
    }
    if(window.pageYOffset >= header.offsetTop + header.offsetHeight) {
        ban_head.style.position = "fixed";
        ban_head.style.top = "0vh";
        ban_contain.style.opacity = 1;
        body_contain.style.paddingTop = "10vh";
    } if(window.pageYOffset > header.offsetHeight / 2) {
            banColoration();
            
    } if(window.pageYOffset < header.offsetHeight / 2) {
            banDecoloration();
    }
}

function containSelector(obj) {
    var element_id = obj.html() + ".html";
    $("#body_contain").load(element_id);
}

$(".menu_choice").click(function(){
    containSelector($(this));
});

window.onscroll = parallax;
