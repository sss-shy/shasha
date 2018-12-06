/*
 * 购物车
 */
$(function() {

	$('.sidecart-text').click(function() {
		$('#js_sidecart').css('display', 'block');
	});
	$('#js_closecart').click(function() {
		$('#js_sidecart').css('display', 'none');
	});
	//主页购物车效果
	refreshCart();

	function refreshCart() {
		$('#js_updatecart').empty();

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
			$('#js_updatecart').append($cartList).append('<div class="sidecart-totle" style="position: absolute; bottom: 60px;">共 <span id="J_sidecart-totalitem" class="color-pink">' + addcarts.length + '</span> 件商品已选择 <span id="J_sidecart-selecteditem"class="color-pink">' + addcarts.length + '</span> 件<strong id="J_sidecart-subtotal" class="color-pink">￥' + sumprice + '</strong></div><a href="Shopping Cart.html" class="btn-sidecart">去购物车结算</a>');
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
	//购物车页面效果

	refresh();

	function refresh() {
		$('.J_cart-table').empty();
		var addcarts = $.cookie("addcarts") ? JSON.parse($.cookie("addcarts")) : false;
		if(addcarts) {
			var sumPrice = 0;
			for(var i = 0; i < addcarts.length; i++) {
				var subtotal = parseInt(addcarts[i].price) * parseInt(addcarts[i].num);
				var _tr = $('<tbody><tr><td class="ui-carttable-td1"><div class="ui-cart-pimg"><a href=""><img src="' + addcarts[i].img + '"></a></div></td><td class="ui-carttable-td2"><div><a>' + addcarts[i].info + '</a></div><div class="ui-carttable-spec">' + addcarts[i].num + '件&nbsp;</div></td><td class="J-price">￥' + addcarts[i].price + '</td><td class="J-quantity"><div class="p-quantity"><a class="btn-decrease">-</a><input class="action-quantity-input" type="text" value="1"><a class="btn-increase">+</a></div></td><td class="J-subtotal color-pink">￥' + subtotal + '</td><td class="J-btnDelete"><a class="ui-carttable-action">删除</a></td></tbody>');
				$('.J_cart-table').append(_tr);

			}
			$('.J_cart-table').prepend('<thead><tr><th class="ui-carttable-th1"><label for="HKDepot">香港直送</label></th><th class="ui-carttable-th2">商品名称</th><th>单价</th><th>数量</th><th>小计</th><th>&emsp;</th></tr></thead>');
		}
		//商品数量
		$('.btn-decrease').click(function() {
			var num = parseInt($(this).closest('div').find('input').val());
			num--;
			$(this).closest('div').find('input').val(num);
		});
		$('.btn-increase').click(function() {
			var num = parseInt($(this).closest('div').find('input').val());
			num++;
			$(this).closest('div').find('input').val(num);
		});
		$('.J-btnDelete a').click(function() {
			for(var i = 0; i < addcarts.length; i++) {
				if(addcarts[i].img == $(this).closest('tr').find('img').attr('src')) {
					var index = i;
				}
			}
			addcarts.splice(index, 1);
			$.cookie("addcarts", JSON.stringify(addcarts), {
				expires: 22,
				path: "/"
			});
			refresh();
		})
	}
})