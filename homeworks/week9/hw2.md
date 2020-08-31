## 資料庫欄位型態 VARCHAR 跟 TEXT 的差別是什麼

VARCHAR 可變長度，可以設字元的最大長度。

TEXT，不可變長度，最多保存 65535 個字符。

## Cookie 是什麼？在 HTTP 這一層要怎麼設定 Cookie，瀏覽器又是怎麼把 Cookie 帶去 Server 的？

Cookie 是網站為了辨識用戶身份而儲存在用戶端的資料，domain 及 path 定義了 Cookie 的作用範圍。

設定 Cookie: Server 端可以透過 Set-Cookie，將 Cookie 資料附加在 header 上並回傳給用戶端，也就是瀏覽器端。

將 Cookie 帶去 server: 用戶端透過瀏覽器發出 request ，將 cookie 附加在 request 中送到 server 端。

## 我們本週實作的會員系統，你能夠想到什麼潛在的問題嗎？

1. html 標籤插入導致顯示異常
2. 密碼存放是明碼的
