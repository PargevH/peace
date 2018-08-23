var c_height = $('.center_div').outerHeight();
var nav_click = false;

$('#center').height(c_height);
$('header a').click(function(e){
		e.preventDefault();
	})	
$( document ).ready(function(){
	$("#bg").fadeOut(2000,function(){
		$(function() {
    var tar = $('.center_div');
    tar.animate({left:0},function() {
    		});
		});
	});
	$("#TM_click").click(function (e) {
		e.stopPropagation();
		$(".section_ul_ul").toggle();
		$(".fa").css("color","#fff");
	})
	$(document).click(function(){
	  $(".section_ul_ul").hide();
	  $(".fa").css("color","#99998A");
	});
	$(".trigger").click(function(){
		$("#sec_top").toggleClass("mi_pl");
		$(".minus_plus").toggleClass("pl_mi");
	})
	$(".nav_li").click(function(){
		var data = $(this).text();
		if (nav_click == false) {
		$('.center_div').animate({
			'left':'100vw',
		},500,function(){
			$('.center_div').css({
				'display':'none'
			});
			$('.section_big').animate({
				'height':'600px',
				'margin-top':'-500px'
			},1000)
			$('#bg_img').animate({
				'top':'-100px'
			},1300,function(){
				$('.section_page').text(data);
				$('.section_page').animate({
					'left':'0',
				},1000)
			})
		})	
		nav_click = true;
	}
		else {if($(this).hasClass('after_a') || $('.section_page').is(':animated')){
			return;
		}
			$('.section_page').animate({
					'left':'100vw',
				},500,function(){
					$('.section_page').animate({
						'left':'-100vw'
					},0,function(){
						$('.section_page').text(data);
						$('.section_page').animate({
							'left': '0'
						},1000)
					})
				})
		}
		$(".nav_a").css("color","#000")
		$(".nav_li").removeClass("after_a");
		$(this).addClass("after_a");
		$(this).siblings().children("a").css('color','#fff');
	})
	$(".h1").click(function(){
		$(".nav_li").removeClass("after_a")
		$(".nav_a").css("color","#fff")
		nav_click = false;
	})
/*  
	$(".span_minus").click(function(){
		$("#sec_top").slideUp();
		$(this).hide();
		$(".span_plus").slideDown();
	})
	$(".span_plus").click(function(){
		$("#sec_top").slideDown();
		$(this).hide();
		$(".span_minus").slideDown();	
	})
*/	

});
$('.h1').click(function(){
		$('.section_page').animate({
			'left':'100vw'
		},1000,function(){
			$('.section_big').animate({
				'height':'0',
				'margin-top':'0'
			},1000)
			$('#bg_img').animate({
				'top':'0'
			},1300,function(){
				$('.center_div').css({
				'display':'block'
				});
				$('.center_div').animate({
					'left':'0',
				},1000,function(){
					$('.section_page').animate({
						'left':'-100vw',
					},0)
				})
			})
		})
	})







/* hin@
var c_height = $('.center_div').outerHeight();
var nav_click = false;
	$('#center').height(c_height);
$('header a').click(function(e){
		e.preventDefault();
	})	
$( document ).ready(function(){
	$("#bg").fadeOut(2000,function(){
		$(function() {
    var tar = $('.center_div');
    tar.animate({left:0},function() {
    		});
		});
	});
	$("#TM_click").click(function (e) {
		e.stopPropagation();
		$(".section_ul_ul").toggle();
		$(".fa").css("color","#fff");
	})
	$(document).click(function(){
	  $(".section_ul_ul").hide();
	  $(".fa").css("color","#99998A");
	});
	$(".trigger").click(function(){
		$("#sec_top").toggleClass("mi_pl");
		$(".minus_plus").toggleClass("pl_mi");
	})
	$(".nav_li").click(function(){
		$(".nav_a").css("color","#000")
		$(".nav_li").removeClass("after_a");
		$(this).addClass("after_a");
		$(this).siblings().children("a").css('color','#fff');
	})
	$(".h1").click(function(){
		$(".nav_li").removeClass("after_a")
		$(".nav_a").css("color","#fff")
	})

	$(".span_minus").click(function(){
		$("#sec_top").slideUp();
		$(this).hide();
		$(".span_plus").slideDown();
	})
	$(".span_plus").click(function(){
		$("#sec_top").slideDown();
		$(this).hide();
		$(".span_minus").slideDown();	
	})
	
$('.nav_li').click(function(){
		$('.center_div').animate({
			'left':'100vw',
		},500,function(){
			$('.section_big').animate({
				'height':'600px',
				'margin-top':'-500px'
			},1000)
			$('#bg_img').animate({
				'top':'-100px'
			},1300,function(){
				$('.section_page').animate({
					'left':'0',
				},1000)
			})
		})
	})	
});
$('.h1').click(function(){
		$('.section_page').animate({
			'left':'100vw'
		},1000,function(){
			$('.section_big').animate({
				'height':'0',
				'margin-top':'0'
			},1000)
			$('#bg_img').animate({
				'top':'0'
			},1300,function(){
				$('.center_div').animate({
					'left':'0',
				},1000,function(){
					$('.section_page').animate({
						'left':'-100vw',
					},0)
				})
			})
		})
	})

*/	

