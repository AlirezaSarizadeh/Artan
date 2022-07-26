$('.blog-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
$('.diploma-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})
$('.customers-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    responsive:{
        320:{
            items:1
        },
        767:{
            items:3
        },
        1050:{
            items:6
        }
    }
})


const menu = document.querySelector('.menu');
const menuSection = menu.querySelector('.menu-section');
const menuArrow = menu.querySelector('.menu-mobile-arrow');
const menuClosed = menu.querySelector('.menu-mobile-close');
const menuToggle = document.querySelector('.menu-mobile-toggle');
const menuOverlay = document.querySelector('.overlay');
let subMenu;

menuSection.addEventListener('click', (e) => {
	if (!menu.classList.contains('active')) {
		return;
	}
	if (e.target.closest('.menu-item-has-children')) {
		const hasChildren = e.target.closest('.menu-item-has-children');
		showSubMenu(hasChildren);
	}
});

menuArrow.addEventListener('click', () => {
	hideSubMenu();
});

menuToggle.addEventListener('click', () => {
	toggleMenu();
});

menuClosed.addEventListener('click', () => {
	toggleMenu();
});

menuOverlay.addEventListener('click', () => {
	toggleMenu();
});

// Show & Hide Toggle Menu Function
function toggleMenu() {
	menu.classList.toggle('active');
	menuOverlay.classList.toggle('active');
}

// Show the Mobile Side Menu Function
function showSubMenu(hasChildren) {
	subMenu = hasChildren.querySelector('.menu-subs');
	subMenu.classList.add('active');
	subMenu.style.animation = 'slideLeft 0.5s ease forwards';
	const menuTitle = hasChildren.querySelector('i').parentNode.childNodes[0].textContent;
	menu.querySelector('.menu-mobile-title').innerHTML = menuTitle;
	menu.querySelector('.menu-mobile-header').classList.add('active');
}

// Hide the Mobile Side Menu Function
function hideSubMenu() {
	subMenu.style.animation = 'slideRight 0.5s ease forwards';
	setTimeout(() => {
		subMenu.classList.remove('active');
	}, 300);

	menu.querySelector('.menu-mobile-title').innerHTML = '';
	menu.querySelector('.menu-mobile-header').classList.remove('active');
}

// Windows Screen Resizes Function
window.onresize = function () {
	if (this.innerWidth > 991) {
		if (menu.classList.contains('active')) {
			toggleMenu();
		}
	}
};

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >=50) {
        //clearHeader, not clearheader - caps H
        $(".header").addClass("fixed");
    }
    if (scroll < 10){
        $('.header').removeClass('fixed')
    }
});


// Search Icon
const searchIcon = document.querySelector(".search-icon__wrapper");

searchIcon.addEventListener("click", e => searchIcon.parentElement.classList.toggle("open"))

// Animations

//Products Animation

const products_1 = new IntersectionObserver (entries => {
    entries.forEach(entry => {
        

        const boxes_med = document.querySelectorAll(".a_right");
        for (const box of boxes_med){
            if(entry.isIntersecting){
                box.classList.add('animate__bounceIn');
            }
            else box.classList.remove('animate__bounceIn');
        }

    });
});
products_1.observe(document.querySelector('.products'));


const services = new IntersectionObserver (entries => {
    entries.forEach(entry => {
        

        const boxes_med = document.querySelectorAll(".a_right-2");
        for (const box of boxes_med){
            if(entry.isIntersecting){
                box.classList.add('animate__fadeInRight');
            }
            else box.classList.remove('animate__fadeInRight');
        }

    });
});
services.observe(document.querySelector('.service_banner'));

const blog = new IntersectionObserver (entries => {
    entries.forEach(entry => {
        

        const boxes_med = document.querySelectorAll(".a_right-2");
        for (const box of boxes_med){
            if(entry.isIntersecting){
                box.classList.add('animate__fadeInRight');
            }
            else box.classList.remove('animate__fadeInRight');
        }

        

    });
});
blog.observe(document.querySelector('.blog_row'));

const blog_2 = new IntersectionObserver (entries => {
    entries.forEach(entry => {
        

        const boxes = document.querySelectorAll(".a_left");
        for (const box of boxes){
            if(entry.isIntersecting){
                box.classList.add('animate__fadeInLeft');
            }
            else box.classList.remove('animate__fadeInLeft');
        }

        

    });
});
blog_2.observe(document.querySelector('.blog_row'));


const events = new IntersectionObserver (entries => {
    entries.forEach(entry => {
        

        const boxes_med = document.querySelectorAll(".a_right-2");
        for (const box of boxes_med){
            if(entry.isIntersecting){
                box.classList.add('animate__fadeInRight');
            }
            else box.classList.remove('animate__fadeInRight');
        }

        

    });
});
events.observe(document.querySelector('.blog-carousel'));

const event_2 = new IntersectionObserver (entries => {
    entries.forEach(entry => {
        

        const boxes = document.querySelectorAll(".a_left");
        for (const box of boxes){
            if(entry.isIntersecting){
                box.classList.add('animate__fadeInLeft');
            }
            else box.classList.remove('animate__fadeInLeft');
        }

        

    });
});
event_2.observe(document.querySelector('.event_row'));


const customer = new IntersectionObserver (entries => {
    entries.forEach(entry => {
        

        const boxes = document.querySelectorAll(".a_flip");
        for (const box of boxes){
            if(entry.isIntersecting){
                box.classList.add('animate__flipInX');
            }
            else box.classList.remove('animate__flipInX');
        }

        

    });
});
customer.observe(document.querySelector('.customers-carousel'));




