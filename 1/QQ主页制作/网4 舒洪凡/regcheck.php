<?php
header("Content-type: text/html; charset=utf-8");
if(isset($_POST['submit'])&&$_POST['submit']=='立即注册'){
	$aa=0;
	$name=$_POST['name'];
	$pwd=$_POST['pwd'];
	$phone=$_POST['phone'];
	$quhao=$_POST['country_select'];
	$quhao_str=implode(',', $quhao);
	$pwd_pattern = "/^\w{8,16}$/";
	$pho_pattern="/^1[34578]\d{9}$/";
	
	if($name==''){
		echo "<script>alert('昵称不能为空！！！');window.location='registered.php';</script>";
		$aa=0;
	}
	if(preg_match($pwd_pattern, $pwd)){
		$aa=1;
	}else{
		$aa=0;
		echo "<script>alert('密码格式不正确！！！');window.location='registered.php';</script>";
	}
	if(preg_match($pho_pattern, $phone)){
		$aa=1;
	}else{
		$aa=0;
		echo "<script>alert('手机号格式不正确！！！');window.location='registered.php';</script>";
	}
	
	if($aa==1){
		$mysqli = new MySQLi('127.0.0.1','root','root','user','3306');  
		$mysqli->set_charset("utf8");
		if ($mysqli->connect_errno){
			die("连接数据库失败");
			echo "连接数据库失败";
		}
		$sql_insert="insert into user values ('$name','$pwd','$quhao_str','$phone')";
		$res_insert = $mysqli->query($sql_insert);
		if($res_insert){
			echo "<script>alert('注册成功！！！');window.location='registered.php';</script>";
		}else {
			echo "<script>alert('系统繁忙,请稍后再试！！！');window.location='registered.php';</script>";
			
		}
	}
}
?>