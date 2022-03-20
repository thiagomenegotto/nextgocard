window.onload = function () {
    console.log('Script is Matched!');
    var buttonextralarge = document.querySelector('.extra_large');
    var buttonlarge = document.querySelectorAll('.large');
    
    buttonextralarge.style.backgroundSize='contain';
    buttonextralarge.style.padding="0";

    for(i=0;i<buttonlarge.length;i++) {
        buttonlarge[i].style.backgroundSize='contain';
        buttonlarge[i].style.width="46.6667%";
        buttonlarge[i].style.padding="0";
    }

    var product = document.querySelector('.product');
    product.style.padding="0";

    var buttonproduct = product.querySelector('a');
    var profile = document.querySelector('.profile'); 
    var photo = document.querySelector('.photo');
    var lead = document.querySelector('.lead');
    
    var footer = document.querySelector('.footer-text-box');
    var footerp = footer.querySelector('p');
    var footera = footerp.querySelector('a');
    
    profile.style.margin="0";
    profile.style.padding="0";
    photo.style.margin="0";
    photo.style.padding="0";
    photo.style.maxHeight="346px";
    
    lead.style.height="200px";
    
    footer.style.width="auto";
    footer.style.maxWidth="233px";
    
    footera.style.fontWeight="700";
    footerp.style.fontWeight="700";
    footera.onmouseover = function() 
    {
        footera.style.color = "white";
    }

    footera.onmouseout = function() 
    {
        footera.style.color = "#dc7316";
    }

    buttonproduct.style.width='auto';
    buttonproduct.style.backgroundSize='contain';
    buttonproduct.style.padding="0";
    buttonproduct.style.marginTop="0";
    buttonproduct.style.maxWidth="79%";
    checkForWindowResize();


    function checkForWindowResize() {
        console.log(`Screen width: ${window.innerWidth}`);

        if (window.innerWidth < 321) {
           photo.style.height="150px";
           buttonextralarge.style.height="60px";
           for(i=0;i<buttonlarge.length;i++) {
                buttonlarge[i].style.height="70px";
           }
        }
        else if (window.innerWidth < 376){
           photo.style.height="190px";
           buttonextralarge.style.height="70px";
           for(i=0;i<buttonlarge.length;i++) {
                buttonlarge[i].style.height="70px";
           }
        }
        else if (window.innerWidth < 426){
           buttonextralarge.style.height="80px";
           for(i=0;i<buttonlarge.length;i++) {
                buttonlarge[i].style.height="80px";
           }
        }
        else {
            photo.style.height="346px";
            buttonextralarge.style.height="97px";
            for(i=0;i<buttonlarge.length;i++) {
                buttonlarge[i].style.height="97px";
            }
        }
    }

    window.addEventListener('resize', checkForWindowResize);
}
