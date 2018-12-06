$(function() {
	//用户是否登录

	var url = window.location.search;
	if(url.length > 0) {
		$('#loginBar').css('display', 'none');
		$('#memberBar').css('display', 'block');
	} else {
		$('#loginBar').css('display', 'block');
		$('#memberBar').css('display', 'none');
	}
	//console.log(url.lastIndexOf('='));
	var loc = url.substring(url.lastIndexOf('=') + 1, url.length);
	//console.log(loc);
	$('#uname').html(loc);
	/*
	 * sidebar侧边栏
	 */
	$('.sidebar_link').on('mouseenter', function() {
		$father = $(this).closest('.sidetab');
		$father.css('background-color', 'rgb(236,63,125)');
		$father.find('.sidebar_tip').stop().animate({
			right: 38,
			"opacity": 1
		}, 300);
	})
	$('.sidetab').on('mouseleave', function() {

		$(this).css('background-color', '#4c4c4c')
		$(this).find('.sidebar_tip').stop().animate({
			right: 70,
			"opacity": 0
		}, 300);
	})
	$(window).on('scroll', function(e) {
		var scrollTop = $(window).scrollTop();
		if(scrollTop > 0) {
			$('.sideup').css('visibility', 'visible');
		} else {
			$('.sideup').css('visibility', 'hidden');
		}
		$('.sideup').on('click', function() {
			$(window).scrollTop(0);
		});

		/*
		 * index-scohead
		 */
		if(scrollTop > 650) {
			$('.index-scohead').fadeIn(500);
		} else {
			$('.index-scohead').fadeOut(500);
		}

		/*
		 * webtool
		 */
		var mustScroll = $('.mustcheck').offset().top,
			flashScroll = $('.flashsale').offset().top,
			newScroll = $('.newarrivals').offset().top,
			brandScroll = $('.hotbrands').offset().top;

		if(scrollTop >= mustScroll && scrollTop < flashScroll) {
			$('.webtool').fadeIn(500);
			$('.webtool li').removeClass('current');
			$('.webtool li').eq(0).addClass('current');
		} else if(scrollTop >= flashScroll && scrollTop < newScroll) {
			$('.webtool').fadeIn(500);
			$('.webtool li').removeClass('current');
			$('.webtool li').eq(1).addClass('current');
		} else if(scrollTop >= newScroll && scrollTop < brandScroll) {
			$('.webtool').fadeIn(500);
			$('.webtool li').removeClass('current');
			$('.webtool li').eq(2).addClass('current');
		} else if(scrollTop >= brandScroll) {
			$('.webtool').fadeIn(500);
			$('.webtool li').removeClass('current');
			$('.webtool li').eq(3).addClass('current');
		} else {
			$('.webtool').fadeOut(500);
			$('.webtool li').removeClass('current');
		}
		$('.webtool li').on('click', function(e) {
			var index = $(this).index();
			if(index == 0) {
				$(window).scrollTop(mustScroll);
			} else if(index == 1) {
				$(window).scrollTop(flashScroll);
			} else if(index == 2) {
				$(window).scrollTop(newScroll);
			} else if(index == 3) {
				$(window).scrollTop(brandScroll);
			}
			e.preventDefault();
		})
	})

	/*
	 * nav-bar导航栏
	 */
	$('.nav_item_more').hover(function() {
		$('.nav-box').slideDown(200);
	}, function() {
		$('.nav-box').slideUp(200);
	});

	/*
	 * nav-category分类导航
	 */
	$('.category_cont li').hover(function() {
		$(this).find('.cat_child_box').show();
	}, function() {
		$(this).find('.cat_child_box').hide();
	});

	$('.hot_category').find('li').not($('.hot_category').find('li').eq(-1)).hover(function() {
		$(this).find('a').css('color', '#ec3e7d');
		var index = $(this).index();
		$(this).parent().find('.magic_line').css('display', 'block').stop().animate({
			left: index * 91
		});
	}, function() {
		$(this).find('a').css('color', '#fff');
		$(this).parent().find('.magic_line').css('display', 'none');
	})

	/*
	 * banner
	 */
	var $ol = $('#banner_list');
	$.getJSON("json/banner.json", function(data) {
		for(var i = 0; i < data.length; i++) {
			var obj = data[i];
			var a = $('<a></a>');

			var li = $('<li></li>');
			li.css('background', 'url(' + obj.url + ') center top no-repeat').addClass(obj.class);
			li.appendTo(a);
			a.appendTo($ol);
			$('.switchable-wp .slide-trigger').append('<li><a>' + (i + 1) + '</a></li>')
		}
		var $li = $('#banner_list li');
		var $li_tip = $('.switchable-wp .slide-trigger li');
		var size = $("#banner_list li").length;
		//初始化下标
		var i = 0;
		$li.eq(i).css('display', 'block');
		$li_tip.eq(i).addClass('active');
		//设置定时器，自动轮播
		var timer = setInterval(function() {
			i++;
			fadeImg();
		}, 4000)

		function fadeImg() {
			if(i >= size) {
				i = 0;
			}
			//			$li.animate({opacity:0}).eq(i).animate({opacity:1});
			$li.not($li.eq(i)).fadeOut();
			$li.eq(i).fadeIn();
			$li_tip.removeClass('active').eq(i).addClass('active');
		}
		$li_tip.mouseenter(function() {
			var index = $(this).index();
			i = index;
			fadeImg();
		})
		$('#banner_list').hover(function() {
			clearInterval(timer);
		}, function() {
			clearInterval(timer);
			timer = setInterval(function() {
				i++;
				fadeImg();
			}, 4000)
		})
	})

	/*
	 * mustcheck
	 */
	$('.mustcheck-list li').slice(0, 4).hover(function() {
		var index = $(this).index() + 1;
		$('.mustad1').css('background-image', 'url(img/mustad/left' + index + '.jpg)');
		$('.mustad2').css('background-image', 'url(img/mustad/right' + index + '.jpg)');
	}, function() {
		$('.mustad1').css('background-image', '');
		$('.mustad2').css('background-image', '');
	});

	/*
	 * flashsale
	 */
	$flash = $('.flashsale-list');
	$.getJSON("json/flashsale.json", function(data) {
		for(var i = 0; i < data.length; i++) {
			var obj = data[i];
			var li = $('<li></li>');
			li.html('<a href="Product Details.html" target="_blank"><i class="count"><b>' + obj.count + '</b></i><i class="buynow"></i><div class="flashsale-pic"><img src="img/flashsale/' + obj.pic + '.jpg" alt=""></div><div class="sale-price"><span class="buy_num fr">已售' + obj.buyNum + '件</span><span class="price tl">￥' + obj.price + '</span><span class="dis tl"><del>￥' + obj.dis + '</del></span></div><div class="flashsale-info"><div class="des01"><i class="icon iconfont">&#xe612;</i>' + obj.des01 + '</div><div class="des02">' + obj.des02 + '</div><p class="des03">' + obj.des03 + '</p><p class="des04">' + obj.des04 + '</p><p class="tr" id="iprefix_seckill_time_79834"><i class="icon iconfont">&#xe60e;</i> 剩余 <span class="day"></span>天<span class="hour"></span>时<span class="minute"></span>分 <span class="second"></span>秒</p></div></a></li>')
			li.appendTo($flash);

			function showTime() {
				var time_start = new Date(); //设定当前时间
				var time_end = new Date(); //设定目标时间
				time_end.setDate(time_end.getDate() + 1);
				time_end.setHours(9);
				time_end.setMinutes(0);
				time_end.setSeconds(0);
				var time_distance = time_end - time_start;

				// 计算时间差 
				var time_distance = time_end - time_start;
				// 天
				var int_day = Math.floor(time_distance / 86400000)
				time_distance -= int_day * 86400000;
				// 时
				var int_hour = Math.floor(time_distance / 3600000)
				time_distance -= int_hour * 3600000;
				// 分
				var int_minute = Math.floor(time_distance / 60000)
				time_distance -= int_minute * 60000;
				// 秒 
				var int_second = Math.floor(time_distance / 1000)
					// 时分秒为单数时、前面加零 
				if(int_day < 10) {
					int_day = "0" + int_day;
				}
				if(int_hour < 10) {
					int_hour = "0" + int_hour;
				}
				if(int_minute < 10) {
					int_minute = "0" + int_minute;
				}
				if(int_second < 10) {
					int_second = "0" + int_second;
				}
				// 显示时间 
				$(".day").html(int_day);
				$(".hour").html(int_hour);
				$(".minute").html(int_minute);
				$(".second").html(int_second);
			}
			// 设置定时器
			var timer = setInterval(showTime, 1000);
		}

	});

	/*
	 * newarrivals
	 */
	$tab_li = $('.customer-tab li').not($('.customer-tab li').eq(0));
	$tab_li.hover(function() {
		$(this).find('a').css('color', '#ec3e7d');
		var width = $(this).width();
		var _left = $(this).position().left;
		$('.customer-tab .move').css('width', width);
		$('.customer-tab .move').stop().animate({
			left: _left
		})
		console.log(width);
	}, function() {
		$(this).find('a').css('color', '#3e3e3e');
	});
	$newarrivals = $('.newarrivals-list');
	$.getJSON("json/newarrivals.json", function(data) {
		for(var i = 0; i < data.length; i++) {
			var obj = data[i];
			var li = $('<li class="normal"></li>');
			li.html('<div class="formall"><div class="formallcont"><div class="arrivals-pic"><b><img src="img/newarrivals/' + obj.messpic + '.png"></b><dl><dd><i class="icountry"><img src="img/newarrivals/' + obj.coupic + '.png"></i>韩国品牌</dd></dl><a href="" target="_blank"><img alt="" src="img/newarrivals/' + obj.pic + '.jpg"></a></div><div class="sale-price"><span class="count fr">' + obj.count + '折</span><span class="price tl">￥' + obj.price + '</span><span class="dis tl"><del>￥' + obj.dis + '</del></span></div><div class="arrivals-info"><div class="infoconts"><div class="des02"><a href="" target="_blank">' + obj.des02 + '</a></div><p class="des03"><a href="" target="_blank">' + obj.des03 + '</a></p><p class="des04">' + obj.des04 + '</p></div><!--秒杀简介--><div class="des05"><i class="icon iconfont">&#xe612;</i>' + obj.des05 + '</div><p class="salenum">已售' + obj.saleNum + '件</p></div><div class="btn-buy"><a class="btn btn-major action-addtocart"><span>加入购物车</span></a></div><!--加入收藏的商品也要可以加入购物车 --></div></div>')
			li.appendTo($newarrivals);
		}

		//addcart
		$('.action-addtocart').click(function() {
			console.log(21);
			var _img = $(this).closest('.formallcont').find('.arrivals-pic a img');
			var _price = $(this).closest('.formallcont').find('.sale-price .price');
			var _info = $(this).closest('.formallcont').find('.arrivals-info .des03 a');

			var addcarts = $.cookie("addcarts") ? JSON.parse($.cookie("addcarts")) : [];
			//先判断是否存在该商品
			for(var i = 0; i < addcarts.length; i++) {
				if(addcarts[i].info == _info.text()) {
					console.log('已添加至购物车')
					return;
				}
			}

			var addcart = {
				img: _img.attr('src'),
				price: _price.text().slice(1),
				info: _info.text(),
				num: 1
			}

			addcarts.push(addcart);
			$.cookie("addcarts", JSON.stringify(addcarts), {
				expires: 22,
				path: "/"
			});
			console.log($.cookie("addcarts"));
			refreshCart();

			function refreshCart() {
				$('#js_updatecart').empty()

				var addcarts = $.cookie("addcarts") ? JSON.parse($.cookie("addcarts")) : false;
				$('.sidecart-text span').html(addcarts.length)
				if(addcarts) {
					var $cartList = $('<ul class="sidecart-list" id="J_sideCartListMian"></ul>');
					var sumprice = 0;
					for(var i = 0; i < addcarts.length; i++) {
						var _li = $('<li class="sidecart-list-item"><div class="sidecart-product-img"><a><img src="' + addcarts[i].img + '" alt=""></a></div><div class="sidecart-product-info"><div class="sidecart-product-name"><a><label class="color-gold">【限时特卖】</label>' + addcarts[i].info + '</a></div><div class="sidecart-product-other clearfix"><div class="sidecart-product-action"><a class="J-cart-remove"><i class="iconfont" title="删除">&#xe61c;</i></a></div><div class="sidecart-product-price"><strong class="color-pink">￥' + addcarts[i].price + '</strong></div><div class="sidecart-product-quantity">x' + addcarts[i].num + '</div></div></div><li>');
						$cartList.append(_li);
						sumprice += parseInt(addcarts[i].price);
					}
					$('#js_updatecart').append($cartList).append('<div class="sidecart-totle" style="position: absolute; bottom: 60px;">共 <span id="J_sidecart-totalitem" class="color-pink">' + addcarts.length + '</span> 件商品已选择 <span id="J_sidecart-selecteditem"class="color-pink">' + addcarts.length + '</span> 件<strong id="J_sidecart-subtotal" class="color-pink">￥'+sumprice+'</strong></div><a href="Shopping Cart.html" class="btn-sidecart">去购物车结算</a>');
					$('.J-cart-remove').click(function() {
						for(var i = 0; i < addcarts.length; i++) {
							if(addcarts[i].img == $(this).closest('.sidecart-list-item').find('img').attr('src')) {
								var index = i;
							}
						}
						addcarts.splice(index, 1);
						$.cookie("addcarts", JSON.stringify(addcarts), {
							expires: 22,
							path: "/"
						});

						refreshCart()
					})
				} else {
					var $empty = '<div class="no-information ui-sidecart-empty">购物车中还没有商品，赶紧选购吧！</div>';
					$('#js_updatecart').append($empty);
				}
			}
		});

	});

	/*
	 * hotbrands
	 */
	$brandLogo = $('.brand_logo');
	$.getJSON("json/hotbrands.json", function(data) {
		for(var i = 0; i < data.length; i++) {
			var obj = data[i];
			var li = $('<li></li>');
			li.html('<p style="top: 0px;"><img class="img" src="img/brand/logo/' + obj.logo + '.jpg"><a href="Product Details.html" target="_blank"><img class="img" src="img/brand/img/' + obj.img + '.jpg"></a></p>')
			li.appendTo($brandLogo);
		}
		$('.brand_logo li').hover(function() {
			$(this).find('p').stop().animate({
				"top": "-150"
			}, 100)
		}, function() {
			$(this).find('p').stop().animate({
				"top": "0"
			}, 100)
		})
	});
})