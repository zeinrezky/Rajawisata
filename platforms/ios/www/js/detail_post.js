	console.log("detailPost :: init");

	
		formData = {
		id: sessionStorage.id
		}
			
		$.ajax({
		type: "get",
		url: serviceURL + "get_detail_privat.php",
		data: formData,
		dataType: "json",
		
		success: function(data) {
	
			$('#judul')
			.append('<div class="title-package" style="margin-left:0px;"><span class="first-title-package">'+data.last[0].title+'</span><a href="#" data-rel="back"><span class="fa fa-chevron-left icon-back"></span></a><a href="#"><img class="icon-share" src="img/icon_share.png" onClick="share()"></a><div id="menu-kanan"><ul><li style="padding-top: 10px;"><a href="#" onClick= '+ fbTour +''+data.last[0].link+''+petik+'><span class="fa fa-facebook"></a></li><li style="color:#fff;"><a href="#" onClick= '+ twitterTour +''+data.last[0].link+''+petik+'><span class="fa fa-twitter"></a></li><li style="color:red;"><a href="#" onClick= '+ gmailTour +''+data.last[0].link+''+petik+'><span class="fa fa-google-plus"></a></li><li><a style="color:#2ecc71;" href="#" onClick= '+ waTour +''+data.last[0].link+''+petik+'><span class="fa fa-whatsapp"></a></li><li><a href="#" onClick= '+ bbmTour +''+data.last[0].link+''+petik+'><img src="img/icon_bbm.png" width="23.2px" height="25px" "></a></li><li><a href="#" onClick= '+ pathTour +''+data.last[0].link+''+petik+'><img src="img/path.png" width="23.2px" height="25px" "></a></li></ul></div></div>')
			$('#detail-img')
			.append('<img class="img-content" src="'+linkImg+''+data.last[0].image+'"/>')
			$('#text-summary')
			.append('<div class="tour-summary"><span class="title-tour-summary">Tour Summary</span></div>')
			$('#text-todo')
			.append('<div class="tour-summary"><span class="title-tour-summary">To-Do</span></div>')
			$('#duration')
			.append('<span class="tour-duration">Tour Duration</span><span class="departure">Departure</span><br><span class="duration-tour">'+data.last[0].duration+'</span><span class="departure-request">'+data.last[0].depart+'</span>')
			$('#itinerary')
			.append('<p class="first-about">'+data.last[0].itinerary+'</p>')
			$('#term-con')
			.append('<a ><img src="img/icon_term_condition.png" onClick="'+ termCon +''+data.last[0].term+''+ petik +'" id="term"  width="100px"></a>')
			$('#book')
			.append('<div class="ui-block-a"><div class="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset"><input style="padding-left:20px;" class="input-submit-book" type="text" value="Rp.'+data.last[0].price+'" disabled /></div></div><div class="ui-block-b" style="margin-top:-5px;"><input onClick="bookPrivate.detailPage(' + data.last[0].id + ');" type="submit" value="BOOK NOW" data-ajax="false" data-role="none" class="submit-booking position-booking"/></div>')
		
			
		},
		error: function() {
			alert("Detail task failure");
		}
	});

