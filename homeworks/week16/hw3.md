## 程式碼如下

    var a = 1
    function fn(){
      console.log(a)
      var a = 5
      console.log(a)
      a++
      var a
      fn2()
      console.log(a)
      function fn2(){
        console.log(a)
        a = 20
        b = 100
      }
    }
    fn()
    console.log(a)
    a = 10
    console.log(a)
    console.log(b)

## 輸出結果為

undefined
5
6
20
1
10
100

## 執行步驟

1. 進入 main 全域環境，宣告 var a、 宣告 fn 函式
2. 設 var a = 1;
3. 執行 fn()，進入 fn 函式的 Scope
4. 宣告 var a 及 fn2 函式，並提升到 fn 函式的最上方
5. 執行 console.log(a)，此時 var a 尚未賦值，印出 undefined
6. 設 var a = 5
7. 執行 console.log(a)，印出 5
8. a++，此時 var a 為 6
9. 再宣告一次 var a ，由於 var a 已經宣告過了，所以沒有效果
10. 執行 fn2()，進入 fn2 函式的 Scope
11. 執行 console.log(a)，在 fn2 的 Scope 沒有 a 這個變數，所以往上找 fn 函式，fn 函式裡有 a 並且值是 6
    ，印出 fn 函式裡 a 變數的值，6
12. 重新賦值 a = 20
13. 重新賦值 b = 100，fn2 的 Scope 沒有 b ，往上 fn 函式找 b ，也沒有，再往上 Global 找 b，也沒有，因此宣告 var b = 100
14. fn2 函式執行結束，回到 fn 函式
15. 執行 console.log(a)，由於 a 已經在 fn2 函式裡被重新賦值 a = 20 了，因此印出 20
16. fn 函式執行結束，回到 Global main
17. 執行 console.log(a)，此時 Global 的 var a 變數的值還是 1 ，所以印出 1
18. 重新賦值 a = 10
19. 執行 console.log(a)，印出 a 重新賦值後的值，10
20. 執行 console.log(b)，由於 b 在 執行 fn2 函式的時候因找不到 b 而直接在 Global 全域環境，宣告並賦值 var b = 100 ，因此印出 100
21. 程式執行完畢

## 原因

JavaScript 在執行程式的時候，會先經過預編譯的階段，將執行環境中的變數及函式都放到一個叫做 Variable Object 的物件裡，之後再一行一行的執行，透過這種預編譯的過程，達成函式之間可以互相呼叫而不會報錯，這種行為叫做提升。而變數的提升跟函式的提升又不一樣，例如

    function test() {
      console.log(a);
      var a = 5;
    }

我們看到，在第三行是 var a = 5 ，但實際上執行的時候是分成兩個步驟執行的，先宣告變數 var a，宣告完之後再賦值 a = 5 ，因此提升的時候，是把宣告 var a 這個動作提升上去，並沒有賦值，因此在 console.log(a) 的時候就會發生 undefined 的情況

    // 實際執行時是像這樣子，所以出現 undefined
    function test() {
      var a;
      console.log(a);
      a = 5;
    }

而在子函式裡找不到變數，繼而往上找的情況是因為有 Scope chain 的原因，在進入全域環境，及宣告函式的時候，會一併將 函式的 Scope 一併設置好，用一段程式碼來舉例:

    var a = 1;
    function test() {
      var b = 2
      function innerTest() {
        console.log(a);
        console.log(b);
      }
      innerTest();
    }

    function test2() {
      console.log(b);
    }
    test(); // 裡面的 innerTest 會印出 1 跟 2
    test2(); // 會報錯，b is not defined

在上面的程式碼裡，用 Scope Chain 來呈現會長這樣

    innerTest execution context
    {
      AO: {
      },
      // innerTest 自己的 Scope 加 test EC 的 Scope 再加上 Global EC 的 Scope
      scope: [innerTest EC, test EC, Global EC]
    }

    test2 execution context
    {
      AO: {
      },
      scope: [test2 EC, Global EC] // test2 自己的 scope 加上 Global EC 的 scope
    }

    test execution context
    {
      AO: {
        b: 2
        innerTest: FUNCTION
      },
      scope: [test EC, Global EC] // test 自己的 scope 加上 Global EC 的 scope
    }

    Global execution context
    {
      VO: {
        a: 1
        test: FUNCTION
        test2: FUNCTION
      },
      scope: [Global EC] // 只有自己的 Scope
    }

因此當執行 innerTest 函式時，在自己的 Scope 找不到變數 a 的情況下就會往上一層 scope test 函式裡找，而 test 函式的 scope 裡也沒有 變數 a ，所以往更上層 Global scope 找，找到 var a = 1 ，因為這樣才得以印出 1，console.log(b)，也是一樣的
道理，在往上層 scope 找時，發現在 test 函式的 scope 就有變數 var b = 2 ，所以可以印出 b，而另一個 test2 函式，由於它的 scope chain 上只有自己跟 Global Scope ，所以存取不到在 test 函式裡的 var b = 2 ，執行會出現 b is not defined。

在這 hw3 所給的程式碼中，就是因為上述的，"提升"及 "Scope chain"的原因， 輸出結果才會是

    undefined
    5
    6
    20
    1
    10
    100
