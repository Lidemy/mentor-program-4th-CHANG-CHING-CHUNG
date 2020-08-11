<?php
require_once('./conn.php');
session_start();

$username;
$password;
if (!empty($_POST['username']) || !empty($_POST['password'])) {
  $username = $_POST['username'];
  $password = $_POST['password'];
} else {
  header("Location: index.php?errCode=1");
  die("資料不齊全");
}

$sql = "SELECT id,nickname ,username, password from John_users WHERE username = ? AND password = ?";

if ($stmt = $conn->prepare($sql)) {
  $stmt->bind_param("ss",$username,$password);
  $stmt->execute();
  $stmt->bind_result($id, $nickname, $name, $pass);
  if ($stmt->fetch()) {
    $_SESSION['nickname'] = $nickname;
    $_SESSION['username'] = $name;
    $stmt->close();
    header("Location: ./index.php");
  }
} else {
  header("Location: ./index.php?errCode=2");
  die($conn->error);
}

?>