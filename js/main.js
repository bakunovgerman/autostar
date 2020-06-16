$(function() {
    $(".icon-oil").click(function() {
        if (!$(this).hasClass('active')){
            $('.icon-services').removeClass('active');
            $(this).addClass('active');
            $(".info-container").addClass('active');
            $(".info-die-text").text("Замена масла, фильтров и других расходников — один из этапов обязательного регламентного обслуживания каждого автомобиля.");
            $(".info-die-title").text('Масла и фильтры');
        }
        else{
            $(this).removeClass('active');
            $(".info-container").removeClass('active');
        }
    });
    $(".icon-wheels").click(function() {
        if (!$(this).hasClass('active')){
            $('.icon-services').removeClass('active');
            $(this).addClass('active');
            $(".info-container").addClass('active');
            $(".info-die-text").text("Диагностика, ремонт и замена компонентов подвески.");
            $(".info-die-title").text('Подвеска');
        }
        else{
            $(this).removeClass('active');
            $(".info-container").removeClass('active');
        }
        
    });
    $(".icon-power").click(function() {
        if (!$(this).hasClass('active')){
            $('.icon-services').removeClass('active');
            $(this).addClass('active');
            $(".info-container").addClass('active');
            $(".info-die-text").text("Четко отлаженная электрика и электронная система обеспечивают контроль и правильную работу важных систем и узлов автомобиля.");
            $(".info-die-title").text('Автоэлектрика');
        }
        else{
            $(this).removeClass('active');
            $(".info-container").removeClass('active');
        }
        
    });
    $(".icon-engine").click(function() {
        if (!$(this).hasClass('active')){
            $('.icon-services').removeClass('active');
            $(this).addClass('active');
            $(".info-container").addClass('active');
            $(".info-die-text").text("Для проведения ремонта у нас есть все необходимое: большой опыт работы по ремонту двигателей на разных марках автомобилей, современное оборудование, качественные комплектующие и расходные материалы.");
            $(".info-die-title").text('Ремонт двигателя');
        }
        else{
            $(this).removeClass('active');
            $(".info-container").removeClass('active');
        }
        
    });
    $(".icon-transmision").click(function() {
        if (!$(this).hasClass('active')){
            $('.icon-services').removeClass('active');
            $(this).addClass('active');
            $(".info-container").addClass('active');
            $(".info-die-text").text("Ремонт трансмиссии автомобиля – сложная и ответственная процедура, требующая предельной координации и внимательности, т.к. от ее качества зависит безопасность людей на дороге.");
            $(".info-die-title").text('Трансмиссия');
        }
        else{
            $(this).removeClass('active');
            $(".info-container").removeClass('active');
        }
        
    });
    $('.price-wrap-1').mouseenter(function(){
        $(this).addClass('active');
        $('.price-title-1').addClass('active');
        $('.price-money-1').addClass('active');
    });
    $('.price-wrap-1').mouseleave(function(){
        $(this).removeClass('active');
        $('.price-title-1').removeClass('active');
        $('.price-money-1').removeClass('active');
    });
    $('.price-wrap-2').mouseenter(function(){
        $(this).addClass('active');
        $('.price-title-2').addClass('active');
        $('.price-money-2').addClass('active');
    });
    $('.price-wrap-2').mouseleave(function(){
        $(this).removeClass('active');
        $('.price-title-2').removeClass('active');
        $('.price-money-2').removeClass('active');
    });
    $('.price-wrap-3').mouseenter(function(){
        $(this).addClass('active');
        $('.price-title-3').addClass('active');
        $('.price-money-3').addClass('active');
    });
    $('.price-wrap-3').mouseleave(function(){
        $(this).removeClass('active');
        $('.price-title-3').removeClass('active');
        $('.price-money-3').removeClass('active');
    });
    $('.header-burger').click(function(){
        $(".header-burger, .header-menu").toggleClass('active');
        $("body").toggleClass('lock');
    });

    
    $('.review-block-1').hover(function() {
    $('.author-1').css('color','var(--header-main)');
    $('.wrap-1').addClass('active');
    $(this).addClass('active');

        }, function() {
        $('.author-1').css('color','var(--header-above)');
        $('.wrap-1').removeClass('active');
        $(this).removeClass('active');
    });

    $('.review-block-2').hover(function() {
        $('.author-2').css('color','var(--header-main)');
        $('.wrap-2').addClass('active');
        $(this).addClass('active');
    
            }, function() {
            $('.author-2').css('color','var(--header-above)');
            $('.wrap-2').removeClass('active');
            $(this).removeClass('active');
    });

    $('.review-block-3').hover(function() {
        $('.author-3').css('color','var(--header-main)');
        $('.wrap-3').addClass('active');
        $(this).addClass('active');
    
            }, function() {
            $('.author-3').css('color','var(--header-above)');
            $('.wrap-3').removeClass('active');
            $(this).removeClass('active');
    });


    var header = $('.header');
    var headerAbove = $('.header-above');
    window.onscroll = function() {
        if (window.pageYOffset > 5) {
            header.addClass('move');
            $('.header-main-body').addClass('move');
        }
        if (window.pageYOffset < 20) {
            header.removeClass('move');
            $('.header-main-body').removeClass('move');
        }
    }
	$('a[href^="#"]').click(function() {
		var target = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(target).offset().top-80}, 800);
    });
    $('.menu').click(function(){
        $(".header-burger, .header-menu").toggleClass('active');
        $("body").toggleClass('lock');
    })
    if (screen.width<=320) {
        $('.icon-advantage-3').html('Гарантия<br>качества');
        $('.icon-advantage-4').html('Соблюдение<br>сроков');
    }
    if(screen.width>320){
        $('.icon-advantage-3').text('Гарантия качества');
        $('.icon-advantage-4').text('Соблюдение сроков');
    }
});

