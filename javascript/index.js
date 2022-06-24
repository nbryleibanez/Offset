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

    $("#content__item1").hover(function(){
        $("#content__initial1").fadeToggle(100);
    });

    $("#content__item2").hover(function(){
        $("#content__initial2").fadeToggle(100);
    });
    
    $("#content__item3").hover(function(){
        $("#content__initial3").fadeToggle(100);
    });

    $("#content__item4").hover(function(){
        $(this).fadeToggle(100);
    });

}); 