$(document).ready(function(){

    $(".about .title ul li a").click(function(e){
        e.preventDefault();

        $(".window").slideDown();
        $(".window-content").slideDown();
        $(".window-content .window-close").show();
    })

    $(".window-content .window-close").click(function(){
        $(".window").slideUp();
        $(".window-content").slideUp();
        $(".window-content .window-close").hide();
    })
    $(".window").click(function(){
        $(".window").slideUp();
        $(".window-content").slideUp();
        $(".window-content .window-close").hide();
    })

    $(".nav .btn").click(function(){
        
        $(".nav").toggleClass("on")
    })


});