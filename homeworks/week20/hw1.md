## 十六到二十週心得

## 十六週心得
  這一週學到了 JavaScript 是如何初始化變數、 函式、物件導向以及 event loop 等等，

  看完影片加上做完作業之後，整個覺得超充實的!，尤其是理解了 JavaScript 初始化的過程，讓我能夠更容易閱讀程式碼並找出有錯誤的地方；而 event loop 的部份則是讓我了解到 JS 在瀏覽器是如何透過 webAPI 處理事件，及 event queue 是如何運作的。
  
  總之，是一堂非常充實的課，如過要再深一點研究的話，可以看
  [You-Dont-Know-JS-第一版](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/README.md)
  [You-Dont-Know-JS-第二版](https://github.com/getify/You-Dont-Know-JS)
  或是
  [阮一峰的JavaScript 教程](https://wangdoc.com/javascript/index.html)
  [阮一峰的JavaScript ES6 教程](https://wangdoc.com/es6/)

  以上只有看了一點，是我後續要讀的清單，想要對底層運作更熟悉!!

## 十七週心得

本週學習如何運用 Expres 、ORM 套件打造網頁程式並且部署到 heroku。

最令我覺得困難的部份是 ORM 的使用，由於不熟悉，所以在建立 model 時，不知道 model 檔案 及 migration 檔案之間的關連，所以會導致在改 table columns 時，會發生 model 跟 migration 的 table 資料不一致，造成錯誤，後來才知道，如果要對已經 migrating 過的 table 欄位做變動，那就應該要建立一個新的 migration 檔案，並在其中寫入要變動的語法，再進行 db:migrate，讓本地跟 db 資料同步，慢慢熟了之後，就覺得很方便，不用再寫 SQL 語法真的很爽Q

## 十八週心得

## 十九週心得

## 二十週心得
