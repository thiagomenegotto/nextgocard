window.onload = function () {
    
// ***** FONTS *****
    
    var newStyle = document.createElement('style');
    newStyle.appendChild(document.createTextNode("
    @font-face {
        font-family: "Gilroy Font";
        src: url('"https://github.com/thiagomenegotto/nextgocard/tree/main/uploads/2022/07/Gilroy-Bold.woff2"') format('woff2');
    }
    "));

    document.head.appendChild(newStyle);
    
    
// ***** PROFILE, PHOTO AND LEAD *****
    
    var card = document.querySelector('.card-container');
    var onlyLarge = document.querySelector('.only-on-large');
    var hideLarge = document.querySelector('.hide-on-large');
    var profile = document.querySelector('.profile'); 
    var profileH2 = document.querySelector('h2');
    var photo = document.querySelector('.photo');
    //var lead = document.querySelector('.lead');
    
    card.style.padding="0";
    onlyLarge.style.margin="0";
    hideLarge.style.margin="0";
    
    profile.style.margin="0";
    profile.style.padding="599px 20px 0px 20px";
    
    photo.style.display = "none";

    profileH2.style.fontFamily = "Gilroy Font";
    profileH2.style.fontSize = "28px";
    
    
    //lead.style.padding="0";
    //lead.style.minHeight="0";
    
// ***** BUTTON LARGE AND EXTRALARGE ***** 
    var buttonextralarge = document.querySelectorAll('.extra_large');
    var buttons = document.querySelector('.buttons.row.buttons-left');
    //var buttonlarge = document.querySelectorAll('.large');
    
    buttons.style.padding="0px 20px 0px 20px";
    
    for(i=0;i<buttonextralarge.length;i++) {
        //buttonextralarge[i].style.backgroundSize='contain';
        buttonextralarge[i].style.padding="0";
        buttonextralarge[i].style.width="100%";
        buttonextralarge[i].style.backgroundPosition = 'left';
    }

        
// ***** PRODUCT ***** 
    var products = document.querySelector('.products');
    var product = document.querySelectorAll('.product');
    var buttonproduct;
    
    products.style.padding="150px 20px 0px 20px";
    products.style.margin="0";
        
    for(i=0;i<product.length;i++) {
        
        var image = product[i].querySelector('.image');
        var details = product[i].querySelector('.details');
        var inner = product[i].querySelector('.product-inner');
       
        
        product[i].style.padding="0";
        product[i].style.margin="0";
        product[i].style.backgroundColor="";
        
        inner.insertBefore(details,image);
        
        image.style.margin="0";
        image.querySelector('.swiper').style.paddingBottom="30px";
        //product[i].querySelector('.details').style.display="none";
        
        if (i > 0) {
            //product[i].style.marginTop="20px";
            buttonproduct = product[i].querySelector('a');
            buttonproduct.style.width="auto";
            buttonproduct.style.backgroundSize="contain";
            buttonproduct.style.padding="0";
            buttonproduct.style.marginTop="0px";
            buttonproduct.style.maxWidth="79%";
        }
    }
    
// ***** BANNER *****
    var banner = document.querySelector('.banner');
    var imgbanner = banner.querySelectorAll('img');
    
    var cardNext = products.nextElementSibling;
    
    cardNext.style.minHeight="0";
    
    //banner.style.padding="0";
    
    for(i=1;i<imgbanner.length;i++) {
        imgbanner[i].style.marginTop="80px";
    }

// ***** FOOTER ***** 
    var footer = document.querySelector('.footer-text-box');
    //var footerp = footer.querySelector('p');
    var footera = footer.querySelector('a');
    var footeracolor = footera.style.color;
    
    footer.style.width="auto";
    footer.style.maxWidth="233px";
    footer.style.marginTop="80px";
    footer.style.marginBottom="10px";
    footer.style.padding="0";
    footer.style.position="relative";
    
    footer.style.fontWeight="700";
    //footera.style.fontWeight="700";
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

    window.addEventListener('resize', checkForWindowResize);
}
