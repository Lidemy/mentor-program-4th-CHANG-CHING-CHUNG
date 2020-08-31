## 什麼是 DOM？

DOM 全名叫做"文件物件模型"(Document Object Model)，將網頁元素以樹狀結構表示，每個資料都是一個節點，而節點本身也是物件，擁有自己的屬性及方法，我們可以透過操縱 DOM 去改變元素屬性及內容。

## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？

事件傳遞的順序為: 先捕獲、到目標、後冒泡。
冒泡: 事件從目標向上傳遞，往父元素傳，一直到最頂層。
捕獲: 事件發生時，最上層的父元素捕獲到事件，並將事件往下傳至目標。

## 什麼是 event delegation，為什麼我們需要它？

事件代理(Event Delegation)，在父元素設置事件監聽器，並利用點擊元素時事件會從該元素 bubbling 向上傳遞的特性，讓我們可以做到只設置一個事件監聽器就能對子元素進行操縱，而不需要一個一個為子元素設事件監聽器。

## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？

event.preventDefault: 是用來停止元素的預設行為用的，例如: <a link="some.website.com">，是一個連結按鈕，按下去就會轉到 some.website.com 這個網站，如果在這個 "a" 標籤上加上 click 事件的監聽器，然後在事件發生時執行的函式中加上 event.preventDefault() ，那麼，就會將點擊 "a" 標籤自動轉址的預設行為停掉，之後怎麼點都沒有反應了。

event.stopPropagation: 用來停止事件向上或向下傳遞，例如，父元素跟子元素都設了對同個事件的監聽器，但又不想父元素同時觸發事件時，就可以在子元素的事件監聽器裡放入這個 event.stopPropagation 方法。

範例: 下面例子中，有 parent 跟 child 兩個元素，都設置了點擊觸發事件，當事件發生時會跳出一個 alert，正常情況下點擊 child 元素，將會同時觸發 child 及 parent 的事件，跳出 alert("Parent")及 alert("child")，如果我們只想要 child 觸發該事件，就要在 child 元素加上事件監聽器並加上 event.stopPropagation，像下面這樣，之後無論如何點擊 child 元素都只會跳出 child 的 alert 了!

「child.addEventListener('click', () => {
event.stopPropagation();
})」

<div id="parent"onClick='alert("Parent")'>
Parent
 <div id="child" onClick='alert("child")'>
 child
 </div>
</div>
