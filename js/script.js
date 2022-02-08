$(document).ready(function() {

   function destroyTilt() {
      var tiltElements = document.querySelectorAll(`[data-tilt]`);
      var mq = window.matchMedia("(max-width: 768px)");
      if (mq.matches) {
            for (var i = 0, len = tiltElements.length; i < len; i++) {
               tiltElements[i].vanillaTilt.destroy();
            }
      }
   }
   destroyTilt();
  
   
   let html = $("html");
   let body = $("body");

   let header = $("#header");
   let intro = $("#intro");
   let introH;
   let scrollPos = $(window).scrollTop();
   
   let nav = $("#headerNav");
   let navToggle = $("#navToggle");
   let navClose = $("#navClose");

   let servicesDroplistToggle = $(".full-services__list-link");

   // FIXED HEADER

   $(window).on("scroll load resize", function() {
      introH = intro.innerHeight();
      scrollPos = $(this).scrollTop();

      if( scrollPos > introH ) {
         header.addClass("fixed");
      } else {
         header.removeClass("fixed");
      }
   });


   // SMOOTH SCROLL

   $("[data-scroll]").on("click", function(e) {
      e.preventDefault();

      let elementId = $(this).data('scroll');
      let elementOffset = $(elementId).offset().top;

      nav.removeClass("show");

      $("html, body").animate({
         scrollTop: elementOffset - 50
      }, 1000);
   });

   // MOBILE NAV

   navToggle.on("click", function(e) {
      e.preventDefault();

      nav.toggleClass("show")
   });

   navClose.on("click", function(e) {
      e.preventDefault();

      nav.removeClass("show")
   });


   // SLICK SLIDER

   $(".reviews__inner").slick({
      infinite: true,
      dots: true
   });

   // SERVICES DROPLIST

   servicesDroplistToggle.on("click", function(e) {
      e.preventDefault();
      let servicesDroplistArrow = $(this).children('.full-services__list-arrow');
      let servicesDroplist = $(this).siblings(".full-services__droplist");
      let servicesItem = $(this).parent(".full-services__list-item")

      servicesDroplist.toggleClass("active");
      $(this).toggleClass("active");
      servicesDroplistArrow.toggleClass("active");
      servicesItem.toggleClass("active");
   });









});