## 請說明雜湊跟加密的差別在哪裡，為什麼密碼要雜湊過後才存入資料庫

加密:
明文->密文->明文=加密雙向的，可透過解密得到原文，因此是可逆的
加密的方式為，產生一把密鑰，將原文及密鑰經過加密演算法的加密過後，得到的輸出就是加密後的密文，
因此，要是密鑰太短太簡單或是沒有保管好，很容易就被解密了。

湊雜:
明文->雜湊->雜湊文=雜湊是單向的，無法被反轉解密
無論原文長短，雜湊過後的輸出都是固定長度，不同的原文作為相同雜湊的輸入，得到相同輸出的機率極低，
因此，很適合來保存密碼這類不需要被還原的資料，避免資料庫外洩使得任何人都可以存取到使用者的帳戶
通常還會多加 salt，來提高安全性。

為什麼密碼要雜湊過後才存入資料庫
因為密碼必須只有使用者才能知道，除了使用者外不應該能看到使用者密碼，造成使用者資料或數據有被竄改的
可能性；另外，也是避免資料庫被攻擊，造成使用者資料外洩後，攻擊者能隨意存取使用者帳號，例如:銀行資料庫
外洩，要是密碼是明文的，那攻擊者就能透過得到的密碼進行轉帳，將使用者的儲金轉到自己帳戶裡。

## `include`、`require`、`include_once`、`require_once` 的差別

include 及 include_once:
include-當程式讀到這一段時，會載入引用的檔案
include_once-當程式讀到這一段時，會檢查要引用的檔案是否已載入過，如果載入過就不再載入

require 及 require_once:
require -當程式讀到這一段時，會載入引用的檔案
require_once-當程式讀到這一段時，會檢查要引用的檔案是否已載入過，如果載入過就不再載入

include 跟 require 最主要的差別在於，include 找不到檔案載入時，只會觸發 Warning，而不會終止程式，
而 require 在找不到檔案載入時，會觸發 Fatal Error 並終止程式。

## 請說明 SQL Injection 的攻擊原理以及防範方法

SQL Injection 的攻擊原理:
在輸入字串中夾帶 SQL 指令，如果應用程式是使用字串串聯的方式組合 SQ L 指令，並忽略了字元檢查的話，那麼
這些被夾帶進去的惡意指令就會被資料庫認為是正常的指令而執行，進而使資料庫遭到入侵或破壞。
例如，未針對輸入的單引號字元做跳脫處理的話，就會導致單引號字元內的字串被解讀為 SQL 參數，進而被識別
為有效的 SQL 語法。

防範方法: 1.參數化查詢: 撰寫 SQL 指令時，用參數代表需要填入的數值，透過 SQL 指令預編譯後才套用參數執行的方式，
來避免 SQL 注入。

2.在單引號字元前加入跳脫字元: 透過對單引號字元前加入跳脫字元使其無法成為有效的 SQL 指令。

## 請說明 XSS 的攻擊原理以及防範方法

XSS 的攻擊原理:
全稱為跨網站指令碼攻擊，透過瀏覽器解析 HTML 語法的特性去執行特定的程式碼以竊取 Cookie、
非公開的網頁內容或是權限等等，例如:在頁面中插入 <script>alert(document.cookie)</script>，瀏覽器會將
此段程式碼識別為 JavaScript 程式碼並執行，跳出一個顯示當前網站 cookie 的 alert 對話框。

防範方法: 1.過濾特殊字元: 對使用者所提供的內容進行過濾，例如 PHP 的 htmlspecialchars() 函數，會將 html 的
特殊字元重新編碼再輸出成一般字串

2.使用 HTTP 標頭指令類型: 例如，header('Content-Type: text/javascript; charset=utf-8');，指定將
JavaScript 指令碼轉成文字。

## 請說明 CSRF 的攻擊原理以及防範方法

CSRF 的攻擊原理:
利用瀏覽器會記住 cookie 及 session 資訊的方式，讓被攻擊者在不同的網域底下，不知不覺的發送夾帶了
使用者資訊的 request 到被攻擊者登入過的網站，偽造被攻擊者的身份進行一些操作，例如，發郵件、發訊息或是
轉帳、買商品等等。

防範方法: 1.使用者方面:
可以在每次使用完網站之後就登出，這樣攻擊者就無法利用使用者處於登入狀態這一點去偽造身份進
行操作。

2.Server 的防禦:

    檢查Referer:
      檢查 request 的 header 的 referer 欄位，看這個 request 是從哪個網域過來的，
      如果不是，就拒絕，但要注意的是，有些瀏覽器可能不會帶 referer，或是有些使用者
      會關閉 referer 的功能，這會導致 server 拒絕掉真的使用者發出的 request，再來是
      判斷是否合法網域的程式碼要保證沒bug，不能讓攻擊者以類似的域名成功騙過 server。

    加上圖形驗證碼或簡訊驗證碼:
      發送簡訊到使用者手機或E-mail信箱，以確保嘗試執行操作的人是使用者本人。

    加上 CSRF token:
      在 form 裡面加上一個 hidden 的欄位，叫做 csrftoken，值由 server 隨機產生，並且存在 server 的
      的 session 中，使用者 submit 之後， server 比對表單中的 csrftoken 是否跟自己 session 中的 token一致
      是的話就確認這個 request 是由本人發的。

    Double Submit Cookie:
      透過由 server 產生一組隨機的 token 並加在 form 上面，然後在 client side 設一個叫 csrftoken 的 cookie ，
      值則是跟 server 產生的同一組，只要client side發送的 request 裡的 cookie domain及 token 是不同的，就拒絕。

    client side 的 Double Submit Cookie:
      基本上跟上面的 Double Submit Cookie 差不多，差在 token 是由 client 端生成的，核心概念為，攻擊者沒辦法讀寫目標
      網站的 cookie 所以 request 的 csrf token 會跟 cookie 內的不一樣。

    browser 本身的防禦-SameSite cookie:
      透過在設定 cookie 的時候 帶上 SameSite 這個關鍵字，代表這 cookie 只允許 same site 使用，任何 cross site
      request 都不會被加上這 cookie，也就是說，在 default 的 strict，加上去之後，<a href="">, <form>, newXMLHttpRequest，只要被瀏覽器
      驗證後不是在同一個 site 所發出的 request 的話，就都不會帶上這 cookie，透過這種方式，不同 domain 所發出的 request 將不會帶上有者登入
      資訊的 cookie 進而達到防禦目的。
