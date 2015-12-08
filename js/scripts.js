// main js for page

$(document).ready(function(){

	$( "div.left-activity" ).hover(
		function() {
			$(this).children('.activity').children('.dots').addClass("hoverDot");
		},
		function() {
			$(this).children('.activity').children('.dots').removeClass("hoverDot");
		}
	);

});