$(document).ready(function () {
   $.each($('.check__checkbox-accept'), function (index, val) {
      if ($(this).find('input').prop('checked') == true) {
         $(this).addClass('active');
      }
   });

   $('.check__checkbox-accept').click(function (e) {
      e.preventDefault();
      if ($(this).hasClass('active')) {
         $(this).find('input').prop('checked', false)
      } else {
         $(this).find('input').prop('checked', true)
         // alert('asdasd')
      }
      $(this).toggleClass('active')
   });
});