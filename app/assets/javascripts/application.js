// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
//= require jquery.masonry.min

$(document).ready(function(){
	FASHIONFEED.init();
});



FASHIONFEED = {}

FASHIONFEED.init = function(){
	if(location.hash){
		//alert(location.hash.substring(1));
		FASHIONFEED.showOverlay(location.hash.substring(1));
	}
	/*
$(function(){
  $('#container').masonry({
    // options
    itemSelector : '.item',
    columnWidth : 240
  });
});
*/
var $container = $('#container');
$container.imagesLoaded(function(){
  $container.masonry({

     itemSelector: '.item',
  columnWidth: 20,
  isAnimated: true,
  isFitWidth: true
  });
  $('.item').css('opacity',1.0);
});

}
FASHIONFEED.setBigImage  = function(data){
 // $('#bigimage').attr("src",data.image_url);


  var newImgID = 'img'+data.id;
  $("#bigimage-container").prepend('<img id="'+newImgID+'" class="bigimage" alt="'+data.designer+'" src="'+data.image_url+'" onclick="FASHIONFEED.nextBigImage()" />')
  $("#bigimage-caption").text(data.designer);
  
  $("#"+newImgID).animate({
    opacity: 1.0
  }, 200, function() {
    // Animation complete.

  });

}

FASHIONFEED.nextBigImage = function(sender){
/*
$('#img'+FASHIONFEED.element.id).animate({
    visible: 'toggle'
  }, 2000, function() {
    // Animation complete.
    $(this).remove();

  });
*/
//$('#img'+FASHIONFEED.element.id).hide(2000);
  $('#img'+FASHIONFEED.element.id).remove();

  var nextID;
  console
  if(FASHIONFEED.element!=null){ // truthiness?
    nextID = FASHIONFEED.element.id+1;
  } else {
    nextID = 1;
  }
  FASHIONFEED.updateOverlay(nextID);
  console.log("next big image: "+nextID);
}

FASHIONFEED.updateOverlay = function(photo_id){
  $.ajax({ type: 'GET',
contentType: "application/json",
url: "/photos/"+photo_id, 
data:{ format: "json"}
}).done(function(data) {
FASHIONFEED.element = data;
FASHIONFEED.setBigImage(data);

})
    .fail(function() { 

      //alert("error"); 

    })
    .always(function() { 

      //alert("complete"); 

    });
}

FASHIONFEED.showOverlay = function(photo_id){

FASHIONFEED.updateOverlay(photo_id);

	$("#overlay").css('display','block');
  $("#overlay").css('opacity',0);
	


  $('#overlay').animate({
    opacity: 1.0
  }, 500, function() {
    // Animation complete.

  });
   $('.bigimage').animate({
    opacity: 1.0
  }, 500, function() {
    // Animation complete.

  });


  




}

function onSuccess(){
//alert("success");
}
function onError(){
//alert("error");
}

FASHIONFEED.hideOverlay = function(){
	//$("#overlay").css('display','none');
  var scrollmem = $('body').scrollTop();
//window.location.hash = hash;

	location.hash = "";
$('html,body').scrollTop(scrollmem);
  
  $("#overlay").css('opacity',1.0);



  $('#overlay').animate({
    opacity: 0
  }, 200, function() {
    // Animation complete.
    $("#overlay").css('display','none');
    $("img.bigimage").remove();

  });

}