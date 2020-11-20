$('body').scrollspy({ target: '#navbar-example3' })
function toggleTimelineVisibility() {
    var x = document.getElementById("timeline");
    var y = document.getElementById("return");
    console.log(`display: ${x.style.display}`);
    if (x.style.display !== "block") {
        x.style.display = "block";
        y.style.display = "block";
        x.style.width = "100%";
    } else {
        x.style.display = "none";
        y.style.display = "none";
        x.style.width = "25%";
    }
}
var r1 = document.getElementById('r1');
var e1 = document.getElementById('e1');
var r2 = document.getElementById('r2');
var e2 = document.getElementById('e2');
var r3 = document.getElementById('r3');
var e3 = document.getElementById('e3');
var r4 = document.getElementById('r4');
var e4 = document.getElementById('e4');

function playAudio(x){
    x.play();
}
function playAudio(x){
    x.pause();
}