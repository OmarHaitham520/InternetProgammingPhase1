var animateFlag = true
window.addEventListener("scroll", function () {

    if (this.pageYOffset > 0) {
        if (animateFlag) {
            counterup();
            animateFlag = false;
        }
    }
})

var i = 0,
    x = 0,
    y = 0;

function counterup() {
    if (i <= 1246) {
        document.getElementById("num1").innerHTML = i++;
        if (x <= 19) { document.getElementById("num2").innerHTML = x++; }
        if (y <= 687) { document.getElementById("num3").innerHTML = y++; }
        setTimeout(counterup, 1);
    } else {
        return;
    }
}