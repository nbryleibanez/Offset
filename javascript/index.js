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
    const indicatorParents = document.querySelector("#billboard-navigation");
    var billboardIndex = 0;

    $("#main__billboard-container").hover(function(){
        $(".billboard-arrows").toggle(250);
    });

    $("#main__billboard-container").mouseenter(function(){
        $("#billboard-navigation").css("opacity", "1");
    });
    $("#main__billboard-container").mouseleave(function(){
        $("#billboard-navigation").css("opacity", "0");
    });
    
    document.querySelectorAll(".billboard-navigation__items").forEach(function(indicator, ind){
        $(indicator).click(function(){
            billboardIndex = ind;
            document.querySelector(".billboard-navigation__items.selected").classList.remove("selected");
            indicator.classList.add("selected");
            billboardCarousel.style.transform = 'translate(' + billboardIndex * (100 / -3) + '%)';     
        });
    });

    $(".billboard-arrows.left").click(function(){
        billboardIndex = (billboardIndex > 0) ? billboardIndex - 1 : 0;
        document.querySelector(".billboard-navigation__items.selected").classList.remove("selected");
        indicatorParents.children[billboardIndex].classList.add("selected");
        billboardCarousel.style.transform = 'translate(' + billboardIndex * (100 / -3) + '%)';
    });

    $(".billboard-arrows.right").click(function(){
        billboardIndex = (billboardIndex < 2) ? billboardIndex + 1 : 2;
        document.querySelector(".billboard-navigation__items.selected").classList.remove("selected");
        indicatorParents.children[billboardIndex].classList.add("selected");
        billboardCarousel.style.transform = 'translate(' + billboardIndex * (100 / -3) + '%)';
    });

    // ====== MAIN STORE ======

    // == LEFT STORE ==

    const storeLeftCarousel = document.querySelector("#store__left-carousel");
    const storeLeftIndicatorParents = document.querySelector("#store__left-navigation");
    var storeLeftIndex = 0;

    $("#store__left-container").hover(function(){
        $(".store__left-arrows").toggle(250);
    });

    $("#store__left-container").mouseenter(function(){
        $("#store__left-navigation").css("opacity", "1");
    });
    $("#store__left-container").mouseleave(function(){
        $("#store__left-navigation").css("opacity", "0");
    });
    
    document.querySelectorAll(".store__left-navigation__items").forEach(function(indicator, ind){
        $(indicator).click(function(){
            storeLeftIndex = ind;
            document.querySelector(".store__left-navigation__items.selected").classList.remove("selected");
            indicator.classList.add("selected");
            storeLeftCarousel.style.transform = 'translate(' + storeLeftIndex * (100 / -3) + '%)';     
        });
    });

    $(".store__left-arrows.left").click(function(){
        storeLeftIndex = (storeLeftIndex > 0) ? storeLeftIndex - 1 : 2;
        document.querySelector(".store__left-navigation__items.selected").classList.remove("selected");
        storeLeftIndicatorParents.children[storeLeftIndex].classList.add("selected");
        storeLeftCarousel.style.transform = 'translate(' + storeLeftIndex * (100 / -3) + '%)';
    });

    $(".store__left-arrows.right").click(function(){
        storeLeftIndex = (storeLeftIndex < 2) ? storeLeftIndex + 1 : 0;
        document.querySelector(".store__left-navigation__items.selected").classList.remove("selected");
        storeLeftIndicatorParents.children[storeLeftIndex].classList.add("selected");
        storeLeftCarousel.style.transform = 'translate(' + storeLeftIndex * (100 / -3) + '%)';
    });

    // == RIGHT STORE ==

    $("#content__item1").mouseenter(function(){
        $("#content__initial1").fadeOut(150);
    });
    $("#content__item1").mouseleave(function(){
        $("#content__initial1").fadeIn(150);
    });

    $("#content__item2").mouseenter(function(){
        $("#content__initial2").fadeOut(150);
    });
    $("#content__item2").mouseleave(function(){
        $("#content__initial2").fadeIn(150);
    });

    $("#content__item3").mouseenter(function(){
        $("#content__initial3").fadeOut(150);
    });
    $("#content__item3").mouseleave(function(){
        $("#content__initial3").fadeIn(150);
    });

    $("#content__item4").mouseenter(function(){
        $("#content__initial4").fadeOut(150);
    });
    $("#content__item4").mouseleave(function(){
        $("#content__initial4").fadeIn(150);
    });

    $("#content__item5").mouseenter(function(){
        $("#content__initial5").fadeOut(150);
    });
    $("#content__item5").mouseleave(function(){
        $("#content__initial5").fadeIn(150);
    });

    $("#content__item6").mouseenter(function(){
        $("#content__initial6").fadeOut(150);
    });
    $("#content__item6").mouseleave(function(){
        $("#content__initial6").fadeIn(150);
    });


}); 