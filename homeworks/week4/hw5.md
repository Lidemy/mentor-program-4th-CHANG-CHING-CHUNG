## 請以自己的話解釋 API 是什麼

API 就像是餐廳的菜單，上面列出了餐廳提供的餐點，客戶選擇菜單上的餐點並告知服務生，
服務生跟客戶確認過餐點後，就回到後台向廚師傳達要製作的餐點，廚師製作完餐點後，交給服務生，服務生再將餐點送到客戶的桌上。
上述的例子裡，客戶=Client、菜單=API、服務生=Server、廚師=處理服務的應用程式。

簡單說，API 就是一種列出了可使用的服務的菜單，Client 可透過 API 獲取 Server 端提供的資源。

## 請找出三個課程沒教的 HTTP status code 並簡單介紹

418 - I am a teapot (資料來源: Huli blog)
這個不是標準 HTTP 的狀態碼，由來是從 1998/4/1 愚人節的一份文件，
RFC2324, Hyper Text Coffee Pot Control Protocol (HTCPCP/1.0)，這協定是用來泡咖啡的，
而如果有人要用茶壺泡咖啡的話，就回 418 的狀態碼，表示我是茶壺，不要拿我來泡咖啡。

451 - 因法律原因不可用
是錯誤狀態代碼，此代碼的出現代表該網頁可能對國家安全產生危害，或該網頁可能違反著作權、隱私權、褻瀆神明或其他法律或法院命令。這個代碼源於 1953 年的反烏托邦小說<華氏 451 度>，喜說中，所有書籍都是違禁品。(我覺得有趣的部分是，褻瀆神明也算違法 XDD)

423 - 當前資源被鎖定
要存取的資源被鎖定，存取不能。

## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

     說明 	      Method     	path   	             參數 	                 範例

回傳所有餐廳資料　　 GET /restaurants limit:限制回傳資料數量 /restaurants?limit=10
回傳單一餐廳資料　　 GET /restaurants/:id 無 /restaurants/5
新增餐廳 POST /restaurants name:餐廳名稱 　　無
刪除餐廳 DELETE /restaurants/:id 無 　　　　 無
更改餐廳 PATCH /restaurants/:id name:餐廳名稱 　無
