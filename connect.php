<?php
$un = $_POST['username'];
$email = $_POST['email'];
$pass = $_POST['password'];

//database connection
$conn = new mysqli('localhost', 'tejeshsa0', '1234');
if ($conn->connect_error) {
    die('Connection Failed :');
} else {
    $stmt = $conn->prepare("insert into registration(username,email,password) values(?,?,?)");
    $stmt->bind_param("sss", $un, $email, $pass);
    $stmt->execute();
    $stmt->close();
    $conn->close();
}
?>