	console.log("detailNotes :: init");


		formData = {
		id: sessionStorage.id
	}
		$.ajax({
		type: "get",
		url: serviceURL + "get_detail_notes.php",
		data: formData,
		dataType: "json",
		
		success: function(data) {
		
			$('#judul')
			.append('<div class="title-package" style="margin-left:0px;"><span class="first-title-package">'+data.last[0].title+'</span><a href="#" data-rel="back"><span class="fa fa-chevron-left icon-back"></span></a><a href="#"><img class="icon-share" src="img/icon_share.png" onClick="share()"></a><div id="menu-kanan"><ul><li style="padding-top: 10px;"><a href="#" onClick= '+ fb +''+data.last[0].link+''+petik+' ><span class="fa fa-facebook"></a></li><li style="color:#fff;"><a href="#" onClick= '+ twitter +''+data.last[0].link+''+petik+'><span class="fa fa-twitter"></a></li><li style="color:red;"><a href="#" onClick= '+ gmail +''+data.last[0].link+''+petik+'><span class="fa fa-google-plus"></a></li><li><a style="color:#2ecc71;" href="#" onClick= '+ wa +''+data.last[0].link+''+petik+'><span class="fa fa-whatsapp"></a></li><li><a href="#" onClick= '+ bbm +''+data.last[0].link+''+petik+'><img src="img/icon_bbm.png" width="23.2px" height="25px" "></a></li><li><a href="#" onClick= '+ path +''+data.last[0].link+''+petik+'><img src="img/path.png" width="23.2px" height="25px" "></a></li></ul></div></div>')
			$('#text-detail')
			.append('<p class="text-detail" >'+data.last[0].description+'</p>	');
			;	
		},
		error: function() {
			alert("Detail Error");
		}
	});

