var width = $(window).width();

$(document).ready(function () {


    $('[data-toggle="tooltip"]').tooltip();


    $('.navbar-toggler-icon').click(function(){
        $('.Body_overlay').css('display','block');
        $('body').css({
            'height':'100vh',
            'overflow-y':'hidden'
        });
    })

    $('#CloseNavMenu').click(function(){
        $('.Body_overlay').css('display','none');
        $('body').css({
            'height':'auto',
            'overflow-y':'auto'
        });
    })


    $(function () {
        $("ul.dropdown-menu [data-toggle='dropdown']").on("click", function (event) {
            event.preventDefault();
            event.stopPropagation();

            $(this).siblings().toggleClass("show");


            if (!$(this).next().hasClass('show')) {
                $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
            }
            $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
                $('.dropdown-submenu .show').removeClass("show");
            });

        });
    });

    $(document).on("click", function (event) {
        if ($(this).width() <= 991) {
            var $trigger = $(".navbar-new-bottom");
            if ($trigger !== event.target && !$trigger.has(event.target).length) {
                $("#navbarContent").removeClass('show');
                $('.navbar-toggler').addClass("collapsed");
                $('.Body_overlay').css('display','none');
                $('body').css({
                    'height':'auto',
                    'overflow-y':'auto'
                });
            }
        }
    });


 


    var scrollButton = $(".scroll_top");
    $(window).scroll(function () {
        if ($('body').css('direction') == 'ltr') {
            if ($(this).scrollTop() > 500) {
                scrollButton.css({
                    'opacity': '1',
                    'visibility': 'visible',
                    'right': '50px'
                })
            }
            else {
                scrollButton.css({
                    'opacity': '0',
                    'visibility': 'hidden',
                    'right': '0px'
                })
            }
        }
        else {
            if ($(this).scrollTop() > 500) {
                scrollButton.css({
                    'opacity': '1',
                    'visibility': 'visible',
                    'left': '50px'
                })
            }
            else {
                scrollButton.css({
                    'opacity': '0',
                    'visibility': 'hidden',
                    'left': '0px'
                })
            }
        }

    });

    scrollButton.click(function () {
        $("html,body").animate({ scrollTop: 0 }, 1000);
    });


    $(window).resize(function () {
        if ($(this).width() != width) {
            if ($(this).width() > 991) {
                $('.Body_overlay').css('display','none');
            }
            width = $(window).width();
        }
    });




    $(".Service_Item .image img,#Procedures .logo img,.team_item .image img,.Gallery_Image img").on("error", function () {
        $(this).attr('src', 'images/NoImage.png');
    });

});






