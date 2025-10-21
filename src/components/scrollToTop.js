
const scrollToTop = document.getElementById("toTop");

scrollToTop.addEventListener("click", scrollTop);

export function scrollTop (){

    window.scroll({
        top:0,
        behavior:"smooth",
    });
}

window.addEventListener("scroll",() => {

    if(window.scrollY > 300){
        scrollToTop.style.display = "block"
    }else{
        scrollToTop.style.display = "none"
    }
})