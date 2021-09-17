const titreSpans = document.querySelectorAll('h1 span');
const btns = document.querySelectorAll('.btn-first');
const logo = document.querySelector('.logo');
const medias = document.querySelectorAll('.bulle');
const l1 = document.querySelector('.l1');
const l2 = document.querySelector('.l2');
const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');
const box4 = document.querySelector('.box4');
const box5 = document.querySelector('.box5');
const box6 = document.querySelector('.box6');
const box7 = document.querySelector('.box7');
const box8 = document.querySelector('.box8');
const box9 = document.querySelector('.box9');
const box10 = document.querySelector('.box10');
const text = document.querySelector('.text');
const logo1 = document.querySelector('.logo1');
const logo2 = document.querySelector('.logo2');
const logo3 = document.querySelector('.logo3');
const logo4 = document.querySelector('.logo4');
const logo5 = document.querySelector('.logo5');
const video = document.querySelector('.video');

function showAlert() {
    console.log("click detecté")
}

window.addEventListener('load', () => {
    const TL = gsap.timeline({paused: true});

    TL
    .staggerFrom(titreSpans, 1, {top: -50, opacity: 0, ease: "ease", y: -500}, 0.45 )
    .staggerFrom(btns, 1, {opacity: 0, ease: "power2.out"}, 0.3, '-=1')
    .from(l1, 1, {width: 0, ease: "power2.out"}, '-=2')
    .from(l2, 1, {width: 0, ease: "power2.out"}, '-=2')
    .from(logo, 1, {transform: "scale(1.5)", ease: "ease", y: -500}, '-=0')
    .from(text, 1, {left: -50, opacity: 0, ease: "ease", x: -1000}, 0.1 )
    .from(logo1, 1, {top: -50, opacity: 0, ease: "ease", y: -200}, 0.45 )
    .from(logo2, 1, {top: -50, opacity: 0, ease: "ease", y: -200}, 0.45 )
    .from(logo3, 1, {top: -50, opacity: 0, ease: "ease", y: -200}, 0.45 ) 
    .from(logo4, 1, {top: -50, opacity: 0, ease: "ease", y: -200}, 0.45 ) 
    .from(logo5, 1, {top: -50, opacity: 0, ease: "ease", y: -200}, 0.45 ) 
    .from(video, 1.5, {top: -50, opacity: 0, ease: "power2.out", y: -200}, 0.45)
    .staggerFrom(medias, 1, {right: -200, ease: "power2.out"}, 0.1, '-=1')
    .staggerFrom(box1, 1, {bottom: -200, ease: "power2.out"}, 0.1, '-=1')
    .staggerFrom(box2, 1, {bottom: -200, ease: "power2.out"}, 0.1, '-=1')
    .staggerFrom(box3, 1, {bottom: -200, ease: "power2.out"}, 0.1, '-=1')
    .staggerFrom(box4, 1, {bottom: -200, ease: "power2.out"}, 0.1, '-=1')
    .staggerFrom(box5, 1, {bottom: -200, ease: "power2.out"}, 0.1, '-=1')
    .staggerFrom(box6, 1, {bottom: -200, ease: "power2.out"}, 0.1, '-=1')
    .staggerFrom(box7, 1, {bottom: -200, ease: "power2.out"}, 0.1, '-=1')
    .staggerFrom(box8, 1, {bottom: -200, ease: "power2.out"}, 0.1, '-=1')
    .staggerFrom(box9, 1, {bottom: -200, ease: "power2.out"}, 0.1, '-=1')
    .staggerFrom(box10, 1, {bottom: -200, ease: "power2.out"}, 0.1, '-=1')

    TL.play();
    
});