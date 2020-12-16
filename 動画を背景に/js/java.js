window.onload = function(){
// ページ読み込み時に実行したい処理

  var count = 0;
  var countup = function(){
document.getElementById('video_wrap').classList.add('video_slide');
  } 
  setTimeout(countup, 2600);

  var countblack = function(){
document.getElementById('black_back').classList.add('video_slide');
  } 
  setTimeout(countblack, 2200);

  var countblack = function(){
document.getElementById('gray_back').classList.add('video_slide');
  } 
  setTimeout(countblack, 2400);

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

  var counttext = function(){
  var documentte=	document.getElementsByClassName( "concept_text" );
documentte[0].classList.add('anime_text');
documentte[1].classList.add('anime_text');
  } 
  setTimeout(counttext, 2200);

  var counttext = function(){
  var documentti=	document.getElementsByClassName( "title_box" );
documentti[0].classList.add('anime_box');
  } 
  setTimeout(counttext, 3000);



}


$(function(){
$('.btn_wrap').on('click', function() {



$('.menu').toggleClass('over');

setTimeout(function(){
	$('.menu li').addClass('lislide');
},400);

if($('.menu').hasClass('over')){
	$('.menu li').removeClass('lislide');	
}


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
    $('.fadein').each(function(){
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 200){
        $(this).addClass('scrollin');
      }
    });
  });
});

$(function(){
  $(window).scroll(function (){
    $('.item1').each(function(){
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 200){
        $(this).addClass('scrollin_sp');
        setTimeout(function(){
        $('.item_back1').addClass('item_backslide')
    },200);
      }
    });
  });
});
$(function(){
  $(window).scroll(function (){
    $('.item2').each(function(){
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 300){
        $(this).addClass('scrollin_sp');
        setTimeout(function(){
        $('.item_back2').addClass('item_backslide')
    },200);
      }
    });
  });
});

$(function(){
  $(window).scroll(function (){
    $('.sp_p').each(function(){
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 100){
        $(this).addClass('fadein_sp');
      }
    });
  });
});


