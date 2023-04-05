$(function(){
  $('.gnb>li').hover(function(e){
      e.preventDefault();
      $(this).find('.lnb').stop().fadeToggle();
  });
  setInterval(slideInOut, 4000);

  $('.popuopen').click(function(e){
     e.preventDefault();
     $('.popback').fadeIn();
  });

  $('.close').click(function(){
    $('.popback').fadeOut();
  });

  $('.family').click(function(){
     if($(this).find('span').hasClass('arrow-down')){
         $(this).find('span').removeClass('arrow-down').addClass('arrow-up');
         $('.familysub').show();
     }else{
         $(this).find('span').removeClass('arrow-up').addClass('arrow-down');
         $('.familysub').hide();
     }
    //  $('.family span').
  });

  // $('.family').change(function(){
  //    let link = $(this).val();
  //    if(link) {
  //       location.href="http://" + link;
  //    }else{
  //       alert('사이트를 선택하세요.');
  //    }
  // });

});  //jquery

function slideInOut(){
  const w = $('.slidein>div').width();
  $('.slidein').animate({
      left: -w + "px"
  },1000, function(){
     $('.slidein div:eq(0)').clone().appendTo('.slidein');
     $('.slidein div:eq(0)').remove();
     $('.slidein').css('left', 0);
  });
}