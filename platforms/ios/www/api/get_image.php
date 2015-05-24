<?php
//memberi pengalamatan khusus untuk json
header('Content-type: application/json');

include"../config/conf.php";




$response = array();


$query = tm::pilih("`` WHERE id_tour='$id' ORDER BY id DESC");




if (!empty($query)) {

if (mysqli_num_rows($query) > 0) {


    $response["list"] = array();

	
	 while ($row = mysqli_fetch_array($query)) {
		
        $list = array();
        $list["id"] = $row["id"];
        $list["id_tour"] = $row["id_tour"];
        $list["list"] = $row["list"];

		
      
 
        array_push($response["list"], $list);
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

else {
    echo"error";
}
?>