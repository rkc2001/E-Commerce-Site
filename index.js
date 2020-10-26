var typed = new Typed(".typefx1", {
    strings: ["Laces", "Cloth", "Boutique", "And More"],
    smartBackspace: true,
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
    });




function toggle() {
    const toggle = document.querySelector('.toggle');
    toggle.classList.toggle('active');

    const banner = document.querySelector('.banner');
    banner.classList.toggle('active');

}

// function scroll() 
// {
//     var element = document.querySelector('.about');
//     var top = element.clientHeight;
//     console.log(top);

//     const toggle = document.querySelector('.toggle');
//     toggle.addEventListener("scroll",window.scrollY > 506.66668701171875 ////// 470.65)
// }

window.addEventListener('scroll',function(){
    const down = document.querySelector('header');
    down.classList.toggle("down",window.scrollY > (556.66+47.7));
});