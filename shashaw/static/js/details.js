$(function() {
	var firSrc = $('.thumb_list li').find('img').eq(0).attr('src');
	$('.album-zooms-container').find('img').attr('src', firSrc);
	$('.product-album-pic').find('img').attr('src', firSrc);
	//图片列表 切换
	$('.thumb_list li').find('img').mouseenter(function() {
		var _src = $(this).attr('src');
		$('.product-album-pic,.album-zooms-container').find('img').attr('src', _src);
		$('.thumb_list li').removeClass('active');
		$(this).closest('li').addClass('active');
	});
	//上下页
	$('.product-album-thumb .next').find('a').css('color', '#e5cbb2');
	$('.product-album-thumb .next').click(function() {
		$('.thumb_list ul').css('margin-left', '-108px');
		$(this).find('a').css('color', '#ccc');
		$('.product-album-thumb .prev').find('a').css('color', '#e5cbb2');
	})
	$('.product-album-thumb .prev').click(function() {
		$('.thumb_list ul').css('margin-left', '0px');
		$(this).find('a').css('color', '#ccc');
		$('.product-album-thumb .next').find('a').css('color', '#e5cbb2');
	});
	//放大镜
	$('.album-preview-container').mousemove(function(e) {
		$('.album-zooms-handle').css('visibility', 'visible');
		$('.album-zooms-container').css('visibility', 'visible');
		var top = e.pageY - ($(".album-preview-container").offset().top) - 75;
		var left = e.pageX - ($(".album-preview-container").offset().left) - 100;
		if(top <= 0) {
			top = 0;
		}
		if(left <= 0) {
			left = 0;
		}
		if(top >= 150) {
			top = 150;
		}
		if(left >= 100) {
			left = 100;
		}
		$(".album-zooms-handle").css({
			'left': left,
			'top': top
		})
		var ott = top / 300 * 600
		var oll = left / 300 * 600
		$('.album-zooms-container img').css({
			'left': -oll,
			'top': -ott
		});
	});
	$('.album-preview-container').on('mouseout', function() {
		$('.album-zooms-handle').css('visibility', 'hidden');
		$('.album-zooms-container').css('visibility', 'hidden');
	})
	//商品数量
	$('.btn-decrease').click(function() {
		var num = parseInt($('.action-quantity-input').val());
		num --;
		$('.action-quantity-input').val(num);
	});
	$('.btn-increase').click(function() {
		var num = parseInt($('.action-quantity-input').val());
		num ++;
		$('.action-quantity-input').val(num);
	});
	//二维码
	$('.action-handle').hover(function() {
		$('.pop-body').css('display','block');
	},function() {
		$('.pop-body').css('display','none');
	})
})