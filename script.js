luxy.init();

var typed = new Typed(".auto-type", {
    strings :["WELCOME TO UNLOCK CODING","LIKE SHARE AND SUBSCRIBE"],
    typeSpeed : 150,
    backSpeed : 150,
    loop: true,
});

function section1(){
    gsap.from(".section-1 .one",{
        height:"92vh",
        width:"90%",
       borderTopLeftRadius:"60px",
       borderTopRightRadius:"60px",
        scrollTrigger:{
            trigger:".section-1 .one .main-text",
            start: "center 45%",
            end:"center 0%",
            scrub:1,
            
        },
    });

    
  

}
section1()

function section1move(){
    gsap.to(".section-1 .one .main-text .heading .moving",{
        right:"100%",

        scrollTrigger:{
            trigger:".section-1 .one .main-text",
            start:"center 45%",
            end:"center 0%",
            scrub:4,
           
            
        },
    })   
}

section1move()

function section3(){
    gsap.from(".section-3 .three .main-text1",{
        height:"75vh",
        width:"90%",
        borderTopRightRadius:"60px",
        borderTopLeftRadius:"60px",
        boderRadius:"50px",
    
            scrollTrigger:{
            trigger:".section-2 .two",
            start:"center 45%",
            end:"center 0%",
            scrub:1,
        }
    })

    gsap.from(".section-3 .three ",{
        height:"92vh",
        width:"95%",
        borderTopRightRadius:"60px",
        borderTopLeftRadius:"60px",
            scrollTrigger:{
            trigger:".section-1 .one .main-text",
            start:"center 45%",
            end:"center 0%",
            scrub:1,
        }
    })

    
    gsap.from(".section-3 .three .main-text1 h1",{
        y:120,
        stagger:1,

        scrollTrigger:{
            trigger:".section-2 .two",
            start:"center 55%",
            end:"center 0%",
            scrub:1
        }
    })
    
    gsap.from(".section-3 .plane",{
        right : "100%",
        top:"90%",
        

        scrollTrigger:{
            trigger:".section-3 .three .main-text1",
            start:"bottom bottom",
            end:"top top",
            scrub:10,
        }
    })
  
}

section3()

// +++++++++++++++++++++section-4+++++++++++++++++++++++++++++

function section4(){
    gsap.from(".section-4 .four",{
        height:"40vh",
        width:"70%",
        borderTopLeftRadius:"80px",
        borderTopRightRadius:"80px",
       

        scrollTrigger:{
            trigger:".section-4 .four",
            start:"top 55%",
            end:"top 0",
            scrub:1,
        }
    })
}
 
section4()