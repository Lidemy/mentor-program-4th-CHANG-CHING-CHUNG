## 為什麼我們需要 Redux？
因為在 React 裡，我們要把 state 共享給子組件的方式只有將 state 作為 props 傳下去，要是這個組件元件很長，那麼我們就需要一層一層傳下去，像這樣:

              主元件(state)
                |
                V
            子元件 -- 子元件(props)
                |
                V
    子元件 -- 子元件 -- 子元件(props) // 真正要使用state 的子元件

像上面示意圖這樣會變得很難維護，因此，就出現了 Redux。
Redux 將 state 當做全域變數存放起來，我們的子元件要使用的時候只需要將 state 映射到子元件的 props 就可以了，再也不用一層一層的傳，難以維護，重複性高的 code 了。

結論: Redux 讓我們將 state 提升到全域，使得所有組件可以共享這個 state ，直接把元件之間只能把 state 從上傳到下，導致組間之間無法交流資料的問題解決了。

## Redux 是什麼？可以簡介一下 Redux 的各個元件跟資料流嗎？
1. Redux 是一個狀態管理工具，透過這個工具，我們可以更有效的管理狀態，使得狀態的變化更有預測性，並且，Redux 透過一些限制，使得狀態只能透過 Redux 提供的 Api 來更改，避免了狀態在程式執行期間可能會受到非預期的更改的問題。
2. Redux 元件 & 資料流
   2.1 Actions: Actions 是一個物件，物件裡面包含了 type 以及 payload ，應用程式會透過 Actions 傳遞資料到 store ，它們是 store 唯一的資料來源。
   2.2 Reducer: Reducer 是用來計算並產生新的狀態的元件，使用方式就跟 Array.reduce 是一樣的，透過傳入先前的 state，跟一個 action，內部計算過後回傳新的 state。
   2.3 Store: Store 是將 Reducer 以及 Actions 結合起來所產生的物件，Store 的功能有: 
   1. 掌管應用程式狀態
   2. 藉由 getState 獲得 state
   3. 藉由 dispatch 更新 state 
   4. 藉由 subscribe 註冊 listener
   5. 藉由 subscribe 回傳的 function 處理撤銷 listener。
   要注意的是， Redux 應用程式裡只會有一個 store ，所以如果要把資料處理邏輯拆分時，會使用 combineReducers 將不同的 reducer 結合在一起，產生一個 store。
   2.4 資料流: Redux 的架構為嚴格的單向資料流，也就是說，應用程式中的全部資料全都遵照一樣的生命週期模式，這使得應用程式的邏輯更容易預測與了解。Redux 的資料生命週期有4個步驟:
   1. 呼叫 store.dispatch(action)
   2. Redux store 呼叫你傳給它的 reducer function
   3. Rotot reducer 把多個 reducer 的 output 合併成一個單一的 state tree
   4. Redux store 儲存 Root reducer 回傳的完整 state tree

## 該怎麼把 React 跟 Redux 串起來？
透過 Redux 提供的 connect API。
``connect()`` 透過 mapStateToProps 將儲存在 store 的 state 映射到 React 的元件裡，這樣我們就可以透過 props 拿到 store 的資料，而 mapDispatchToProps ，則是會提供 dispatch 函式讓我們自定義一些方法，然後透過 dispatch 將 action 傳給 reducer。
