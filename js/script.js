$(document).ready(function(){

    $(function(){
        $('img.lazy').lazyload({
            effect: "fadeIn"
        });
    });


    $('.nav-item a').click(function(){
        $('.nav-item a').removeClass('active');
        $(this).addClass('active');
    });

    $('.mob-nav-items a').click(function(){
        $('.nav-bar-mob').removeClass('show');
    });
});