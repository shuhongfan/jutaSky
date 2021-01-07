//轮播图
var lenth = $('.top_ad_run ui li').length;
for (var i = 0; i < length; i++) {
	$('.top_ad_run ui li').eq(i).slideToggle().siblings().slideToggle();
	if (i = 2) {
		i = 0;
	}
}

var imgNub = $(".carousel .img").size();
for (i = 0; i < imgNub; i++) {
	$(".carousel .img:eq(" + i + ")").attr("imgId", i);
}
if (imgNub == 1) {
	for (i = 0; i < imgNub; i++) {
		$(".carousel .img:eq(" + i + ")").addClass("img3");
	}
}
if (imgNub == 2) {
	for (i = 0; i < imgNub; i++) {
		$(".carousel .img:eq(" + i + ")").addClass("img" + (i + 3));
	}
}
if (imgNub == 3) {
	for (i = 0; i < imgNub; i++) {
		$(".carousel .img:eq(" + i + ")").addClass("img" + (i + 2));
	}
}
if (imgNub > 3 && imgNub < 6) {
	for (i = 0; i < imgNub; i++) {
		$(".carousel .img:eq(" + i + ")").addClass("img" + (i + 1));
	}
}
if (imgNub >= 6) {
	for (i = 0; i < imgNub; i++) {
		if (i < 5) {
			$(".carousel .img:eq(" + i + ")").addClass("img" + (i + 1));
		} else {
			$(".carousel .img:eq(" + i + ")").addClass("img5");
		}
	}
}

function right() {
	var fy = [];
	for (i = 0; i < imgNub; i++) {
		fy[i] = $(".carousel .img[imgId=" + i + "]").attr("class");
	}
	console.log(fy);
	for (i = 0; i < imgNub; i++) {
		if (i == 0) {
			$(".carousel .img[imgId=" + i + "]").attr("class", fy[imgNub - 1]);
		} else {
			$(".carousel .img[imgId=" + i + "]").attr("class", fy[i - 1]);
		}
	}
}

function left() {
	var fy = [];
	for (i = 0; i < imgNub; i++) {
		fy[i] = $(".carousel .img[imgId=" + i + "]").attr("class");
	}
	for (i = 0; i < imgNub; i++) {
		if (i == (imgNub - 1)) {
			$(".carousel .img[imgId=" + i + "]").attr("class", fy[0]);
		} else {
			$(".carousel .img[imgId=" + i + "]").attr("class", fy[i + 1]);
		}
	}
}

function autorun() {
	var fy = [];
	for (i = 0; i < imgNub; i++) {
		fy[i] = $(".carousel .img[imgId=" + i + "]").attr("class");
	}
	for (i = 0; i < imgNub; i++) {
		if (i == 0) {
			$(".carousel .img[imgId=" + i + "]").attr("class", fy[imgNub - 1]);
		} else {
			$(".carousel .img[imgId=" + i + "]").attr("class", fy[i - 1]);
		}
	}
}

var timer = setInterval(autorun, 1000);

$('img').mouseenter(function() {
	clearInterval(timer);
})
$('img').mouseleave(function() {
	timer = setInterval(autorun, 1000);
})

//hover替换图
$('.share ul li a img').eq(0).hover(function() {
	$(this).parent('a').css('color', 'red');
	$(this).attr("src", "image/index/weixin_red.png");
}, function() {
	$(this).parent('a').css('color', '#efcb97');
	$(this).attr("src", "image/index/weixin.png");
})
$('.share ul li a img').eq(1).hover(function() {
	$(this).parent('a').css('color', 'red');
	$(this).attr("src", "image/index/yixin_red.png");
}, function() {
	$(this).attr("src", "image/index/yixin.png");
	$(this).parent('a').css('color', '#efcb97');
})
$('.share ul li a img').eq(2).hover(function() {
	$(this).parent('a').css('color', 'red');
	$(this).attr("src", "image/index/xlwb_red.png");
}, function() {
	$(this).attr("src", "image/index/xlwb.png");
	$(this).parent('a').css('color', '#efcb97');
})
$('.share ul li a img').eq(3).hover(function() {
	$(this).parent('a').css('color', 'red');
	$(this).attr("src", "image/index/QQkj_red.png");
}, function() {
	$(this).attr("src", "image/index/QQkj.png");
	$(this).parent('a').css('color', '#efcb97');
})
$('.share ul li a img').eq(4).hover(function() {
	$(this).parent('a').css('color', 'red');
	$(this).attr("src", "image/index/all_red.png");
}, function() {
	$(this).attr("src", "image/index/all.png");
	$(this).parent('a').css('color', '#efcb97');
})


//二维码扫描
setInterval(function aa() {
	$('.down11').animate({
		'top': '137px'
	}, 1000).animate({
		'top': '10px'
	}, 1000)
}, 2000)


//展开 收起
$('.close').toggle(function() {
	$(this).parent('div').css('right', '-150px');
	$(this).children('img').css({
		'transform': 'rotate(180deg)'
	});
	$(this).children('p').eq(0).text('展');
	$(this).children('p').eq(1).text('开');
}, function() {
	$(this).parent('div').css('right', '0px');
	$(this).children('img').css({
		'transform': 'rotate(360deg)'
	});
	$(this).children('p').eq(0).text('收');
	$(this).children('p').eq(1).text('起');
})

//上下移动
$('#content2 .content2_btn1').hover(function() {
	$(this).animate({
		'top': '130px'
	});
}, function() {
	$(this).animate({
		'top': '150px'
	});
})
$('#content2 .content2_btn3').hover(function() {
	$(this).animate({
		'top': '130px'
	});
}, function() {
	$(this).animate({
		'top': '150px'
	});
})
$('#content2 .content2_btn2').hover(function() {
	$(this).animate({
		'top': '200px'
	});
}, function() {
	$(this).animate({
		'top': '220px'
	});
})
$('#content2 .content2_btn4').hover(function() {
	$(this).animate({
		'top': '200px'
	});
}, function() {
	$(this).animate({
		'top': '220px'
	});
})

//文字轮播
$(function() {
	var $this = $(".top_ad_run");
	var scrollTimer;
	$this.hover(function() {
		clearInterval(scrollTimer);
	}, function() {
		scrollTimer = setInterval(function() {
			scrollNews($this);
		}, 2000);
	}).trigger("mouseout");

	function scrollNews(nature) {
		var scroll = nature.find("ul:first");
		var lineHeight = scroll.find("li:first").height();
		scroll.animate({
			"margin-top": -lineHeight + "px"
		}, 600, function() {
			scroll.css({
				"margin-top": "0px"
			}).find("li:first").appendTo(scroll);
		});
	}
});


//ad
$('.ad a img').hover(function() {
	$('.img_show').show().css({
		'position': 'absolute',
		"z-index": '9999'
	})
}, function() {
	$('.img_show').hide().css({
		'position': 'absolute',
		"z-index": '0'
	})

})

//导航栏
$('.top_nemu').hover(function() {
	$('.nemu_disblock').fadeIn();
}, function() {
	$('.nemu_disblock').fadeOut();

})





/*阴阳师首页*/

// 导航栏
$('#conten11>ul>li').hover(function() {
	$(this).children('div').fadeIn();
	$(this).addClass('pagethis');
}, function() {
	$(this).children('div').fadeOut();
	$(this).removeClass('pagethis');
})



// 轮播图
var cccc = 0;

function autorun() {
	cccc++;
	cccc = cccc == 3 ? 0 : cccc;
	$("#fk img").eq(cccc).stop().show()
		.siblings('img').stop().hide();
}
var timer = setInterval(autorun, 6000);



// 单击切换
$('.aa').click(function() {
	$('.new_con').show();
	$('.newss').hide();
	$(this).addClass('fk_hover');
	$('.bb').removeClass('fk_hover');
})
$('.bb').click(function() {
	$('.newss').show();
	$('.new_con').hide();
	$(this).addClass('fk_hover');
	$('.aa').removeClass('fk_hover');
})


//二维码扫描
setInterval(function aa() {
	$('.line').animate({
		'top': '157px'
	}, 1000).animate({
		'top': '50px'
	}, 1000)
}, 2000);

// li切换
function dd() {
	$('.group1').slideUp().siblings().slideDown();
	// $('.group1').slideDown().siblings().slideUp();
}

function ee() {
	// $('.group1').slideUp().siblings().slideDown();
	$('.group1').slideDown().siblings().slideUp();
}

var ddd = setInterval(dd, 3000);
var eee = setInterval(ee, 6000);

$('.prevv').hover(function() {
	clearInterval(ddd);
}, function() {
	ddd = setInterval(dd, 3000);
})
$('.nextt').hover(function() {
	clearInterval(eee);
}, function() {
	eee = setInterval(ee, 3000);
})

$('.prevv').click(function() {
	$('.group1').slideDown().siblings().slideUp();

})

$('.nextt').click(function() {
	$('.group1').slideUp().siblings().slideDown();
})

// $('.world_tab ul li a').hover(function  () {
// 	$(this).addClass('world_tab_hover').siblings().removeClass('world_tab_hover')
// },function  () {
// 	$(this).removeClass('world_tab_hover');
// })

$('.world_tab ul li a').eq(0).addClass('world_tab_hover');

$('.eq1').click(function() {
	$(this).addClass('world_tab_hover');
	// $('.eq1').removeClass('world_tab_hover');
	$('.eq2').removeClass('world_tab_hover');
	$('.eq3').removeClass('world_tab_hover');
	$('.world_wrap').slideDown();
	$('.yys_wrap').slideUp();
	$('.part_shishen').slideUp();
})
$('.eq2').click(function() {
	$(this).addClass('world_tab_hover');
	$('.eq1').removeClass('world_tab_hover');
	// $('.eq2').removeClass('world_tab_hover');
	$('.eq3').removeClass('world_tab_hover');
	$('.world_wrap').slideUp();
	$('.yys_wrap').slideDown();
	$('.part_shishen').slideUp();
})
$('.eq3').click(function() {
	$(this).addClass('world_tab_hover');
	$('.eq1').removeClass('world_tab_hover');
	$('.eq2').removeClass('world_tab_hover');
	// $('.eq3').removeClass('world_tab_hover');
	$('.world_wrap').slideUp();
	$('.yys_wrap').slideUp();
	$('.part_shishen').slideDown();
})


$('.world_all_list ul li a').eq(0).css('color', '#C2A060');

// 单击显示
$('.tolist_all_list').click(function() {
	$('.world_wrap').slideUp();
	$('.world_all').slideDown();
})

// img hover
$('.world_all_img a').hover(function() {
	$(this).children('img').show();
}, function() {
	$(this).children('img').hide();
})

// 大岳丸
$('.world_all_img a').eq(0).click(function() {
	$('.world_wrap').slideDown();
	$('.world_wrap .world1').slideDown().siblings().slideUp();
	$('.world_all').slideUp();
})

// 久次良
$('.world_all_img a').eq(1).click(function() {
	$('.world_wrap').slideDown();
	$('.world_wrap .world2').slideDown().siblings().slideUp();
	$('.world_all').slideUp();
})

// 御怨般若
$('.world_all_img a').eq(2).click(function() {
	$('.world_wrap').slideDown();
	$('.world_wrap .world3').slideDown().siblings().slideUp();
	$('.world_all').slideUp();
})

// 海忍
$('.world_all_img a').eq(3).click(function() {
	$('.world_wrap').slideDown();
	$('.world_wrap .world4').slideDown().siblings().slideUp();
	$('.world_all').slideUp();
})

// 不知火
$('.world_all_img a').eq(4).click(function() {
	$('.world_wrap').slideDown();
	$('.world_wrap .world5').slideDown().siblings().slideUp();
	$('.world_all').slideUp();
})


// world左右切换人物切换
var world = 0;

function autofade() {
	world++;
	if (world >= 5) {
		world = 0;
	}
	$(".world>div").eq(world).show().siblings().hide();
}
var cc = setInterval(autofade, 5000);

$('.world_wrap').hover(function() {
	clearInterval(cc);
}, function() {
	cc = setInterval(autofade, 5000);
})

$('.leftclick a').click(function() {
	world--;
	if (world < -4) {
		world = 0;
	}
	$(".world>div").eq(world).fadeIn().siblings().fadeOut();
})

$('.rightclick a').click(function() {
	world++;
	if (world >= 5) {
		world = 0;
	}
	$(".world>div").eq(world).fadeIn().siblings().fadeOut();

})

$('.world_all_list ul li a').click(function() {
	$(this).css('color', '#C2A060').parent('li').siblings().children('a').css('color', 'black');
})

// 全部
$('.world_all_list ul li a').eq(0).click(function() {
	$('.world_all_img a dl').fadeIn();
})

// 联动
$('.world_all_list ul li a').eq(1).click(function() {
	$('.world_all_img a dl').filter('.a').fadeIn();
	$('.world_all_img a dl').filter('.b,.c,.d,.e,.f,.g').fadeOut();
})

// SP
$('.world_all_list ul li a').eq(2).click(function() {
	$('.world_all_img a dl').filter('.b').fadeIn();
	$('.world_all_img a dl').filter('.a,.c,.d,.e,.f,.g').fadeOut();
})

// SSR
$('.world_all_list ul li a').eq(3).click(function() {
	$('.world_all_img a dl').filter('.c').fadeIn();
	$('.world_all_img a dl').filter('.a,.b,.d,.e,.f,.g').fadeOut();
})

// SP
$('.world_all_list ul li a').eq(4).click(function() {
	$('.world_all_img a dl').filter('.d').fadeIn();
	$('.world_all_img a dl').filter('.a,.b,.c,.e,.f,.g').fadeOut();
})

// R
$('.world_all_list ul li a').eq(5).click(function() {
	$('.world_all_img a dl').filter('.e').fadeIn();
	$('.world_all_img a dl').filter('.a,.b,.c,.d,.f,.g').fadeOut();
})

// N
$('.world_all_list ul li a').eq(6).click(function() {
	$('.world_all_img a dl').filter('.f').fadeIn();
	$('.world_all_img a dl').filter('.a,.b,.c,.d,.e,.g').fadeOut();
})

// 呱太
$('.world_all_list ul li a').eq(7).click(function() {
	$('.world_all_img a dl').filter('.g').fadeIn();
	$('.world_all_img a dl').filter('.a,.b,.c,.d,.e,.f').fadeOut();
})


$('.yys_wrap_ul ul li a').click(function() {
	$(this).css('color', '#C2A060').parent('li').siblings().children('a').css('color', 'black');
})



// yys_wrap左右切换人物切换
var yys = 0;

function autoto() {
	yys++;
	if (yys >= 4) {
		yys = 0;
	}
	$(".world>div").eq(yys).show().siblings().hide();
}
// var yy=setInterval(autoto,5000);
// 
// $('.yys_wrap').hover(function  () {
// 	clearInterval(yy);
// },function  () {
// 	yy=setInterval(autoto,5000);
// })

$('.leftclick a').click(function() {
	yys--;
	if (yys < -3) {
		yys = 0;
	}
	$(".yys_wrap_world .world>div").eq(yys).fadeIn().siblings().fadeOut();
	$('.yys_wrap_ul ul li a').eq(yys).css('color', '#C2A060').parents('li').siblings().children('a').css('color',
		'black');
})

$('.rightclick a').click(function() {
	yys++;
	if (yys >= 4) {
		yys = 0;
	}
	$(".yys_wrap_world .world>div").eq(yys).fadeIn().siblings().fadeOut();
	$('.yys_wrap_ul ul li a').eq(yys).css('color', '#C2A060').parents('li').siblings().children('a').css('color',
		'black');

})

$('.yys_wrap_ul ul li a').eq(0).css('color', '#C2A060');

$('.yys_wrap_ul ul li').click(function() {
	var index = $(this).index();
	$(".yys_wrap_world .world>div").eq(index).fadeIn().siblings().fadeOut();
})


// conten44
$('.conten44_list_top>ul>li>a').eq(0).css({
	'color': 'green',
	'background': 'white'
});

$('.conten44_list_top>ul>li>a').click(function() {
	$(this).css({
		'color': 'green',
		'background': 'white'
	}).parent('li').siblings().children('a').css({
		'color': 'white',
		'background': 'none'
	});
})

$('.conten44_list_top>ul>li>a').hover(function() {
	$(this).css({
		'color': 'green',
		'background': 'white'
	}).parent('li').siblings().children('a').css({
		'color': 'white',
		'background': 'none'
	});
}, function() {
	// $(this).css({'color':'white','background':'none'});
})

$('.conten44_list_top>ul>li>a').eq(0).hover(function() {
	$('.conten44_list_bottom_group1').fadeIn().siblings().hide();
})
$('.conten44_list_top>ul>li>a').eq(1).hover(function() {
	$('.conten44_list_bottom_group2').fadeIn().siblings().hide();
})
$('.conten44_list_top>ul>li>a').eq(2).hover(function() {
	$('.conten44_list_bottom_group3').fadeIn().siblings().hide();
})
$('.conten44_list_top>ul>li>a').eq(3).hover(function() {
	$('.conten44_list_bottom_group4').fadeIn().siblings().hide();
})
$('.conten44_list_top>ul>li>a').eq(4).hover(function() {
	$('.conten44_list_bottom_group5').fadeIn().siblings().hide();
})

var content44 = 0;

function content() {
	content44++;
	if (content44 >= 5) {
		content44 = 0;
	}
	$('.conten44_list_top>ul>li>a').eq(content44).css({
		'color': 'green',
		'background': 'white'
	}).parent('li').siblings().children('a').css({
		'color': 'white',
		'background': 'none'
	});
	$('.conten44_list_bottom>div').eq(content44).fadeIn().siblings().hide();
}
var tw = setInterval(content, 5000);

$('.conten44_list_top>ul>li>a').hover(function() {
	clearInterval(tw);
}, function() {
	tw = setInterval(content, 5000);
})
$('.conten44_list_bottom').hover(function() {
	clearInterval(tw);
}, function() {
	tw = setInterval(content, 5000);
})


// conten55
$('.conten55_left_top_list ul li a').eq(0).addClass('conten55_left_top_list_click');

$('.conten55_left_top_list ul li a').click(function() {
	$(this).addClass('conten55_left_top_list_click').parent('li').siblings().children('a').removeClass(
		'conten55_left_top_list_click');
})

$('.conten55_left_top_list ul li a').eq(0).click(function() {
	$('.conten55_left_bottom>img').eq(0).fadeIn().siblings().hide();
})
$('.conten55_left_top_list ul li a').eq(1).click(function() {
	$('.conten55_left_bottom>img').eq(1).fadeIn().siblings().hide();
})
$('.conten55_left_top_list ul li a').eq(2).click(function() {
	$('.conten55_left_bottom>img').eq(2).fadeIn().siblings().hide();
})

var content55 = 0;

function content5() {
	content55++;
	if (content55 >= 3) {
		content55 = 0;
	}
	$('.conten55_left_top_list>ul>li>a').eq(content55).addClass('conten55_left_top_list_click').parent('li').siblings().children(
		'a').removeClass('conten55_left_top_list_click');
	$('.conten55_left_bottom>img').eq(content55).fadeIn().siblings().hide();
}

var zg = setInterval(content5, 5000);

$('.conten55_left_top_list>ul>li>a').hover(function() {
	clearInterval(zg);
}, function() {
	zg = setInterval(content5, 5000);
})

$('.conten55_left_bottom>img').hover(function() {
	clearInterval(zg);
}, function() {
	zg = setInterval(content5, 5000);
})


var content555 = 0;

function contenthk() {
	content555++;
	if (content555 >= 3) {
		content555 = 0;
	}
	$('.conten55_right_bottom_dl>div').eq(content555).fadeIn().siblings().hide();
}
var hk = setInterval(contenthk, 6000);

$('.conten55_right_bottom_dl>div').hover(function() {
	clearInterval(hk);
}, function() {
	hk = setInterval(contenthk, 6000);
})

$('.changeother a').hover(function() {
	clearInterval(hk);
}, function() {
	hk = setInterval(contenthk, 6000);
})

$('.changeother a').click(function() {
	contenthk();
})


// content66
var content66 = 0;

function contentuk() {
	content66++;
	if (content66 >= 3) {
		content66 = 0;
	}
	$('.content66_bottom>div').eq(content66).fadeIn().siblings().hide();
}
var uk = setInterval(contentuk, 4000);

$('.content66_bottom>div').hover(function() {
	clearInterval(uk);
}, function() {
	uk = setInterval(contentuk, 4000);
})

$('.changeother66 a').hover(function() {
	clearInterval(uk);
}, function() {
	uk = setInterval(contentuk, 4000);
})

$('.changeother66 a').click(function() {
	contentuk();
})

// conten77
$('.conten77_bottom a').hover(function() {
	$('.conten77_bottom a span').animate({
		'padding-right': '30px'
	}).animate({
		'padding-right': '10px'
	}).animate({
		'padding-right': '20px'
	});
})


$('.content_right ul li a img').hover(function() {
	$(this).css({
		'margin-top': '-30px'
	});
}, function() {
	$(this).css({
		'margin-top': '0px'
	});
})

$('.content99_right ul li a img').hover(function() {
	$(this).css({
		'margin-top': '-20px'
	});
}, function() {
	$(this).css({
		'margin-top': '0px'
	});
})


$('.white_con').hover(function() {
	$('.white_con>img').fadeIn();
}, function() {
	$('.white_con>img').fadeOut();
})


// content99_ul a


