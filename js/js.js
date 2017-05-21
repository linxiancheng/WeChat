$(function(){
	var search_input = $(".sousuo .ss_top form input");
	var header_a = $("#header h3 a");
	var indexbox = $("#header .indexbox");
	search_input.focus(function(){
	window.location.href="./sousou.html"; 
	});
	header_a.click(function(){
		indexbox.toggle();
	});
});
