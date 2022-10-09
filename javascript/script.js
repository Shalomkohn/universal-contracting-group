window.onscroll = ()=> scrollfunc(document.documentElement.scrollTop);

let lastPosition = 0
let positionWhenScrolledUp = null;

const scrollfunc = (newPosition) => {

    let scrolledUp = newPosition > lastPosition;
    if ( scrolledUp && newPosition > positionWhenScrolledUp + 120) {
        document.getElementById("navbar").style.top = "-150px";
    }
    if(newPosition > 150 && !scrolledUp) {
        document.getElementById("navbar").style.top = "0";
        positionWhenScrolledUp = newPosition;
    }

    if(newPosition < 20) {
        document.getElementById("navbar").style.backgroundColor = "transparent";
    } else {
        document.getElementById("navbar").style.backgroundColor = "rgba(255,255,255, 0.7";
    }
    lastPosition = document.documentElement.scrollTop;
}