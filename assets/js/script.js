(function ($) {

	// Menu Responsive
	$(document).ready(function(){
		$('.mobile-menu').click(function(){
			$('.menu ul').slideToggle();
		});
	});


	$(document).ready(function(){

		// portfolio item
		// filter
		var mixer = mixitup('.portfolio-area-item-full');
		var mixer = mixitup(containerEl);
		var mixer = mixitup(containerEl, {
			selectors: {
				target: '.blog-item'
			},
			animation: {
				duration: 100
			}
		});
	});

	//portfolio item popup
	$(document).ready(function(){
		$('.portfolio-area-item-full a').magnificPopup({
	  		type: 'image',
	  		gallery:{
	    		enabled:true
	  		}
	  	});
	});

	// Owl Carousel Blog Slider
	$(document).ready(function(){
		$(".latest-blog-full").owlCarousel({
			margin	:15,
			loop	:true,
			nav		:true,
			navText	:['<i class="fas fa-long-arrow-alt-left"></i>','<i class="fas fa-long-arrow-alt-right"></i>'],
			autoplay:true,
			autoplayHoverPause:true,
			responsive:{
				0:{
					items:1
				},
				676:{
					items:2
				},
				867:{
					items:3
				},
			},
		});
	});

	// Owl Carousel Client Slider
	$(document).ready(function(){
		$(".client-area-full").owlCarousel({
			margin	:15,
			loop	:true,
			items    :1,
			autoplay:true,
			autoplayHoverPause:true,
		});
	});

	// Scroll Area
	$(document).ready(function(){
		$('.scroll-area').click(function(){
			$('html').animate({
				'scrollTop' : 0,
			},700);
			return false;
		});
		$(window).on('scroll',function(){
			var a = $(window).scrollTop();
			if(a>400){
            	$('.scroll-area').slideDown(300);
            }else{
	            $('.scroll-area').slideUp(200);
	        }
		});
	});

	// Sticky Menu
	$(document).ready(function(){
		$(window).on('scroll',function(){
			var scroll = $(window).scrollTop();
			if(scroll < 150){
				$('.main-area').removeClass('sticky');
			}else{
				$('.main-area').addClass('sticky');
			}
		});
	});

	// smooth scroll 
	$(document).ready(function(){
		let mainNavLinks = document.querySelectorAll(".menu ul li a");
		let mainSections = document.querySelectorAll("main section");

		let lastId;
		let cur = [];

		
		window.addEventListener("scroll", event => { 
		  let fromTop = window.scrollY;

		  	mainNavLinks.forEach(link => {
		    let section = document.querySelector(link.hash);

		   	if (
		      section.offsetTop <= fromTop &&
		      section.offsetTop + section.offsetHeight > fromTop
		    ) {
		      link.classList.add("current");
		    } else {
		      link.classList.remove("current");
		    }
		  	});
		});
	});

})(jQuery);