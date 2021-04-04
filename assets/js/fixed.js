var initialSrc = "images/Network-Fullscreen.mp4";
var scrollSrc = "images/Black-13495.mp4";

$(window).on('scroll', function() {
var value = $(this).scrollTop();
var servicesValue = $("#scrollChange").offset().top

// if (value <= (servicesValue - 120) && value >= (servicesValue - 150))
// 	$("#project-archive-video").attr("src", initialSrc);

if ((value >= (servicesValue - 110)) && (value <= (servicesValue - 70)))
    $("#project-archive-video").attr("src", scrollSrc);

else if (value <= (servicesValue - 120) && value >= (servicesValue - 150))
    $("#project-archive-video").attr("src", initialSrc);

    console.log(servicesValue.top);
})