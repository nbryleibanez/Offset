$(document).ready(function(){

    

    $("#nav__options__acount").click(function(){;
        $("#sign-up-container").css({"pointer-events": "auto", "opacity": "1"});
    });

    $("#sign-up__close-button").click(function(){
        $("#sign-up-container").css({"pointer-events": "none", "opacity": "0"});
    });

    $("#sign-up__sign-up-button").click(function(){
        var email = $("#sign-up__input-email").val();
        var username = $("#sign-up__input-username").val();
        var password = $("#sign-up__input-password").val();
        var repassword = $("#sign-up__input-repassword").val();

        if(password == repassword){
            console.log("match");
        } else {
            
        }
    });

    // ====== MAIN BILLBOARD ======

    const billboardCarousel = document.querySelector("#billboard-carousel");
    var billboardIndex = 0;

    $("#main__billboard-container").hover(function(){
        $(".billboard-arrows").toggle(250);
    });

    $(".billboard-arrows.left").click(function(){
        billboardIndex = (billboardIndex > 0) ? billboardIndex - 1 : 0;
        billboardCarousel.style.transform = 'translate(' + billboardIndex * (100 / -3) + '%)';
    });

    $(".billboard-arrows.right").click(function(){
        billboardIndex = (billboardIndex < 2) ? billboardIndex + 1 : 2;
        billboardCarousel.style.transform = 'translate(' + billboardIndex * (100 / -3) + '%)';
    });

    // ====== MAIN STORE ======

    $("#content__item1").hover(function(){
        $("#content__initial1").fadeToggle(300);
    });

    $("#content__item2").hover(function(){
        $("#content__initial2").fadeToggle(300);
    });
    
    $("#content__item3").hover(function(){
        $("#content__initial3").fadeToggle(300);
    });

    $("#content__item4").hover(function(){
        $("#content__initial4").fadeToggle(300);
    });

}); 