
currentPage.add = function() {
	console.log("BookOpen :: add");
	
		var name = $("#fname").val();
		var email = $("#email").val();
		var alamat = $("#alamat").val();
		var telephone = $("#telephone").val();
		var jumlah = $("#select-native-1").val();
		var date1 = $("#date1").val();
		var date2 = $("#date2").val();

		
		
		formData = {
		name: name,
		email: email,
		alamat: alamat,
		telephone: telephone,
		jumlah: jumlah,
		date1: date1,
		date2: date2,
		idPost: sessionStorage.id
		
	}
	  if (name == "") {
		alert("Please enter full name");
	} else if (email == "") {
		alert("Please enter email");
	}else if (alamat == "") {
		alert("Please enter address");
	}else if (telephone == "") {
		alert("Please enter your number phone");
	}else if (jumlah == "") {
		alert("Please select number of group");
	}
	else if (date1 == "") {
		alert("Please select Sailing Date");
	}
	else if (date2 == "") {
		alert("Please select Date of Return");
	}else {
		$.ajax({
			type: "post",
			url: serviceURL +"bookPrivate.php",
			data: formData,
			dataType: "json",
			success: function(data) {
				alert("Your Book Success");
				
			},
			error: function() {
				alert("Your Book Failed");
			}
		});
	}
};