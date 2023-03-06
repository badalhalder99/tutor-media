/*........carousel code start....................................................*/

$('#carouselExampleIndicators').carousel({
    interval: 3000,
	pause: false
});	

/*............carousel code end......................................................*/

/*.............................multiple item responsive carousel start...............................*/

jQuery(document).ready(function($) {
"use strict";
$('#customers-testimonials').owlCarousel( {
		loop: true,
		center: true,
		items: 3,
		margin: 25,
		autoplay: true,
		dots:true,
		nav:true,
		autoplayTimeout: 8500,
		smartSpeed: 450,
		navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		responsive: {
			0: {
				items: 2
			},
			576: {
				items: 2
			},
			768: {
				items: 3
			},
			991: {
				items: 4
			},
			1170: {
				items: 5
			}
		}
	});
});

/*.............................multiple item responsive carousel end...............................*/

/*.............................backToTop Button js code start...............................*/

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
	if (window.pageYOffset > 100) {
		toTop.classList.add("active");
	} else {
		toTop.classList.remove("active");
	}
});
/*.............................backToTop Button js code end...............................*/
/*........one modal inside another modal require js  code start....................*/

$("#myModal").on('show.bs.modal', function (e) {
    $("#myModal2").modal("hide");
});

$("#myModal2").on('show.bs.modal', function (e) {
    $("#myModal").modal("hide");
});
/*........one modal inside another modal require js  code start....................*/

