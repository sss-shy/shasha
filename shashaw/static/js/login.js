$(function(){
				
	//判断是否存在该用户(匹配用户名和密码是否都一致)
	$(":button").click(function(){
		var $user = $('.signup_box li').eq(0);
		var $psd = $('.signup_box li').eq(1);
		var users = $.cookie("users");
		if (users) {
			
			users = JSON.parse(users); //cookie中的所有注册过的用户
			
			var isExists = false; //表示是否存在该用户
			for (var i=0; i<users.length; i++) {
				if ( users[i].name == $user.find('input').val() && users[i].pwd == $psd.find('input').val() ) {
					isExists = true;
					var success = $('<div class="success"><i class="iconfont">&#xe616;</i>登录成功</div>');
					$('body').append(success);
					var _name = users[i].name;
					setTimeout(function() {
						$('body').find('.success').remove();
						window.location.href="index.html?username="+_name;
//						console.log(users[i].name);
					}, 3000)	
				}
			}
			
			if (!isExists) {
				var defeat = $('<div class="defeat"><i class="iconfont">&#xe614;</i>用户名或密码错误</div>');
				$('body').append(defeat);
				setTimeout(function() {
					$('body').find('.defeat').remove();
				}, 5000);	
			}
			
		}
		else {
			var defeat = $('<div class="defeat"><i class="iconfont">&#xe614;</i>不存在用户</div>');
			$('body').append(defeat);
			setTimeout(function() {
				$('body').find('.defeat').remove();
			}, 5000);
		}
		return false;
	})
	
})
