$(function () {
    var wheel = $('.wheel');
    var random = 0;  //for test

    $('.handle').click(function () {
        random += 1800 + Math.floor(Math.random() * 360);
        //todo ajax
        /*$.post('/xxx', {

         },function(){
         wheel.removeClass('wheel-rotate');
         });
         wheel.addClass('wheel-rotate');*/
        wheel.animate({
            rotate: random + 'deg'
        }, 5000, 'ease');
    });

    //活动规则
    $('a.rule').click(function () {
        $('.mask').show().find('.rule').show();
    });
    $('a.know').click(function () {
        $(this).parent().hide().parent().hide();
    });

    //中奖名单
    $('.award-collapse').click(function () {
        $(this).animate({
            height: '0'
        }, 300, 'linear', function () {
            $('.award-expand').animate({
                'max-height': '600px'
            },3000)
        });
    });
    $('.award-expand').click(function () {
        $(this).animate({
            'max-height': '0'
        },1000, 'linear', function(){
            $('.award-collapse').animate({
                'height': '26px'
            },300);
        })
    });

    //倒计时
    var time = new Date(2016, 1, 25, 16, 30, 0),
        day = document.getElementById('day'),
        hour = document.getElementById('hour'),
        min = document.getElementById('min'),
        sec = document.getElementById('sec'),
        timer = setInterval(calc, 1000);
    calc();
    function calc() {
        var remain = (time - Date.now()) / 1000;
        if (remain <= 0) {
            clearInterval(timer);
            return;
        }
        day.textContent = format(remain / 60 / 60 / 24);
        hour.textContent = format(remain / 60 / 60 % 24);
        min.textContent = format(remain / 60 % 60);
        sec.textContent = format(remain % 60);
    }

    function format(d) {
        d = parseInt(d);
        return d < 10 ? '0' + d : d;
    }
});