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

let phone = document.querySelector('#phone');
let modal = document.querySelector('#phone-modal');
phone.addEventListener('click', function(){
    modal.classList.toggle('hide');
})
//     function initLazySections() {
//         // var sectionsToLoad = document.querySelectorAll('img');
        
//         if('IntersectionObserver' in window) {
//           const observer = new IntersectionObserver((items, observer) => {
//             items.forEach((item) => {
//               if(item.isIntersecting) {
//                 console.log(item.target);
//                 var src = item.target.setAttribute("display", "visible");
//                 item.target.setAttribute("src", src);
//                 // loadImages(item.target);
//                 observer.unobserve(item.target);
//               }
//             });
//           });
//           sectionsToLoad.forEach((section) => {
//             observer.observe(section);
//           });
//         } else {
//           sectionsToLoad.forEach((section) => {
//             // loadImages(img);
//           });
//         }
//       }