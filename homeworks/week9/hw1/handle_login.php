<?php
  session_start();
  require_once('./conn.php');
  require_once('./utilis.php');
  echo generateToken();
  if (empty($_POST['username']) || empty($_POST['password'])) {
    header('Location: login.php?errCode=1');
    die('請檢查資料');
  }
  
  $username = $_POST['username'];
  $password = $_POST['password'];
  
  
  $sql = sprintf(
    "SELECT * from John_users WHERE username='%s' and password='%s'"
    ,$username
    ,$password);

  $result = $conn->query($sql);
  
  if ($result) {
    if ($result->num_rows) {
      $_SESSION['username'] = $username;
      header('Location: ./index.php');
    } else {
      header('Location: ./login.php?errCode=2');
    }
  } else {
    die($conn->error);
  }

?>