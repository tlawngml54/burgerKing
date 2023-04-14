 //pc_nav
 $('body').on('mouseenter','nav.pc',function(){
    $('.depth').stop().slideDown();
    $('.depth2').stop().slideDown();
});

$('body').on('mouseleave','nav.pc',function(){
    $('.depth').stop().slideUp();
    $('.depth2').stop().slideUp();
});

//mobile_nav
$('#mobile_nav_btn').click(function(){
    $('#mobile_nav').show();
});
$('#mobile_nav_btn1').click(function(){
    $('#mobile_nav').hide();
});

$(".menu").click(function() {
    $(this).next(".slide1").stop().slideToggle(400);
   $('.one').toggleClass('open').siblings().removeClass('open');
   $(this).next(".menu").siblings(".menu").slideUp(400); // 1개씩 펼치기
 });

 $(".store").click(function() {
    $(this).next(".slide2").stop().slideToggle(400);
   $('.two').toggleClass('open').siblings().removeClass('open');
   $(this).next(".store").siblings(".store").slideUp(400); // 1개씩 펼치기
 });

 $(".event").click(function() {
    $(this).next(".slide3").stop().slideToggle(400);
   $('.three').toggleClass('open').siblings().removeClass('open');
   $(this).next(".event").siblings(".event").slideUp(400); // 1개씩 펼치기
 });

 $(".service").click(function() {
    $(this).next(".slide4").stop().slideToggle(400);
   $('.four').toggleClass('open').siblings().removeClass('open');
   $(this).next(".service").siblings(".service").slideUp(400); // 1개씩 펼치기
 });

/* $('nav.pc').hover(function(){
    $('.depth').stop().slideDown();
    },function(){
    $('.depth').stop().slideUp();
    });
    $('nav.pc').hover(function(){
    $('.depth2').stop().slideDown();
    },function(){
    $('.depth2').stop().slideUp();
    }); */
    

//메인슬라이드
let past = 0, now = 0, dir = 1;
$('.main_slide').eq(now).css({ left: 0 });

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('myvideo');
}

function move() {
    $('.main_slide').eq(past).stop(true, true).animate({ left: -100 * dir + '%' });
    $('.main_slide').eq(now).css({ left: 100 * dir + '%' }).stop(true, true).animate({ left: 0 });
    if (player) {
        if (now == 4) {
            player.seekTo(0);
            player.playVideo();
        } else {
            player.pauseVideo();
        }
    }
    past = now;
}

$('.left').click(function () {
    dir = -1;
    now--;
    if (now < 0) {
        now = 4;
    }
    move();
});

$('.right').click(function () {
    dir = 1;
    now++;
    if (now > 4) {
        now = 0;
    }
    move();
});

setInterval(function () {
    $('.right').click();
}, 10000);
//메인슬라이드 끝

//햄버거 슬라이드
$('.train').slick({
infinite: true,
 slidesToShow: 3,
 slidesToScroll: 1,
 autoplay:true,
 responsive: [ // 반응형 웹 구현 옵션
            {  
                breakpoint: 770, //화면 사이즈 960px
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow:1 
                } 
            },
        ]

});    

//instgram
var slider = $('.insta');     
var timer;    

$(window).on('load resize',function(){         
    clearTimeout( timer );          
    timer = setTimeout( sliderResponsive(), 100 ); 
})       
function sliderResponsive(){         
    if($(window).width() < 767){   
        slider.not('.slick-initialized').slick({                
            arrows: true,                
            slidesToShow: 1,                 
            slidesToScroll: 1            
        });           
                
    }else{             
        slider.filter('.slick-initialized').slick('unslick');                       
    }       
} 

$(window).resize(function(){
    if($(window).width()>770){
        $('nav').addClass('pc');
        $('nav').removeClass('mobile');
    }else{
        $('nav').removeClass('pc');
        $('nav').addClass('mobile');
    }
});

$(function(){
    $(window).resize();

    $('.depth2').hide();


});


   