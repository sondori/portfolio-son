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

    $(".about .about-content img").mouseover(function(){
        let i = $(".about .about-content img").index(this);
        $(".about .about-content .about-event .txt").hide().eq(i).show("on")
        $(".about .about-wrap .about-content img").removeClass("on").eq(i).addClass("on")
    })
    $(".about .about-content").mouseout(function(){
        let i = $(".about .about-content img").index(this);
        $(".about .about-content .about-event .txt").hide()
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



    })

    function skill(id, per) {
        let bar = new ProgressBar.Line(id,{
            strokeWidth :3,
            trailWidth: 3,
            color: "#000",
            duration: 5000,
            step: function(state,circle){
                circle.setText(Math.round(circle.value()*100)+"%")
            }
        })
        bar.animate(per)
    }

skill("#html" , 0.8)
skill("#css" , 0.8)
skill("#js" , 0.6)
skill("#ps" , 0.8)
skill("#ai" , 0.8)


$(".work .work-all").hide().eq(0).show();
$(".work .work-menu ul li").eq(0).addClass("on")
$(".work .work-menu ul li").click(function(e){
    e.preventDefault();
    
    let i = $(this).index();

    $(".work .work-all").hide().eq(i).show();
    $(".work .work-menu ul li").removeClass("on").eq(i).addClass("on")
})

$(".work .work-menu ul li").click(function(){
    let i = $(this).index();

    $(".work .work-menu ul li").removeClass("on").eq(i).addClass("on")
})







});