$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });


    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0px";
  } else {
    document.getElementById("navbar").style.top = "0px";
  }
  prevScrollpos = currentScrollPos;
}




// Get all the sections
const sections = document.querySelectorAll('section');

// Get the menu items
const menuItems = document.querySelectorAll('.menu a');

// Add an event listener to the window
window.addEventListener('scroll', () => {
    // Get the current scroll position
    const currentScroll = window.pageYOffset;

    // Loop through the sections
    sections.forEach(section => {
        // Get the top and bottom position of the section
        const sectionTop = section.offsetTop - 50;
        const sectionBottom = sectionTop + section.offsetHeight;

        // Check if the current scroll position is inside the section
        if (currentScroll >= sectionTop && currentScroll <= sectionBottom) {
            // Remove the active class from all the menu items
            menuItems.forEach(item => {
                item.classList.remove('active');
            });

            // Add the active class to the corresponding menu item
            const id = section.getAttribute('id');
            const menuItem = document.querySelector(`.menu a[href="#${id}"]`);
            menuItem.classList.add('active');
        }
    });
});
