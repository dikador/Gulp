// !Обычный таб ===============================================================================

$(function () {
   var tab = $('#tabs .tabs-items > div');
   let a = tab.hide().filter(':first').show();

   // Клики по вкладкам.
   $('#tabs .tabs-nav a').click(function () {
      tab.hide();
      tab.filter(this.hash).show();
      $('#tabs .tabs-nav a').removeClass('active');
      $(this).addClass('active');
      return false;
   }).filter(':first').click();

   // Клики по якорным ссылкам.
   $('.tabs-target').click(function () {
      $('#tabs .tabs-nav a[href=' + $(this).data('id') + ']').click();
   });
});

// !Обычный таб===============================================================================


// !Таб переключатель===============================================================================

const TabItemSelector = '.pageNav__tabItem';
const ContentItemSelector = '.pageNav__contentItem';

class TabsManager {
   constructor(navNode) {
      this.tabs = [];
      this.activeTab = null;

      this.initFromHtml(navNode);

      this.activateTab(this.tabs[0]);
   }

   initFromHtml(navNode) {
      const headers = navNode.querySelectorAll(TabItemSelector);
      const contents = navNode.querySelectorAll(ContentItemSelector);

      for (var i = 0; i < headers.length; i++) {
         this.registerTab(headers[i], contents[i]);
      }
   }

   registerTab(header, content) {
      const tab = new TabItem(header, content);
      tab.onActivate(() => this.activateTab(tab));
      this.tabs.push(tab);
   }

   activateTab(tabItem) {
      if (this.activeTab) {
         this.activeTab.setActive(false);
      }

      this.activeTab = tabItem;
      this.activeTab.setActive(true);
   }

}

const ActiveTabHeaderClass = 'pageNav__tabItem--active';
const ActiveTabContentClass = 'pageNav__contentItem--active';

class TabItem {
   constructor(header, content) {
      this.header = header;
      this.content = content;
   }
   onActivate(action) {
      this.header.addEventListener('click', () => action(this));
   }
   setActive(value) {
      this.header.classList.toggle(ActiveTabHeaderClass, value);
      this.content.classList.toggle(ActiveTabContentClass, value);
   }
}

document.addEventListener('DOMContentLoaded', () => {
   let tabs = new TabsManager(document.querySelector('.pageNav'));
})


// !Спойлер и акордеон===============================================================================

// $(document).ready(function () {

//    $(".acord__item").click(function (e) {
//       e.preventDefault();

//       const acordB = $(this).find('.acord__bot')[0]
//       const acordT = $(this).find('.acord__top')[0]

//       $(acordT, acordB).toggleClass('active__acord')
//       $(acordB).slideToggle(300);

//       if ($('.acord').hasClass('one-acord')) {
//          $('.acord__top').not($(acordT)).removeClass('active__acord');
//          $('.acord__bot').not($(acordB)).slideUp(300);
//       }
//    });
// });

// !Чистый JS

let acord = document.querySelectorAll('.acord');

acord.forEach(element => {
   let acord_item = element.querySelectorAll('.acord__item');

   let acordT = element.querySelectorAll('.acord__top');

   for (let index = 0; index < acord_item.length && index < acordT.length; index++) {
      const elementItem = acord_item[index];
      const elementTop = acordT[index];

      elementTop.addEventListener('click', (e) => {
         e.preventDefault;

         const acordB = elementItem.querySelector('.acord__bot');

         (elementTop).classList.toggle('active__acord');
         (acordB).classList.toggle('active__acord');

         if (element.classList.contains('one-acord') && elementTop.classList.contains('active__acord')) {

            element.querySelectorAll('.acord__top').forEach(element => {
               element.classList.remove('active__acord')
            });

            element.querySelectorAll('.acord__bot').forEach(element => {
               element.classList.remove('active__acord')
            });

            acordB.classList.add('active__acord')
            elementTop.classList.add('active__acord')
         }
      })
   }
});