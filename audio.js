var r1 = document.getElementById('r1');
var e1 = document.getElementById('e1');
var r2 = document.getElementById('r2');
var e2 = document.getElementById('e2');
var r3 = document.getElementById('r3');
var e3 = document.getElementById('e3');
var r4 = document.getElementById('r4');
var e4 = document.getElementById('e4');
function playAudio(x){
    pauseAudio();
    x.currentTime = 0;
    x.play();
}
function pauseAudio(){
    e1.pause();
    e2.pause();
    e3.pause();
    e4.pause();
    r1.pause();
    r2.pause();
    r3.pause();
    r4.pause();
}