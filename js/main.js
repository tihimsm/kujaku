$(window).load(function(){
  splash();
  // $('#enter_cont span').mouseover(function(e){
  //   changeColor(this, 'in');
  // }).mouseout(function(e) {
  //   changeColor(this, 'out');
  // });
});

function changeColor(element, type){
  if(type === 'in'){
    $(element).animate({'background':'-webkit-linear-gradient(#999, #222)', '-webkit-background-clip':'text', '-webkit-text-fill-color':'transparent'}, { duration: 'slow', easing: 'swing', });
  }else if(type === 'out'){
    $(element).animate({'background':'-webkit-linear-gradient(#222, #999)', '-webkit-background-clip':'text', '-webkit-text-fill-color':'transparent'}, { duration: 'slow', easing: 'swing', });
  }
}

function splash(){
  $('#slide1').transition({
    opacity: 1,
    right: 0
  }, 1000, function(){
    $(this).transition({
      opacity: 0
    }, 800, function(){
      $(this).remove();
    });
    $('#slide2').transition({
      opacity: 1,
      left: 0
    }, 800, function(){
      $(this).transition({
        opacity: 0
      }, 800 ,function(){
        $(this).remove();
      });
      $('#slide3').transition({
        opacity: 1,
        top: 0
      }, 600, function(){
        $(this).transition({
          opacity: 0
        }, 800 ,function(){
          $(this).remove();
        });
        $('#slide4').transition({
          opacity: 1,
          bottom: 0
        }, 500, function(){
          $(this).transition({
            opacity: 0
          }, 800 ,function(){
            $(this).remove();
          });
          $('#slide5').transition({
            opacity: 1,
            bottom: 0,
            left: 0
          }, 400, function(){
            $(this).transition({
              opacity: 0
            }, 800 ,function(){
              $(this).remove();
            });
            $('#slide6').transition({
              opacity: 1,
              top: 0,
              right: 0
            }, 300, function(){
              $(this).transition({
                opacity: 0
              }, 1500 ,function(){
                $(this).remove();
              });
              $('#slide7, #enter_cont').transition({
                opacity: 1,
              }, 3000);
              $('.curtain').transition({
                opacity: 0.5,
              }, 3000);
              $('#slide_cont').css('cursor', 'auto');
            });
          });
        });
      });
    });
  });
}