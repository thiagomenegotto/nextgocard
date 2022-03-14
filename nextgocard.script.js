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


    window.resize(function() {
        if (window.matchMedia( " (max-width: 375px) ").matches) {
            photo.style.height="190px";
        }
        else {
            photo.style.height="294px";
        }
    }).resize()
}
