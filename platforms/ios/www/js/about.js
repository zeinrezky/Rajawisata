	console.log("about :: init");


		formData = {
		id: sessionStorage.id
	}
		$.ajax({
		type: "get",
		url: serviceURL +"get_about.php",
		data: formData,
		dataType: "json",
		success: function(data) {
			var ul = $('#about1');
			var html = '';
			$.each(data.about, function(index, item) {
				html +=  item.about ;
			});
			ul.append(html);
		},
		error: function() {
		
		}
	});
	
	$.ajax({
		type: "get",
		url: serviceURL +"get_term.php",
		data: formData,
		dataType: "json",
		success: function(data) {
			var ul = $('#term');
			var html = '';
			$.each(data.about, function(index, item) {
					html +=  item.term ;
			});
			ul.append(html);
		},
		error: function() {
		
		}
	});
	$.ajax({
		type: "get",
		url: serviceURL +"get_team.php",
		data: formData,
		dataType: "json",
		success: function(data) {
			var ul = $('#team');
			var html = '';
			$.each(data.about, function(index, item) {
			var window =  "window.open('"  ;
			
				html += '<div class="col-md-4 col-sm-4 col-xs-6 col-100"><img class="img-circle img-scale" src="'+linkImg+'team/'+item.image+'"/><div class="section-team">	<h3 class="margin-name">'+item.name+'</h3><span class="jobs">'+item.position+'</span><li style="list-style:none;"><img onClick="'+ window +''+item.facebook+''+petik+'" src="img/icon-01.jpg" class="jarak_gambar"><img  onClick="'+ window +''+item.twitter+''+petik+'" src="img/icon-02.jpg" class="jarak_gambar"><img  onClick="'+ window +''+item.skype+''+petik+'" src="img/icon-03.jpg"  class="jarak_gambar"><img  onClick="'+ window +''+item.linkedin+''+petik+'" src="img/icon-04.jpg"  class="jarak_gambar"></li></div></div>';
			});
			ul.append(html);
		},
		error: function() {
		
		}
	});


