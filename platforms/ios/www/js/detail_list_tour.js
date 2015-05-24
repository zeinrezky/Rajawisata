	console.log("detailPackage :: init");


		formData = {
		id: sessionStorage.id
	}
		$.ajax({
		type: "get",
		url: serviceURL +"get_detail_list.php",
		data: formData,
		dataType: "json",
		success: function(data) {
			var ul = $('#list-tour');
			var html = '';
			$.each(data.list, function(index, item) {
				html += '<li>'+ item.list +'</li>';
			});
			ul.append(html);
		},
		error: function() {
			alert("Detail task failure");
		}
	});

