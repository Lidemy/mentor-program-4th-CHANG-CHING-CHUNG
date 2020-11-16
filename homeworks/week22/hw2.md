
## 請列出 React 內建的所有 hook，並大概講解功能是什麼
1. useState: 用來處理元件內跟元件相關的反應式資料，這個 hook 會回傳一個狀態值以及一個用來更新壯態的函式。
2. useEffect: 主要用來監聽某個值，並且隨者值的改變，執行函式，可用在"登入"、"畫面渲染後的抓取遠端資料"或"畫面渲染前的資料處理"等等。 
   這個方法需要帶兩個參數，第一個是函式，第二個是包含要監聽資料的陣列，如果給的函式裡面帶一個回傳函式，
   那麼回傳函式將會在元件從畫面被移除的時候呼叫。
3. useContext: 用來將狀態分享給所有子元件用的，使用這個 hook ，我們將不用一個一個的從上層把狀態值傳給子元件。呼叫 userContext 的元件，當 context 的值改變時，就會重新渲染。
4. useReducer: 跟 useState 一樣，會給予一個狀態值以及一個更新狀態的函式，不同的是，
   一開始要傳進去 useReducer 的會是一個函式以及初始值，
   函式接受兩個參數，一個是前狀態值，一個是要更新的狀態值，而初始值則是會傳進去函式裡面處理的值，
   useReducer 跟 陣列的 reduce 用法差不多。
5. useCallback: 主要用來性能優化用的， useCallback 接受兩個參數，一個是要被記住的 callbackk 函式，一個是包含了要監聽的值的陣列，被記住的函式，只有在被監聽的值改變了之後才會被重新建立。
6. useMemo: 跟 useCallback 很像，但 useMemo 是用來記住值的。這個函式接受兩個參數，第一個為函式，第二個則是要監聽的值，傳進去的函式會回傳一個值，只有當監聽的值改變時，才會執行函式。
7. useRef: 用來儲存一個值，該值在元件的生命週期內持續存在，但在值發生變化時不會重新渲染，值存在 .current 中，可以跟 ref 一起使用來保存 DOM 元素。
    
8. useImperativeHandle: 用來客製化要傳什麼值給父元件，當使用 ref 時，要搭配 forwardRef 使用。
9.  useLayoutEffect: 作用跟 useEffect 完全相同，唯一不同的地方是，什麼時候執行， useEffect 是在 DOM 被更新後執行，而 useLayoutEffect 則是在 DOM 更新之前執行，通常是用在當 UI 有閃爍之的時候。
10. useDebugValue: 用來在 React DevTools 中顯示自定義 hook 的標籤。


## 請列出 class component 的所有 lifecycle 的 method，並大概解釋觸發的時機點

### Mounting
1. constructor: 一個 React 的 constructor 會在其被 mount 之前被呼叫。
2. static getDerivedStateFromProps: 會在元件被 render 前被呼叫，不管是第一次 mount 或是更新時。
3. render: 當檢查完 thus.props 以及 this.state 中的變化之後，將元素顯示在瀏覽器上。
4. componentDidMount: 當一個元件被加入至 DOM tree 之中， componentDidMount 會馬上被呼叫。

### updating
1. static getDerivedStateFromProps: 會在元件被 render 前被呼叫，不管是第一次 mount 或是更新時。
2. shouldComponentUpdate: 當狀態被更新之後，可以加入 shouldComponentUpdate 來讓元件不重新渲染。
3. render: 當檢查完 thus.props 以及 this.state 中的變化之後，將元素顯示在瀏覽器上。
4. getSnapshotBeforeUpdate: 會在 render 的輸出送給 DOM 時被呼叫，在 DOM 改變之前做一些操作，例如滾動軸的位置，這個方法回傳的值會當作一個參數傳給 componentDidUpdate。
5. componentDidUpdate: 在元件更新之後觸發，此方法不會在第一次 render 時被呼叫。

### Unmounting
1. componentWillUnmont: 會在元件被移除之後馬上被呼叫，可以在這個方法內進行清理事件監聽或是計時器等，要注意的是，不應該在 componentWillUnmount 內呼叫 setState ，因為這個元件永遠不會再重新 render。

## 請問 class component 與 function component 的差別是什麼？
1. Syntax: class component 是一個繼承 React.Component 的 class，有者會回傳 JAX 的 render 方法，而 functional component 則是一個回傳 JSX 語法的 function。
2. Passing props: 傳給 functional component 的參數會被放到叫 props 的 object ，可以用解構的方式或是 props.someValue 的方式取的傳進來的參數，
   而 class component 則需要加上 this 指向呼叫 render 方法的 class ，例如: this.props.someValue，這邊要注意的是，只有 functional component 會記住傳進來的值而不會隨者重新 render 而抓到更新後的值，詳見[How Are Function Components Different from Classes?](https://overreacted.io/how-are-function-components-different-from-classes/)。 
3. Handling state: 在 React 16.8 以後的版本， functional component 加入了 hook 的功能，使 functional component 可以使用 useState 變成一個 stateful functional component ，
   useState 可以傳入任何值當初始值，然後回傳給我們兩個變數，一個是 state 一個是 用來更新 state 的 function，而在 class component 裡，要使用 state ，
   我們需要加上 constructor 以及呼叫 super 否則的話，所有的 state 變數都會是 undefined，而在 class component 裡，state 是一個 object，裡面存放我們需要的資料，
   更新 state 的方式則是呼叫 this.setState，然後傳入一個裡面帶有要更新的值的物件。
4. Lifecycle Methods: 
   4.1 On Mounting (componentDidMount): 在 class component 裡，componentDidMount 會在元件第一次渲染後被呼叫，而在 functional component 裡，
   則是使用 useEffect 來達到跟 componentDidMount 一樣的效果，例如: useEffect 第二個參數傳一個空陣列的話，useEffect 就只會在第一次渲染後被呼叫。
   4.2 On Unmounting (componentWillUnmount): 在 class component componentWillUnmount 會在元件要被移除之前被呼叫，而在 functional component 裡，
   則是只要在 useEffect 的第一個函式參數裡回傳另一個函式，該函式就會在元件要被移除之前被呼叫，達成跟componentWillUnmount 一樣的效果。

## uncontrolled 跟 controlled component 差在哪邊？要用的時候通常都是如何使用？

1. uncontrolled 跟 controlled component 差異
   1.1 controlled component: 受控制的 component 透過 props 取得目前的值，
       然後透過 onChange 或 onClick 等事件監聽受控制的 component 的輸入，
       一但監聽事件發生，就會呼叫 callback function 執行 setState 更新 state ，
       然後受控制的 component，會接收到最新的值。

   1.2 uncontrolled component: 跟傳統的 HTML 一樣，我們輸入的值會存在它自己內部的 state ，要取得值的方法則是透過 DOM 操作
      ，使用 ref 或是 document.selector 去選取該元素取值，而不是透過 React 操控該元件的值。

2. 如果是很簡單的 UI ，不涉及其它 component 的話，一次性的提交或是做資料驗證的時候是可以使用 uncontrolled component
   的，但在大部份情況下，做好還是使用 controlled component。

資料來源: [controlled-vs-uncontrolled-inputs-react](https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/#conclusion)

