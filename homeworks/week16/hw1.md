## 程式碼如下

    console.log(1)
    setTimeout(() => {
      console.log(2)
    }, 0)
    console.log(3)
    setTimeout(() => {
      console.log(4)
    }, 0)
    console.log(5)

## 輸出結果為

1, 3, 5, 2, 4

## 執行步驟

1. 進入 main (全域環境)
2. 讀到第一行，執行 console.log(1)，印出 1
3. 讀到第二行，將 setTimeout 函式放進 Stack 並執行
4. 執行後將匿名箭頭函式 1 放到 callback queue
5. 讀到第五行，執行 console.log(3)，印出 3
6. 讀到第六行，將 setTimeout 函式放進 Stack 並執行
7. 執行後將匿名箭頭函式 2 放到 callback queue
8. 讀到第九行，執行 console.log(5)，印出 5
9. Stack 裡的函式已清空
10. 等待 0 秒後將 callback queue 裡的匿名箭頭函式 1 放進 Stack
11. 執行匿名箭頭函式 1，執行 console.log(2)，輸出 2
12. 等待 0 秒後將 callback queue 裡的匿名箭頭函式 2 放進 Stack
13. 執行匿名箭頭函式 2，執行 console.log(4)，輸出 4
14. callback queue 裡的函式已清空
15. 程式結束

## 原因

JavaScript 本身是單一 Stack 的程式語言，但在瀏覽器的執行環境下，可以運用瀏覽器提供的
callback queue 做到非同步處理，像 setTimeout 就是瀏覽器所提供的函式。運作原理是，瀏覽
器本身有個事件監聽器，當監聽到有非同步處理的程式碼時，例如: setTimeout，就會將傳進 set
Timeout 的回呼函式放進 callback queue 裡，當 JavaScript 本身 Stack 裡的函式都執行完畢後，就會將 callback queue 裡的回呼函式一個一個放進 JavaScript 本身的 Stack 裡面執行，
從而做到非同步處理的效果。
