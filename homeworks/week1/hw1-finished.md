# 交作業流程

1. 新開 branch ，例如:第一週，所以開一個叫week1的branch 指令: ```git branch week1```.
2. 切換到剛開的 branch， 指令: ```git checkout week1```.
3. 寫完作業後用指令 ```git add``` . 將剛剛寫好的作業加入到暫存區。
4. 使用指令: ```git commit``` 將暫存區檔案存到本地repo
5. 使用指令: ```git push origin week1```，將本地repo的檔案推上遠端。
6. 接者到 複製的課綱頁面下，例如: ```mentor-program-4th-CHANG-CHING-CHUNG```，點選 ```create pull request```，將 week1 合併到master裡。
7. 到學習系統頁面，點選作業列表，新增作業，選擇作業週數，例: wee1，將```pull request```的連結頁面貼上並確認已檢查過作業及自我檢討後按送出。
8. 當作業被批改完並被 merge 後，將目前分支切換回 master ，指令: ```git checkout master```。
9. 使用指令: ```git pull origin master``` 將遠端最新的檔案拉到本地端同步。
10. 刪除 wee1 分支，指令: ```git brach -d week1```。
