/*
	 * topbar顶部栏
	 */
$(function(){
	$('.topbar .member-bar li').eq(0).hover(function() {
		$(this).find('dl').slideDown(300);
	}, function() {
		$(this).find('dl').slideUp(300);
	});
	$('.topbar .member-bar li').eq(5).hover(function() {
		$(this).find('dl').slideDown(300);
		$(this).find('a').slice(2).hover(function() {
			var index = $(this).index();
			$(this).closest('dl').css('width', '210px')
			$(this).closest('dl').find('dd').eq(index - 1).css('display', 'block');
		}, function() {
			var index = $(this).index();
			$(this).closest('dl').css('width', '86px')
			$(this).closest('dl').find('dd').eq(index - 1).css('display', 'none');
		})
	}, function() {
		$(this).find('dl').slideUp(300);
	});
})
	
