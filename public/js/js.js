
document.addEventListener('DOMContentLoaded',() => {
    let linkmenu = document.querySelectorAll("#linkmenu");
    let headerbackground = document.getElementById("nav");
    let tiendalink = document.getElementById("tiendalink");
    let anim = document.querySelectorAll("#anim");
    let galeria = document.getElementById("galeria");

    

    function Animaciones(){
        var i;
        let PixelesRecorridos = document.documentElement.scrollTop;
        for (i=0; i < linkmenu.length; i++){
            if (300 < PixelesRecorridos){
                headerbackground.style.backgroundColor = "white";
                linkmenu[i].style.color = "green";
                tiendalink.style.border = "solid 1px green";
                tiendalink.style.color = "green";
                
            }
            else if (300 > PixelesRecorridos){
                headerbackground.style.backgroundColor = "transparent";
                linkmenu[i].style.color = "white";
                tiendalink.style.border = "solid 1px white";
                tiendalink.style.color = "white";
            }
        }
        for (i=0; i < anim.length; i++){
            let altura = anim[i].offsetTop;
            let maxwidth = galeria.offsetWidth;
            if (altura - 400 < PixelesRecorridos){
                anim[i].style.transform = "translateX(0px)";
            }
            else if ( altura + 100 > PixelesRecorridos && maxwidth < 800 ){
                anim[0].style.transform = "translateX(-50vw)";
                anim[1].style.transform = "translateX(50vw)";
                anim[2].style.transform = "translateX(50vw)";
            }
            else if (altura < PixelesRecorridos && maxwidth > 800){
                anim[i].style.transform = "translatey(50vw)";
            }
            else if (altura + 500 > PixelesRecorridos && maxwidth > 800){
                anim[i].style.transform = "translatey(50vh)";
            }

        }
    }

    window.addEventListener("scroll", Animaciones)
    
    let article = document.getElementsByClassName("article-vasos");
    let articleright = document.getElementsByClassName("article-bong")
    let btnleft = document.getElementsByClassName("buton-left")
    let btnright = document.getElementsByClassName("buton-right")
    document.querySelector('#btnleft').addEventListener('click', function(){
        
            for(i = 0; i < article.length; i++){
                article[i].style.transform = 'translatex(0px)';
                articleright[i].style.transform = "translatex(0px)";
                btnleft[i].style.width = "20px";
                btnright[i].style.width = "8px";
            }
    });
    document.querySelector('#btnright').addEventListener('click', function(){
        let widthscreen = screen.width;
        if( widthscreen > 800){
        for(i = 0; i < article.length; i++){
            article[i].style.transform = 'translatex(-67.5vw)';
            articleright[i].style.transform = "translatex(-70vw)";
            btnright[i].style.width = "20px";
            btnleft[i].style.width = "8px";
            
        }}
        else if ( widthscreen < 800){
            for(i = 0; i < article.length; i++){
                article[i].style.transform = 'translatex(-100vw)';
                articleright[i].style.transform = "translatex(-90vw)";
                btnright[i].style.width = "20px";
                btnleft[i].style.width = "8px";
            }
        }


    });
});



