## 什麼是 Ajax？

AJAX 全名叫 Asynchronous Javascript And XML，是一種可以在背景執行，透過
非同步的方式跟網頁伺服器交換資料並更新頁面的一種技術，使用這種技術可實現網頁的部分更新，
而不用整個網頁整個更新，減少了不必要的動作。

## 用 Ajax 與我們用表單送出資料的差別在哪？

用表單送出資料，當得到回應的時候，會整個頁面刷新，而使用 AJAX 的話，則可以將資料存到 Javascript 裡，
存到 Javascript 裡之後我們就可以對資料進行處理並將資料顯示在頁面上，重要的是，可以只針對要顯示的部分進行渲染更新就好
，不用整個頁面刷新。

## JSONP 是什麼？

JSONP 全名叫作，"JSON with padding"，是一種很久以前用來存取跨網域資料的技術，
利用 script 標籤不受同源限制的特性，發送要求到 Server 端，Server 將資料包成 Javascript 檔回傳
我們得到回傳資料後，再執行預先定義好的函式，至此，就成功接收到資料了。，

## 要如何存取跨網域的 API？

請 Server 端在 header 加上 "Access-Control-Allow-Origin: \*"。

## 為什麼我們在第四週時沒碰到跨網域的問題，這週卻碰到了？

第四週是在 runtime 執行 Javascript，沒有跨網域的限制，而現在則是透過 Browser 執行 Javascript，
而 Browser 本身有內建安全性檢查的功能，所以才有跨網域的限制。
