
window.onscroll = ()=> {
    navbarEffectFunc(document.documentElement.scrollTop);
    handleScrollAnimation()
};


// **********************************************************    Navbar Effects     *************************************************************************

let lastPosition = 0
let positionWhenScrolledUp = null;

const navbarEffectFunc = (newPosition) => {

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
        document.getElementById("navbar").style.boxShadow = " 0px 0px 0px";

    } else {
        document.getElementById("navbar").style.backgroundColor = "rgba(255,255,255, 0.7)";
        document.getElementById("navbar").style.boxShadow = " 0px 0px 5px rgba(200,200,200, 0.7)";
    }
    lastPosition = document.documentElement.scrollTop;
}

// *********************************************************    Scroll Effects     *************************************************************************

const scrollEffectElements = document.querySelectorAll(".js-scroll-effect");

const isElementInView = (el) => {
    const elementTop = el.getBoundingClientRect().top;
    return elementTop < ((window.innerHeight || document.documentElement.clientHeight) - 150)
}

scrollEffectElements.forEach((el) => {
    el.classList.remove("scrolled");
})


const displayScrollElement = (el) => {
    el.classList.add("scrolled");
};

const handleScrollAnimation = () => {
    scrollEffectElements.forEach((el) => {
        if(isElementInView(el)){
            displayScrollElement(el)
        } else {
            el.classList.remove("scrolled");
        }
    })
}

// *********************************************************    On Click Styling     *************************************************************************


// **** This was for "What we've been up to section" which was taken away indefinetly (it opened up each box on click) *****


// let projectBoxes = document.querySelectorAll(".project");

// document.addEventListener("click", (e) => {
//     projectBoxes.forEach((projectBox) => {
//         if(!projectBox.contains(e.target)){
//             projectBox.classList.remove("active")
//         } else {
//             projectBox.classList.add("active")
//         }
//     })
// })

// *********************************************************    service list open / collapse     *************************************************************************


let servicesButton = document.querySelector("#services-button");
let servicesButtonChevron = document.querySelector("#services-button-chevron");
let servicesList = document.querySelector("#services-list");

const handleServicesList = () => {
    if(servicesButtonChevron.classList.contains('face-up')){
        servicesButtonChevron.classList.remove('face-up');
        servicesList.classList.remove('opened');
    } else {
        servicesButtonChevron.classList.add('face-up')
        servicesList.classList.add('opened');
    }
}

servicesButton.addEventListener('click', handleServicesList)


