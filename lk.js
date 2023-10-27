let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountain = document.getElementById('mountain');
let home = document.getElementById('home');
let ghost1 = document.getElementById('ghost1');
let ghost2 = document.getElementById('ghost2');
let x = document.querySelector('.welcome');
window.onscroll = function(){
let value =scrollY;
    stars.style.marginLeft = value + 'px' ;
    moon.style.marginLeft = value + 'px';
    ghost2.style.marginRight = value * 4 + 'px';
    moon.style.marginTop = value + 'px';
    x.style.marginTop = value + 'px';

}
let scale = 1
x.style.transform = `scale(${scale })`;
window.addEventListener("scroll", function() {
let scrollY = window.scrollY;
scale = scrollY /2;
x.style.transform = `scale(${scale})`;
});

let element = document.getElementById("text");
let text = "ABDALLAH ATWAN";
let timer = 150;
let index = 0;
let cursor = "|";
function type() {
    if (index < text.length) {
        element.innerHTML = text.slice(0, index + 1) + cursor;
        index++;
        setTimeout(type, timer);
    } else {
        element.innerHTML = text;
        index = 0;
    }
}
type();
setInterval(type,4000 );
// ii
$(document).ready(function(){
    $('.slider').slick({
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      infinite: true,
      rtl: false
    });
  });