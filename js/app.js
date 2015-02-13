function flip(el){
	el.children[1].style.webkitTransform = "perspective(600px) rotateY(-180deg)";
	el.children[0].style.webkitTransform = "perspective(600px) rotateY(0deg)";
	el.children[1].style.transform = "perspective(600px) rotateY(-180deg)";
	el.children[0].style.transform = "perspective(600px) rotateY(0deg)";
}
function flipBack(el){
	el.children[1].style.webkitTransform = "perspective(600px) rotateY(0deg)";
	el.children[0].style.webkitTransform = "perspective(600px) rotateY(180deg)";
	el.children[1].style.transform = "perspective(600px) rotateY(0deg)";
	el.children[0].style.transform = "perspective(600px) rotateY(180deg)";
}

function interestDetail(){
	$('.buddy').hide();
	$('.icons > li > i').on('mouseenter', function(){
		$(this).siblings().fadeIn();
	})
	$('.icons > li > i').on('mouseleave', function(){
		$(this).siblings().fadeOut();
	})
}
function iconShake(){
	$(".icons > li> i").hover(function(){
		$(this).addClass("animated flip").css("color", "black").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			$(this).removeClass("animated flip");
		});
	});
}

$(document).ready(function(){
	interestDetail();
	iconShake();
});
