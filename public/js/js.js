
document.addEventListener('DOMContentLoaded',() => {
    let article = document.getElementsByClassName("article-vasos");
    let articleleft = document.getElementById("article-vasos")
    let articleright = document.getElementById("article-bong")
    let btnleft = document.getElementById("btnleft")
    let btnright = document.getElementById("btnright")
    let llave = 0;
    document.querySelector('#btnleft').addEventListener('click', function(){
        let widthscreen = visualViewport.width;
        if (llave > 0){
            if ( widthscreen > 800){
                    articleleft.style.transform = 'translatex(0px)';
                    articleright.style.transform = "translatex(0px)";
                    btnleft.style.width = "20px";
                    btnright.style.width = "8px";}
            else if ( widthscreen < 800){
                articleright.style.transform="translatex(0vw)"
                articleleft.style.transform = 'translatex(0vw)';
                btnleft.style.width = "20px";
                btnright.style.width = "8px";
                setTimeout(function(){
                    for(i = 0; i < article.length; i++){
                        articleright.style.transition="0s"
                        articleright.style.right="200vw";
                    
                    }
                },1500)
            }
            else{}
        }
    });

    document.querySelector('#btnright').addEventListener('click', function(){
        let widthscreen = visualViewport.width;
        if ( widthscreen > 800){
            llave++;
            articleleft.style.transform = 'translatex(-67.5vw)';
            articleright.style.transform = "translatex(-70vw)";
            btnright.style.width = "20px";
            btnleft.style.width = "8px";
        }
        else if ( widthscreen < 800){
            llave++;
            articleright.style.right="0vw";
            setTimeout(function (){
                    articleright.style.transition="1.5s"
                    articleleft.style.transform = 'translatex(-100vw)';
                    articleright.style.transform = "translatex(-94.6vw)";
                    btnright.style.width = "20px";
                    btnleft.style.width = "8px";
            },100)
        }


    });

    
})
//     let linkmenu = document.querySelectorAll("#linkmenu");
//     let headerbackground = document.getElementById("nav");
//     let tiendalink = document.getElementById("tiendalink");
//     let anim = document.querySelectorAll("#anim");
//     let anim1 = document.getElementById("anim")
//     let galeria = document.getElementById("galeria");
//     let animcolor = document.getElementById('animcolor')

 

    

//     function Animaciones(){
//         let altura = anim1.offsetTop;
//         var i;
//         let PixelesRecorridos = document.documentElement.scrollTop;
//         let maxwidth = galeria.offsetWidth;
//         console.log(PixelesRecorridos,altura,maxwidth)
//         for (i=0; i < linkmenu.length; i++){
//             if (200 < PixelesRecorridos){
//                 headerbackground.style.backgroundColor = "white";
//                 linkmenu[i].style.color = "green";
//                 tiendalink.style.border = "solid 1px green";
//                 tiendalink.style.color = "green";
                
//             }
//             else if (200 > PixelesRecorridos){
//                 headerbackground.style.backgroundColor = "transparent";
//                 linkmenu[i].style.color = "white";
//                 tiendalink.style.border = "solid 1px white";
//                 tiendalink.style.color = "white";
//             }
//         }
//         for (i=0; i < anim.length; i++){
//             if (altura + 700 < PixelesRecorridos){
//                 animcolor.style.height="100%"
//                 anim[i].style.height="100%"
//             }
//         }
//     }

//     window.addEventListener("scroll", Animaciones)
    
//     let article = document.getElementsByClassName("article-vasos");
//     let articleright = document.getElementsByClassName("article-bong")
//     let btnleft = document.getElementsByClassName("buton-left")
//     let btnright = document.getElementsByClassName("buton-right")
//     document.querySelector('#btnleft').addEventListener('click', function(){
//         let widthscreen = visualViewport.width;
//         if ( widthscreen > 800){
//             for(i = 0; i < article.length; i++){
//                 article[i].style.transform = 'translatex(0px)';
//                 articleright[i].style.transform = "translatex(0px)";
//                 btnleft[i].style.width = "20px";
//                 btnright[i].style.width = "8px";
//             }}
//         else if ( widthscreen < 800){
//             for(i = 0; i < article.length; i++){
//             article[i].style.transform = 'translatex(27.5vw)';
//             articleright[i].style.transform = "translatex(70vw)";
//             btnleft[i].style.width = "20px";
//             btnright[i].style.width = "8px";
//         }}
//     });
    // document.querySelector('#btnright').addEventListener('click', function(){
    //     let widthscreen = visualViewport.width;
    //     if ( widthscreen > 800){
    //     for(i = 0; i < article.length; i++){
    //         article[i].style.transform = 'translatex(-67.5vw)';
    //         articleright[i].style.transform = "translatex(-70vw)";
    //         btnright[i].style.width = "20px";
    //         btnleft[i].style.width = "8px";
            
    //     }}
    //     else if ( widthscreen < 800){
    //         for(i = 0; i < article.length; i++){
    //             article[i].style.transform = 'translatex(-100vw)';
    //             articleright[i].style.transform = "translatex(-28vw)";
    //             btnright[i].style.width = "20px";
    //             btnleft[i].style.width = "8px";
    //         }
    //     }


    // });
// });


