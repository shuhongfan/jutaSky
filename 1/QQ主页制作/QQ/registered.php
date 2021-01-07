<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>注册</title>
		<link rel="stylesheet" type="text/css" href="css/index.css"/>
		<script src="js/jquery-3.4.1.min.js" type="text/javascript" charset="utf-8"></script>
	</head>
	<body>
		<div id="regi">
			<div id="content_left">
				<img src="img/register/bg1.jpg"/>
				<img src="img/register/bg2.jpg"/>
				<img src="img/register/bg3.jpg"/>
				<img src="img/register/bg4.jpg"/>
			</div>

			<div id="content_right">
				<div class="content_right_warp">
					<div class="text">
						<h1>欢迎注册QQ</h1>
						<h2>每一天，乐在沟通。<span>
						<a href="####">
							免费靓号
						</a></span></h2>
					</div>
					<div class="input">
						<form action="regcheck.php" method="post" id="form1">
							<div class="input_name">
								<input type="text"  name="name" id="name" value="" placeholder="昵称" onblur="checkusername()" />
								<div class="input_file input_file_name">
									<span class="clear">昵称不可以为空</span>
								</div>
							</div>
							<div class="input_pwd">
								<input type="password" name="pwd" id="pwd" value="" placeholder="密码" onblur="checkpwd()" />
								<div class="input_file input_file_pwd">
									<ul>
										<li>
											不能包括空格
										</li>
										<li>
											长度为8-16个字符
										</li>
										<li>
											必须包含字母、数字、符号中至少2种
										</li>
									</ul>
								</div>
							</div>
							<div class="select_contry">
								<select name="country_select[]" class="country_select">
									<option value="+86中国" selected = "selected" >+86中国</option>
									<option value="+852中国香港">+852中国香港</option>
									<option value="+853中国澳门">+853中国澳门</option>
									<option value="+886中国台湾">+886中国台湾</option>
								</select>
							</div>
							<div class="input_phone">
								<input type="text" name="phone" id="phone" value="" placeholder="手机号码" onblur="checkphone()" />
								<div class="input_file_p">
									<p>
										可通过该手机号找回密码
									</p>
								</div>
								<div class="input_file_p input_file_phone">
									<p>
										可通过该手机号找回密码
									</p>
								</div>
								<input type="text" name="code" id="code" value="" placeholder="手机验证码"/>
								<input type="button" name="sentcode" id="sentcode" value="发送验证码" placeholder="发送验证码"/>
							</div>
							<input type="submit" name="submit" id="submit" value="立即注册" placeholder="立即注册"/>
						</form>
						<div class="input_safe">
							<div class="input_file_safe">
								<span>请先同意服务条款</span>
							</div>
							<input type="checkbox" name="checkbox" id="checkbox" checked="checked" value="" onclick="checkphone()"/>
							<h4>我已阅读并同意相关服务条款和隐私政策 </h4>
							<div class="sanjiao"></div>
							<div class="sanjiao_new">
								<ul>
									<li>
										<a href="###">
											《QQ号码规则》
										</a>
									</li>
									<li>
										<a href="####">
											《隐私政策》
										</a>
									</li>
									<li>
										<a href="####">
											《QQ空间服务协议》
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div id="foot">
							Copyright©1998-2019Tencent All Rights Reserved
						</div>
					</div>

				</div>
			</div>
			<div id="top">
				<div class="top_left">
					<a href="index.html"><img src="img/logo.png"/></a>
				</div>
				<div class="top_right">
					<ul>
						<li>
							<a href="####" class="bigqq">
								QQ靓号
							</a>
						</li>
						<li>
							<a href="####" class="country_lan">
								简体中文<div class="sanjiao1"></div>
							</a>
							
							<ul>
								<li><a href="####">繁体中文</a></li>
								<li><a href="####">English</a></li>
							</ul>
						</li>
						<li>
							<a href="####">
								意见反馈
							</a>
						</li>
					</ul>
				</div>
			</div>

		</div>
		<script type="text/javascript">var content_left = document.getElementById('content_left');
		var img = content_left.getElementsByTagName('img');
		var c = 0;
		
		function autorun() {
			c++;
			if(c == 4) {
				c = 0;
			}
			for(var i = 0; i < 4; i++) {
				img[i].style.display = 'none';
			}
			img[c].style.display = 'block';
		}
		var timer = setInterval(autorun, 2000);
		
		$('.sanjiao').click(function() {
			var q=0;
			if (q%2==0) {
				$('.sanjiao_new').toggle();
				$('.sanjiao').toggleClass('sanjiaoclick');
				q=1;
			} else{
				$('.sanjiao_new').toggle();
				$('.sanjiao').toggleClass('sanjiaoclick');
				q=0;
			}
			
		})
		
		$('#phone').click(function() {
			$('#code').show();
			$('#sentcode').show();
			return false;
		})
		
		function checkusername() {
			var username = $('#name');
			var errusername=$('.input_file_name');
			$('.input_file_name').show();
			if(username.val()=='') {
				errusername.html("<font color='red'>昵称不符合要求</font>");
				return false;
			} else {
				errusername.html("<font color='green'>昵称符合要求</font>") ;
				return true;
			}
		}
		
		function checkpwd() {
			var pwd = $('#pwd').val();
			var erruserpwd=$('.input_file_pwd');
			var pwd_pattern = /^\w{8,16}$/;
			$('.input_file_pwd').show();
			if(pwd_pattern.test(pwd)) {
				erruserpwd.html("<font color='green'>密码符合要求</font>") ;
				return true;
			} else {
				erruserpwd.html("<font color='red'>密码不符合要求；不能包括空格;长度为8-16个字符;必须包含字母、数字、符号中至少2种</font>");
				return false;
			}
		}
		
		function checkphone() {
			var phone = $('#phone').val();
			var erruserphone=$('.input_file_phone');
			var phone_pattern = /^1[34578]\d{9}$/;
			$('.input_file_phone').show();
			if(phone_pattern.test(phone)) {
				erruserphone.html("<font color='green' class='input_file_pp'>手机号码符合要求</font>") ;
				return true;
			} else {
				erruserphone.html("<font color='red' class='input_file_pp'>手机号码不符合要求</font>");
				return false;
			}
		}
		
		setInterval(function  () {
			if ($("#checkbox").get(0).checked) {
		   		$('.input_file_safe').hide();
			}else{
		   		$('.input_file_safe').show();
			}
		},100)

		function checkform() {
			checkusername();
			checkpwd();
			checkphone();
			if(checkusername() && checkpwd() && checkphone()) {
				return true;
			} else {
				return false;
			}
		}
	</script>
	</body>
</html>
