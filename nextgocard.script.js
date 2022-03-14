window.onload = function () {
    console.log('Script is Matched!');
    document.querySelector('.extra_large').style.backgroundSize='contain';
    var buttonlarge = document.querySelectorAll('.large');

    for(i=0;i<buttonlarge.length;i++) {
        buttonlarge[i].style.backgroundSize='contain';
    }

    var product = document.querySelector('.product');
    product.style.padding="0";

    var buttonproduct = product.querySelector('a');
    var photo = document.querySelector('.photo');

    buttonproduct.style.width='auto';
    buttonproduct.style.backgroundSize='contain';
    buttonproduct.style.padding="0";
    buttonproduct.style.marginTop="0";
    buttonproduct.style.maxWidth="73%";


    function checkForWindowResize() {
    console.log(`Screen width: ${window.innerWidth}`);

    if (window.innerWidth < 320) {
       photo.style.height="150px";
    }
    else if (window.innerWidth < 375){
       photo.style.height="180px";
    }
    else {
        photo.style.height="235px";
    }
}

window.addEventListener('resize', checkForWindowResize);
}
