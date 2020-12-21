window.onload = function(){
  // ページ読み込み時に実行したい処理

  var count = 0;
  var countup = function(){
document.getElementById('video_wrap').classList.add('video_slide');
  } 
  setTimeout(countup, 3600);

  var countblack = function(){
document.getElementById('black_back').classList.add('video_slide');
  } 
  setTimeout(countblack, 3200);

  var countblack = function(){
document.getElementById('gray_back').classList.add('video_slide');
  } 
  setTimeout(countblack, 3400);
  
var countload = function(){
document.getElementById('load').classList.add('load_none');
} 
setTimeout(countload, 2000);



var countspan = function(){
var documentli=	document.getElementsByClassName( "ss" );
documentli[0].classList.add('anime_span');
documentli[1].classList.add('anime_span');
documentli[2].classList.add('anime_span');
documentli[3].classList.add('anime_span');
documentli[4].classList.add('anime_span');
documentli[5].classList.add('anime_span');
documentli[6].classList.add('anime_span');
}
setTimeout(countspan, 2000);
}

var counttext = function(){
var documentbox=	document.getElementsByClassName( "concept_min_box" );
documentbox[0].classList.add('anime_box');
} 
setTimeout(counttext, 3000);




$(function(){
$('.btn_wrap').on('click', function() {

  // メニューを表示・非表示させています
$('.menu').toggleClass('over');
// ボタンの切り替えです
setTimeout(function(){
$('.btn').toggleClass('btnout');
},10);
setTimeout(function(){
$('.btn2').toggleClass('btnchange');
},10);


});
});


$(function(){
  $(window).scroll(function (){
    $('.gray_over').each(function(){
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 200){
        $(this).addClass('gray_up');
      }
    });
  });
});
