var serviceURL = "http://raja-wisata.com/apps/api/";
var linkImg = "http://raja-wisata.com/apps/admin/tmp/";
var termCon = "window.location" + "=" + "'http://raja-wisata.com/apps/admin/tmp/pdf/" ;
var petik = "'";

// link untuk travel notes//
// window.open('https://facebook.com', '_system', 'location=no');

var fbTour = 'window.open' + "('https://www.facebook.com/sharer.php?u=http://www.raja-wisata.com/tour-package/" ; 
var twitterTour = 'window.open' + "('http://twitter.com/share?url=http://www.raja-wisata.com/tour-package/" ; 
var gmailTour = 'window.open' + "('https://plus.google.com/share?url=http://raja-wisata.com/tour-package/" ; 
var waTour = 'window.open' + "('whatsapp://send?text=http://www.raja-wisata.com/tour-package/" ; 
var bbmTour = 'window.open' + "('bbm://http://www.raja-wisata.com/" ;
var pathTour = 'window.open' +"('path://send?text=http://www.raja-wisata.com/tour-package/" ; 
var petik = "','_system','location=no')";




// link untuk tour package//
var fb = 'window.open' + "('https://www.facebook.com/sharer.php?u=http://www.raja-wisata.com/travel-notes/" ; 
var twitter = 'window.open' + "('http://twitter.com/share?url=http://www.raja-wisata.com/travel-notes/" ; 
var gmail = 'window.open' + "('https://plus.google.com/share?url=http://raja-wisata.com/travel-notes/" ; 
var wa = 'window.open' + "('whatsapp://send?text=http://www.raja-wisata.com/travel-notes/" ; 
var bbm = 'window.open' + "('bbm://send?text=http://www.raja-wisata.com/travel-notes/" ;
var path = 'window.open' + "('path://send?text=http://www.raja-wisata.com/travel-notes/" ; 





 // book open//
 console.log("open book :: init");
 var currentPage = {};

 currentPage = {};

 currentPage.detailPage = function(id) {
 sessionStorage.setItem("id", id);
 window.location = "book_opentrip.html#" +id;
 };	

 // private book//
console.log("private book :: init");
var bookPrivate = {};

bookPrivate = {};

bookPrivate.detailPage = function(id) {
	sessionStorage.setItem("id", id);
	window.location = "book_privatetrip.html#" +id;
}