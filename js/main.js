$(window).load(function(){
  splash();
});

function splash(){
  $('#slide1').transition({
    opacity: 1,
    right: 0
  }, 500, function(){
    $(this).transition({
      opacity: 0
    }, 800, function(){
      $(this).remove();
    });
    $('#slide_cont').append("<div id='slide2' class='slide_pict'></div>");
    $('#slide2').transition({
      opacity: 1,
      left: 0
    }, 500, function(){
      $(this).transition({
        opacity: 0
      }, 800 ,function(){
        $(this).remove();
      });
    });
  });
}