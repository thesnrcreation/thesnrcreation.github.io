$(document).ready(function () {
    "use strict";
    renderImgGallery();
});

function renderImgGallery() {
    $("#portfolio-container").html(imgGallery(portfolio_photo));
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
            console.log("galleryData >> EMPTY !!");
        }
    }
    return htmlGallery;
}


// Sample Json Portfolio Photo Gallery
var portfolio_photo = {
    "galleryObj": [{
        "colSize": "col-md",
        "fullsize_pic": "assets/images/photos/spaces/ekocheras/portfolio/eko-01.jpg",
        "normal_pic": "assets/images/photos/spaces/ekocheras/portfolio/eko-01.jpg",
        "alt_pic": "Interior Photo 01"
    }, {
        "colSize": "col-md",
        "fullsize_pic": "assets/images/photos/spaces/ekocheras/portfolio/eko-02.jpg",
        "normal_pic": "assets/images/photos/spaces/ekocheras/portfolio/eko-02.jpg",
        "alt_pic": "Interior Photo 02"

    }, {
        "colSize": "col-md",
        "fullsize_pic": "assets/images/photos/spaces/ekocheras/portfolio/eko-03.jpg",
        "normal_pic": "assets/images/photos/spaces/ekocheras/portfolio/eko-03.jpg",
        "alt_pic": "Interior Photo 03"
    }, {
        "colSize": "col-md",
        "fullsize_pic": "assets/images/photos/spaces/ekocheras/portfolio/eko-04.jpg",
        "normal_pic": "assets/images/photos/spaces/ekocheras/portfolio/eko-04.jpg",
        "alt_pic": "Interior Photo 04"
    }, {
        "colSize": "col-md",
        "fullsize_pic": "assets/images/photos/spaces/ekocheras/portfolio/eko-05.jpg",
        "normal_pic": "assets/images/photos/spaces/ekocheras/portfolio/eko-05.jpg",
        "alt_pic": "Interior Photo 05"
    }, {
        "colSize": "col-md",
        "fullsize_pic": "assets/images/photos/spaces/ekocheras/portfolio/eko-06.jpg",
        "normal_pic": "assets/images/photos/spaces/ekocheras/portfolio/eko-06.jpg",
        "alt_pic": "Interior Photo 06"
    }, {
        "colSize": "col-md",
        "fullsize_pic": "assets/images/photos/spaces/ekocheras/portfolio/eko-07.jpg",
        "normal_pic": "assets/images/photos/spaces/ekocheras/portfolio/eko-07.jpg",
        "alt_pic": "Interior Photo 07"
    }, {
        "colSize": "col-md",
        "fullsize_pic": "assets/images/photos/spaces/ekocheras/portfolio/eko-08.jpg",
        "normal_pic": "assets/images/photos/spaces/ekocheras/portfolio/eko-08.jpg",
        "alt_pic": "Interior Photo 08"
    }, {
        "colSize": "col-md",
        "fullsize_pic": "assets/images/photos/spaces/ekocheras/portfolio/eko-09.jpg",
        "normal_pic": "assets/images/photos/spaces/ekocheras/portfolio/eko-09.jpg",
        "alt_pic": "Interior Photo 09"
    }, {
        "colSize": "col-md",
        "fullsize_pic": "assets/images/photos/spaces/ekocheras/portfolio/eko-10.jpg",
        "normal_pic": "assets/images/photos/spaces/ekocheras/portfolio/eko-10.jpg",
        "alt_pic": "Interior Photo 10"
    }]
}