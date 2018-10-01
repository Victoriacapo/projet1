(function() {
    var $ = jQuery.noConflict();

        var docWidth = window.innerWidth;

        initSliderPres();
        initSliderClient();
        initSliderLogo();
        clientRole();
        logoClientRole();

        refreshClients();

    function initSliderPres(){
        var swiperPres = new Swiper('.container-slider-present', {
            wrapperClass : 'slider-present',
            slideClass: 'pres-slides',
            pagination: '.pagination-pres',
            paginationClickable: true,
            paginationElementClass: 'pagination',
            paginationActiveClass: 'pagination-active',
            calculateHeight: true,
            loop: true,
            autoplay: 10000,
            resizeReInit: true,
            speed: 500,
            progress:true,
            onProgressChange: function(swiper){
                for (var i = 0; i < swiper.slides.length; i++){
                    var slide = swiper.slides[i];
                    var progress = slide.progress;
                    var translate = progress*swiper.width;
                    var opacity = 1 - Math.min(Math.abs(progress),1);
                    slide.style.opacity = opacity;
                    swiper.setTransform(slide,'translate3d('+translate+'px,0,0)');
                }
            },
            onTouchStart:function(swiper){
                for (var i = 0; i < swiper.slides.length; i++){
                    swiper.setTransition(swiper.slides[i], 0);
                }
            },
            onSetWrapperTransition: function(swiper, speed) {
                for (var i = 0; i < swiper.slides.length; i++){
                    swiper.setTransition(swiper.slides[i], speed);
                }
            }
        });
        // $('.arrow-pres-left').on('click', function(ev){ ev.preventDefault(); swiperPres.swipePrev(); });
        // $('.arrow-pres-right').on('click', function(ev){ ev.preventDefault(); swiperPres.swipeNext(); });
    }

    function initSliderClient(){
        var swiperClient = new Swiper('.wrapper-slider-client', {
            wrapperClass : 'slider-client',
            slideClass: 'slides',
            calculateHeight: true,
            slidesPerView: 'auto',
            slidesPerViewFit: true,
            freeMode: true,
            freeModeFluid: true
        });
        $('.arrow-client-left').on('click', function(ev){ ev.preventDefault(); swiperClient.swipePrev(); });
        $('.arrow-client-right').on('click', function(ev){ ev.preventDefault(); swiperClient.swipeNext(); });
    }

    function clientRole(){
        if ($('.link-client').length){
            var wrapperClient = $('.wrapper-client').first(),
                linkClient = $('.link-client'),
                contentClient = $('.content-client'),
                oldContent = null;

            linkClient.on('click', function(e){
                e.preventDefault();
                var currentLinkClient = linkClient.index(this),
                    currentContentClient = $(contentClient[currentLinkClient]),
                    currentHeight = currentContentClient.innerHeight();

                linkClient.removeClass('active');
                $(this).addClass('active');

                if(contentClient.hasClass('active')){
                    if (oldContent != null && oldContent != currentLinkClient){
                        $(contentClient[oldContent]).animate({
                            opacity: 0
                        }, {
                            duration: "fast",
                            complete: function(){
                                $(contentClient[oldContent]).removeClass('active');
                                wrapperClient.animate({height: currentHeight});
                                currentContentClient.animate({
                                    opacity: 1
                                }, {
                                    duration: "fast",
                                    complete: function(){
                                        currentContentClient.addClass('active')
                                        oldContent = currentLinkClient;
                                    }
                                });
                            }
                        });
                    } else {
                        wrapperClient.animate({
                            height: 0
                        }, {
                            complete: function(){
                                linkClient.removeClass('active');
                                contentClient.removeClass('active');
                            }
                        });
                    }
                } else {
                    oldContent = currentLinkClient;
                    currentContentClient.addClass('active').css('opacity', 1);
                    wrapperClient.animate({
                        height: currentHeight
                    });
                }
            });
        }
    }

    function initSliderLogo(){
        var swiperLogo = new Swiper('.wrapper-slider-logo', {
            wrapperClass : 'slider-logo',
            slideClass: 'slides-logo',
            calculateHeight: true,
            slidesPerView: 'auto',
            slidesPerViewFit: true,
            freeMode: true,
            freeModeFluid: true
        });
        $('.arrow-logo-left').on('click', function(ev){ ev.preventDefault(); swiperLogo.swipePrev(); });
        $('.arrow-logo-right').on('click', function(ev){ ev.preventDefault(); swiperLogo.swipeNext(); });
    }

    function logoClientRole(){
        if ($('.link-logo').length){
            var wrapperLogo = $('.wrapper-logo').first(),
                linkLogo = $('.link-logo'),
                contentLogo = $('.content-logo'),
                oldContentLogo = null;

            linkLogo.on('click', function(e){
                e.preventDefault();
                var currentLinkLogo = linkLogo.index(this),
                    currentContentLogo = $(contentLogo[currentLinkLogo]),
                    currentHeightLogo = currentContentLogo.innerHeight();

                linkLogo.removeClass('active');
                $(this).addClass('active');

                if(contentLogo.hasClass('active')){
                    if (oldContentLogo != null && oldContentLogo != currentLinkLogo){
                        $(contentLogo[oldContentLogo]).animate({
                            opacity: 0
                        }, {
                            duration: "fast",
                            complete: function(){
                                $(contentLogo[oldContentLogo]).removeClass('active');
                                wrapperLogo.animate({height: currentHeightLogo});
                                currentContentLogo.animate({
                                    opacity: 1
                                }, {
                                    duration: "fast",
                                    complete: function(){
                                        currentContentLogo.addClass('active')
                                        oldContentLogo = currentLinkLogo;
                                    }
                                });
                            }
                        });
                    } else {
                        wrapperLogo.animate({
                            height: 0
                        }, {
                            complete: function(){
                                linkLogo.removeClass('active');
                                contentLogo.removeClass('active');
                            }
                        });
                    }
                } else {
                    oldContentLogo = currentLinkLogo;
                    currentContentLogo.addClass('active').css('opacity', 1);
                    wrapperLogo.animate({
                        height: currentHeightLogo
                    });
                }
            });
        }
    }


    function umeshu_refreshClients(){

		window.turnover = 0;
		$('.client-logo-turnover-odd').hide();

		//recuperation des logos clients!
		setInterval(function(){

			var turnOverClassOdd = window.turnover%2 == 0 ? '.client-logo-turnover-even' : '.client-logo-turnover-odd' ;
			var turnOverClassEven = window.turnover%2 == 1 ? '.client-logo-turnover-odd' : '.client-logo-turnover-even' ;

			if(window.turnover % 2 == 0)
			{
				$(turnOverClassOdd).fadeOut( "slow", function(){



					$(turnOverClassEven).fadeIn( "slow", function(){


					});
				});

			}
			window.turnover++ ;
		}, 6000);

	}

    function refreshClients(){

    }

	window.clients_cur = 0;
	$('.clients-beta').hide();
	function refreshClientsNew(){

		if(window.clients_cur % 4 == 0) {
			$('.clients-even.clients-alpha').fadeOut( "slow", function(){
				$('.clients-even.clients-beta').fadeIn( "slow", function(){});
			});
		} else if(window.clients_cur % 4 == 1) {
			$('.clients-odd.clients-alpha').fadeOut( "slow", function(){
				$('.clients-odd.clients-beta').fadeIn( "slow", function(){});
			});
		} else if(window.clients_cur % 4 == 2) {
			$('.clients-even.clients-beta').fadeOut( "slow", function(){
				$('.clients-even.clients-alpha').fadeIn( "slow", function(){});
			});
		} else {
			$('.clients-odd.clients-beta').fadeOut( "slow", function(){
				$('.clients-odd.clients-alpha').fadeIn( "slow", function(){});
			});
		}
		window.clients_cur++;

		window.setTimeout(refreshClientsNew, 6000);
	}
	refreshClientsNew();

    function refreshClientsOld(){
        if ($('.content-clients').length){
            var initMod = 0,
                perLine = 6,
                listAllLogos = [];

            $.getJSON( "../sites/all/themes/spb/ajax/clients.php", function(json) {
                listAllLogos = json;
            }).fail(function(jqxhr, textStatus, error ) {
                var err = textStatus + ", " + error;
                console.log( "Request Failed: " + err );
            });

            // requestAnimationFrame(function() {
                setInterval(function(){
                    var listLogoClient = $('.logo-clients'),
                        currentListAllLogos = listAllLogos; // liste des 36 en base Drupal

                    var diff = []; //tableau des 12 images du site actuellement

                    listLogoClient.each(function(index, element){
                        diff.push(element.src);
                    });

                    var difference = []; // liste des chemin d'images (src) non prÃ©sents en front

                    $.grep(currentListAllLogos, function(el) {
                            if ($.inArray(el, diff) == -1) difference.push(el);
                    });

                    initMod = +!initMod;
                    var lineMod = initMod
                        currentListLogos = []; // tableau a charger pour le prochain refresh front

                    listLogoClient.each(function(index, element){
                        //var test = $(element).attr('src');  //contient les 36 elements src

                        difference.splice(difference.indexOf(element.src));

                        if (index % perLine == 0){
                            lineMod = +!lineMod;
                        }
                        if (index % 2 == lineMod){
                            currentListLogos.push(element);
                        }
                    });

                    randomElements = difference.sort(function(){
                        return Math.round(Math.random())-0.5
                    }).slice(0,6)

                    $.each(currentListLogos, function(val, e){
                        $(e).parent().fadeOut( "slow", function(){
                            $(e).attr("src", randomElements[val]);
                            $(e).parent().fadeIn( "slow" );
                        });
                    });

                }, 6000);
            // });
        }
    }
})();
