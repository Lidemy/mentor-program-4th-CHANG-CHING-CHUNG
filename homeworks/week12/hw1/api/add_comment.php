<?php
  include("config.php");
  header('Content-Type: application/json; charset=utf-8');
  
    function addcomment($nickname,$content) {
      global $conn;
  
      $sql = "INSERT INTO John_comments (nickname, content) VALUES (?, ?)";
      // $sql = "INSERT INTO comments (nickname, content) VALUES ('$nickname', '$content')";
      $stmt = mysqli_prepare($conn, $sql);
      mysqli_stmt_bind_param($stmt, "ss", $nickname, $content);

      if (mysqli_execute($stmt) === TRUE) {
        echo "新增成功";
      } else {
        echo "發生錯誤";
      }
    }
  $nickname;
  $content;
  if(!empty($_POST["nickname"]) && !empty($_POST["content"])) {
    $nickname = $_POST["nickname"];
    $content = $_POST["content"];
    addcomment($nickname,$content);
  } else {
    echo "資料不齊全";
  }
?>