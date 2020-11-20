var r1 = document.getElementById('r1');
var e1 = document.getElementById('e1');
var r2 = document.getElementById('r2');
var e2 = document.getElementById('e2');
var r3 = document.getElementById('r3');
var e3 = document.getElementById('e3');
var r4 = document.getElementById('r4');
var e4 = document.getElementById('e4');
function playAudio(x){
    console.log(x);
    pauseAudio(e1);
    pauseAudio(r1);
    pauseAudio(e2);
    pauseAudio(r2);
    pauseAudio(e3);
    pauseAudio(r3);
    pauseAudio(e4);
    pauseAudio(r4);
    x.play();
}
function pauseAudio(x){
    x.pause();
    x.currentTime = 0;
}