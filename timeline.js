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


