<?php
//memberi pengalamatan khusus untuk json
header('Content-type: application/json');

include"../config/conf.php";




$response = array();

if (isset($_GET["id"])) {
$id = $_GET['id'];





$query = tm::pilih("`travel` WHERE id='$id' ORDER BY id DESC");




if (!empty($query)) {

if (mysqli_num_rows($query) > 0) {


    $response["last"] = array();

	
	 while ($row = mysqli_fetch_array($query)) {
		
        $lastdata = array();
        $lastdata["id"] = $row["id"];
        $lastdata["title"] = $row["title"];
	    $lastdata["description"] = $row["description"];
	    $lastdata["link"] = str_replace(" ","-",$row["title"]);

		
      
 
        array_push($response["last"], $lastdata);
    }
	  // success
    $response["success"] = 1;
 
    // echoing JSON response
    echo json_encode($response);
} else {
    // no promo found
    $response["success"] = 0;
    $response["message"] = "No stands found";
 
    // echo no promo JSON
    echo json_encode($response);

}
}
}
else {
    echo"error";
}
?>