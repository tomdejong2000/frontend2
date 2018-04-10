window.onscroll = function () {
    naarboven()
};

function naarboven() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 500) {
        document.getElementById("boven").style.display = "block";
    } else {
        document.getElementById("boven").style.display = "none";
    }

}



var slideIndex = 0;
carousel();


function carousel() {
    var i;
    var x = document.getElementsByClassName("Slides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 2000);

    if (slideIndex === 4){
        slideIndex = 0
    }else{
        
    }

}

var slideIndex2 = 0;
carousel2();

function carousel2() {
    var i2;
    var x2 = document.getElementsByClassName("Slides2");
    for (i2 = 0; i2 < x2.length; i2++) {
        x2[i2].style.display = "none";
    }
    slideIndex2++;
    if (slideIndex2 > x2.length) {slideIndex2 = 1}
    x2[slideIndex2-1].style.display = "block";
    setTimeout(carousel2, 2000);

    if (slideIndex2 === 4){
        slideIndex2 = 0
    }else{

    }

}






