(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

// Add to Cart - changes number in cart when addtocart button is clicked

var addCart = document.getElementsByClassName("addtocart");
var cartNum = document.getElementById("cartTotalItems");

for (var i = 0; i < addCart.length; i++) {
  addCart[i].onclick = function () {
    var count = cartNum.innerHTML;
    cartNum.innerHTML = parseInt(count) + 1;
  };
}

// changes number of slides depending on width of screen on slider

if ($(window).width() < 600) {
  $('.bxSlider').bxSlider({
    maxSlides: 1,
    minSlides: 1,
    slideWidth: 400,
    //speed:90000,
    auto: false

  });
} else if ($(window).width() < 1000) {
  $('.bxSlider').bxSlider({
    maxSlides: 2,
    minSlides: 2,
    slideWidth: 400,
    //speed:90000,
    auto: false
    // auto: true,

  });
} else {
  $('.bxSlider').bxSlider({
    maxSlides: 4,
    minSlides: 4,
    slideWidth: 400,
    // speed:90000,
    auto: false
    //  auto: true,


  });
}

},{}]},{},[1]);
