$( document ).ready(function() {
	$('#submit').on("click", function (e) {
		e.preventDefault();

		$('.formspree-success').css('display', 'inline');
	});
});
