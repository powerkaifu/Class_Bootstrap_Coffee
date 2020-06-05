// LINKS TO ANCHORS
// https://abgne.tw/jquery/apply-jquery/jquery-scroll-to-page-top.html
// jQuery 已經把控制捲軸的部份包裝成 .scrollTop() 及 .scrollLeft() 兩函式，它們能把捲軸移動到指定的位置。
// 不過若實際測試效果時會發現它是直接就跳到定點，這樣感覺比較唐突。所以接下來咱們就改用 .animate() 的方式來做出動畫式的移動吧
// scrollTop 雖然在 jQuery 中是一個函式，但它其實也是 DOM 物件的一個屬性，因此我們就能利用改變 scrollTop 值的方式來達到動畫的效果了。

$('a[href^="#"]').on('click', function (event) {
   let $target = $(this.getAttribute('href'));
   if ($target.length) {
      // 不會執行默認的動作，也就是不會再執行「連結到某個網址」這個動作
      //  event.preventDefault();
      $('html, body').stop().animate(
         {
            scrollTop: $target.offset().top
         },
         2000,
         'easeInOutBack'
      );
   }
});
