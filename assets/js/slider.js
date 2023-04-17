document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('.splide', {
        type: 'loop',
        autoplay: false,
        height: 800,

    });
    splide.mount();
});