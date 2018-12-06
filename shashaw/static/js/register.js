$(function() {
	/*
	 * register
	 */
	var $signup = $('.signup_box li'),
		$user = $('.signup_box li').eq(0),
		$psd = $('.signup_box li').eq(1),
		$rpsd = $('.signup_box li').eq(2),
		$code = $('.signup_box li').eq(3);

	$user.find('input').blur(function() {
		var _user = $(this).val();
		var RegEmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
			RegTel = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
		if(RegEmail.test(_user) || RegTel.test(_user)) {
			$user.find('.form-act span').remove();
			var trueUser = $('<span class="caution true notice-inline"><i class="iconfont">&#xe616;</i><span class="caution-content">该登录账号可用</span></span>');
			$user.find('.form-act').append(trueUser);
			setTimeout(function() {
				$user.find('.form-act span').remove();
			}, 3000);
		} else {
			$user.find('.form-act span').remove();
			var falseUser = $('<span class="caution error notice-inline"><i class="iconfont">&#xe614;</i><span class="caution-content">格式有误，请使用正确的邮箱地址或手机号码</span></span>');
			$user.find('.form-act').append(falseUser);
		}
	})
	$psd.find('input').keyup(function() {
		var psd = $(this).val();
		console.log(psd);
		//密码强度规则
		var rules = [{
			reg: /\d+/,
			weight: 2
		}, {
			reg: /[a-z]+/,
			weight: 4
		}, {
			reg: /[A-Z]+/,
			weight: 8
		}, {
			reg: /[~!@#\$%^&*\(\)\{\};,.\?\/'"]/,
			weight: 16
		}];
		//密码强度
		var strongLevel = {
			'0-8': '差',
			'8-16': '弱',
			'16-24': '中',
			'24-32': '强'
		};
		var weight = 0;
		for(var i = rules.length - 1; i >= 0; i--) {	
			if(rules[i].reg.test(psd)) {
				weight |= rules[i].weight;
			}
		}
		console.log(weight);
		var key = '24-32';
		if(weight <= 8){
			key = '0-8';
		} else if(weight <= 16) {
			key = '8-16';
		} else if(weight <= 24) { 
			key = '16-24';
		}
		
		if(strongLevel[key]=='差') {
			$('.password-check').css('visibility','visible');
			$('.password-check em').css('display','none');
			$('.password-check .poor').css('display','block');
		} else if (strongLevel[key]=='弱') {
			$('.password-check').css('visibility','visible');
			$('.password-check em').css('display','none');
			$('.password-check .weak').css('display','block');
		} else if (strongLevel[key]=='中') {
			$('.password-check').css('visibility','visible');
			$('.password-check em').css('display','none');
			$('.password-check .good').css('display','block');
		} else if (strongLevel[key]=='强') {
			$('.password-check').css('visibility','visible');
			$('.password-check em').css('display','none');
			$('.password-check .strong').css('display','block');
		} else {
			$('.password-check em').css('display','none');
			$('.password-check').css('visibility','hidden');
		}
	});
	var code;
    function createCode() {
        code = "";
        var codeLength = 4; //验证码的长度
        var checkCode = $("#checkCode");
        var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        	'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //所有候选组成验证码的字符，当然也可以用中文的
        for (var i = 0; i < codeLength; i++) 
        {
            var charNum = Math.floor(Math.random() * 52);
            code += codeChars[charNum];
        }
        $('.code').html(code);
    }
    createCode();
    $('.code,.verify-code').click(function() {
    		createCode();
    })
    $('.btn-big').click(function() {
    		var userTest,psdTest,rpsdTest,codeTest = 0;
    		if($user.find('input').val().length < 5) {
    			var falseUser = $('<span class="caution error notice-inline"><i class="iconfont">&#xe614;</i><span class="caution-content">请填写邮箱或手机号，最少5个字符</span></span>');
			$user.find('.form-act').append(falseUser);
    		}else {
    			$user.find('.form-act span').remove();
    			userTest = 1;
    		}
    		if($psd.find('input').val().length < 6) {
    			var falsePsd = $('<span class="caution error notice-inline"><i class="iconfont">&#xe614;</i><span class="caution-content">请填写密码，6-16个字符</span></span>');
			$psd.find('.form-act').append(falsePsd);
    		}else {
    			$psd.find('.form-act span').remove();
    			psdTest = 1;
    		}
    		if($psd.find('input').val() != $rpsd.find('input').val()) {
    			var falserPsd = $('<span class="caution error notice-inline"><i class="iconfont">&#xe614;</i><span class="caution-content">密码与确认密码不相符，请重新填写</span></span>');
			$rpsd.find('.form-act').append(falserPsd);
    		}else {
    			$rpsd.find('.form-act span').remove();   
    			rpsdTest = 1;
    		}
    		if($code.find('input').val() != code) {
    			var falsePsd = $('<span class="caution error notice-inline"><i class="iconfont">&#xe614;</i><span class="caution-content">请正确填写验证码</span></span>');
			$code.find('.form-act').append(falsePsd);
    		}else {
    			$code.find('.form-act span').remove();
    			codeTest = 1;
    		}
    		if(userTest == 1 && psdTest == 1 && rpsdTest == 1 && codeTest == 1) {
    			//注册(cookie存储)
			var users = $.cookie("users") ? JSON.parse($.cookie("users")) : [];
			//先判断是否存在该用户
			for (var i=0; i<users.length; i++) {
				if ( users[i].name == $user.find('input').val() ) {
					var falseUser = $('<span class="caution error notice-inline"><i class="iconfont">&#xe614;</i><span class="caution-content">用户名已存在! 不能注册相同的用户</span></span>');
					$user.find('.form-act').append(falseUser);				
					return;
				}
			}
			
			//注册用户
			var user = {
				name: $user.find('input').val(),
				pwd: $psd.find('input').val()
			}
			users.push(user); 
			
			$.cookie("users", JSON.stringify(users), {expires:22, path:"/"});
			console.log( $.cookie("users") );
			var success = $('<div class="success"><i class="iconfont">&#xe616;</i>注册成功</div>');
			$('body').append(success);
			setTimeout(function() {
				$('body').find('.success').remove();
				window.location.href="login.html";
			}, 3000);		
    		}
    		return false;
    })
})