//THIS CAN BE USED TO CHANGE THE HEIGHT OF THE PORTFOLIO SECTION, IF NECESSARY.
//WILL NEED MEDIA QUERIES USING if (window.matchMedia("size query").matches){...}

$(function() { 
    $(".webAnimation").on('click', function(){
        $(".animate").animate({height: '1500px',},"slow");
});

$(function() { 
    $(".designAnimation").on('click', function(){
      $(".animate").animate({height: '725px',},"slow");
	});
});