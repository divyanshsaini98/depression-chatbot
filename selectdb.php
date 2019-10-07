<?php
    require('mysql.php');
    
    $email=$_POST["email"];
    
    $id=$_POST["id"];
  
    $sql1="select * from `person` where mail='$email'and ID='$id';";
    $result1=mysqli_query($con,$sql1);
    if(mysqli_num_rows($result1)>0)
      header("refresh:2;url=index.html");
    else{
      echo "<b>Invalid account</br>Your password isnt matching with the stored one.</br>Please re-type the details correctly";
   header("refresh:10;url=select.html");
   
   }
?>