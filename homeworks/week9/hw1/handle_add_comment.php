<?php
  session_start();
  require_once('./conn.php');
  require_once('./utilis.php');
  
  if (empty($_POST['content'])) {
    header('Location: index.php?errCode=1');
    die('請檢查資料');
  }
  
  $row = getUserFromusername($_SESSION['username']);
  $nickname = $row['nickname'];
  $content = $_POST['content'];
  
  $sql = "INSERT INTO John_comments(nickname, content) VALUES('$nickname', '$content')";

  $result = $conn->query($sql);
  
  if ($result) {
    header('Location: ./index.php');
  } else {
    echo "Failed, " . $conn->error;
  }

?>