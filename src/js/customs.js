$(document).ready(function() {
    if ($(window).width() > '769'){
        $('.nav__li').removeClass('nav__li-mobile')
        $('.nav').removeClass('nav__mobile')
    }else{
        $('.nav__li').addClass('nav__li-mobile')
        $('.nav').addClass('nav__mobile')

    }
    $("#submit").click(
        function(){
            sendAjaxForm('result_form', 'ajax_form', 'action_ajax_form.php');
            return false;
        }
    );

});
$('.open__menu').on('click', function (){
    $('.nav__mobile').show(300)
    $('.open__menu').hide(300)
    $('.close__menu').show(300)
    $('header').css({'height':'800px'})
})
$('.close__menu,.nav__li-mobile').on('click', function (){
    $('.nav__mobile').hide(300)
    $('.open__menu').show(300)
    $('.close__menu').hide(300)
    $('header').css({'height':''})
})
$('.slider-item__link').on('click', function (){
    $('.slider-item__description').toggle( "slow", function() {
       if ( $('.slider-item__description').css('display') == "none") {
           $('.slider__item').css({height: "400px", transition: 'height 1s'})
           $('.slider-item__link').text('Показать поднобности')
       } else {
           $('.slider-item__link').text('Скрыть подробности')
           $('.slider__item').css({height: "720px", transition: 'height 1s' })
       }
    });
})
$('.order').on('click', function (){
    $('#openModal').css({opacity: 1}).show('slow')
})
$('.close').on('click', function (){
    $('#openModal').css({opacity: 0}).hide('slow')
    $('#result_form').html('')
})
function sendAjaxForm(result_form, ajax_form, url) {
    $.ajax({
        url:     url, //url страницы (action_ajax_form.php)
        type:     "POST", //метод отправки
        dataType: "html", //формат данных
        data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект
        success: function(response) { //Данные отправлены успешно
            result = $.parseJSON(response);
            $('#result_form').html('Имя: '+result.name+'<br>Телефон: '+result.phonenumber);
            setTimeout(function (){
                $('#openModal').css({opacity: 0}).hide('slow');
                $('#result_form').html('')
            },1000)
        },
        error: function(response) { // Данные не отправлены
            $('#result_form').html('Ошибка. Данные не отправлены.').css({color: 'red'});
        }
    });
}

$('.slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                slidesToShow: 1,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        },
        {
            breakpoint: 992,
            settings: {
                arrows: false,
                slidesToShow: 2,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                arrows: false,
                slidesToShow: 3,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        },
    ]
});