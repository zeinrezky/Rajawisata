	console.log("detailImage :: init");


		formData = {
		id: sessionStorage.id
	}
		$.ajax({
		type: "get",
		url: serviceURL + "get_img_carousel.php",
		data: formData,
		dataType: "json",
		success: function(data) {
			var ul = $('#owl-demo');
			var html = '';
			$.each(data.list, function(index, item) {
				html += '<img class="img-notes" src="'+linkImg+''+item.image+'"/>';
			});
			ul.append(html);
		},
		error: function() {
			alert("adad");
		}
	});

