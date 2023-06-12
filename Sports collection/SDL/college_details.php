<?php


$host="localhost";
$username="root";
$password="";
$database="college";


$conn=mysqli_connect($host,$username,$password,$database);


if(!$conn)
{
    die("Error");
}


    if($_SERVER["REQUEST_METHOD"]=="POST")
    {
        $prn=$_POST["prn"];
        $fname=$_POST["fname"];
        $lname=$_POST["lname"];
        $address=$_POST["address"];
        $number=$_POST["number"];
        $fee=$_POST["fee"];
       
       
        $sql="insert into ctable(prn,fname,lname,address,number,fees) values('$prn','$fname','$lname','$address','$number','$fee')";


        if(mysqli_query($conn,$sql))
        {
            echo "successfully";
        }
       
        else
        {
            "error";
        }
               
    }
   
    $sql="select * from ctable";
    $result=mysqli_query($conn,$sql);
   
    if(mysqli_num_rows($result)>0)
    {
        while($row=mysqli_fetch_assoc($result))
        {
            echo "<br> PRN Number : ".$row["prn"]." <br> First name : ".$row["fname"]."<br>Last name : ".$row["lname"]."<br>Address : ".$row["address"]."<br>Mobile number : ".$row["number"]."<br>Fees status : ".$row["fees"]."<br><br>";


        }
       
    }
   




?>
