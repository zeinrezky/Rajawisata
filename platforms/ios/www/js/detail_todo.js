	console.log("detailPackage :: init");


		formData = {
		id: sessionStorage.id
	}
		$.ajax({
		type: "get",
		url: serviceURL + "get_todo.php",
		data: formData,
		dataType: "json",
		success: function(data) {
			var ul = $('#todo');
			var html = '';
			$.each(data.image, function(index, item) {
			html += '<img src="'+linkImg+''+ item.image +'" width="75px"/>';
			});
			ul.append(html);
		},
		error: function() {
			alert("Detail task failure");
		}
	});

