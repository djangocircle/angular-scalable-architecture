$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  //console.log(scroll);
  if (scroll >= 100) {
    //console.log('a');
    $("body").addClass("stickys");
  } else {
    //console.log('a');
    $("body").removeClass("stickys");
  }
});


$('.tg-categoriesslider').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
    0:{
      items:1
    },
    600:{
      items:3
    },
    1000:{
      items:4
    }
  }
})
$('.tg-ads-new').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
    0:{
      items:2
    },
    600:{
      items:3
    },
    1000:{
      items:5
    }
  }
})
$('.modal-single-img').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
    0:{
      items:1
    },
    600:{
      items:1
    },
    1000:{
      items:1
    }
  }
})

$(document).ready(function(){
  $(".search-bar").click(function(){
    $(".search-area").toggle();
    var lastScrollTop = 0;
    $(window).scroll(function(event){
       var st = $(this).scrollTop();
       if (st > lastScrollTop){
           $(".search-area").css("display","none");
       } else {
          // upscroll code
       }
       lastScrollTop = st;
    });
    $("#hide-btn").click(function(){

       $(".search-area").css("display","none");
    });
  });
  });

  $(document).ready(function(){
    $(".country-ph").click(function(){
      $(".country-div").toggle();
      $(".country-li").click(function(){

         $(".country-div").css("display","none");
      });
    });
  });
