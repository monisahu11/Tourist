(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });


    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";

    $(window).on("load resize", function () {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
                function () {
                    const $this = $(this);
                    $this.addClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "true");
                    $this.find($dropdownMenu).addClass(showClass);
                },
                function () {
                    const $this = $(this);
                    $this.removeClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "false");
                    $this.find($dropdownMenu).removeClass(showClass);
                }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

})(jQuery);




// user profile
let submenu = document.getElementById("subMenu");

function toggleMenu() {
    submenu.classList.toggle("open-menu")
}

// book form 

function book() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var datetime = document.getElementById("datetime").value;
    var destination = document.getElementById("destination").value;
    var message = document.getElementById("message").value;
    if (name == '' || email == '' || datetime == '' || destination == '' || message == '') {
        // window.location.assign("index.html");
        alert("Invalid Information ");
    }
    else {
        alert("booked Successfully");
        return;
    }

}

// send message on mail 

// function mail(){

//     let name = document.getElementById("name").value;
//     let email = document.getElementById("email").value;
//     let number = document.getElementById("number").value;
//     let subject = document.getElementById("subject").value;
//     let message = document.getElementById("message").value;

//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "harishkumarlahari76@gmail.com",
//         Password : "6B28EC0365369DDCD1A05D151F31935A2F62",
//         To : 'lahariharish68@gmail.com',
//         From : "harishkumarlahari76@gmail.com",
//         Subject : "This is the subject",
//         Body : "name:" + name + "<br/> User mail:" + email + "<br/> Contact number: " + number + "<br/> subject" + subject + "<br/> User message:" + message

//     }).then(
//         // message => alert(message)
//         alert("Invalid Information ")
//     );
// }

let search = document.getElementById("searchbtn");
let searchbox = document.getElementById("searchbox");

search.addEventListener('click', function () {
    if (searchbox.value == "budhatalab") {
        window.location.assign("project/budhatalab.html");
    }
    if (searchbox.value == "chitrakoot") {
        window.location.assign("project/chitrakoot.html");
    }
    if (searchbox.value == "dongargarh") {
        window.location.assign("project/dongargarh.html");
    }
    if (searchbox.value == "jatmai") {
        window.location.assign("project/jatmai.html");
    }
    if (searchbox.value == "kaivalya dham") {
        window.location.assign("project/kaivalya_dham.html");
    }
    if (searchbox.value == "kanger valley") {
        window.location.assign("project/kanger_valley.html");
    }
    if (searchbox.value == "muktangan") {
        window.location.assign("project/muktangan.html");
    }
    if (searchbox.value == "puno") {
        window.location.assign("project/puno.html");
    }
    if (searchbox.value == "sirpur") {
        window.location.assign("project/sirpur.html");
    }
});


