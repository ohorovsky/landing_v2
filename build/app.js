/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//***************************************************
//**********Rotating heading + Fade-In Page**********
//***************************************************
window.onload = function () {

  document.body.classList.add("show");

  if (document.querySelector('.cube')) {
    var cubeContainer = document.querySelector('.cube-container');
    var cube = document.querySelector('.cube');
    var cubeSide1 = document.querySelector('.first-side').getBoundingClientRect();
    var cubeSide2 = document.querySelector('.second-side').getBoundingClientRect();
    cubeContainer.style.width = cubeSide2.width + "px";
    setInterval(function () {
      cube.classList.toggle("rotate");
      if (cube.classList.contains("rotate")) {
        cubeContainer.style.width = cubeSide1.width + "px";
      } else {
        cubeContainer.style.width = cubeSide2.width + "px";
      }
    }, 2500);
  }
};

//***************************************************
//**********Media-Query-Width < 992px****************
//***************************************************

var footerLists = document.querySelectorAll('.footerLists');
var footerButtons = document.querySelectorAll('.listTrigger');
var footerButtonsText = document.querySelectorAll('.listTrigger h3');

if (window.innerWidth < 768) {
  footerButtons.forEach(function (button) {
    return button.setAttribute('data-toggle', "collapse");
  });
  footerButtonsText.forEach(function (text) {
    return text.innerHTML += "<span class='caret'></span>";
  });
  footerLists.forEach(function (list) {
    return list.classList.add('collapse');
  });
}

//***************************************************
//**********NavBar***********************************
//***************************************************

var navbar = document.querySelector('nav');
window.addEventListener('scroll', function (e) {
  window.scrollY > 0 ? navbar.classList.add('box-shadow') : navbar.classList.remove('box-shadow');
});

//***************************************************
//**********Homepage-Slider**************************
//***************************************************

var highlightLine = document.querySelector('.highlight-line');
var sliderTriggers = document.querySelectorAll('.slider-trigger');
var images = document.querySelectorAll('img[data-img]');

var lastClicked = "";
sliderTriggers.forEach(function (trigger) {
  return trigger.addEventListener('click', function () {
    var _this = this;

    this.dataset.img != lastClicked ? highlightLine.classList.toggle('active') : null;
    images.forEach(function (image) {
      image.dataset.img == _this.dataset.img ? image.classList.add('active') : image.classList.remove('active');
    });
    lastClicked = this.dataset.img;
  });
});

//***************************************************
//**********ScrollSpy********************************
//***************************************************
if (document.querySelector('.scroll-spy')) {
  var spyCheck = function spyCheck(element) {
    if (window.scrollY > element.offsetTop - scrollSpyList.offsetHeight) {
      scrollIcons.forEach(function (icon) {
        icon.dataset.spy == element.id ? icon.classList.add('active') : icon.classList.remove("active");
      });
    }
  };

  var scrollSpyList = document.querySelector('.scroll-spy');
  var scrollIcons = document.querySelectorAll(".scroll-spy-icon");
  var productHeader = document.querySelector(".product-header");
  var pulse = document.querySelector("#pulse");
  var plan = document.querySelector("#plan");
  var schedule = document.querySelector("#schedule");
  var automate = document.querySelector("#automate");
  var toolbox = document.querySelector("#toolbox");
  var upcoming = document.querySelector("#upcoming");

  window.addEventListener('scroll', function () {
    if (window.scrollY > scrollSpyList.offsetTop - navbar.offsetHeight) {
      scrollSpyList.classList.add('fixed');
      scrollSpyList.style.top = navbar.offsetHeight + 'px';
      pulse.style.padding = 100 + scrollSpyList.offsetHeight + 'px 0';
    }
    if (window.scrollY < productHeader.offsetHeight - navbar.offsetHeight) {
      scrollSpyList.classList.remove('fixed');
      pulse.style.padding = '100px 0';
      spyCheck(productHeader); //just to remove active class from them
    }
    spyCheck(pulse);
    spyCheck(plan);
    spyCheck(schedule);
    spyCheck(automate);
    spyCheck(toolbox);
    spyCheck(upcoming); //just to remove active class from them
  });
}

//***************************************************
//**********SmoothScroll********************************
//***************************************************


// Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]').not('[href="#0"]').not('[href="#slider-carousel"]').not('[data-toggle="collapse"]').click(function (event) {
  // On-page links
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 500, function () {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) {
          // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});

/***/ })
/******/ ]);