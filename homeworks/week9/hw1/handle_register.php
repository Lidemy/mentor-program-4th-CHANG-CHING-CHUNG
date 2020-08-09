<?php
  require_once('./conn.php');
  if (empty($_POST['nickname']) || empty($_POST['username']) || empty($_POST['password'])) {
    header('Location: register.php?errCode=1');
    die('請檢查資料');
  }
  
  $nickname = $_POST['nickname'];
  $username = $_POST['username'];
  $password = $_POST['password'];
  
  
  $sql = "INSERT INTO John_users(nickname, username, password) VALUES('$nickname', '$username', '$password')";

  $result = $conn->query($sql);
  
  if ($result) {
    header('Location: ./index.php');
  } else {
    $code = $conn->errno;
    if ($code === 1062) {
      header("Location: register.php?errCode=2");
    }
    die($conn->error);
  }

?>