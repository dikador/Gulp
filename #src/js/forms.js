$(document).ready(function () {

   $("#phoneNumber").mask("+7 (999) 999-9999");

   $('.button').click(function (e) {
      e.preventDefault()
      let nameInput = $('#Name').val().trim();
      let passInput = $('#pass').val().trim();

      let phoneInput = $('#phoneNumber').val().trim();

      let mailInput = $('#mail').val().trim();

      let radioInput = $('.input-radio-block:checked').val()

      let selectInput = $('#select').val().trim();

      let messInput = $('#message').val().trim();

      if (nameInput.length < 2) {
         $('#Name').addClass('input__forms-val_error');
      } else {
         $('#Name').removeClass('input__forms-val_error');
      }

      if (phoneInput.length < 8) {
         $('#phoneNumber').addClass('input__forms-val_error');
      } else {
         $('#phoneNumber').removeClass('input__forms-val_error');
      }

      if (passInput.length < 5) {
         $('#pass').addClass('input__forms-val_error');
      } else {
         $('#pass').removeClass('input__forms-val_error');
      }

      if (emailTest()) {
         $('#mail').addClass('input__forms-val_error');
      } else {
         $('#mail').removeClass('input__forms-val_error');
      };


      let checkedAcceptquad = $('#checkbox__quad-accept')[0]

      if (checkedAcceptquad.checked) {
         $('.checkbox__quad-accept_text').removeClass('checkbox__quad-val_error');
      } else {
         $('.checkbox__quad-accept_text').addClass('checkbox__quad-val_error');
      }

      function emailTest() {
         return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(mailInput)
      }

      const errorVar = document.querySelectorAll('.input__forms-val_error')
      const errorVarCheckbox = document.querySelectorAll('.checkbox__quad-val_error')



      if (errorVar.length <= 0 && errorVarCheckbox.length <= 0) {
         $.ajax({
            type: "POST",
            url: "ajax/mail.php",
            cache: false,
            data: {
               "nameInput": nameInput,
               "passInput": passInput,
               "mailInput": mailInput,
               "messInput": messInput,
               "phoneInput": phoneInput,

               "radioInput": radioInput,
               "selectInput": selectInput,
            },
            dataType: "html",
            beforeSend: function () {
               $('.wrapper__form').addClass('form__wrapper-visible');
            },
            success: function (data) {
               $('.wrapper__form').removeClass('form__wrapper-visible');

               if (!data) {
                  $('.form-val')[0].reset()
               }
            }
         });
      }
   });
});