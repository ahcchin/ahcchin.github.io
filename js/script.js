
$(function(){

$('a').click(function(){
    console.log($( $.attr(this, 'href') ).offset().top)
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 900, "easeOutCubic")
    return false
});

//nav bar

// $(window).scroll(function(){
//     if ($(this).scrollTop() > 380 ){
//         $("nav #mobileNavBar").addClass("shown")
//     }
//     else if ($(this).scrollTop() <= 380 ) {
//         $("nav #mobileNavBar").removeClass("shown")

//     }

// })




var cycle = true;

$('#logo').click( function(){

  if (cycle)  //allows rotation to flip back and forth
  {
    $(this).transition({
    perspective: '210px',
    rotateY: '360deg'})

    cycle = false
  }
  else {
        $(this).transition({
    perspective: '100px',
    rotateY: '0deg'})

    cycle = true
  }
  
})

$('#project1').cycle({ 
    fx:     'fade', 
    speed:  'fast', 
    timeout: 0, 
    next:   '#next2', 
    prev:   '#prev2' 
})

 $('.gallery').gallery();

})
