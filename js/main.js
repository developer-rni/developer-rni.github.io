//@prepros-append jq-start.js
//@prepros-append script.js
//@prepros-append jq-end.js
$(document).ready(function(){

var margin = 100; // переменная для контроля докрутки
   $("a.scroll, a.glitch-btn").click(function() { // тут пишите условия, для всех ссылок или для конкретных
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top // .top+margin - ставьте минус, если хотите увеличить отступ
      }, {
         duration: 1600, // тут можно контролировать скорость
         easing: "swing"
      });
      return false;
   });
});
