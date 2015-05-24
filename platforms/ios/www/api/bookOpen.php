<?php
 
/*
 * Following code will create a new task row
 * All task details are read from HTTP Post Request
 */
 
// array for JSON response
$response = array();
 
 
 //memberi pengalamatan khusus untuk json
header('Content-type: application/json');

include"../config/conf.php";

 
// check for required fields
if (isset($_POST['kirim']) ) {
 
	$id_post = $_POST['id_post'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $alamat = $_POST['alamat'];
    $telephone = $_POST['telephone'];
    $jumlah = $_POST['jumlah'];
 
 
	$result = tm::masuk("`book_open` VALUES (null,'$id_post','$name','$email','$alamat','$telephone','$jumlah')");
 
    // check if row inserted or not
    if ($result) {
        // successfully inserted into database
        $response["success"] = 1;
        $response["message"] = "Task successfully created.";
 
        // echoing JSON response
        echo json_encode($response);
    } else {
        // failed to insert row
        $response["success"] = 0;
        $response["message"] = "Oops! An error occurred.";
 
        // echoing JSON response
        echo json_encode($response);
    }
} else {
    // required field is missing
    $response["success"] = 0;
    $response["message"] = "Required field(s) is missing";
 
    // echoing JSON response
    echo json_encode($response);
}
?>