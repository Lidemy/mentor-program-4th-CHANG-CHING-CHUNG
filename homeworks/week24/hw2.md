## Redux middleware 是什麼？
Redux middleware 如名稱所說，是個中介軟體，介於 dispatch 跟 reducer 中間，用來做非同步處理或是將 action 跟其它資料一起加工，再送給 reducer，reducer 再把舊的 state 更新並送回給使用者。

除了 Redux 提供的 thunk middleware 之外，我們也可以客製化自己的 middleware 並利用 applyMiddleware 加入到 redux 裡面使用，值得注意的是，一但應用了 middleware 那麼每次發 action 的時候，都一定會經過 middleware 的處理，一般來說最常使用的是 thunk middleware，經過 thunk 的函式都會被提供 getState 與 dispatch ，來讓我們可以回傳一個帶有 dispatch 的函式，再透過 dispatch 去將 fetch 遠端回來的資料送給 reducer。

使用 thunk middleware 必須要將函式寫成

```javascript=
const example = (extraArgs) => (dispatch) => {
    //other code.....
    return fetch("/getUser").then(res => {
        dispatch({type:"GET_USER_NAME", payload: res.userName})
    })
}
```

透過上面的函式，我們將可以在非同步 fetch 中使用 dispatch 將 fetch 得到的資料傳進 reducer 更新。

## CSR 跟 SSR 差在哪邊？為什麼我們需要 SSR？
1. CSR 跟 SSR 差在哪邊？
CSR: Client side rendering 客戶端渲染
SSR: Server side rendering 伺服器端渲染
CSR 顧名思義，畫面是當客戶端接收到伺服器傳來的 html 檔案之後，啟動裡面崁入的 JavaScript 檔案再將畫面渲染到 html 裡面。使用 CSR 技術的網站，使用 DevTool 檢查源始碼時，會發現裡面是空的。
SSR 則是伺服器端直接傳一份已經渲染好了的 html 檔案給客戶端。使用 SSR 技術的網站，使用 DevTool 檢查源始碼時，會發現裡面充滿了 html 元素，跟你在畫面上看到的一模一樣。

2. 為什麼我們需要 SSR？
因為 SEO ，使用 SSR 可以讓 Google 或是其它搜尋引擎等更好且正確的爬到
關於你網站的資訊，因為它們的機器人可以直接讀取渲染好的整份 html 檔案，而不像 CSR 是空白的，搜尋引擎機器人或爬蟲沒辦法在空白的頁面上獲得跟網站相關的資訊，就會使得網站的能見度變低。



## React 提供了哪些原生的方法讓你實作 SSR？
React DOM 提共了兩個方式實作 SSR
1. ReactDOMServer.renderToString(): 傳入 element 進去，會回傳 HTML 字串，並當作 Response 回傳給客戶並顯示。
2. ReactDOMServer.renderToStaticMarkup(): 功能跟`renderToString`差不多，一樣是回傳HTML 字串，並當作 Response 回傳給客戶並顯示，但裡面不會有 React DOM 屬性。

這兩種的差別在於，`renderToStaticMarkup` 不會產生 React 內部使用的 DOM 屬性，例如:`data-reactroot`，而如果想讓客戶端跟 Markup 互動的話，則須使用`renderToString()` 配上`hydrate()` 來將 event listener 附加到 component 上。


## 承上，除了原生的方法，有哪些現成的框架或是工具提供了 SSR 的解決方案？至少寫出兩種
1. Prerender: 安裝完後會在我們自己的 server 上去偵測每個 request ，一但發現是搜尋引擎機器人發出的 request ，就會發送一個 request 去  Prerender.io 取得幫你 cache 的，已渲染好的靜態網頁，然後回傳給客戶端。
2. Next js: 提供了 Pre-rendering 的功能，我們能夠直接建立 page 並在 build 的階段就產生渲染完的靜態頁面並回傳給客戶端。