// 패밀리사이트
$(document).ready(function () {
    $('.family .arrow').toggle(function () {
        $('.family .aList').slideDown('fast');
        $('.family .arrow i').addClass('.fa-solid fa-angle-up')
    }, function () {
        $('.family .aList').slideUp('fast');
        $('.family .arrow i').removeClass('.fa-solid fa-angle-up')
    });

    //tab키 처리
    $('.family .arrow').on('focus', function () {
        $('.select .aList').slideUp();
    });
    $('.family .aList li:last a').on('blur', function () {
        $('.family .aList').slideDown();
    });

    //topMove
    $('.topMove').hide();

    $(window).on('scroll', function () { //스크롤 값의 변화가 생기면
        var scroll = $(window).scrollTop(); //스크롤의 거리


        $('.text').text(Math.floor(scroll));
        if (scroll > 100) { //500이상의 거리가 발생되면
            $('.topMove').fadeIn('slow');  //top보여라~~~~
        } else {
            $('.topMove').fadeOut('fast');//top안보여라~~~~
        }
    });
    $('.topMove').click(function (e) {
        e.preventDefault();
        //상단으로 스르륵 이동합니다.
        $("html,body").stop().animate({ "scrollTop": 0 }, 1000);
    });






    // menu


    var op = false;  //네비가 열려있으면(true) , 닫혀있으면(false)
    $(".menu_ham").click(function () { //메뉴버튼 클릭시

        var documentHeight = $(document).height();
        $("#gnb").css('height', documentHeight);

        if (op == false) {
            $("#gnb").animate({ right: 0, opacity: 1 }, 'fast');
            $('#headerArea').addClass('mn_open');
            op = true;
        } else {
            $("#gnb").animate({ right: '-100%', opacity: 0 }, 'fast');
            $('#headerArea').removeClass('mn_open');
            op = false;
        }

    });


    //2depth 메뉴 교대로 열기 처리 
    var onoff = [false, false, false, false];
    var arrcount = onoff.length;

    $('#gnb .depth1 h3 a').click(function () {
        var ind = $(this).parents('.depth1').index();

        if (onoff[ind] == false) {
            $('#gnb .depth1 ul').hide();
            $(this).parents('.depth1').siblings().find('h3').children('a').css('color', '#333');
            $(this).css('color', '#da291c');
            $(this).parents('.depth1').find('ul').slideDown('fast');
            $(this).parents('.depth1').siblings('li').find('ul').slideUp('fast');
            for (var i = 0; i < arrcount; i++) onoff[i] = false;
            onoff[ind] = true;
            $('.depth1 i').attr('class', 'fas fa-plus');
            $(this).find('i').attr('class', 'fas fa-minus');

        } else {
            $(this).css('color', '#333')
            $(this).parents('.depth1').find('ul').slideUp('fast');
            onoff[ind] = false;
            $('.depth1 i').attr('class', 'fas fa-plus');
        }
    });
























})