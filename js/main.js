$(function(){
    $('.home__carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        dots: false
    });
    $('#ru').on('click', function(){
        $('#ru').removeClass('header__lang--active')
        $('#ua').removeClass('header__lang--active')
        $('#ru').addClass('header__lang--active')
    });
    $('#ua').on('click', function(){
        $('#ua').removeClass('header__lang--active')
        $('#ru').removeClass('header__lang--active')
        $('#ua').addClass('header__lang--active')
    });
    $('.header__bars').on('click', function(){
        $('.header__nav').toggleClass('header__nav--active')
    });
    $('.nav__close').on('click', function(){
        $('.header__nav').removeClass('header__nav--active')
    });
});

var modal = document.getElementById("myModal");
var btn = document.querySelector(".header__map-link");
var span = document.querySelector(".close");

btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}