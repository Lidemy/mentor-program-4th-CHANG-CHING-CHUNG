## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。

1. <ruby>
   這個標簽是用來附加漢字發音在其相對應的漢字旁邊時用的。例如: 
    <ruby>
    漢 <rt> ㄏㄢˋ </rt>
    </ruby>
    會變成

```
 ㄏㄢˋ
 漢
```

2. <map>
   map標簽是用在圖片上的，將圖片上的某些區塊變成可點選區塊，類似按鈕的功能，
   點選後可導覽至其它頁面。
   用法: map標籤裡面設定area標籤，在area標籤設定該可點選區塊的形狀，在圖片上的座標及超連結。
   <map name="workmap">
     <area shape="rect" coords="34,44,270,350" alt="Computer" href="computer.htm">
     <area shape="rect" coords="290,172,333,250" alt="Phone" href="phone.htm">
     <area shape="circle" coords="337,300,44" alt="Cup of coffee" href="coffee.htm">
   </map>

3. <object>
   這個標籤是用來置入外部資源的，例如: 影片、音檔、html、圖片等。
   用法:　 
   <object data="video.mp4" width="400" height="300"></object> 
   上面範例為在頁面置入一個mp4影片並設定寬400高300。

## 請問什麼是盒模型（box model）

答:
盒模型的意思是，html 的每個元素都是一個方塊，像盒子一樣的模型，所以被當做是盒子，我們透過對每個元素的盒模型進行操縱，使元素的大小外觀符合我們想要的樣式。
例如: 我們可以對一個 div 元素去調整 color、width、height 及 font-size 等等，其中比較重要的一點是 "box-sizing"，盒模型的寬高預設是 content-box，意思是，寬高不含 margins、padding 及 borders，這會導致如果設了 margins 等屬性會改變設定的寬度及高度，例如 width 設 100，padding 設 10，加起來寬度會變成 120，就偏離了我們想要該元素維持的寬度，所以如今我們會將 "box-sizing"這個屬性改成 border-box ，使總寬高維持在我們想要的寬高值，例如，我們設 width 為 100，padding 設 10，因為設了 border-box 的關係，因此瀏覽器會自動幫我們把 padding 加進去但維持總寬度為 100，這樣當我們在設計元素的時候就不容易亂，可以很好的掌控元素的寬高。

## 請問 display: inline, block 跟 inline-block 的差別是什麼？

1. inline
   inline 元素，可設定左右的 margins 跟 padding，不可設定上下的 margins 跟 padding
   不能設定 width 及 height
   可以跟其它元素共存在同一行

2. block
   可設定上下左右的 margins 跟 padding
   自動斷行，一個 block 元素佔一行
   如果沒設定 width，則自動設為 full-width

3. inline-block
   同時具有 inline 及 block 的特性如:
   可以跟其它元素共存在同一行
   可以設定上下左右的 margins 及 padding
   可以設定 width 及 height

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？

1. static
   元素的默認值為 static，表示該元素出現在文檔的常規位置

2. relative
   將元素設定相對定位，設定了 relative 的元素可藉由 top, bottom, left, right 等屬性將元素定位在相對於該元素常規位置的地方，但移動過後的元素還是佔據原始位置

3. absolute
   將元素設為絕對定位，設為 absolute 屬性的元素會往上尋找父元素，以父元素為相對位置進行定位。
   如果沒有父元素，則以整個<body>元素為父元素進行定位

4. fixed
   固定定位，設為 fixed 的元素會相對魚瀏覽器來定位，可設 top, right, bottom 及 left 來定位，設了 fixed 的元素，即使畫面滾動，該元素始終還是會在同一個位置
