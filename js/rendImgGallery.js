$(document).ready(function () {
    "use strict";
    renderImgGallery();
});

function renderImgGallery() {
    $("#portfolio-pic-content").html(imgGallery(portfolio_photo));
}

function imgGallery(portfolio_photo) {
    var htmlGallery = "";
    var galleryData;
    for (var i = 0, n = portfolio_photo.galleryObj.length; i < n; i++) {
        galleryData = portfolio_photo.galleryObj[i];
        if (galleryData) {
            htmlGallery += '<div class="portfolio-item ' + galleryData.colSize + '">' +
                '<a href="' + galleryData.fullsize_pic + '">' +
                '<div class="portfolio-content">' +
                '<div class="portfolio-img-content">' +
                '<img src="' + galleryData.normal_pic + '" alt="' + galleryData.alt_pic + '">' +
                '</div>' +
                '</div>' +
                '</a>' +
                '</div>';
        } else {
            console.log("galleryData >> EMPTY !!")
        }
    }
    return htmlGallery;
}