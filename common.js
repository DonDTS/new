$(document).ready(function() {

			$(window).ready(function () {
					var width = $('body').innerWidth();
					if (width < 1000) {
						$('#if').attr('src', 'https://www.youtube.com/embed/FxGSfi1grmo?autoplay=1');
					}
				});

			$('.cen').on('click','a',function() {

				event.preventDefault()
		    //забираем идентификатор блока с атрибута href!
		    var id = $(this).attr('href'),
		      //узнаем высоту от начала страницы до блока на который ссылается якорь
		      top = $(id).offset().top;

		    $('html, body').animate({
		      scrollTop: top - 120
		    }, 1000);
		    return false;
		  });
			$('.nas a').click(function() {
				//забираем идентификатор блока с атрибута href
				var id = $(this).attr('href'),
					//узнаем высоту от начала страницы до блока на который ссылается якорь
					top = $(id).offset().top;

				$('html, body').animate({
					scrollTop: top + 10
				}, 1000);
				return false;
			});

			FullDetect = function() {
				$(".midcen").css({'height': $(window).height(), 'width': $(window).width()});
			};
			FullDetect();
			$(window).resize(function() {
				FullDetect();
			});

		// Custom JS
		$('.contain').animated("fadeInUp", "fadeOutDown");

			$(".left").animated("fadeInLeft", "fadeOutDown");
			$(".right").animated("fadeInRight", "fadeOutDown");

			$(".img-responsive").animated("flipInY", "fadeOutDown");

			$('.waip').waypoint(function() {
				var hash = $(this).attr('id');

				$('.nas li').removeClass('active');
				$('.nas li').each(function() {
					if ( $(this).children('a').attr('href').slice(1) == hash ) {
						$(this).addClass('active');
					}
				});
			}, {
				offset: '0%'
			}
		);

		$(window).scroll(function() {
		 if ($(this).scrollTop() > 200) $('.navbar').removeClass('navbar-inverse').addClass('navbar-fixed-top navbar-default');
					 else $('.navbar').removeClass('navbar-fixed-top').addClass('navbar-inverse');
		});

		$(window).scroll(function() {
		 if ($(this).scrollTop() > 200) $('.navbar-right').css({'animation-name': 'ml', 'animation-duration': '1.5s', 'animation-fill-mode': 'forwards'});
					 else $('.navbar-right').css({'animation-name': 'mr', 'animation-duration': '1.5s', 'animation-fill-mode': 'forwards'});
		});

		$(window).scroll(function() {
		 if ($(this).scrollTop() > 200) {
			   $('.cen').hover(function () {
					 $('.cen').css({'animation-name': 'bg', 'animation-duration': '10s', 'animation-timing-function': 'cubic-bezier(0.1,0,7,1.1)', 'animation-iteration-count': 'infinite', 'animation-play-state':'running'});
			   }, function () {
					 $(this).css({'animation-play-state': 'paused'});
				});
						$('.midcen').css({'background': '#100996'})
		 }
					 else {
	 						$('.midcen').css({'background': '#c35c1a'})
				 }
		})

		$('.labe').keyup(function () {
			if( $(this).find("input").val() != '' ){
				$(this).find("span").html('<span style="color: green">&#10004;</span>');
			}
			else {
				$(this).find("span").html('<span style="color: red">&#9773;</span>');
			}
		});

		$('.map_mask').click(function(){
		 $(this).fadeOut(50);
		});

		$('.map').mouseleave(function(){
		 $('.map_mask').fadeIn(50);
		});

		$(".asck_click").on("click",function(){
			if($(this).hasClass('activ')){
				$(this).removeClass('activ')
				$(this).find('.show_btn').removeClass('activ');
				$(this).parent().find(".txt_hide").css({'visibility': 'hidden'});
		 } else {
			 $(this).addClass('activ')
			 $(this).find('.show_btn').addClass('activ');
			 $(this).parent().find(".txt_hide").css({'visibility': 'visible'});
		 }
	 });

	 $("#portfolio_grid").mixItUp();

	 $(".portfolio_item").each(function(i) {
		 $(this).find("a").attr("href", "#port_" + i);
		 $(this).find(".port").attr("id", "port_" + i);
	 });

	 	$(".popup").magnificPopup({type:"image"});
	 	$(".popup_content").magnificPopup({
	 		type:"inline",
	 		midClick: true
	 	});

	 $('.popup-with-form').magnificPopup({
     type: 'inline',
     focus: '#name'
   });

	 $('.popup-with-zoom-anim').magnificPopup({
		 type: 'inline',
		 removalDelay: 300,
		 mainClass: 'my-mfp-zoom-in'
	 });
	 // Тип Image - галерея картинок
	 $('.popup-gallery').magnificPopup({
	 delegate: 'a',
	 type: 'image',
	 tLoading: 'Загрузка изображения #%curr%...',
	 gallery: {
	     enabled: true,
	     navigateByImgClick: true,
	     preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
	 }
	 });

 var clock;

 $(document).ready(function() {

 	clock = $('.clock').FlipClock({
 				clockFace: 'HourlyCounter',
				autoStart: false,
				language: 'Russian',
				callbacks: {
					stop: function() {
						$('.message').html('The clock has stopped!')
					}
				}
 		});
		clock.setTime(40880);
		clock.setCountdown(true);
		clock.start();
 });

//  //Слайдер owl
// $('#main-slider.owl-carousel').owlCarousel({
// 	loop:true,
// 	margin:0,
// 	nav:true,
// 	items:1,
// 	navText:['',''],
// 	autoplay:true,
// autoplayTimeout: 6000
// });


// Слайдер-карусель

 $("#flexiselDemo").flexisel({
		 visibleItems: 4,
		 itemsToScroll: 1,
		 animationSpeed: 3000,
		 infinite: true,
		 navigationTargetSelector: null,
		 autoPlay: {
				 enable: true,
				 interval: 5000,
				 pauseOnHover: true
		 },
		 responsiveBreakpoints: {
				 portrait: {
						 changePoint:480,
						 visibleItems: 1,
						 itemsToScroll: 1
				 },
				 landscape: {
						 changePoint:640,
						 visibleItems: 2,
						 itemsToScroll: 2
				 },
				 tablet: {
						 changePoint:768,
						 visibleItems: 3,
						 itemsToScroll: 3
				 }
		 },
 });



	$('.fancybox-media').fancybox({
		closeClick: true,
		maxWidth	: 1200,
 		maxHeight	: 800,
 		fitToView	: false,
 		width	: '100%',
 		height: '100%',
 		autoSize	: true,
		openEffect  : 'elastic',
		closeEffect : 'fade',
		helpers : {
			title	: {
				type: 'inside'
			},
			media : {},
		}
	});

	$("a.gallery").fancybox(
	{
		"padding" : 20, // отступ контента от краев окна
		"imageScale" : false, // Принимает значение true - контент(изображения) масштабируется по размеру окна, или false - окно вытягивается по размеру контента. По умолчанию - TRUE
		"zoomOpacity" : false,	// изменение прозрачности контента во время анимации (по умолчанию false)
		"zoomSpeedIn" : 1000,	// скорость анимации в мс при увеличении фото (по умолчанию 0)
		"zoomSpeedOut" : 1000,	// скорость анимации в мс при уменьшении фото (по умолчанию 0)
		"zoomSpeedChange" : 1000, // скорость анимации в мс при смене фото (по умолчанию 0)
		"frameWidth" : 700,	 // ширина окна, px (425px - по умолчанию)
		"frameHeight" : 600, // высота окна, px(355px - по умолчанию)
		"overlayShow" : true, // если true затеняят страницу под всплывающим окном. (по умолчанию true). Цвет задается в jquery.fancybox.css - div#fancy_overlay
		"overlayOpacity" : 0.8,	 // Прозрачность затенения 	(0.3 по умолчанию)
		"hideOnContentClick" :false, // Если TRUE  закрывает окно по клику по любой его точке (кроме элементов навигации). Поумолчанию TRUE
		"centerOnScroll" : false // Если TRUE окно центрируется на экране, когда пользователь прокручивает страницу
	});

		//E-mail Ajax Send
		$('.form').submit(function() { //Change
			$.ajax({
				type: "POST",
				url: "mail.php", //Change
				data:  $(this).serialize()
			}).done(function() {
				alert("Спасибо ваша заявка отправлена!");
				setTimeout(function() {
					// Done Functions
					 $(this).trigger("reset");
				}, 1000);
			});
			return false;
		});

    $(window).scroll(function() {
      var t = $(document).scrollTop() / (($(document).height() - $(window).height()) / 100);
      $("#progress").height(t + "%");
    })
		var n = 2;

		// Определить четное или нечетное число
		var result = (n % 2 == 0) ? "четное" : "нечетное";

		console.log(result);     // Результат "четное"

		function getSumArray(arr)
{
	// Подсчитать сумму всех элементов массива
	var sum = 0;
	for (var i = 0; i < arr.length; i++)
		sum += arr[i];

	// Вернуть значение
	return sum;
}

// Вызовем функцию с произвольным числовым массивом
console.log( getSumArray([10,9,5]) );

function factorial(number)
{
	// Если входной аргумент не является допустимым значением,
	// возбуждается исключение!
	if (number < 0)
		throw new Error("Число не может быть отрицательным");

	// В противном случае значение вычисляется и возвращается нормальным образом
	for (var i = 1; number > 1; i *= number, number--);   /* пустое тело цикла */

	return i;
}
try {
	// Запросить число у пользователя
	var n = Number(prompt("Введите положительное число", ""));

	// Вычислить факториал числа, предполагая,
	// что входные данные корректны
	var f = factorial(n);

	// Вывести результат
	alert(n + "! = " + f);
}
catch (ex) {
	// Если данные некорректны, управление будет передано сюда
	alert(ex); // Сообщить пользователю об ошибке
}


$("button").click(function () {
$("div").animate({left:'+=200px'}, 2000);
$("div").animate({top:'0px'}, 600);
$("div").queue(function () {
$(this).toggleClass("red");
$(this).dequeue();
});
$("div").animate({left:'10px', top:'30px'}, 700);
});


});
