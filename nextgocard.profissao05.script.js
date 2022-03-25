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
    photo.style.maxHeight="400px";
    
    lead.style.height="180px";
    lead.style.padding="0";
    
    // *** Button Large and Extralarge ***
    var buttonextralarge = document.querySelector('.extra_large');
    var buttonsmall = document.querySelectorAll('.small');
    
    buttonextralarge.style.backgroundSize='contain';
    buttonextralarge.style.padding="0";

    for(i=0;i<buttonsmall.length;i++) {
        buttonsmall[i].style.backgroundSize='contain';
        buttonsmall[i].style.width="21.6343%";
        buttonsmall[i].style.padding="0";
    }
    
    // *** Banner and Product ***
    var products = document.querySelector('.products');
    var product = document.querySelectorAll('.product');
    var buttonproduct;
    var banner = document.querySelector('.banner');
    var imgbanner = banner.querySelectorAll('img');
       
    banner.style.padding="0";
        
    for(i=0;i<product.length;i++) {
        
        var image = product[i].querySelector('.image');
        
        product[i].style.padding="0";
        product[i].style.margin="0";
        
        image.style.margin="0";
                
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
        imgbanner[i].style.marginTop="60px";
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
           photo.style.height="190px";
           lead.style.height="150px";
           banner.style.marginTop="30px";
           buttonextralarge.style.height="82px";
           buttonextralarge.style.marginTop="0px";
           products.style.marginTop="20px";
           for(i=0;i<product.length;i++) {
                if (i > 0) {
                    product[i].style.marginTop="0px";
                }
           }
           for(i=0;i<buttonsmall.length;i++) {
                buttonsmall[i].style.height="68px";
           }
           footer.style.paddingBottom="10px";
        }
        else if (window.innerWidth < 376) {
           photo.style.height="230px";
           lead.style.height="170px";
           banner.style.marginTop="60px";
           buttonextralarge.style.height="92px";
           buttonextralarge.style.marginTop="5px";
           products.style.marginTop="20px";
           for(i=0;i<product.length;i++) {
                if (i > 0) {
                    product[i].style.marginTop="0px";
                }
           }
           for(i=0;i<buttonsmall.length;i++) {
                buttonsmall[i].style.height="82px";
           }
           footer.style.paddingBottom="10px";
        }
        else if (window.innerWidth < 426) {
           photo.style.height="260px";
           lead.style.height="195px";
           banner.style.marginTop="65px";
           buttonextralarge.style.height="102px";
           buttonextralarge.style.marginTop="5px";
           products.style.marginTop="20px";
           for(i=0;i<product.length;i++) {
                if (i > 0) {
                    product[i].style.marginTop="5px";
                }
           }
           for(i=0;i<buttonsmall.length;i++) {
                buttonsmall[i].style.height="94px";
           }
           footer.style.paddingBottom="10px";
        }
        else {
            photo.style.height="370px";
            lead.style.height="285px";
            banner.style.marginTop="80px";
            buttonextralarge.style.height="122px";
            buttonextralarge.style.marginTop="20px";
            products.style.marginTop="40px";
            for(i=0;i<product.length;i++) {
                if (i > 0) {
                    product[i].style.marginTop="20px";
                }
           }
            for(i=0;i<buttonsmall.length;i++) {
                buttonsmall[i].style.height="122px";
            }
            footer.style.paddingBottom="0";
        }
    }

    window.addEventListener('resize', checkForWindowResize);
}
