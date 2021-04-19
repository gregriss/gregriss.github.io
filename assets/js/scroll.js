document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            document.getElementById('header').classList.remove('top-nav');
            document.getElementById('header').classList.add('fixed-top', 'scroll-nav');
        } else {
            document.getElementById('header').classList.remove('fixed-top', 'scroll-nav');
            document.getElementById('header').classList.add('top-nav');
        }
    })
});