<?php
//memberi pengalamatan khusus untuk json
header('Content-type: application/json');

include"../config/conf.php";




$response = array();

if (isset($_GET["id"])) {
$id = $_GET['id'];





$query = tm::pilih("`tour` WHERE id='$id' AND id_paket='1' ORDER BY id DESC");




if (!empty($query)) {

if (mysqli_num_rows($query) > 0) {


    $response["last"] = array();
    $response["list"] = array();
	
	 while ($row = mysqli_fetch_array($query)) {
	$query2 = tm::pilih("`detail_tour` WHERE id_tour='$id'  ORDER BY id DESC");
        $row2 = mysqli_fetch_array($query2);
	
        $lastdata = array();
        $lastdata["id"] = $row["id"];
        $lastdata["id_paket"] = $row["id_paket"];
        $lastdata["title"] = $row["title"];
	    $lastdata["image"] = $row["image"];
	    $lastdata["duration"] = $row["duration"];
	    // $lastdata["todo"] = ;
	    $lastdata["itinerary"] = $row["itinerary"];
	    // $lastdata["detail"] = ;
	    $lastdata["price"] = $row["price"];
	    $lastdata["depart"] = $row["depart"];
	    $lastdata["description"] = $row["description"];
	    $lastdata["term"] = $row["term"];
	    $lastdata["list"] = $row2["list"];
		$lastdata["link"] = str_replace(" ","-",$row["title"]);

      
 
        array_push($response["last"], $lastdata);
        array_push($response["list"], $lastdata["list"]);
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