const titreSpans = document.querySelectorAll('h1 span');
const btns = document.querySelectorAll('.btn-first');
const logo = document.querySelector('.logo');
const medias = document.querySelectorAll('.bulle');
const l1 = document.querySelector('.l1');
const l2 = document.querySelector('.l2');
const box1 = document.querySelectorAll('.box');
const logo1 = document.querySelectorAll('.logo1');
const video = document.querySelector('.video-demo');

document.addEventListener('DOMContentLoaded', () => { 
    const triggers = document.querySelectorAll('[aria-haspopup="dialog"]');
    const doc = document.querySelector('.container-btns');
  
    const open = function (dialog) {
      dialog.setAttribute('aria-hidden', false);
      doc.setAttribute('aria-hidden', true);
    };
  
    const close = function (dialog) {
      dialog.setAttribute('aria-hidden', true);
      doc.setAttribute('aria-hidden', false);
    };
  
    triggers.forEach((trigger) => {
      const dialog = document.getElementById(trigger.getAttribute('aria-controls'));
      const dismissTriggers = dialog.querySelectorAll('[data-dismiss]');
  
      // open dialog
      trigger.addEventListener('click', (event) => {
        event.preventDefault();
  
        open(dialog);
      });
  
      // close dialog
      dismissTriggers.forEach((dismissTrigger) => {
        const dismissDialog = document.getElementById(dismissTrigger.dataset.dismiss);
  
        dismissTrigger.addEventListener('click', (event) => {
          event.preventDefault();
  
          close(dismissDialog);
        });
      });
  
      window.addEventListener('click', (event) => {
        if (event.target === dialog) {
          close(dialog);
        }
      });
    });
  });


window.addEventListener('load', () => {

    const TL = gsap.timeline({paused: true});

    TL
    .staggerFrom(titreSpans, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.3)
    .staggerFrom(btns, 1, {opacity: 0, ease: "power2.out"}, 0.3, '-=1')
    .from(l1, 1, {width: 0, ease: "power2.out"}, '-=2')
    .from(box1, 1, {bottom: -200, width: 0, ease: "power2.out"}, '-=2')
    .staggerFrom(logo1, 1, {top: -200, width: 0,opacity: 0, ease: "bounce.out"}, '-=2')
    .staggerFrom(video, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.5)
    .from(l2, 1, {width: 0, ease: "power2.out"}, '-=2')
    .from(logo, 0.4, {transform: "scale(0)", ease: "power2.out"}, '-=2')
    .staggerFrom(medias, 1, {right: -200, ease: "power2.out"}, 0.3, '-=1');

    
    

    TL.play();
})