/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/* Show menu */
if(navToggle) {
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    }) 
}

/* Hide menu */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE SCREEN ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');    
    /* when we click on any nav__link, the show-menu will be removed */
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction));

/*=============== ADD SHADOW HEADER ===============*/
  const shadowHeader = () => {
    const header = document.getElementById('header');
    // it will add a class when the buttom offset is greater than 50 viewport
    this.scrollY >= 50 ? header.classList.add('shadow-header') 
                       : header.classList.remove('shadow-header')
  }

  window.addEventListener('scroll', shadowHeader);

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    // Add a scroll__up-class when the height of the scroll is greatest than 350 viewport
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') 
                        : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,
  //  reset: true, // Animations repeat
})

sr.reveal(`.home__data, .footer`,)
sr.reveal(`.home__img`, {delay: 950, distance: '100px', duration: 2500})
sr.reveal(`.about__img, .contact__form`, {origin: 'left'})
sr.reveal(`.about__data, .contact__data`, {origin: 'right'})
sr.reveal(`.course__card`, {interval: 100})
