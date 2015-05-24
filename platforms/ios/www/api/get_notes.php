<?php
//memberi pengalamatan khusus untuk json
header('Content-type: application/json');

include"../config/conf.php";



// array for JSON response
$response = array();


// get all promo from stand table
$query = tm::pilih("`travel` WHERE pilihan = 'artikel' ORDER BY id DESC");


// check for empty result
if (mysqli_num_rows($query) > 0) {
    // looping through all results
    // stands node
    $response["last"] = array();
	
	 while ($row = mysqli_fetch_array($query)) {
		
		$hasil1=strlen($row['description']);
		 if($hasil1 > 30 ){
		 $titik =  "...";
		 }else{
		 $titik = "";
		 }
		  $deskripsi = substr($row['description'],0,30);
		 $tampilkan = "$deskripsi $titik";
	 
	 
		$query2 = tm::pilih("`img_tour` WHERE id_tour = '$row[id]' ORDER BY id ASC");
        $row2 = mysqli_fetch_array($query2);
		
		// temp stands array
        $lastdata = array();
        $lastdata["id"] = $row["id"];
        $lastdata["title"] = $row["title"];
	    $lastdata["description"] = $tampilkan;
	    $lastdata["image"] = $row2["image"];


    
 
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