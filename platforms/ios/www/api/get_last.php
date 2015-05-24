<?php
//memberi pengalamatan khusus untuk json
header('Content-type: application/json');

include"../config/conf.php";



// array for JSON response
$response = array();


// get all promo from stand table
$query = tm::pilih("`tour` ORDER BY id DESC limit 10");

// check for empty result
if (mysqli_num_rows($query) > 0) {
    // looping through all results
    // stands node
    $response["last"] = array();
	
	 while ($row = mysqli_fetch_array($query)) {
        
		
		// temp stands array
        $lastdata = array();
        $lastdata["id"] = $row["id"];
        $lastdata["id_paket"] = $row["id_paket"];
        $lastdata["title"] = $row["title"];
	    $lastdata["image"] = $row["image"];
    
 
        // push single promo into final response array
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
?>