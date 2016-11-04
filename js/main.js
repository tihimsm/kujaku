$(window).load(function(){
  splash();
  $(document).on('click', '#enter', function(){
    $(this).transition({
      opacity: 0
    }, 500, function(){
      $('#enter_cont').remove();
    });
    $('.curtain_right').transition({
      right: '-100%',
      skewX: '40deg',
      borderBottomLeftRadius: '100% 100%'
    }, 1000, function(){
      $(this).remove();
    });
    $('.curtain_left').transition({
      left: '-100%',
      skewX: '-40deg',
      borderBottomRightRadius: '100% 100%'
    }, 1000, function(){
      $(this).remove();
    });
  });
});

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
                opacity: 0.4,
              }, 500);
              $('#slide_cont').css('cursor', 'auto');
            });
          });
        });
      });
    });
  });
}