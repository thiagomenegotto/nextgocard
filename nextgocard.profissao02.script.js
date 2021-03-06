window.onload = function () {
    
    // *** Profile, Photo and Lead ***
    var card = document.querySelector('.card-container');
    var onlyLarge = document.querySelector('.only-on-large');
    var hideLarge = document.querySelector('.hide-on-large');
    var profile = document.querySelector('.profile'); 
    var photo = document.querySelector('.photo');
    var lead = document.querySelector('.lead');
    
    card.style.padding="0";
    onlyLarge.style.margin="0";
    hideLarge.style.margin="0";
    
    profile.style.margin="0";
    profile.style.padding="0";
    
    photo.style.margin="0";
    photo.style.padding="0";
    photo.style.width="100%";
    photo.style.maxHeight="480px";
    
    //lead.style.height="180px";
    lead.style.padding="0";
    
    // *** Button Large and Extralarge ***
    var buttonextralarge = document.querySelector('.extra_large');
    var buttonlarge = document.querySelectorAll('.large');
    
    buttonextralarge.style.backgroundSize='contain';
    buttonextralarge.style.padding="0";

    for(i=0;i<buttonlarge.length;i++) {
        buttonlarge[i].style.backgroundSize='contain';
        buttonlarge[i].style.width="46.6667%";
        buttonlarge[i].style.padding="0";
    }
    
    // *** Banner and Product ***
    var products = document.querySelector('.products');
    var product = document.querySelectorAll('.product');
    var buttonproduct;
    var banner = document.querySelector('.banner');
    var imgbanner = banner.querySelectorAll('img');
    
    var cardNext = products.nextElementSibling;
    
    cardNext.style.minHeight="0";
    
    banner.style.padding="0";
        
    for(i=0;i<product.length;i++) {
        
        var image = product[i].querySelector('.image');
        
        product[i].style.padding="0";
        product[i].style.margin="0";
        
        image.style.margin="0";
        
        if (i > 0) {
            product[i].style.marginTop="20px";
        }
        
        if (i == (product.length-1)) {
            buttonproduct = product[i].querySelector('a');
            buttonproduct.style.width="auto";
            buttonproduct.style.backgroundSize="contain";
            buttonproduct.style.padding="0";
            buttonproduct.style.marginTop="20px";
            buttonproduct.style.maxWidth="79%";
        }
    }
        
    for(i=1;i<imgbanner.length;i++) {
        imgbanner[i].style.marginTop="80px";
    }

    // *** Footer ***
    var footer = document.querySelector('.footer-text-box');
    var footerp = footer.querySelector('p');
    var footera = footerp.querySelector('a');
    var footeracolor = footera.style.color;
    
    footer.style.width="auto";
    footer.style.maxWidth="233px";
    footer.style.marginTop="80px";
    footer.style.marginBottom="10px";
    footer.style.padding="0";
    footer.style.position="relative";
    
    footerp.style.fontWeight="700";
    footera.style.fontWeight="700";
    footera.onmouseover = function() 
    {
        footera.style.color = "white";
    }

    footera.onmouseout = function() 
    {
        footera.style.color = footeracolor;
        console.log(`cor do footer a: ${footeracolor}`);
    }
    
    // *** Check Window Size ***
    checkForWindowResize();

    function checkForWindowResize() {
        console.log(`Screen width: ${window.innerWidth}`);

        if (window.innerWidth < 321) {
           photo.style.height="250px";
           lead.style.height="80px";
           banner.style.marginTop="30px";
           buttonextralarge.style.height="60px";
           products.style.marginTop="20px";
           for(i=0;i<product.length;i++) {
                if (i > 0) {
                    product[i].style.marginTop="10px";
                }
           }
           for(i=0;i<buttonlarge.length;i++) {
                buttonlarge[i].style.height="70px";
           }
           footer.style.paddingBottom="10px";
        }
        else if (window.innerWidth < 376) {
           photo.style.height="290px";
           lead.style.height="100px";
           banner.style.marginTop="40px";
           buttonextralarge.style.height="70px";
           products.style.marginTop="20px";
           for(i=0;i<product.length;i++) {
                if (i > 0) {
                    product[i].style.marginTop="10px";
                }
           }
           for(i=0;i<buttonlarge.length;i++) {
                buttonlarge[i].style.height="70px";
           }
           footer.style.paddingBottom="10px";
        }
        else if (window.innerWidth < 426) {
           photo.style.height="330px";
           lead.style.height="100px";
           banner.style.marginTop="40px";
           buttonextralarge.style.height="80px";
           products.style.marginTop="20px";
           for(i=0;i<buttonlarge.length;i++) {
                buttonlarge[i].style.height="80px";
           }
           footer.style.paddingBottom="10px";
        }
        else {
            photo.style.height="480px";
            lead.style.height="160px";
            banner.style.marginTop="80px";
            buttonextralarge.style.height="97px";
            products.style.marginTop="40px";
            for(i=0;i<buttonlarge.length;i++) {
                buttonlarge[i].style.height="97px";
            }
            footer.style.paddingBottom="0";
        }
    }

    window.addEventListener('resize', checkForWindowResize);
}
