<?php
 $username=$_POST['username'];
 $email=$_POST['email'];
 $password=$_POST['password'];

$conn=new mysqli('localhost','root','','metro_exodos_user');
if($conn->connect_error)
{
    die('connection Failed':.$conn->connect_error)
}else
{

    $sql = "INSERT INTO `users`(`username`, `email`, `password`) VALUES ('$username','$email','$password')";
    mysqli_query($conn,$sql);

}



