// 音频播放
$('.head_bgm').click(function() {
	$(this).toggleClass('head_bgm_click');
	var music = $('#mp3')[0];
	if (music.paused) {
		music.play();
	} else {
		music.pause();
	}
})

// 背景动画
$('.content_bg').backgroundMove();


$(document).ready(function() {
	$('#header').fadeIn();
	$('#content>ul>li').eq(0).fadeIn();
	$('#content>ul>li').eq(1).delay(100).fadeIn();
	$('#content>ul>li').eq(2).delay(200).fadeIn();
	$('#content>ul>li').eq(3).delay(300).fadeIn();
	$('.content_logo').delay(200).fadeIn();
	$('#nav>ul>li').eq(0).delay(200).slideDown();
	$('#nav>ul>li').eq(1).delay(200).slideDown();
	$('#nav>ul>li').eq(2).delay(200).slideDown();
})

$('#content>ul>li>a').hover(function() {
	$(this).css({
		'transform': 'scale(1.2)',
		'opacity': '0.8'
	});
}, function() {
	$(this).css({
		'transform': 'scale(1)',
		'opacity': '0.6'
	});
})
$('#nav>ul>li').hover(function() {
	$(this).css({
		'transform': 'scale(1.2)',
		'opacity': '0.9'
	});
}, function() {
	$(this).css({
		'transform': 'scale(1)',
		'opacity': '0.6'
	});
})



// chaacter
$('.haed_nav>ul>li>a').hover(function() {
	$(this).css({
		'transform': 'scale(1.2)',
		'opacity': '0.9'
	});
}, function() {
	$(this).css({
		'transform': 'scale(1)',
		'opacity': '0.4'
	});
})


$('.content_bg1').backgroundMove();

$('.content_ul>ul>li>a').hover(function() {
	$(this).css({
		'transform': 'scale(1.2)',
		'opacity': '0.9'
	});
}, function() {
	$(this).css({
		'transform': 'scale(1)',
		'opacity': '0.7'
	});
})


// role
setInterval(function() {
	$('.liujiaoxing').fadeToggle();
}, 500);

setInterval(function() {
	$('.role_new_img1').animate({
		'top': '-5px'
	}, 500).animate({
		'top': '5px'
	}, 700);
	$('.role_new_img2').animate({
		'top': '85px'
	}, 500).animate({
		'top': '95px'
	}, 800);
	$('.role_new_img3').animate({
		'top': '85px'
	}, 500).animate({
		'top': '95px'
	}, 900);
	$('.role_new_img4').animate({
		'top': '95px'
	}, 500).animate({
		'top': '105px'
	}, 1500);
	$('.role_new_img5').animate({
		'top': '595px'
	}, 500).animate({
		'top': '605px'
	}, 600);
})

$('#content .content_role').fadeIn();
$('#content .content_role ul').delay(100).fadeIn();
$('.content_news').delay(300).fadeIn();
$('.content_role_new').delay(600).fadeIn();


$('.content_news_img').click(function() {
	$('.content_click').fadeToggle();
})

$('.img1').hover(function() {
	$(this).css('opacity', '0.99');
}, function() {
	$(this).css('opacity', '0.1');
})


// dot旋转
var rotation = function() {
	$(".dot_big").rotate({
		angle: 0,
		animateTo: 360,
		callback: rotation,
		easing: function(x, t, b, c, d) {
            return c * (t / d) + b;
         }
	});
}
rotation();

$('#content .content_world a').hover(function  () {
	$(this).children('span').children('img').css('margin-left','0px');
	$(this).find('.dot_hover').show();
},function  () {
	$(this).children('span').children('img').css('margin-left','-100px');
	$(this).find('.dot_hover').hide();
})


$('.world_new').slideDown(600);
$('.world2_nav a').hover(function  () {
	$(this).css('color','red');
	$(this).siblings('div').addClass('curr');
},function  () {
	$(this).css('color','white');
	$(this).siblings('div').removeClass('curr');
})
