'use strict';
$(function () {
    var wheel = $('.wheel');
    var mask = $('.mask');
    var remain_time = $('.remain-time>span');
    var times = 2;
    var lock = false;

    window.exp = remain_time;

    $('.handle').click(function () {
        if(lock){
            return;
        }
        if(times<=0){
            mask.show().find('.award').show().find('.prize-no-time').show();
            return;
        }
        lock = true;
        times --;
        wheel.css({
            transform: 'rotate(0deg)'
        });
        var random = 3600 - Math.floor(Math.random() * 45);
        //todo ajax
        /*$.post('/xxx', {

         },function(){
         wheel.removeClass('wheel-rotate');
         });
         wheel.addClass('wheel-rotate');*/
        wheel.animate({
            rotate: random + 'deg'
        }, 6000, 'ease', function () {
            setTimeout(function(){
                mask.show().find('.award').show().find('.prize-cry').show();
                lock = false;
                remain_time.text(times + '次');
            },500);
        });
    });
     mask.children('.award').click(function(){
         $(this).hide().children('img').hide();
         mask.hide();
     });

    //活动规则
    $('a.rule').click(function (e) {
        $('.mask').show().find('.rule').show();
    });
    $('a.know').click(function () {
        $(this).parent().hide().parent().hide();
    });

    //中奖名单
    var collapse = $('.award-collapse'),
        expand = $('.award-expand');
    collapse.click(function () {
        collapse.animate({
            height: '0'
        }, 300, 'linear', function () {
            collapse.hide();
            expand.show().animate({
                'max-height': '400px'
            }, 1000);
        });
    });
    $('.list-items').click(function () {
        expand.animate({
            'max-height': '0'
        }, 1000, 'linear', function () {
            expand.hide();
            collapse.show().animate({
                'height': '1.6rem'
            }, 300);
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