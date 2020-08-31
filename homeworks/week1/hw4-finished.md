## 跟你朋友介紹 Git

1. **Git 的基本概念**
   Git 是一個可以紀錄並追蹤檔案更動紀錄的系統，基本原理是: 建立一個主幹 Master，裡面存放原始檔案，每次檔案變動時，新建一個含有版本號的資料夾，裡面存放更改過後的檔案，並將變動紀錄起來，以便追蹤有哪些檔案被更改及什麼地方被改變。
   以下用 Git 的指令來實際演練一遍 Git 是如何運作的。

2. **Git 指令的運用**
   此處我們要教導如何建立本地 Repository 以及將本地 Repository 與遠端 Repository 連結
  * 第一步-```git init```: 建立資料夾及檔案，開啟 ```git bash``` 並 cd 進入該資料夾底下，輸入``` git init``` 初始化本地 Repository。
   
  * 第二步-```git add```: 初始化之後，使用 ```git add```將檔案新增到本地 Repository 的暫存區，```git add``` 後面加上你要加入到版本控制的檔案名稱，```git add``` 會將檔案新增到暫存區，例如:```git add app.js```；如果想要全部一次新增的話，可以用 ```git add .```。
   
  * 第四步-```git status```: 使用 ```git status``` 確認剛剛的檔案有新增進暫存區，這時會顯示， ```On branch master Changes to be committed: <此處為檔案名稱>```。

  * 第三步-```git commit```: 這一步是要建立一個版本號資料庫並將上一步所新增的檔案移到該處，輸入指令 ```git commit -m"輸入此次變動的訊息"```，這裡要注意，訊息一定要輸入，不能空白。
   
  * 第四步-```git status```: commit 完之後再次輸入 ```git status```確認，此時會顯示```On branch master
  nothing to commit, working tree clean。```

  * 第五步-**建立遠端 Repository**: 到 github 網站上，建立一個空的 repository。

  * 第六步-```git remote add origin```: 在本地 repository 上輸入 git remote add origin <節點>，將本地與遠端連結在一起，例如: ```git remote add origin https://github.com/CHANG-CHING-CHUNG/test.git```。

  * 第七步-```git push```: 將本地與遠端連結在一起後，使用 ```git push``` 將本地檔案上傳到遠端，例如: ```git push -u origin master```，上傳完後，遠端頁面刷新就可看到剛剛 push 上去的檔案了。
   最後一步-```git pull```: 如果今天別人更動了遠端的檔案，而要跟遠端同步，輸入 ```git pull``` 將遠端的檔案同步到本地端，使自己本機的檔案永遠保持在最新，這一點在跟別人協作時非常重要，每次開始本地專案要開始作業時，最好都先 ```git pull``` 先同步過，以免衝突。

