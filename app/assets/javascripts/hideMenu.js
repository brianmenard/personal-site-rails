$('.menuLink').click(function(){
    if(window.matchMedia('(max-width:767px)').matches){
        $('.navbar-toggle').click();
    }
});