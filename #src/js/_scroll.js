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


// !Прилипание блока в момент доскролливания до него===================================================================

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


// !Скрывает хедер при скролле вниз=============================================================================


let scroll_top = window.pageYOffset,
   is_hidden = false;

let enabled = true;

let headerT = document.querySelector('.header');

window.addEventListener('scroll', function (scope) {
   let new_scroll_top = window.pageYOffset,
      menu_height = headerT.clientHeight;

   move_down = (new_scroll_top > scroll_top);

   if (move_down) {
      if (!is_hidden && (new_scroll_top > menu_height)) {
         is_hidden = true;
         headerT.classList.add('hide');
      }
   } else {
      if (is_hidden && enabled) {
         is_hidden = false;
         headerT.classList.remove('hide');
      }
   }

   scroll_top = new_scroll_top;
})