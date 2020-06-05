// Textillate.js
$('#textillate').textillate({
   // the default selector to use when detecting multiple texts to animate
   // 被選擇到的子選擇器，在它裡面的多行文字會逐一播放動畫
   selector: '.textillate_texts',
   // 重複播放
   loop: true,
   // 每段文字顯示時間長度
   minDisplayTime: 8000,
   // 延遲多久開始執行動畫
   initialDelay: 500,
   // set whether or not to automatically start animating
   autoStart: true,
   // custom set of 'in' effects. This effects whether or not the
   // character is shown/hidden before or after an animation
   inEffects: [],
   // custom set of 'out' effects
   outEffects: ['hinge'],
   // in animation settings
   in: {
      // 動畫名稱
      effect: 'zoomIn',
      // 每個字元延遲的倍率
      delayScale: 2,
      // 每個字元延遲的時間
      delay: 150,
      // 同步出現
      sync: false,
      // 隨機字元出現
      shuffle: true,
      // 反轉出現
      reverse: false,
      // 回呼函式
      callback: function () {}
   },
   // out animation settings.
   out: {
      effect: 'zoomOut',
      delayScale: 1.5,
      delay: 50,
      sync: false,
      shuffle: true,
      reverse: false,
      callback: function () {}
   },
   // callback that executes once textillate has finished
   callback: function () {},
   // set the type of token to animate (available types: 'char' and 'word')
   type: 'char'
});
