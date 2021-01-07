var c = 0;
	

	function autorun(){
		c++;
		c = c==5?0:c;

		$("#fk img").eq(c).stop().fadeIn(200)
		.siblings('img').stop().fadeOut(200);

		$("#fk ul li").eq(c).css('background','#A10000')
		.siblings('li').css("background",'#DDDDDD');
	}
	
	var timer = setInterval(autorun,1000);
	
	

	$("#fk").mouseenter(function(){

		clearInterval(timer);
	})
	
	$("#fk").mouseleave(function(){
		timer = setInterval(autorun,1000);
	})
	

	$("#fk ul li").mouseenter(function(){
		var jqthis = $(this);
		t = setTimeout(function(){
	
			c = jqthis.index();
	
			$("#fk img").eq(c).stop().fadeIn(200)
			.siblings('img').stop().fadeOut(200);

			$("#fk ul li").eq(c).css('background','#A10000')
			.siblings('li').css("background",'#DDDDDD');		
		},200)

	})
	
	
	$("#fk ul li").mouseleave(function(){
		clearTimeout(t);
	})