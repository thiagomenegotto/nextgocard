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
    
    function element_icon(j) {
        var element = document.createElement('div');
        var icon_box_wrapper = document.createElement('div');
        var icon_box_icon = document.createElement('div');
        var icon_element_animation = document.createElement('span');
        var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        var path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        var path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        var path3 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        var icon_box_content = document.createElement('div');
        var icon_box_title = document.createElement('h3');
        var icon_box_description = document.createElement('p');
                    
        element.setAttribute("class","element");
        element.setAttribute("style","width:100%; margin-bottom: 20px;");
                
        icon_box_wrapper.setAttribute("class","element-icon-box-wrapper");
        icon_box_wrapper.setAttribute("style","text-align: left; display: flex; flex-direction: row;");
                
        icon_box_icon.setAttribute("class","element-icon-box-icon");
        icon_box_icon.setAttribute("style","display: block; flex: unset; margin-right: 15px; margin-left: 0; margin-bottom: unset; text-align: left; flex-direction: row;");
                
        icon_element_animation.setAttribute("class","icon-element-animation");
        icon_element_animation.setAttribute("style","font-size: 24px; display: inline-block; line-height: 1; transition: all .3s; text-align: center; flex-direction: row;");
                
        icon_box_content.setAttribute("class","icon-box-content");
        icon_box_content.setAttribute("style","display: block; flex-grow: 1; text-align: left; flex-direction: row;");
                
        icon_box_title.setAttribute("class","icon-box-title");
        icon_box_title.setAttribute("style","color: #00E4FF; margin-top: 0; padding-top: 11px; margin-bottom: 1rem; text-align: left; font-family: Gilroy Font; font-size: 1.25em; font-weight: 700; line-height: 1px;");
                       
        icon_box_description.setAttribute("class","icon-box-description");
        icon_box_description.setAttribute("style","color: #FFFFFF; margin: 0; text-align: left; font-family: Gilroy Font; font-size: 1em; font-weight: 400; line-height: 1.5;");

                    
        if(j == 0) {
            svg.setAttribute("fill", "none");
            svg.setAttribute("viewBox", "0 0 25 25");
            svg.setAttribute("style", "width: 1em; height: 1em; position: relative; display: block;");
            
            path1.setAttribute(
            "d",
            "M3.86652 4.75013C2.0473 6.78195 1.02877 9.40585 1.0007 12.1329C0.931556 18.3644 6.01925 23.4884 12.2507 23.5001C18.4734 23.5119 23.5007 18.471 23.5007 12.2501C23.5007 6.12474 18.6052 1.14017 12.5144 1.00013C12.4801 0.99903 12.4459 1.00484 12.4139 1.01722C12.382 1.02961 12.3528 1.0483 12.3282 1.0722C12.3036 1.09609 12.284 1.1247 12.2707 1.15631C12.2574 1.18792 12.2506 1.22189 12.2507 1.25619V6.15638"
            );
            
            path2.setAttribute(
            "d",
            "M10.9254 13.5762L6.29645 6.95509C6.23241 6.86336 6.20271 6.75201 6.21254 6.64056C6.22237 6.52912 6.27111 6.42469 6.35022 6.34558C6.42933 6.26647 6.53376 6.21773 6.6452 6.2079C6.75665 6.19807 6.868 6.22777 6.95973 6.29181L13.5808 10.9207C13.9869 11.2132 14.2616 11.6538 14.3453 12.1473C14.4291 12.6407 14.3153 13.1472 14.0284 13.5574C13.7416 13.9675 13.3048 14.2482 12.8126 14.3388C12.3204 14.4294 11.8123 14.3226 11.3982 14.0414C11.2151 13.9146 11.0552 13.7572 10.9254 13.5762Z"
            );
            
            path1.setAttribute("stroke", "#00F0FF");
            path1.setAttribute('stroke-width', '1.875');
            path1.setAttribute('stroke-linecap', 'round');
            path1.setAttribute('stroke-linejoin', 'round');
        
            path2.setAttribute("fill", "#00F0FF");
                        
            icon_box_title.innerText="Ganhar TEMPO";
            icon_box_description.innerText="Todos os templates são feitos para facilitar a sua produção de conteúdo e otimizar o seu tempo sem deixar de garantir a qualidade das suas artes. Você irá fazer muito mais post em muito menos tempo!";
        }
        else if(j == 1) {
            svg.setAttribute("fill", "none");
            svg.setAttribute("viewBox", "0 0 27 23");
            svg.setAttribute("style", "width: 1em; height: 1em; position: relative; display: block;");
            
            path1.setAttribute(
            "d",
            "M12.0286 0.826303C12.1508 0.578302 12.34 0.369464 12.5747 0.223431C12.8095 0.0773974 13.0805 0 13.357 0C13.6334 0 13.9044 0.0773974 14.1392 0.223431C14.3739 0.369464 14.5631 0.578302 14.6853 0.826303L17.5435 6.61667L23.9366 7.54668C24.2101 7.5864 24.4671 7.70187 24.6784 7.88004C24.8897 8.0582 25.0469 8.29194 25.1323 8.55482C25.2176 8.8177 25.2277 9.09923 25.1614 9.36755C25.0951 9.63587 24.955 9.88027 24.757 10.0731L20.1306 14.581L21.2235 20.9489C21.2702 21.2213 21.2398 21.5012 21.1356 21.7572C21.0315 22.0131 20.8578 22.2348 20.6343 22.3972C20.4107 22.5596 20.1462 22.6562 19.8706 22.6761C19.595 22.696 19.3193 22.6384 19.0747 22.5098L13.3584 19.5036L7.63915 22.5098C7.39451 22.6381 7.11885 22.6954 6.84334 22.6753C6.56783 22.6551 6.30344 22.5583 6.08006 22.3958C5.85668 22.2333 5.68322 22.0115 5.57927 21.7556C5.47532 21.4996 5.44503 21.2197 5.49183 20.9474L6.58326 14.581L1.95689 10.0731C1.75889 9.88027 1.61881 9.63587 1.55249 9.36755C1.48617 9.09923 1.49627 8.8177 1.58164 8.55482C1.667 8.29194 1.82423 8.0582 2.03554 7.88004C2.24685 7.70187 2.5038 7.5864 2.77732 7.54668L9.17041 6.61815L12.0286 0.824822V0.826303ZM5.04756 15.32C5.10836 15.3959 5.1536 15.4831 5.1807 15.5765C5.2078 15.6699 5.21623 15.7678 5.20551 15.8645C5.19478 15.9611 5.16511 16.0548 5.11819 16.14C5.07126 16.2252 5.00801 16.3003 4.93205 16.3611L1.22977 19.3229C1.15416 19.3865 1.06657 19.4344 0.972164 19.4637C0.877757 19.493 0.778444 19.5031 0.68008 19.4934C0.581715 19.4837 0.486291 19.4543 0.399432 19.4072C0.312573 19.36 0.236039 19.2959 0.17434 19.2187C0.112642 19.1415 0.0670289 19.0527 0.0401905 18.9575C0.013352 18.8624 0.00583137 18.7629 0.018072 18.6648C0.0303126 18.5667 0.0620667 18.4721 0.111462 18.3865C0.160857 18.3008 0.226894 18.226 0.305679 18.1663L4.00796 15.2045C4.16122 15.0821 4.35675 15.0256 4.55164 15.0473C4.74654 15.0689 4.92489 15.167 5.04756 15.32ZM4.93205 4.09912C5.01314 4.15794 5.08145 4.2326 5.13284 4.31859C5.18424 4.40458 5.21765 4.5001 5.23106 4.59938C5.24447 4.69866 5.23759 4.79962 5.21085 4.89617C5.1841 4.99271 5.13805 5.08282 5.07547 5.16104C5.01289 5.23927 4.93508 5.30398 4.84677 5.35127C4.75845 5.39855 4.66146 5.42742 4.56166 5.43614C4.46186 5.44485 4.36133 5.43322 4.26616 5.40195C4.17098 5.37068 4.08314 5.32043 4.00796 5.25423L0.305679 2.29241C0.224589 2.23358 0.156278 2.15892 0.104881 2.07293C0.053484 1.98694 0.0200703 1.89142 0.00666221 1.79214C-0.00674591 1.69286 0.000130487 1.5919 0.0268751 1.49536C0.0536196 1.39881 0.0996763 1.3087 0.162257 1.23048C0.224838 1.15225 0.302641 1.08754 0.390958 1.04025C0.479275 0.992968 0.576268 0.964097 0.676066 0.955385C0.775865 0.946674 0.876394 0.958304 0.971567 0.989572C1.06674 1.02084 1.15458 1.07109 1.22977 1.13729L4.93205 4.09912ZM21.6619 15.3215C21.6012 15.3975 21.556 15.4847 21.5291 15.5782C21.5021 15.6717 21.4938 15.7696 21.5046 15.8662C21.5155 15.9629 21.5453 16.0565 21.5924 16.1417C21.6394 16.2268 21.7028 16.3019 21.7789 16.3625L25.4812 19.3244C25.5568 19.388 25.6444 19.4359 25.7388 19.4652C25.8332 19.4945 25.9325 19.5046 26.0309 19.4948C26.1292 19.4851 26.2246 19.4558 26.3115 19.4086C26.3984 19.3615 26.4749 19.2974 26.5366 19.2202C26.5983 19.1429 26.6439 19.0542 26.6707 18.959C26.6976 18.8639 26.7051 18.7644 26.6929 18.6663C26.6806 18.5682 26.6489 18.4736 26.5995 18.3879C26.5501 18.3023 26.484 18.2275 26.4053 18.1678L22.703 15.2059C22.627 15.1451 22.5399 15.0999 22.4465 15.0728C22.353 15.0457 22.2552 15.0373 22.1585 15.048C22.0618 15.0587 21.9682 15.0884 21.883 15.1353C21.7978 15.1822 21.7227 15.2455 21.6619 15.3215ZM21.7789 4.09912C21.636 4.2249 21.5471 4.40085 21.5306 4.59047C21.514 4.78008 21.5711 4.96879 21.69 5.11742C21.8089 5.26604 21.9805 5.36318 22.1691 5.38865C22.3577 5.41413 22.5489 5.36599 22.703 5.25423L26.4053 2.29241C26.4864 2.23358 26.5547 2.15892 26.6061 2.07293C26.6575 1.98694 26.6909 1.89142 26.7043 1.79214C26.7177 1.69286 26.7108 1.5919 26.6841 1.49536C26.6573 1.39881 26.6113 1.3087 26.5487 1.23048C26.4861 1.15225 26.4083 1.08754 26.32 1.04025C26.2317 0.992968 26.1347 0.964097 26.0349 0.955385C25.9351 0.946674 25.8345 0.958304 25.7394 0.989572C25.6442 1.02084 25.5564 1.07109 25.4812 1.13729L21.7789 4.09912Z"
            );
            
            path1.setAttribute("fill", "#00F0FF");
                        
            icon_box_title.innerText="Ganhar DESTAQUE";
            icon_box_description.innerText="Você terá em mãos as minhas melhores artes já feitas no Canva. Tudo isso para deixar o seu perfil ainda mais profissional, organizado e harmônico – de uma maneira prática e descomplicada!";
        }
        else if(j == 2) {
            svg.setAttribute("fill", "none");
            svg.setAttribute("viewBox", "0 0 25 19");
            svg.setAttribute("style", "width: 1em; height: 1em; position: relative; display: block;");
            
            path1.setAttribute(
            "d",
            "M10.9375 18.75C10.9375 18.75 9.375 18.75 9.375 17.1875C9.375 15.625 10.9375 10.9375 17.1875 10.9375C23.4375 10.9375 25 15.625 25 17.1875C25 18.75 23.4375 18.75 23.4375 18.75H10.9375ZM17.1875 9.375C18.4307 9.375 19.623 8.88114 20.5021 8.00206C21.3811 7.12299 21.875 5.9307 21.875 4.6875C21.875 3.4443 21.3811 2.25201 20.5021 1.37294C19.623 0.49386 18.4307 0 17.1875 0C15.9443 0 14.752 0.49386 13.8729 1.37294C12.9939 2.25201 12.5 3.4443 12.5 4.6875C12.5 5.9307 12.9939 7.12299 13.8729 8.00206C14.752 8.88114 15.9443 9.375 17.1875 9.375Z"
            );
            
            path2.setAttribute(
            "d",
            "M8.15 18.75C7.91837 18.2622 7.80285 17.7274 7.8125 17.1875C7.8125 15.0703 8.875 12.8906 10.8375 11.375C9.85796 11.0732 8.83742 10.9256 7.8125 10.9375C1.5625 10.9375 0 15.625 0 17.1875C0 18.75 1.5625 18.75 1.5625 18.75H8.15Z"
            );
            
            path3.setAttribute(
            "d",
            "M7.03125 9.375C8.06725 9.375 9.06082 8.96345 9.79339 8.23089C10.5259 7.49832 10.9375 6.50475 10.9375 5.46875C10.9375 4.43275 10.5259 3.43918 9.79339 2.70661C9.06082 1.97405 8.06725 1.5625 7.03125 1.5625C5.99525 1.5625 5.00168 1.97405 4.26911 2.70661C3.53655 3.43918 3.125 4.43275 3.125 5.46875C3.125 6.50475 3.53655 7.49832 4.26911 8.23089C5.00168 8.96345 5.99525 9.375 7.03125 9.375Z"
            );
            
            path1.setAttribute("fill", "#00F0FF");
            path2.setAttribute("fill", "#00F0FF");
            path3.setAttribute("fill", "#00F0FF");
            
            icon_box_title.innerText="Ganhar CLIENTES";
            icon_box_description.innerText="A maioria das pessoas gasta muito tempo criando uma única arte. Com o Perfil Profissional, você irá reduzir o seu tempo de criação e poderá dedicar mais horas para nutrir e prospectar clientes!";
        }
        
        if(j == 0) {
            svg.append(path1);
            svg.append(path2);
        }
        else if(j == 1) {
            svg.append(path1);
        }
        else if(j == 2) {
            svg.append(path1);
            svg.append(path2);
            svg.append(path3);
        }
        
        icon_element_animation.append(svg);
        icon_box_icon.append(icon_element_animation);
                    
        icon_box_content.append(icon_box_title);
        icon_box_content.append(icon_box_description);
                    
        icon_box_wrapper.append(icon_box_icon);
        icon_box_wrapper.append(icon_box_content);
                    
        element.append(icon_box_wrapper);
        
        return element;
    }
    
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

                var icon = 3;
                var section = document.createElement('section');
                var element_column = document.createElement('div');
                var container_wrapper = document.createElement('div');
                
                element_column.setAttribute("class","element-column");
                element_column.setAttribute("style","border-radius: 15px; border: solid 1px transparent; background-image: linear-gradient(to top, #0ABAD1, #5C4EE5); padding: 2px; margin: 5px; display: flex; position: relative;");
                                
                container_wrapper.setAttribute("class","container-wrapper");
                container_wrapper.setAttribute("style","background-color: #000; border-radius: 15px; padding: 50px 20px; transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s; margin: 0; backdrop-filter: blur(4px); display: flex; position: relative; width: 100%; flex-wrap: wrap; align-content: flex-start;");
                                             
                container_wrapper.append(element_icon(0));
                container_wrapper.append(element_icon(1));
                container_wrapper.append(element_icon(2));
                
                element_column.append(container_wrapper);
                section.append(element_column);
                
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
                
                buttonproduct.style.width="auto";
                //buttonproduct.style.maxWidth="365px";
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
            buttonproduct.style.lineHeight="1";
            buttonproduct.style.backgroundColor="transparent";
            buttonproduct.style.backgroundImage="linear-gradient(130deg, #05BFCF 0%, #7230EA 100%)";
            buttonproduct.style.borderRadius="6px 6px 6px 6px";
            buttonproduct.style.marginLeft="auto";
            buttonproduct.style.marginRight="auto";
            buttonproduct.style.width="auto";
            
            if (i == 1 || i == 3 || i == 4) {
                
                buttonproduct.style.padding="16px 70px 16px 70px";
                buttonproduct.style.marginBottom="20px";
                buttonproduct.style.maxWidth="394px";
                
                if (image !== null) {
                    image.setAttribute('style', 'margin: 40px 0 20px 0 !important');
                }
                
                var div = document.createElement('div');
                var img = document.createElement('img');

                div.setAttribute("style", "text-align: center");
                img.src = 'https://thiagomenegotto.github.io/nextgocard/uploads/2022/08/Formas-pagamento.svg';
                
                if (i !== 1) {
                    buttonproduct.style.width="auto";
                    buttonproduct.style.fontSize="18px";
                    buttonproduct.style.marginTop="60px";
                    buttonproduct.style.maxWidth="283px";
                    
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
                buttonproduct.style.width="auto";
                buttonproduct.style.fontWeight="500";
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
        
        if (days >= 0) {
            daysEl.innerText = formatTime(days);
            hoursEl.innerText = formatTime(hours);
            minsEl.innerText = formatTime(mins);
            secondsEl.innerText = formatTime(seconds);
        }
        else {
            daysEl.innerText = "00";
            hoursEl.innerText = "00";
            minsEl.innerText = "00";
            secondsEl.innerText = "00";
        }
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
