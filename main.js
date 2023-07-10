import headerMenu from "./components/headerMenu/main";
import headerHome from "./components/headerHome/main";
import mainIncluded from "./components/mainIncluded/main";
import mainSubscribe from "./components/mainSubscribe/main";
import mainReviews from "./components/mainReviews/main";
import mainTrust from "./components/mainTrust/main";
import mainFQA from "./components/mainFQA/main";
import mainContactUs from "./components/mainContactUs/main";
import footer from "./components/footer/main";


if(document.querySelector('.menu')){
    headerMenu();
}
if(document.querySelector('.home')){
    headerHome();
}

if(document.querySelector('.included')){
    mainIncluded();
}

if(document.querySelector('.subscribe')){
    mainSubscribe();
}

if(document.querySelector('.reviews')){
    mainReviews();
}

if(document.querySelector('.trust')){
    mainTrust();
}

if(document.querySelector('.FQA')){
    mainFQA(); 
}

if(document.querySelector('.ContactUs')){
    mainContactUs();
}

if(document.querySelector('footer')){
    footer();
}

