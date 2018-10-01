/*global document, $*/

$(document).ready(function () {

    'use strict';

    var featOffset = $('.features').offset(),
        navHeight  = $('.navbar').height(),
        buyNow    = $('.buy-now').offset().top;
    
    //[ 1 ]Thing To Do While Scrolling
    $(document).scroll(function () {
       
        
        //Make The navBar Background White once you scroll
        if ($(this).scrollTop() > 0) {
            
            $('.navbar').addClass('bg-white');
            $('.navbar .navbar-brand, .navbar .nav-link').css('color', '#888');
                
        } else {
                
            $('.navbar').removeClass('bg-white');
            $('.navbar .navbar-brand, .navbar .nav-link').css('color', 'white');
        }
        
        
        //Add Box Shadow to The navbar once you passed the header
        if ($(this).scrollTop() >= 500) {
            
            $('.navbar').addClass('navbar-shadow');
                
        } else {
            
            $('.navbar').removeClass('navbar-shadow');
        }
        

        //Show The Scroll Button On scrolling
        if ($(this).scrollTop() >= (buyNow - 70)) {
            
            $('.scroll-button').css({
                
                bottom: '35px'
            })
            
        } else {
            
            $('.scroll-button').css({
                
                bottom: '-110px'
                
            });
        }
        
    });

    
    //[ 2 ]Document Scroll Down Once You Click Into Get Started Button
    $('.carousel-inner button').click(function () {
            
        $('body, html').animate({scrollTop: (featOffset.top - 70)}, 800);
            
    });

    
    //Scroll Top = 0 on clicking Scroll Button
    $('.scroll-button').click(function () {
        
        $('html, body').animate({scrollTop: 0}, 1000)
    });
    
    
});
