## 什麼是反向代理（Reverse proxy）？
什麼是 reverse proxy ?

Reverse proxy 叫做反向代理，跟 Forward proxy 正向代理不一樣的是，正向代理是代理 clients 的請求，而反向代理是代理 servers 的回應。

Reverse proxy 範例：
Client 端 > Reverse proxy server > Server端（1至多個 Servers ）

Client 端發送請求到 Reverse proxy server ，然後 Reverse proxy server 根據請求或是流量配置，將請求導向想對應的 Server。

Reverse proxy 的優點
1. 負載平衡：
商業化的網站每天的流量都很大，如果只有一台 Server 會導致流量超過伺服器處理能力而導致回應速度過慢甚至當機，但如果有許多台 Server 去平均分配流量，就不會發生流量過大而當機或是回應處理速度過慢的事情了。

2. 保護伺服器安全
由於 Client 端是透過 Reverse proxy server 導向到真正的 Server 因此 Client 端不會知道真正 server 的 IP 地址，使得例如 DDoS 的攻擊只能攻擊到 Reverse proxy server，而無法攻擊到真正提供服務的 Server ，從而保護了伺服器安全。

3. Caching 快取
 Reverse proxy server 可以將資料快取起來，以提供更快的回應速度。例如，台灣要連到在美國被代理的網站，會透過台灣當地的 Reverse proxy server 導向到美國被代理的網站，導向的同時， Reverse proxy server 會暫時快取回應的資料，下次連線時，台灣當地的 Reverse proxy server 會直接以快取的資料回應 Client ，由於是台灣當地 Reverse proxy server 直接回應快取資料給 Client 端，速度上就快了許多。


## 什麼是 ORM？
ORM = Object-Relational-Mapping = 物件關係對映

簡單的說就是，將例如以下 query 

SELECT * FROM users WHERE email = 'test@test.com';

封裝成物件，變成以下程式碼的技術。

var orm = require('generic-orm-libarry');
var user = orm("users").where({ email: 'test@test.com' });

透過將 query 用程式語言封裝成物件之後，使用者只要引入 ORM 套件，並按照文件教學使用
跟 query 相對應的 method 就可以跟資料庫互動，新增、刪除、更新及查詢，而不用再寫 query 字串了。

優點

1. 可以用你所使用的程式語言寫 ORM ，而不用使用不熟悉的 SQL 語法跟資料庫互動。

2. 將資料庫系統抽象化，因此從例如，MySQL 轉換到 PostgreSQL 或其它資料庫系統都非常容易。

3. 使用 ORM 寫 query 的執行速度會優於自己寫 SQL 語法。

缺點

1. 初始化 ORM 配置較不易上手

2. 在沒碰過資料庫的情況下就直接使用 ORM ，可以會使你不了解到底資料庫是如何運作的，
而這對一個開發者來說，不是一件好事。


## 什麼是 N+1 problem？

N+1 problem 指的是，原本用 SQL 語法字串，一句或兩句就可以完成的動作，
卻因 ORM 套件或 SQL 語法字串沒寫好造成在取得特定資料時得重復下差不多的 SQL 語法字串，
造成效能問題。

以下為 N+1 範例

$cats = load_cats();
foreach ($cats as $cat) {
  $cats_hats = load_hats_for_cat($cat);
  // ...
} 

假設 load_cats 的實作是以下 query

SELECT * FROM cat WHERE ...

而 load_hats_for_cat($cat) 則是

SELECT * FROM hat WHERE catID = ...

那麼結果就會是執行 N+1 query 

SELECT * FROM cat WHERE ...
SELECT * FROM hat WHERE catID = 1
SELECT * FROM hat WHERE catID = 2
SELECT * FROM hat WHERE catID = 3
SELECT * FROM hat WHERE catID = 4
SELECT * FROM hat WHERE catID = 5
...

假設 cat 有5隻，第1次下 load_cats(); 取得5隻 cat 的資料，
然後再用 foreach 迴圈5次下 load_hats_for_cat($cat); ，
那麼結果就是 5+1 (N+1) ，如果資料少的時候，對於效能的影響可能感受不太出來，
但是一但資料多的時候，就會嚴重拖累效能，因此比較好的方式是，
先將所有資料都從資料庫取出來，再用迴圈去重組資料格式。

例如

$cats = load_cats();
$hats = load_all_hats_for_these_cats($cats);
foreach ($cats as $cat) {
  $cats_hats = $hats[$cat->getID()];
}

轉成 query 的話就是

SELECT * FROM cat WHERE ...
SELECT * FROM hat WHERE catID IN (1, 2, 3, 4, 5, ...)

透過這樣的方式，無論資料有多少，都只要下兩個 query 就可以取得所有資料，從而避免了效能問題。