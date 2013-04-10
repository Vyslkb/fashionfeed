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
  columnWidth: 120,
  isAnimated: true,
  isFitWidth: true
  });
  $('.item').css('opacity',1.0);
});

}
FASHIONFEED.showOverlay = function(hash_str){
	$("#overlay").css('display','block');
	$('#bigimage').attr("src",hash_str);

}

FASHIONFEED.hideOverlay = function(){
	$("#overlay").css('display','none');
	location.hash = "";

}