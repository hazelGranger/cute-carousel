$(document).ready(function(){

	$('.carousel').each(function  () {
		var carousel = $(this);
		var children_num = $(this).children().length;
		console.log(children_num);
			// next_slide.addClass("carousel-active");

		setInterval(function  () {
			var current_slide = carousel.find(".carousel-active");
			var next_slide = function(){
				return current_slide.next().get(0)? current_slide.next():carousel.children().first()
			}();
			current_slide.removeClass("carousel-active");
			next_slide.addClass("carousel-active");
		},2000);


	 })
});