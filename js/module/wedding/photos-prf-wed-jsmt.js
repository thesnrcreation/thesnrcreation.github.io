$(document).ready(function () {
    "use strict";
    renderImgGallery();
});

function renderImgGallery() {
    // console.log($("#portfolio-container").html(imgGallery(porfolio_photo)));
    $("#portfolio-container").html(imgGallery(porfolio_photo));
}

function imgGallery(porfolio_photo) {
    var htmlGallery = "";
    var galleryData;
    for (var i = 0, n = porfolio_photo.galleryObj.length; i < n; i++) {
        galleryData = porfolio_photo.galleryObj[i];
        if (galleryData) {
            htmlGallery += '<div class="portfolio-item ' + galleryData.colSize + '">' +
                '<a href="' + galleryData.fullsize_pic + '">' +
                '<div class="portfolio-content">' +
                '<div class="portfolio-img-content">' +
                '<img src="' + galleryData.normal_pic + '" alt="">' +
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


// Sample Json Portfolio Photo Gallery

var porfolio_photo = {
    "galleryObj": [{
        "colSize": "col-md",
        "fullsize_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-01.jpg",
        "normal_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-01.jpg"
    }, {
        "colSize": "col-md",
        "fullsize_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-02.jpg",
        "normal_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-02.jpg"
    }, {
        "colSize": "col-md",
        "fullsize_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-03.jpg",
        "normal_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-03.jpg"
    }, {
        "colSize": "col-md",
        "fullsize_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-04.jpg",
        "normal_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-04.jpg"
    }, {
        "colSize": "col-md",
        "fullsize_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-05.jpg",
        "normal_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-05.jpg"
    }, {
        "colSize": "col-md",
        "fullsize_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-06.jpg",
        "normal_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-06.jpg"
    }, {
        "colSize": "col-md",
        "fullsize_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-07.jpg",
        "normal_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-07.jpg"
    }, {
        "colSize": "col-md",
        "fullsize_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-08.jpg",
        "normal_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-08.jpg"
    }, {
        "colSize": "col-md",
        "fullsize_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-09.jpg",
        "normal_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-09.jpg"
    }, {
        "colSize": "col-md",
        "fullsize_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-10.jpg",
        "normal_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-10.jpg"
    }, {
        "colSize": "col-md",
        "fullsize_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-11.jpg",
        "normal_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-11.jpg"
    }, {
        "colSize": "col-md",
        "fullsize_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-12.jpg",
        "normal_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-12.jpg"
    }, {
        "colSize": "col-md",
        "fullsize_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-13.jpg",
        "normal_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-13.jpg"
    }, {
        "colSize": "col-md",
        "fullsize_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-14.jpg",
        "normal_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-14.jpg"
    }, {
        "colSize": "col-md",
        "fullsize_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-15.jpg",
        "normal_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-15.jpg"
    }, {
        "colSize": "col-md",
        "fullsize_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-16.jpg",
        "normal_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-16.jpg"
    }, {
        "colSize": "col-md",
        "fullsize_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-17.jpg",
        "normal_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-17.jpg"
    }, {
        "colSize": "col-md",
        "fullsize_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-18.jpg",
        "normal_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-18.jpg"
    }, {
        "colSize": "col-md",
        "fullsize_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-19.jpg",
        "normal_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-19.jpg"
    }, {
        "colSize": "col-md",
        "fullsize_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-20.jpg",
        "normal_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-20.jpg"
    }, {
        "colSize": "col-md",
        "fullsize_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-21.jpg",
        "normal_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-21.jpg"
    }, {
        "colSize": "col-md",
        "fullsize_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-23.jpg",
        "normal_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-23.jpg"
    }, {
        "colSize": "col-md",
        "fullsize_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-24.jpg",
        "normal_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-24.jpg"
    }, {
        "colSize": "col-md",
        "fullsize_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-25.jpg",
        "normal_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-25.jpg"
    }, {
        "colSize": "col-md",
        "fullsize_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-26.jpg",
        "normal_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-26.jpg"
    }, {
        "colSize": "col-md",
        "fullsize_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-27.jpg",
        "normal_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-27.jpg"
    }, {
        "colSize": "col-md",
        "fullsize_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-28.jpg",
        "normal_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-28.jpg"
    }, {
        "colSize": "col-md",
        "fullsize_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-29.jpg",
        "normal_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-29.jpg"
    }, {
        "colSize": "col-md",
        "fullsize_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-30.jpg",
        "normal_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-30.jpg"
    }, {
        "colSize": "col-md",
        "fullsize_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-31.jpg",
        "normal_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-31.jpg"
    }, {
        "colSize": "col-md",
        "fullsize_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-32.jpg",
        "normal_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-32.jpg"
    }, {
        "colSize": "col-md",
        "fullsize_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-33.jpg",
        "normal_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-33.jpg"
    }, {
        "colSize": "col-md",
        "fullsize_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-34.jpg",
        "normal_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-34.jpg"
    }, {
        "colSize": "col-md",
        "fullsize_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-35.jpg",
        "normal_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-35.jpg"
    }, {
        "colSize": "col-md",
        "fullsize_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-36.jpg",
        "normal_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-36.jpg"
    }, {
        "colSize": "col-md",
        "fullsize_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-37.jpg",
        "normal_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-37.jpg"
    }, {
        "colSize": "col-md",
        "fullsize_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-38.jpg",
        "normal_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-38.jpg"
    }, {
        "colSize": "col-md",
        "fullsize_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-39.jpg",
        "normal_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-39.jpg"
    }, {
        "colSize": "col-md",
        "fullsize_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-40.jpg",
        "normal_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-40.jpg"
    }, {
        "colSize": "col-md",
        "fullsize_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-41.jpg",
        "normal_pic": "assets/images/photos/wedding/jymt-jan/portfolio/jymt-41.jpg"
    }]
}