<?php
    $servername="sql12.freemysqlhosting.net";
    $dbuser="sql12307668";
    $dbpass=" PhxAb78TJy";
    $database="sql12307668";

    $con=mysqli_connect($servername, $dbuser, $dbpass, $database);
    if(!$con)
        die("ERROR: Could not connect. ".mysqli_connect_error());
    
?>