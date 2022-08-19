window.onload = function () {
    
// ***** LOAD FONTS *****
        
    var newStyle = document.createElement('style');
    newStyle.appendChild(document.createTextNode('@font-face { font-family:'+"Gilroy Font"+'; font-weight: '+"700"+'; font-style: '+"normal"+'; src: url('+"https://thiagomenegotto.github.io/nextgocard/uploads/2022/07/Gilroy-Bold.woff2"+');} @font-face { font-family:'+"Gilroy Font"+'; font-weight: '+"400"+'; font-style: '+"normal"+'; src: url('+"https://thiagomenegotto.github.io/nextgocard/uploads/2022/07/Gilroy-Regular.woff2"+');}'));
    document.body.appendChild(newStyle);
 
// ***** END LOAD FONTS *****
    
// ***** PROFILE, PHOTO AND LEAD *****
    
    var card = document.querySelector('.card-container');
    var onlyLarge = document.querySelector('.only-on-large');
    var hideLarge = document.querySelector('.hide-on-large');
    var profile = document.querySelector('.profile'); 
    //var profileH2 = profile.querySelector('h2');
    var photo = document.querySelector('.photo');
    //var lead = document.querySelector('.lead');
    
    //card.style.padding= "0";
    card.setAttribute('style', 'padding-top: 0px');
    onlyLarge.setAttribute('style', 'margin: 0');
    hideLarge.setAttribute('style', 'margin: 0');
    
    //profile.setAttribute('style', 'margin: 0');
    //profile.setAttribute('style', 'padding: 599px 20px 0px 20px');
    
    //photo.setAttribute('style', 'display: none');
/*
    profile.querySelector('.profile_h2').setAttribute('style', 'font-family: Gilroy Font');
    profile.querySelector('.profile_h2').setAttribute('style', 'font-weight: 700');
    profile.querySelector('.profile_h2').setAttribute('style', 'font-size: 28px');
    
    profile.querySelector('.profile_p').setAttribute('style', 'font-family: Gilroy Font');
    profile.querySelector('.profile_p').setAttribute('style', 'font-weight: 700');
    profile.querySelector('.profile_p').setAttribute('style', 'font-size: 18px');

    */
// ***** END PROFILE, PHOTO AND LEAD *****

    
// ***** BUTTON LARGE AND EXTRALARGE ***** 
    /*
    var buttonextralarge = document.querySelectorAll('.extra_large');
    var buttons = document.querySelector('.buttons.row.buttons-left');
    //var buttonlarge = document.querySelectorAll('.large');
    
    buttons.setAttribute('style', 'padding: 0px 20px 150px 20px');
    
    for(i=0;i<buttonextralarge.length;i++) {
        //buttonextralarge[i].style.backgroundSize='contain';
        buttonextralarge[i].setAttribute('style', 'padding: 0');
        buttonextralarge[i].setAttribute('style', 'width: 100%');
        buttonextralarge[i].setAttribute('style', 'background-position: left');
    } */
    
// ***** END BUTTON LARGE AND EXTRALARGE *****
        
// ***** PRODUCT ***** 
    /*
    var products = document.querySelector('.products');
    var product = document.querySelectorAll('.product');
    var buttonproduct;
    
    products.setAttribute('style', 'padding: 0px 20px 0px 20px');
    products.setAttribute('style', 'margin: 0');
    products.setAttribute('style', 'background-image: url("https://thiagomenegotto.github.io/nextgocard/uploads/2022/08/Fundo-v2.jpg")');
    products.setAttribute('style', 'background-position: top center');   
    products.setAttribute('style', 'background-repeat: no-repeat');
        
    for(i=0;i<product.length;i++) {
        
        var image = product[i].querySelector('.image');
        var details = product[i].querySelector('.details');
        var inner = product[i].querySelector('.product-inner');
       
        
        product[i].setAttribute('style', 'padding: 0');
        product[i].setAttribute('style', 'margin: 0');
        //product[i].setAttribute('style', 'background-color: ""');
        
        inner.insertBefore(details,image);
        
        if (details.querySelector('h2') !== null) {
            details.querySelector('.only-on-large').querySelector('h2').setAttribute('style', 'font-family: Gilroy Font');
            details.querySelector('.only-on-large').querySelector('h2').setAttribute('style', 'font-weight: 700');
            
            details.querySelector('.hide-on-large').querySelector('h2').setAttribute('style', 'font-family: Gilroy Font');
            details.querySelector('.hide-on-large').querySelector('h2').setAttribute('style', 'font-weight: 700');
        }
        else if (details.querySelector('h3') !== null) {
            details.querySelector('.only-on-large').querySelector('h3').setAttribute('style', 'font-family: Gilroy Font');
            details.querySelector('.only-on-large').querySelector('h3').setAttribute('style', 'font-weight: 700');
            
            details.querySelector('.hide-on-large').querySelector('h3').setAttribute('style', 'font-family: Gilroy Font');
            details.querySelector('.hide-on-large').querySelector('h3').setAttribute('style', 'font-weight: 700');
        }
        
        if (product[i].querySelector('.description') !== null) {
            var desc = product[i].querySelector('.description');
            
            if (desc.querySelector('p') !== null) {
                desc.querySelector('p').setAttribute('style', 'font-family: Gilroy Font');
                desc.querySelector('p').setAttribute('style', 'font-weight: 400');
                desc.querySelector('p').setAttribute('style', 'font-size: 16px');
            }
        }
             
        if (i == 0) {
            details.setAttribute('style', 'margin-top: -80px');
            image.setAttribute('style', 'margin-top: 57px !important');
        }
        
        if (i > 0) {
            //product[i].style.marginTop="20px";
            buttonproduct = product[i].querySelector('a');
            buttonproduct.setAttribute('style', 'width: auto');
            buttonproduct.setAttribute('style', 'background-size: contain');
            buttonproduct.setAttribute('style', 'padding: 0');
            buttonproduct.setAttribute('style', 'margin-top: 0px');
            buttonproduct.setAttribute('style', 'max-width: 79%');
        }
    }
    */
// ***** END PRODUCT *****
    
// ***** BANNER *****
    
    /* var banner = document.querySelector('.banner');
    var imgbanner = banner.querySelectorAll('img');
    
    var cardNext = products.nextElementSibling;
    
    cardNext.style.minHeight="0";
    
    //banner.style.padding="0";
    
    for(i=1;i<imgbanner.length;i++) {
        imgbanner[i].style.marginTop="80px";
    } */
    
// ***** END BANNER *****

// ***** FOOTER ***** 
    /*
    var footer = document.querySelector('.footer-text-box');
    //var footerp = footer.querySelector('p');
    var footera = footer.querySelector('a');
    var footeracolor = footera.style.color;
    
    footer.setAttribute('style', 'width: auto');
    footer.setAttribute('style', 'max-width: 233px');
    footer.setAttribute('style', 'margin-top: 80px');
    footer.setAttribute('style', 'margin-bottom: 10px');
    footer.setAttribute('style', 'padding: 0');
    footer.setAttribute('style', 'position: relative');
    
    footer.setAttribute('style', 'font-weight: 700');
    //footera.style.fontWeight="700";
    footera.onmouseover = function() 
    {
        footera.setAttribute('style', 'color: white');
    }

    footera.onmouseout = function() 
    {
        footera.setAttribute('style', 'color: footeracolor');
        console.log(`cor do footer a: ${footeracolor}`);
    } */

// ***** END FOOTER ***** 
    
// **** CHECK WINDOW SIZE ****
    
    /* checkForWindowResize();

    function checkForWindowResize() {
        console.log(`Screen width: ${window.innerWidth}`);

        if (window.innerWidth < 321) {
           photo.style.height="170px";
           //lead.style.height="90px";
           //banner.style.marginTop="30px";
           for(i=0;i<buttonextralarge.length;i++) {
               buttonextralarge[i].style.height="54px";
           }
           //products.style.marginTop="60px";
           for(i=0;i<product.length;i++) {
               if (i > 1) {
                   product[i].style.marginTop="20px";
                   buttonproduct = product[i].querySelector('a');
                   buttonproduct.style.marginTop="10px";   
               }
               else if (i == 1) {
                   product[i].style.marginTop="10px";
               }
           }
           footer.style.paddingBottom="10px";
        }
        else if (window.innerWidth < 376) {
           photo.style.height="200px";
           //lead.style.height="110px";
           //banner.style.marginTop="60px";
           for(i=0;i<buttonextralarge.length;i++) {
               buttonextralarge[i].style.height="62px";
           }
           //products.style.marginTop="80px";
           for(i=0;i<product.length;i++) {
               if (i > 1) {
                   product[i].style.marginTop="40px";
                   buttonproduct = product[i].querySelector('a');
                   buttonproduct.style.marginTop="10px";   
               }
               else if (i == 1) {
                   product[i].style.marginTop="20px";
               }
           }
           footer.style.paddingBottom="10px";
        }
        else if (window.innerWidth < 426) {
           //photo.style.height="230px";
           //lead.style.height="130px";
           //banner.style.marginTop="65px";
           for(i=0;i<buttonextralarge.length;i++) {
               buttonextralarge[i].style.height="60px";
           }
           //products.style.marginTop="90px";
           for(i=0;i<product.length;i++) {
               if (i > 1) {
                   //product[i].style.marginTop="40px";
                   buttonproduct = product[i].querySelector('a');
                   buttonproduct.style.marginTop="0px";   
               }
               else if (i == 1) {
                   //product[i].style.marginTop="0px";
               }
           }
           footer.style.paddingBottom="10px";
        }
        else {
            //photo.style.height="340px";
            //lead.style.height="190px";
            //banner.style.marginTop="160px";
            for(i=0;i<buttonextralarge.length;i++) {
                buttonextralarge[i].style.height="82px";
            }
            //products.style.marginTop="215px"; 
            for(i=0;i<product.length;i++) {
               if (i > 1) {
                   product[i].style.marginTop="80px";
                   buttonproduct = product[i].querySelector('a');
                   buttonproduct.style.marginTop="20px";   
               }
               else if (i == 1) {
                   product[i].style.marginTop="40px";
               }
            }
            footer.style.paddingBottom="0";
        }
    } 

    window.addEventListener('resize', checkForWindowResize); */
    
 // **** END CHECK WINDOW SIZE ****
    
}
