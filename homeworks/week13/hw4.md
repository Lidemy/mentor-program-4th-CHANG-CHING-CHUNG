## Webpack 是做什麼用的？可以不用它嗎？

1. Webpack 做什麼用的?
   Webpack 是一個用來將包括 JavaScript 、 圖片、字型及 CSS 等資源打包的工具，
   Webpack 可以讓我們在原始的 JS 檔案裡面使用原本在瀏覽器不能使用的 require
   去指向本地檔案，例如圖片，然後決定要如何在最後的 JS bundle 中處理這圖片。

2. 可以不用它嗎?
   如果你正在做的應用程式或專案很小，也沒有很多靜態資源需要載入，那麼就沒必要用 Webpack。

   如果你正在做的是大型專案或應用程式，包含了很多靜態資源，例如圖片、 CSS 檔、 字型檔等等，那麼使用
   Webpack 會是一個好選擇。

## gulp 跟 webpack 有什麼不一樣？

gulp 是任務執行器，用來自動化一些重複性的任務，例如編譯 SCSS、優化圖片、重整瀏覽器頁面等等，每一項任務都是獨立的，互相不干涉，只要能寫在 gulp 裡面的任務是可執行且有效的，都能夠自動化執行。

而 Webpack 是前端打包工作，目的是用來將各種資態資源引入，並產生最佳化的程式碼，例如: 我們有 math.js、event.js、btn.js、person1.png、cat.png、index.css 及 about.css 三個 js 檔案、兩個 png 圖片檔、兩個 css 檔，共七個檔案，在打包後會壓縮成一個檔案叫 bundle.js ，而前面的七個檔案就被包在裡面，執行之後就會在 html 上運行並顯示出來。

## CSS Selector 權重的計算方式為何？

基本的權重大小: !important > inline style > ID > Class > Elements > \*
