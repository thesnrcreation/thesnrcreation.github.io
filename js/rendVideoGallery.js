$(document).ready(function () {
    "use strict";
    renderVideoGallery();
});

function renderVideoGallery() {
    $("#portfolio-video-container").html(videoGallery(portfolio_video));
}

function videoGallery(portfolio_video) {
    var htmlGallery = "";
    var galleryData;
    for (var i = 0, n = portfolio_video.galleryObj.length; i < n; i++) {
        galleryData = portfolio_video.galleryObj[i];
        if (galleryData) {
            htmlGallery += '<div class="portfolio-item col-12 col-md-4 ' + galleryData.ctg + '">' +
                '<div class="embed-responsive embed-responsive-16by9 js-videoWrapper mb-2">' +
                '<iframe class="embed-responsive-item js-videoIframe" src="" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" data-src="' + galleryData.video + '" allowfullscreen></iframe>' +
                '<div class="videoPoster js-videoPoster" style="background-image:url(' + galleryData.thumbnail + ');">' +
                '<div class="videoPoster_overlay_hover">' +
                '<i class="video_play fa fa-play"></i>' +
                '</div></div></div>' +
                '<div class="video-text-header">' + galleryData.desc +
                '</div>' +
                '</div>';
        } else {
            console.log("galleryData >> EMPTY !!")
        }
    }
    return htmlGallery;
}