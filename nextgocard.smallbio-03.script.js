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
    var photo = document.querySelector('.photo');
    
    card.style.padding="0";
    onlyLarge.style.margin="0";
    hideLarge.style.margin="0";
    
    profile.style.margin="0";
    profile.style.padding="599px 20px 0px 20px";
    
    photo.style.display="none";

    profile.querySelector('.profile_h2').style.fontFamily="Gilroy Font";
    profile.querySelector('.profile_h2').style.fontWeight="700";
    profile.querySelector('.profile_h2').style.fontSize="28px";
    profile.querySelector('.profile_h2').style.lineHeight="1";
    
    profile.querySelector('.profile_p').style.fontFamily="Gilroy Font";
    profile.querySelector('.profile_p').style.fontWeight="700";
    profile.querySelector('.profile_p').style.fontSize="18px";
    profile.querySelector('.profile_p').style.lineHeight="1.3em";

    
// ***** END PROFILE, PHOTO AND LEAD *****

    
// ***** BUTTON LARGE AND EXTRALARGE ***** 
   
    var buttonextralarge = document.querySelectorAll('.extra_large');
    var buttons = document.querySelector('.buttons.row.buttons-left');
    //var buttonlarge = document.querySelectorAll('.large');
    
    buttons.style.padding="0px 20px 150px 20px";
    
    for(i=0;i<buttonextralarge.length;i++) {
        //buttonextralarge[i].style.backgroundSize='contain';
        buttonextralarge[i].style.padding="0";
        buttonextralarge[i].style.width="100%";
        buttonextralarge[i].style.backgroundPosition="left";
    }
    
// ***** END BUTTON LARGE AND EXTRALARGE *****
        
// ***** PRODUCT ***** 
    
    var products = document.querySelector('.products');
    var product = document.querySelectorAll('.product');
    var buttonproduct;
    
    products.style.padding="0";
    products.style.margin="0";
    products.style.backgroundImage="url('https://thiagomenegotto.github.io/nextgocard/uploads/2022/08/Fundo-v2.jpg')";
    products.style.backgroundPosition="top center";   
    products.style.backgroundRepeat="no-repeat";
        
    for(i=0;i<product.length;i++) {
        var image = product[i].querySelector('.image');
        var details = product[i].querySelector('.details');
        var inner = product[i].querySelector('.product-inner');
       
        
        //product[i].style.padding="0";
        product[i].style.margin="0";
        product[i].style.backgroundColor="transparent";
        
        if (image !== null) {
            image.querySelector('.swiper.paginationSlider').style.padding="0";
        }
        
        
        inner.insertBefore(details,image);
        
        if (details.querySelector('h2') !== null) {
            details.querySelector('.only-on-large').querySelector('h2').style.fontFamily="Gilroy Font";
            details.querySelector('.only-on-large').querySelector('h2').style.fontWeight="700";
            details.querySelector('.only-on-large').querySelector('h2').style.lineHeight="1";
            
            details.querySelector('.hide-on-large').querySelector('h2').style.fontFamily="Gilroy Font";
            details.querySelector('.hide-on-large').querySelector('h2').style.fontWeight="700";
            details.querySelector('.hide-on-large').querySelector('h2').style.lineHeight="1";
        }
        else if (details.querySelector('h3') !== null) {
            details.querySelector('.only-on-large').querySelector('h3').style.fontFamily="Gilroy Font";
            details.querySelector('.only-on-large').querySelector('h3').style.fontWeight="700";
            details.querySelector('.only-on-large').querySelector('h3').style.lineHeight="1";
            
            details.querySelector('.hide-on-large').querySelector('h3').style.fontFamily="Gilroy Font";
            details.querySelector('.hide-on-large').querySelector('h3').style.fontWeight="700";
            details.querySelector('.hide-on-large').querySelector('h3').style.lineHeight="1";
        }
        
        if (product[i].querySelector('.description') !== null) {            
            if (product[i].querySelector('.description').querySelector('p') !== null) {
                var desc = product[i].querySelectorAll('.description');
                
                for(d=0;d<desc.length;d++) {
                    desc[d].style.margin="0";
                    var desc_p = desc[d].querySelectorAll('p');

                    for(j=0;j<desc_p.length;j++) {
                        desc_p[j].style.fontFamily="Gilroy Font";
                        desc_p[j].style.fontWeight="400";
                        desc_p[j].style.fontSize="16px";
                        desc_p[j].style.textAlign="left";
                        desc_p[j].style.lineHeight="1.6em";
                    }
                    
                    var brs = desc[d].querySelectorAll('br');
                    
                    for(j=0;j<brs.length;j++) {
                        brs[j].remove();
                    }
                }
            }
        }
             
        if (i !== 2 && i !== 4 && i !== 10) {
            //details.style.marginTop="-80px";
            product[i].style.padding="80px 20px 80px 20px";
            
            
            
            if (i == 0) {
                if (image !== null) {
                    image.setAttribute('style', 'margin-top: 78px !important');
                }

                var div = document.createElement('div');
                var img = document.createElement('img');

                img.src = 'https://thiagomenegotto.github.io/nextgocard/uploads/2022/08/Mockup-h2-2.png';
                img.setAttribute("style", "margin: 10px 0 40px 0");
                product[i].appendChild(img);
            }
        }
        
        else if (i == 3) {
            product[i].style.padding="0 20px 0 20px";
        }
        
        else {
            product[i].style.padding="35px 20px 0px 20px";
            product[i].style.marginBottom="20px";
        }
        
        /*if () {
            buttonproduct = product[i].querySelector('a');
            
            if (i == 1) {
                buttonproduct.style.width="100%";
                buttonproduct.style.marginTop="50px";
                
                if (image !== null) {
                    image.setAttribute('style', 'margin: 40px 0 20px 0 !important');
                }
            }
            else if (i == 2) {
                product[i].style.padding="80px 0 80px 0";
                product[i].style.backgroundImage = "linear-gradient(180deg, #59BFCA 0%, #7330DE 100%)";
                
                if (image !== null) {
                    image.setAttribute('style', 'margin: 20px 0 0 0 !important');
                }
            }
            else if(i > 5 && i < 11) {
                buttonproduct.style.width="100%";
                buttonproduct.style.marginTop="0px";
                buttonproduct.style.padding="16px 10px 16px 10px";
                
                if (image !== null) {
                    image.setAttribute('style', 'margin: 0 0 0 20px !important');
                }
            }
            else {
                product[i].style.padding="80px 20px 80px 20px";

                details.style.display="none";
                
                if (buttonproduct !== null) {
                    buttonproduct.style.width="73,5%";
                    buttonproduct.style.marginTop="60px";
                }
            }
            
            if(buttonproduct !== null) {

                buttonproduct.style.fontFamily="Gilroy Font";
                buttonproduct.style.fontSize="16px";
                buttonproduct.style.fontWeight="700";
                buttonproduct.style.backgroundColor="transparent";
                buttonproduct.style.backgroundImage="linear-gradient(130deg, #05BFCF 0%, #7230EA 100%)";
                buttonproduct.style.borderRadius="6px 6px 6px 6px";
                buttonproduct.style.padding="16px 70px 16px 70px";
                buttonproduct.style.marginBottom="20px";
            }
        }*/
    }
    
    
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
