//***************************************************
//**********Rotating heading + Fade-In Page**********
//***************************************************
window.onload = function(){

  document.body.classList.add("show");
  
  if(document.querySelector('.cube')){
    const cubeContainer = document.querySelector('.cube-container');
    const cube = document.querySelector('.cube');
    const cubeSide1 = document.querySelector('.first-side').getBoundingClientRect();
    const cubeSide2 = document.querySelector('.second-side').getBoundingClientRect();
    cubeContainer.style.width = cubeSide2.width + "px";
    setInterval(() => {
      cube.classList.toggle("rotate");
      if(cube.classList.contains("rotate")){
        cubeContainer.style.width = cubeSide1.width + "px";
      }else{
        cubeContainer.style.width = cubeSide2.width + "px";
      }
    },2500); 
  }
} 

//***************************************************
//**********Media-Query-Width < 992px****************
//***************************************************

const footerLists = document.querySelectorAll('.footerLists');
const footerButtons = document.querySelectorAll('.listTrigger');
const footerButtonsText = document.querySelectorAll('.listTrigger h3');

if(window.innerWidth < 768){
  footerButtons.forEach(button => button.setAttribute('data-toggle', "collapse"));
  footerButtonsText.forEach(text => text.innerHTML += "<span class='caret'></span>");
  footerLists.forEach(list => list.classList.add('collapse'));
}


//***************************************************
//**********NavBar***********************************
//***************************************************

const navbar = document.querySelector('nav');
window.addEventListener('scroll', (e) => {
  window.scrollY > 0 ? navbar.classList.add('box-shadow') : navbar.classList.remove('box-shadow')
})

//***************************************************
//**********Homepage-Slider**************************
//***************************************************

const highlightLine = document.querySelector('.highlight-line');
const sliderTriggers = document.querySelectorAll('.slider-trigger');
const images = document.querySelectorAll('img[data-img]');

let lastClicked = "";
sliderTriggers.forEach(trigger => trigger.addEventListener('click', function(){
  this.dataset.img != lastClicked ? highlightLine.classList.toggle('active') : null;
  images.forEach(image => {
    image.dataset.img == this.dataset.img ? image.classList.add('active') : image.classList.remove('active');
  })
  lastClicked = this.dataset.img;
}))


//***************************************************
//**********ScrollSpy********************************
//***************************************************
if(document.querySelector('.scroll-spy')){
  const scrollSpyList = document.querySelector('.scroll-spy');
  const scrollIcons = document.querySelectorAll(".scroll-spy-icon");
  const productHeader = document.querySelector(".product-header");
  const pulse = document.querySelector("#pulse");
  const plan = document.querySelector("#plan");
  const schedule = document.querySelector("#schedule");
  const automate = document.querySelector("#automate");
  const toolbox = document.querySelector("#toolbox");
  const upcoming = document.querySelector("#upcoming");
  
  window.addEventListener('scroll', () => {
    if(window.scrollY > scrollSpyList.offsetTop - navbar.offsetHeight){
      scrollSpyList.classList.add('fixed');
      scrollSpyList.style.top = `${navbar.offsetHeight}px`;
      pulse.style.padding = `${100 + scrollSpyList.offsetHeight}px 0`;
    }
    if(window.scrollY < productHeader.offsetHeight - navbar.offsetHeight){
      scrollSpyList.classList.remove('fixed');
      pulse.style.padding = `100px 0`;
      spyCheck(productHeader);      //just to remove active class from them
    }
    spyCheck(pulse);
    spyCheck(plan);
    spyCheck(schedule);
    spyCheck(automate);
    spyCheck(toolbox);
    spyCheck(upcoming);      //just to remove active class from them
  })
  
  function spyCheck(element){
    if(window.scrollY > element.offsetTop - scrollSpyList.offsetHeight){
      scrollIcons.forEach(icon => {
          icon.dataset.spy == element.id ? icon.classList.add('active') : icon.classList.remove("active");
      })
    }
  }
}

//***************************************************
//**********SmoothScroll********************************
//***************************************************


// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .not('[href="#slider-carousel"]')
  .not('[data-toggle="collapse"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });