$(document).ready(function(){




    AOS.init()






    $(".nav ul li").mouseover(function(){
        let i = $(this).index();
        $(".nav ul li").removeClass("on").eq(i).addClass("on")
    })
    $(".nav ul li").mouseout(function(){
        let i = $(this).index();
        $(".nav ul li").removeClass("on")
    })


    $(".about .title span").click(function(e){
        e.preventDefault();

        $(".window").slideDown();
        $(".window-content").slideDown();
        $(".window-content .window-close").show();
    })

    $(".window").click(function(){
        $(".window").slideUp();
        $(".window-content").slideUp();
        $(".window-content .window-close").hide();
    })

    $(".nav .btn").click(function(){
        
        $(".nav").toggleClass("on")
    })

    $(".about .about-content2 .txt").hide()
    $(".about .about-content img").mouseover(function(){
        let i = $(".about .about-content img").index(this);
        $(".about .about-content2 .txt").slideUp().eq(i).slideDown("on")
        $(".about .about-wrap .about-content img").removeClass("on").eq(i).addClass("on")
    })
    $(".about .about-content").mouseout(function(){
        let i = $(".about .about-content img").index(this);
        $(".about .about-content2 .txt").hide()
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

        if(pos >= $(".about-wrap").offset().top-1000){
            $(".about-wrap .about-content img").show()
        }else{
            $(".about-wrap .about-content img").hide()
        }

        if(pos >= $(".skill").offset().top-1000000){
            $(".skill .skill-wrap").show()
        }



    })

    function skill(id, per) {
        let bar = new ProgressBar.Line(id,{
            strokeWidth :3,
            trailWidth: 3,
            color: "#cbeaff",
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


"use strict";
const content = "안녕하세요. 신입 웹디자이너 손혜지입니다."
const text = document.querySelector(".text")
let index = 0;

function sleep(delay){ 
    const start = new Date().getTime(); 
    while (new Date().getTime() < start + delay); 
    }

function typing(){
    text.textContent += content[index++];
    if(index > content.length){
        text.textContent = ""
        index = 0;
        sleep(3000);
    }
}
setInterval(typing, 200)






});