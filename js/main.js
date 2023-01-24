/* SHOW MENU */
const showMenu = (toggleId,navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if( toggle && nav){
        toggle.addEventListener('click', () =>{
            nav.classList.toggle('show-menu')
        })
    }
}

showMenu('nav-toggle','nav-menu')


/* Remove Menu Mobile */

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* Scroll sections active link */

let sections = document.querySelectorAll('section')

let navList = document.querySelectorAll('nav .nav__menu ul li a')


function scrollActive(){

    const scrollY = window.scrollY
    var distanceFromBottom = document.body.scrollHeight - window.innerHeight - window.scrollY
    
    sections.forEach( sec =>{
        const sectionHeight = sec.offsetHeight
        const sectionTop = sec.offsetTop - 200
        let id = sec.getAttribute('id')

        if(distanceFromBottom <= 105){
            navList.forEach(links => {
                links.classList.remove('active-link')
                document.querySelector('nav .nav__menu ul li a[href*=' + id + ']').classList.add('active-link')
            });
        } else if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            navList.forEach(links => {
                links.classList.remove('active-link')
                document.querySelector('nav .nav__menu ul li a[href*=' + id + ']').classList.add('active-link')
            });
        }
    });
    
}


window.addEventListener('scroll', scrollActive) 






/* Change Background Header */

function scrollHeader(){
    const header = document.getElementById('header')
    if( this.scrollY >= 200) header.classList.add('scroll-header'); 
    else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/* Show Scroll Top */

function scrollTop(){
    const scrollTop = document.getElementById('scroll-top')
    if( this.scrollY >= 560) scrollTop.classList.add('show-scroll'); 
    else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/* Gsap Portfolio */

gsap.from('.home__img', { opacity: 0, duration: 1.5, delay: .5, x: 60})
gsap.from('.home__data', { opacity: 0, duration: 1.5, delay: .8, y: 25})
gsap.from('.home__greeting, home__name, .home__profession, .home__button', { opacity: 0, duration: 2, delay: 1, y: 25, ease: 'expo.out', stagger: .2})

gsap.from('.nab__logo, .nav__toggle', { opacity: 0, duration: 1.5, delay: 1.5, y: 25, ease: 'expo.out', stagger: .2})
gsap.from('.nav__item', { opacity: 0, duration: 1.5, delay: 1.8, y: 25, ease: 'expo.out', stagger: .2})
gsap.from('.home__social-icon', { opacity: 0, duration: 1.5, delay: 2.3, y: 25, ease: 'expo.out', stagger: .2})
