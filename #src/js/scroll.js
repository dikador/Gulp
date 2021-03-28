// ! Изменение элемента при достижении определенного блока==========================================================================

$(document).ready(function () {
   $(window).scroll(function () {

      let navTop = $('.nav').offset().top;

      let sec1 = $('.sec1').offset().top
      let sec2 = $('.sec2').offset().top
      let sec3 = $('.sec3').offset().top

      if (navTop > sec1 && navTop < sec2) {
         $('.nav-link').addClass('sect1');
      } else {
         $('.nav-link').removeClass('sect1');
      }

      if (navTop > sec2 && navTop < sec3) {
         $('.nav-link').addClass('sect2');
      } else {
         $('.nav-link').removeClass('sect2');
      }
   });
});


// ! Заполнение полоски по мере скролла страницы==========================================================================

$(document).ready(function () {

   let strip = document.querySelector('.strip__fill')

   let windowHeight = $(window).height();

   window.addEventListener("scroll", (evt) => {
      changeActiveNavPosition();
   })

   function changeActiveNavPosition() {
      let mainContentHeight = document.querySelector('body').offsetHeight - windowHeight;
      let windowScrollProcent = window.pageYOffset / mainContentHeight * 100 + "%";

      strip.style.width = windowScrollProcent
   }
});


// !Прилипание блока в момент доскролливания до него

$(document).ready(function () {
   var stickyNavTop = $('.nav').offset().top;

   var stickyNav = function () {
      var scrollTop = $(window).scrollTop();

      if (scrollTop > stickyNavTop) {
         $('.nav').addClass('sticky');
      } else {
         $('.nav').removeClass('sticky');
      }
   };

   stickyNav();
   $(window).scroll(function () {
      stickyNav();
   });
});