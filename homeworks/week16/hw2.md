## 程式碼如下

    for(var i=0; i<5; i++) {
      console.log('i: ' + i)
      setTimeout(() => {
        console.log(i)
      }, i * 1000)
    }

## 輸出結果為

i: 0
i: 1
i: 2
i: 3
i: 4

5
5
5
5
5

## 執行步驟

1. 讀到第一行，for 迴圈，設 var i 為 0，判斷 i 是否小於 5 ，是，執行迴圈裡的程式碼
2. 讀到第二行，執行 console.log('i:' + i)，變數 i 為 0，印出 i: 0
3. 讀到第三行，執行 setTimeout，將箭頭逆名函式 1 放進 callback queue，設定 i = 1 \* 1000 秒後執行該箭頭逆名函式 1，i++
4. 回到第一行，for 迴圈，i 為 1 判斷 i 是否小於 5 ，是，執行迴圈裡的程式碼
5. 讀到第二行，執行 console.log('i:' + i)，變數 i 為 1，印出 i: 1
6. 讀到第三行，執行 setTimeout，將箭頭逆名函式 2 放進 callback queue，設定 i = 2 \* 1000 秒後執行該箭頭逆名函式 2，i++
7. 回到第一行，for 迴圈，i 為 2 判斷 i 是否小於 5 ，是，執行迴圈裡的程式碼
8. 讀到第二行，執行 console.log('i:' + i)，變數 i 為 2，印出 i: 2
9. 讀到第三行，執行 setTimeout，將箭頭逆名函式 3 放進 callback queue，設定 i = 3\* 1000 秒後執行該箭頭逆名函式 3，i++
10. 回到第一行，for 迴圈，i 為 3 判斷 i 是否小於 5 ，是，執行迴圈裡的程式碼
11. 讀到第二行，執行 console.log('i:' + i)，變數 i 為 3，印出 i: 3
12. 讀到第三行，執行 setTimeout，將箭頭逆名函式 4 放進 callback queue，設定 i = 4\* 1000 秒後執行該箭頭逆名函式 4，i++
13. 回到第一行，for 迴圈，i 為 4 判斷 i 是否小於 5 ，是，執行迴圈裡的程式碼
14. 讀到第二行，執行 console.log('i:' + i)，變數 i 為 4，印出 i: 4
15. 讀到第三行，執行 setTimeout，將箭頭逆名函式 5 放進 callback queue，設定 i = 5\* 1000 秒後執行該箭頭逆名函式 5，i++
16. 回到第一行，for 迴圈，i 為 5 判斷 i 是否小於 5 ，否，迴圈結束
17. Stack 已清空
18. 等待 0 秒後將 callback queue 的箭頭逆名函式 1 放進 stack 並執行，此時 var i 為 5 ，
    console.log(i) 印出 5
19. 等待 1 秒後將 callback queue 的箭頭逆名函式 2 放進 stack 並執行，此時 var i 為 5 ，
    console.log(i) 印出 5
20. 等待 2 秒後將 callback queue 的箭頭逆名函式 2 放進 stack 並執行，此時 var i 為 5 ，
    console.log(i) 印出 5
21. 等待 3 秒後將 callback queue 的箭頭逆名函式 2 放進 stack 並執行，此時 var i 為 5 ，
    console.log(i) 印出 5
22. 等待 4 秒後將 callback queue 的箭頭逆名函式 2 放進 stack 並執行，此時 var i 為 5 ，
    console.log(i) 印出 5
23. callback queue 已清空
24. Stack 已清空，程式結束

## 原因

迴圈的輸出結果跟 setTimeout 不一致的原因為 var 這個變數的 Scope 是 Function Scope，
而在 main 全域環境的情況下，`for(var i = 0; i < 5; i++)` 相當於以下

    var i = 0
    for(i < 5; i++)

因此，var i 是全域變數，而在傳進 setTimeout 的箭頭匿名函式，是執行一段 console.log(i)，印出 i 這個變數的值，
但由於傳進 setTimeout 的回呼函式不會當下執行，所以無法立即的印出當下 var i 的值， 而是在迴圈結束後才開始依照順序執行箭頭匿名函式並印出 var i 的值；
會印出 5 的原因是，迴圈結束後，var i 的值，已經變成 5 了，而箭頭匿名函式在自己的 Scope 找不到 i 這個變數的情況下，
會往上一層 Scope 找，而在上一層 Global Scope 中，找到了 var i ，因此印出 Global Scope 的 var i 的值，5，像下面例子

    var i = 0;

    for(; i < 5; i++) {
      console.log('i: ' + i); // 這裡會輸出 0, 1, 2, 3, 4
    }

    // 此時 var i 的值已經變為 5

    function test() {
      console.log(i);
    }
    test(); // 印出 5

所以 for 迴圈裡的輸出結果才會跟 setTimeout 不一樣，而傳進 setTimeout 裡的延遲秒數 `i * 1000`的部份，
這個 i 會跟 for 迴圈印出的 i 的值是一致的，因為是傳當下的值進去 setTimeout 並執行 setTimeout ，而不是迴圈完之後才執行，
所以 `i * 1000`在每次迴圈時會是

    setTimeout(() => {
        console.log(i)
      }, 0 * 1000)
    setTimeout(() => {
        console.log(i)
      }, 1 * 1000)
    setTimeout(() => {
        console.log(i)
      }, 2 * 1000)
    setTimeout(() => {
        console.log(i)
      }, 3 * 1000)
    setTimeout(() => {
        console.log(i)
      }, 4 * 1000)

因此，會先執行延遲 0 秒的第一個箭頭匿名函式，執行完 1 秒後再執行第二個箭頭匿名函式，執行完後，
前面執行箭頭匿名函式的 1 秒 + 等待 1 秒 = 2 秒，後再執行第二個箭頭匿名函式，執行完後，
前面執行箭頭匿名函式的 1 秒 + 1 秒 + 等待 1 秒 = 3 秒，後再執行第三個箭頭匿名函式...以此類推，
最後結果就是看起來是每隔一秒執行一次箭頭匿名函式。
