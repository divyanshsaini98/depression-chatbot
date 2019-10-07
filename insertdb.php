<?php
    require('mysql.php');  
    $user_name=$_POST["username"];
    $email=$_POST["email"];
    $contact=$_POST["tel"];
    $age=$_POST["age"];
    $econtact=$_POST["tel2"];
    $sql="insert into `person` (name,mail,contact,age,econtact) values ('$user_name','$email','$contact',$age,'$econtact')";
    $result=mysqli_query($con,$sql);
    echo "<br/> Kindly ensure you remember this ID further process requires this ID <br/>";
    $sql1="select ID from `person` where mail='$email';";
    $result1=mysqli_query($con,$sql1);
     while($row=mysqli_fetch_array($result1))
        echo "<b>"."ID:".$row["ID"]."</b>"."<br>";
   header("refresh:10;url=index.html");
?>
