$(document).ready(function(){


    AOS.init()

    $(".nav ul li").mouseover(function(){
        let i = $(this).index();
        $(".nav ul li").removeClass("on").eq(i).addClass("on")
    })


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

    $(".about .about-event .img").mouseover(function(){
        let i = $(".about .about-event .img").index(this);
        $(".about .about-content .about-event .txt").hide().eq(i).show("on")
        $(".about .about-wrap .about-content img").removeClass("on").eq(i).addClass("on")
    })
    $(".about .about-event .img").mouseout(function(){
        let i = $(".about .about-event .img").index(this);
        $(".about .about-content .about-event .txt").hide();
        $(".about .about-wrap .about-content img").removeClass("on")
    })


    $(".skill .skill-event img").mouseover(function(){
        let i = $(".skill-event img").index(this);

        $(".skill .skill-event img").removeClass("on").eq(i).addClass("on")
        $(".skill .skill-event .txt").hide().eq(i).show()

    })
    $(".skill .skill-event img").mouseout(function(){
        let i = $(".skill-event img").index(this);
        $(".skill .skill-event img").removeClass("on")
        $(".skill .skill-event .txt").hide()
    })



    $(window).scroll(function(){

    let pos = $(window).scrollTop()
        // console.log($(".about-wrap").offset().top)

        if(pos >= $(".about-wrap").offset().top-800){
            $(".about-wrap .about-content img").show()
        }else{
            $(".about-wrap .about-content img").hide()
        }

        $(".nav ul li a").eq(2).click(function(e){
            e.preventDefault();
            pos = $(".about-wrap").offset().top
        })



    })



});