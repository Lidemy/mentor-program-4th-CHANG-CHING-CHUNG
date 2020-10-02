## 程式碼如下

    const obj = {
      value: 1,
      hello: function() {
        console.log(this.value)
      },
      inner: {
        value: 2,
        hello: function() {
          console.log(this.value)
        }
      }
    }

    const obj2 = obj.inner
    const hello = obj.inner.hello
    obj.inner.hello() // ??
    obj2.hello() // ??
    hello() // ??

## 輸出結果為

2
2
undefined

## 執行步驟

1. 宣告 const obj 並賦值為物件，內容物為 value 1, hello 函式, inner 物件，inner 物件內容物為，
   value 2, hello 函式
2. 宣告 const obj2 為 obj.inner 物件
3. 宣告 const hello 為 obj.inner.hello 函式
4. 執行 obj.inner.hello()，此時呼叫的是 inner 物件底下的 hello 函式，因此 this 指向的是 inner 物件，印出 inner 物件的 value 的值，2
5. 執行 obj2.hello()，變數 obj2 的值被設為 obj.inner 物件，所以呼叫的是 inner 物件底下的 hello 函式，因此 this 指向的是 inner 物件，印出 inner 物件的 value 的值，2
6. 執行 hello()，變數 hello 的值被設為 obj.inner.hello 函式，所以呼叫 hello 執行的時候，是直接執行函式，而因為不是在 obj 物件底下，也不是在 inner 物件底下，所以 this 的值會是 window 物件(在瀏覽器執行的話)，而在 window 物件底下並沒有一個叫 value 的變數，所以印出 undefined
7. 程式結束

## 原因

JavaScript 的 `this` 所指向的物件是根據呼叫 `this` 的地方所決定的，例如在瀏覽器底下執行

      console.log(this);

會印出 `Window` 物件，因為在瀏覽器環境底下 `Window` 就是全域環境物件，所有全域 `var` 及 `function` 的宣告都會被儲存為 `Window` 物件底下的 `Property` ，例如

    var value = 'window';
    console.log(this.value) // 會印出 'window'

而如果我們用 `console.log(this)` 去查看的話，會發現

    console.log(this);
    Window {
      ...
      value: "window"
    }

`Window` 物件底下出現了我們剛剛用 `var` 宣告的 `value` 變數及它的值，"window"，那要是我們沒宣告 `var value = window` 呢?

    console.log(this.value) // undefined

既然我們沒宣告 `var value = window` 那也就不會在 `Window` 物件底下建立一個叫 `value` 的 `property`，所以理所當然會印出 `undefined`。

在懂了 `this` 是根據呼叫它的位置去決定它的值是那一個物件及知道了如果沒在全域環境宣告 `var value` 會印出 `undefined` 之後，我們就能回到題目並了解會輸出什麼了。

首先，我們全域宣告了一個物件

    const obj = {
      value: 1,
      hello: function() {
        console.log(this.value)
      },
      inner: {
        value: 2,
        hello: function() {
          console.log(this.value)
        }
      }
    }

這個 `obj` 物件裡面還有一個叫 `inner` 的物件，這要記住。
然後再宣告兩個變數

    const obj2 = obj.inner
    const hello = obj.inner.hello

這裡我們將變數 `obj2` 指向 `obj` 物件裡的 `inner` 物件，所以 `obj2 = inner` 物件，然後將 變數 `hello` 指向 `obj` 物件裡的 `inner` 物件裡的 `hello` 函式，所以 `hello = function`，看起來是像這樣

    const obj2 = inner {
      value: 2,
      hello: function() {
        console.log(this.value);
      }
    };
    const hello = function() {
      console.log(this.value);
    }

這樣子寫就能很清楚的知道變數 `hello` 的值是一個匿名函式，而不是物件。

接下來執行函式

    obj.inner.hello()

`obj` 是一個物件，而在這個物件裡面又有一個叫 `inner` 的物件，`inner` 物件裡有個叫 `hello` 的函式，而上面那一段程式碼代表的是**透過 `inner` 物件呼叫 `hello` 函式**，因為是透過 `inner` 物件呼叫 `hello` 函式的，因此 `hello` 函式裡 `this` 的值就會是 `inner` 物件，而 `this.value` 就會去尋找 `inner` 物件裡的 `value` property 並印出它的值，
這裡 `value` 的值是 2 ，所以印出 2。

接下來

    obj2.hello()

我們上面已經知道宣告 `obj2` 發生了什麼事了，所以直接拿來用

    const obj2 = obj.inner

實際上等於

    const obj2 = inner {
      value: 2,
      hello: function() {
        console.log(this.value);
      }
    };

所以變數 `obj2` 指向的是 `inner` 物件，既然知道指向的是 `inner` 物件，那麼在執行 `obj2.hello()` 時，就能很明確的知道 `this` 指的是 `inner` 物件，所以 c`onsole.log(this.value)` 會印出 2 囉。

最後是執行 `hello` 函式

    hello()

剛剛已經解釋過了，我們可以把

    const hello = obj.inner.hello

看成

    const hello = function() {
      console.log(this.value);
    }

所以我們在用 `hello` 變數去呼叫函式的時候，因為我們是在全域環境裡執行這個函式，所以
`this` 會指向 `Window` 物件，而我們並沒有在全域宣告 `var value` 的變數，所以 `Window` 物件底下不會有 `value` 的 property ，因此會印出 `undefined`。

最後，我們得到的輸出結果就是

    2
    2
    undefined
