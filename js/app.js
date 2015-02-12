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

$(document).ready(function(){
	interestDetail();
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
	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	            nav:true
	        },
	        600:{
	            items:3,
	            nav:false
	        },
	        1000:{
	            items:5,
	            nav:true,
	            loop:false
        }
    }
})

});
