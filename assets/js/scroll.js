document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            document.getElementById('header').classList.remove('top-nav');
            document.getElementById('header').classList.add('fixed-top');
            document.getElementById('header').classList.add('scroll-nav');
        } else {
            document.getElementById('header').classList.remove('fixed-top');
            document.getElementById('header').classList.add('top-nav');
            document.getElementById('header').classList.remove('scroll-nav');
        }
    })
});