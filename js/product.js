$(function(){
	$(".btnStyle01 li a").click(function(){
		if($(this).parent().attr("class") != "currentshow") {
			$(".btnStyle01 li").removeClass("currentshow");
			$(this).parent().addClass("currentshow");
			var id = $(this).attr("href");
			$(".slide").each(function(){
				if($(this).attr("id") == id) {
					$(this).slideDown("slow");
				} else {
					$(this).slideUp("slow");
				}
			});
		}
		return false;
	});
});