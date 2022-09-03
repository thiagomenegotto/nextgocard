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
    
    //card.style.padding="0";
    card.style.padding = "0"; 
    card.style.backgroundSize = "auto";
    
    onlyLarge.style.margin="0";
    hideLarge.style.margin="0";
    
    profile.style.margin="0";
    profile.style.padding="599px 20px 0px 20px";
    
    photo.style.display="none";

    profile.querySelector('.profile_img').style.marginTop="20px";
    profile.querySelector('.profile_img').style.marginBottom="20px";
    profile.querySelector('.profile_img').style.padding="0";
    
    profile.querySelector('.profile_h2').style.fontFamily="Gilroy Font";
    profile.querySelector('.profile_h2').style.fontWeight="700";
    profile.querySelector('.profile_h2').style.fontSize="28px";
    profile.querySelector('.profile_h2').style.lineHeight="1";
    profile.querySelector('.profile_h2').style.paddingTop="5px";
    profile.querySelector('.profile_h2').style.paddingBottom="0";
    profile.querySelector('.profile_h2').style.marginBottom="20px";
    
    profile.querySelector('.profile_p').style.fontFamily="Gilroy Font";
    profile.querySelector('.profile_p').style.fontWeight="700";
    profile.querySelector('.profile_p').style.fontSize="18px";
    profile.querySelector('.profile_p').style.lineHeight="1.3em";
    profile.querySelector('.profile_p').style.padding="0";

    
// ***** END PROFILE, PHOTO AND LEAD *****

    
// ***** BUTTON LARGE AND EXTRALARGE ***** 
   
    var buttonextralarge = document.querySelectorAll('.extra_large');
    var buttons = document.querySelector('.buttons.row.buttons-left');
    //var buttonlarge = document.querySelectorAll('.large');
    
    buttons.setAttribute("style","padding: 0 20px 150px 20px; margin-top: 50px;");
    //buttons.style.padding="0px 20px 150px 20px";
    
    for(i=0;i<buttonextralarge.length;i++) {
        //buttonextralarge[i].style.backgroundSize='contain';
        buttonextralarge[i].style.padding="0";
        buttonextralarge[i].style.width="100%";
        buttonextralarge[i].style.height="60px";
        buttonextralarge[i].style.backgroundPosition="left";
        buttonextralarge[i].style.margin="0 0 20px";
    }
    
// ***** END BUTTON LARGE AND EXTRALARGE *****
        
// ***** PRODUCT ***** 
    
    var products = document.querySelector('.products');
    var product = document.querySelectorAll('.product');
    var buttonproduct;
    
    products.style.padding="50px 0 0";
    products.style.margin="0";
    products.style.backgroundImage="url('https://thiagomenegotto.github.io/nextgocard/uploads/2022/08/Fundo-v2.jpg')";
    products.style.backgroundPosition="top center";   
    products.style.backgroundRepeat="no-repeat";
        
    for(i=0;i<product.length;i++) {
        var image = product[i].querySelector('.image');
        var details = product[i].querySelector('.details');
        var inner = product[i].querySelector('.product-inner');
        buttonproduct = product[i].querySelector('a');
       
        
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
            
        if (i !== 2) {           
            if (i == 0) {
                details.style.marginTop="-121px";
                details.style.marginBottom="20px";
                product[i].style.margin="-57px 0 0 0";
                product[i].style.padding="50px 20px 40px 20px";
                inner.style.padding="10px";
                
                if (image !== null) {
                    image.setAttribute('style', 'margin-top: 23px !important');
                }

                var section = document.createElement('section');
                var container_wrapper = document.createElement('div');
                var element1 = document.createElement('div');
                var icon_box_wrapper1 = document.createElement('div');
                var icon_box_icon1 = document.createElement('div');
                var icon_element_animation1 = document.createElement('span');
                var svg1 = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                var path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                var icon_box_content1 = document.createElement('div');
                var icon_box_title1 = document.createElement('h3');
                var icon_box_description1 = document.createElement('p');
                
                container_wrapper.setAttribute("class","container-wrapper");
                container_wrapper.setAttribute("style","background-color: #E6E6E60D; padding: 50px 20px; border-radius: 10px; border-style: solid; border-width: 1px; transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s; margin: 0px; display: flex; width: 100%; flex-wrap: wrap; align-content: flex-start;");
                
                element1.setAttribute("class","element");
                element1.setAttribute("style","width:100%; margin-bottom: 20px;");
                
                icon_box_wrapper1.setAttribute("class","element-icon-box-wrapper");
                icon_box_wrapper1.setAttribute("style","text-align: left; display: flex; flex-direction: row;");
                
                icon_box_icon1.setAttribute("class","element-icon-box-icon");
                icon_box_icon1.setAttribute("style","display: block; flex: unset; margin-right: 15px; margin-left: 0; margin-bottom: unset; text-align: left; flex-direction: row;");
                
                icon_element_animation1.setAttribute("class","icon-element-animation");
                icon_element_animation1.setAttribute("style","font-size: 24px; display: inline-block; line-height: 1; transition: all .3s; text-align: center; flex-direction: row;");
                
                svg1.setAttribute("fill", "none");
                svg1.setAttribute("viewBox", "0 0 25 25");
                svg1.setAttribute("style", "width: 1em; height: 1em; position: relative; display: block;");

                path1.setAttribute(
                    "d",
                    "M3.86652 4.75013C2.0473 6.78195 1.02877 9.40585 1.0007 12.1329C0.931556 18.3644 6.01925 23.4884 12.2507 23.5001C18.4734 23.5119 23.5007 18.471 23.5007 12.2501C23.5007 6.12474 18.6052 1.14017 12.5144 1.00013C12.4801 0.99903 12.4459 1.00484 12.4139 1.01722C12.382 1.02961 12.3528 1.0483 12.3282 1.0722C12.3036 1.09609 12.284 1.1247 12.2707 1.15631C12.2574 1.18792 12.2506 1.22189 12.2507 1.25619V6.15638"
                );
                path1.setAttribute("stroke", "#00F0FF");
                path1.setAttribute('stroke-width', '1.875');
                path1.setAttribute('stroke-linecap', 'round');
                path1.setAttribute('stroke-linejoin', 'round');
                
                icon_box_content1.setAttribute("class","icon-box-content");
                icon_box_content1.setAttribute("style","display: block; flex-grow: 1; text-align: left; flex-direction: row;");
                
                icon_box_title1.setAttribute("class","icon-box-title");
                icon_box_title1.setAttribute("style","color: #FFFFFF; margin-top: 0; padding-top: 11px; margin-bottom: 1rem; text-align: left; font-family: Gilroy Font; font-size: 1em; font-weight: 400; line-height: 1px;");
                icon_box_title1.innerText="Ganhar TEMPO";
                
                icon_box_description1.setAttribute("class","icon-box-description");
                icon_box_description1.setAttribute("style","color: #00E4FF; margin: 0; text-align: left; font-family: Gilroy Font; font-size: 1.25em; font-weight: 700;");
                icon_box_description1.innerText="Todos os templates são feitos para facilitar a sua produção de conteúdo e otimizar o seu tempo sem deixar de garantir a qualidade das suas artes. Você irá fazer muito mais post em muito menos tempo!";

                svg1.append(path1);
                icon_element_animation1.append(svg1);
                icon_box_icon1.append(icon_element_animation1);
                
                icon_box_content1.append(icon_box_title1);
                icon_box_content1.append(icon_box_description1);
                
                icon_box_wrapper1.append(icon_box_icon1);
                icon_box_wrapper1.append(icon_box_content1);
                
                element1.append(icon_box_content1);
                
                container_wrapper.append(element1);
                section.append(container_wrapper);
                
                //var img = document.createElement('img');

                //img.src = 'https://thiagomenegotto.github.io/nextgocard/uploads/2022/08/Mockup-h2-2.png';
                //img.setAttribute("style", "margin: 10px 0 40px 0");
               
                product[i].appendChild(section);
            }
            
            else if (i == 1) {
                product[i].style.padding="80px 20px 80px 20px";
            }
            
            else if (i == 3 || i == 5 || i == 11) {
                product[i].style.padding="80px 20px 0 20px";
                
                if (i !== 11) {
                    details.style.display="none";
                }
            }
            
            else if (i == 4) {
                product[i].style.padding="40px 20px 0 20px";
                
                details.style.display="none";
            }
            
            else if (i == 6 || i == 7 || i == 8 || i == 9 || i == 10) {
                product[i].style.padding="35px 20px 10px 20px";
                //product[i].style.marginBottom="20px";
                inner.style.padding="10px 10px 0 10px";
                
                details.style.display="none";
                
                buttonproduct.style.width="100%";
                buttonproduct.style.maxWidth="365px";
                buttonproduct.style.margin="0 0 0 10px";
                buttonproduct.style.padding="16px 10px 16px 10px";
                
                if (image !== null) {
                    image.setAttribute('style', 'margin: 0 0 20px 0 !important');
                }
            }
        }
        
        else {
            product[i].style.padding="80px 0 80px 0";
            product[i].style.backgroundImage = "linear-gradient(180deg, #59BFCA 0%, #7330DE 100%)";
                
            if (image !== null) {
                image.setAttribute('style', 'margin: 20px 0 0 0 !important');
            }
        }
        
        if(buttonproduct !== null) {

            buttonproduct.style.fontFamily="Gilroy Font";
            buttonproduct.style.fontSize="16px";
            buttonproduct.style.fontWeight="700";
            buttonproduct.style.backgroundColor="transparent";
            buttonproduct.style.backgroundImage="linear-gradient(130deg, #05BFCF 0%, #7230EA 100%)";
            buttonproduct.style.borderRadius="6px 6px 6px 6px";
            
            if (i == 1 || i == 3 || i == 4) {
                
                buttonproduct.style.padding="16px 70px 16px 70px";
                buttonproduct.style.marginBottom="20px";
                
                if (image !== null) {
                    image.setAttribute('style', 'margin: 40px 0 20px 0 !important');
                }
                
                var div = document.createElement('div');
                var img = document.createElement('img');

                div.setAttribute("style", "text-align: center");
                img.src = 'https://thiagomenegotto.github.io/nextgocard/uploads/2022/08/Formas-pagamento.svg';
                
                if (i !== 1) {
                    buttonproduct.style.width="auto";
                    buttonproduct.style.marginTop="60px";
                    
                    img.setAttribute("style", "vertical-align: middle; display: inline-block; width: 324px; height: auto; max-width: 100%; border: none; border-radius: 0; box-shadow: none;");
                    
                }                
                else {
                    buttonproduct.style.width="100%";
                    buttonproduct.style.marginTop="50px";
                    
                    img.setAttribute("style", "vertical-align: middle; display: inline-block; width: 69%; height: auto; max-width: 100%; border: none; border-radius: 0; box-shadow: none;");
                }
                
                div.append(img);
                product[i].appendChild(div);
            }
            else {
                buttonproduct.style.padding="16px 10px 16px 10px";
                buttonproduct.style.width="100%";
            }
        }
        
        if (i == 11) {
            var section = document.createElement('section');
            var countdown_container = document.createElement('div');
            var countdown_heading = document.createElement('div');
            var h2 = document.createElement('h2');
            var widget_countdown = document.createElement('div');
            var countdown_wrapper = document.createElement('div');
            
            section.setAttribute("class","widget-countdown");
            section.setAttribute("style","padding: 80px 20px 0 20px");
            
            countdown_container.setAttribute("class","countdown-container");
            countdown_container.setAttribute("style","padding: 0; display: flex; width: 100%; flex-wrap: wrap; align-content: flex-start;");
            
            countdown_heading.setAttribute("class","widget-heading");
            countdown_heading.setAttribute("style","text-align: center; margin-bottom: 20px; width: 100%; margin: 0; padding: 0;");
            
            h2.setAttribute("class","element-heading");
            h2.setAttribute("style","color: #FFF; font-family: Gilroy Font; font-size: 26px; font-weight: 700; margin: 0; padding: 0; line-height: 1");
            h2.innerText="PROMOÇÃO POR TEMPO LIMITADO";
            
            widget_countdown.setAttribute("class","widget-countdown");
            widget_countdown.setAttribute("style","margin-bottom: 0; width: 100%;");
            
            countdown_wrapper.setAttribute("class","countdown-wrapper");
            countdown_wrapper.setAttribute("style","max-width: 18%; display: flex; justify-content: center; margin-right: auto; margin-left: auto; flex-direction: row;");
            
            for (t=0; t<4; t++) {
                var countdown_item = document.createElement('div');
                var digits = document.createElement('span');
                var label = document.createElement('span');
                
                countdown_item.setAttribute("class","countdown-item");
                
                digits.setAttribute("class","countdown-digits");
                digits.setAttribute("style","font-family: Gilroy Font; font-size: 30px; font-weight: 200; line-height: 1; display: block; text-align: center; color: #fff;");
                
                label.setAttribute("class","countdown-label");
                label.setAttribute("style","font-family: Gilroy Font; font-size: 17px; font-weight: 300; line-height: 1; display: block; text-align: center; color: #fff;");
                
                digits.innerText="00";
                
                if (t == 0) {
                    label.innerText="Dias";
                    countdown_item.setAttribute("style","margin-right: calc(39px/2); background-color: #00E4FF00; flex-basis: 0; flex-grow: 1; padding: 20px 0; text-align: center; color: #fff;");
                    digits.setAttribute("id","countdown_days");
                }
                else if (t == 1) {
                    label.innerText="Hrs";
                    countdown_item.setAttribute("style","margin-right: calc(39px/2); margin-left: calc(39px/2); background-color: #00E4FF00; flex-basis: 0; flex-grow: 1; padding: 20px 0; text-align: center; color: #fff;");
                    digits.setAttribute("id","countdown_hours");
                }
                else if (t == 2) {
                    label.innerText="Min";
                    countdown_item.setAttribute("style","margin-right: calc(39px/2); margin-left: calc(39px/2); background-color: #00E4FF00; flex-basis: 0; flex-grow: 1; padding: 20px 0; text-align: center; color: #fff;");
                    digits.setAttribute("id","countdown_mins");
                }
                else {
                    label.innerText="Seg";
                    countdown_item.setAttribute("style","margin-left: calc(39px/2); background-color: #00E4FF00; flex-basis: 0; flex-grow: 1; padding: 20px 0; text-align: center; color: #fff;");
                    digits.setAttribute("id","countdown_seconds");
                }

                countdown_item.append(digits);
                countdown_item.append(label);
                
                countdown_wrapper.append(countdown_item);
            }
            
            countdown_heading.append(h2);
            widget_countdown.append(countdown_wrapper);
            countdown_container.append(countdown_heading);
            countdown_container.append(widget_countdown);
            section.append(countdown_container);
            
            products.insertBefore(section, product[i]);
        }
    }
    
    
// ***** END PRODUCT *****
    
// ***** BANNER *****
    
    var banner = document.querySelector('.banner');
    var imgbanner = banner.querySelectorAll('img');
    
    //var cardNext = products.nextElementSibling;
    
    //cardNext.style.minHeight="0";
    
    banner.style.padding="0";
    
    for(i=0;i<imgbanner.length;i++) {
        imgbanner[i].style.marginTop="60px";
    }
    
// ***** END BANNER *****

// ***** FOOTER ***** 
    
    var footer = document.querySelector('.footer-text-box');
    footer.style.display = "none";
    
    var section = document.createElement('section');
    var widget_wrap = document.createElement('div');
    var widget_container1 = document.createElement('div');
    var p1 = document.createElement('p');
    var span = document.createElement('span');
    var widget_container2 = document.createElement('div');
    var p2 = document.createElement('p');
    var widget_container3 = document.createElement('div');
    var a = document.createElement('a');
    var img = document.createElement('img');
    
    
    section.setAttribute("style","border-style: solid; border-width: 1px 0px 0px 0px; border-color: #fff; transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s; padding: 20px 0px 50px 0px;");
    widget_wrap.setAttribute("style","padding: 10px; display: flex; width: 100%; flex-wrap: wrap; align-content: flex-start;");
    widget_container1.setAttribute("style","margin: 0 20px 0 20px; text-align: center; color: #fff; font-family: Gilroy Font; font-size: 16px; font-weight: 400; line-height: 1.5;");
    p1.setAttribute("style","margin-bottom: 0; margin-top: 0;");
    span.setAttribute("style","color: #0ABAD1");
    
    widget_container2.setAttribute("style","margin: 8px 0 0 0; width: 100%; text-align: center; color: #fff; font-family: Gilroy Font; font-size: 12px; font-weight: 400; line-height: 1.5;");
    p2.setAttribute("style","margin-bottom: 0; margin-top: 0;");
    
    widget_container3.setAttribute("style","text-align: center; width: 100%; margin: 0; padding: 12px 0 0 0;");
    a.setAttribute("style","display: inline-block; font-family: Gilroy Font; box-shadow: none; text-decoration: none; background-color: transparent; color: #c36;");
    img.setAttribute("style","width: 100%; vertical-align: middle; display: inline-block; height: auto; max-width: 100%; border: none; border-radius: 0; box-shadow: none;");
    
    p1.innerText = "Dúvidas? Envie um e-mail para ";
    span.innerText = "suporte@tellasaderio.com.br";
    p2.innerText = "© Perfil Profissional – 2022. Todos os direitos reservados. Stella Sadério.";
    a.setAttribute("href","https://www.uol.com.br/");
    img.src = 'https://thiagomenegotto.github.io/nextgocard/uploads/2022/08/thiago.svg';
    
    p1.append(span);
    widget_container1.append(p1);
    
    widget_container2.append(p2);
    
    a.append(img);
    widget_container3.append(a);
    
    widget_wrap.append(widget_container1);
    widget_wrap.append(widget_container2);
    widget_wrap.append(widget_container3);
    section.append(widget_wrap);
    card.append(section);
    
    /*footera.onmouseover = function() 
    {
        footera.setAttribute('style', 'color: white');
    }

    footera.onmouseout = function() 
    {
        footera.setAttribute('style', 'color: footeracolor');
        console.log(`cor do footer a: ${footeracolor}`);
    } */

// ***** END FOOTER ***** 
    
    const timeTarget = "29 Aug 2022";
    
    const daysEl = document.getElementById("countdown_days");
    const hoursEl = document.getElementById("countdown_hours");
    const minsEl = document.getElementById("countdown_mins");
    const secondsEl = document.getElementById("countdown_seconds");
    
    function countdown() {
        const timeTargetDate = new Date(timeTarget);
        const currentDate = new Date();
        
        const totalSeconds = (timeTargetDate - currentDate)/1000;
        
        const days = Math.floor(totalSeconds / 3600 / 24);
        const hours = Math.floor(totalSeconds / 3600) % 24;
        const mins = Math.floor(totalSeconds / 60) % 60;
        const seconds = Math.floor(totalSeconds) % 60;
        
        daysEl.innerText = formatTime(days);
        hoursEl.innerText = formatTime(hours);
        minsEl.innerText = formatTime(mins);
        secondsEl.innerText = formatTime(seconds);
    }
    
    function formatTime(time) {
        return time < 10 ? `0${time}` : time; 
    }
    
    countdown();
    
    setInterval(countdown, 1000);
    
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
