## 什麼是 DNS？Google 有提供的公開的 DNS，對 Google 的好處以及對一般大眾的好處是什麼？

DNS 是 Domain name system 的縮寫，DNS 系統主要的功能是，做為網域名稱與 IP 位址相互之間的轉換，例如: 網址 john.com，將其對映到 IP 位址 127.127.127.7，如此一來，只要輸入 john.com 就會導向 127.127.127.7 這個伺服器位址了，最大的功用是將 IP 位址變成人類容易記憶的，有意義的名稱，使人們不用再記不容易記憶的 IP 數字。

DNS 對 Google 的好處是，Google 可以利用 DNS 伺服器去搜集使用者輸入的網址，並將其用來優化搜尋引擎，或是了解趨勢進行分析統計，做為 Google 設計其它產品的參考，或者是用來做為插入廣告使用。

使用 Google DNS 伺服器對一般民眾的好處是:

1. 比 ISP 或是 小公司提供的 DNS 伺服器快
2. 過濾掉有惡意軟體的網站。
3. 可靠且安全性高

## 什麼是資料庫的 lock？為什麼我們需要 lock？

Lock 指的是當資料庫有多個 Transaction 在進行讀寫操作時，會將資料鎖起來，使其它的 Transaction 無法在同一時間進行操作，以維持資料的完整性，而 Lock 分為兩種，共享鎖及互斥鎖，共享鎖是當 Transaction 要讀取某資料時，必須要先取得的鎖，共享的意思則是，當其它 Transaction 也要讀取同筆資料時，也會取得共享鎖，並得以讀取該資料，而互斥鎖則是在同一時間內只能被一個 Transaction 使用，如其它 Transaction 也要取得同一份資料的互斥鎖，則必須等待上一個佔用互斥鎖的 Transaction 結束才能取得。 共享鎖簡稱為 S Lock，而互斥鎖稱為 X Lock。

我們需要 Lock 是因為要保持資料的完整性，Lock 本身就代表了 Transaction 的其中一個特性， Isolation 隔離性，用來防止多個 Transaction 對資料交叉執行造成資料衝突，進而使數據前後不一。

## NoSQL 跟 SQL 的差別在哪裡？

1. SQL 是關聯性資料庫，NoSQL 是非關聯性資料庫。
2. SQL 資料庫使用結構化查詢語言，並且有預先定義好的 schema，而 NoSQL 資料庫則是為非結構化數據提供了動態 schemas
3. SQL 資料庫是垂直擴展的，而 NoSQL 資料庫則是水平擴展的。
4. SQL 資料庫是基於表的、而 NoSQL 資料庫則是文件、鍵值、圖表或是寬欄的儲存庫
5. SQL 資料庫較適合多行 Transactions，而 NoSQL 則是比較適合 非結構化的資料，像是，文件或是 JSON。

## 資料庫的 ACID 是什麼？

ACID 是 Transaction 四個特性的首字母組合起來的縮寫

A: Atomicity 原子性， Transaction 中的所有操作，要嘛全部完成，或者全部不完成，不會在中間就結束。如果 Transaction 時發生錯誤，會 Rollback 到 Transaction 開始前的狀態，

C: Consistency 一致性，在 Transaction 開始前或結束後，資料庫的資料都是完整的。寫入的資料要完全符合所有預設的約束、觸發器、級聯回滾等。

I: Isolation 隔離性，當多個 Transaction 並發執行時，防止多個 Transaction 交叉執行而導致數據的不一致，事務隔離分為不同級別，包括， Read uncommitted、Read committed、repeatable read、和 Serializable。

D: Durability 持久性，當 Transaction 處理結束後，對數據的修改是永久的，即使系統故障也不會丟失。
