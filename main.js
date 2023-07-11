import headerMenu from "./components/header/headerMenu/main";
import headerHome from "./components/header/headerHome/main";
import headerOffice from "./components/header/headerOffice/main";
import headerFeatures from "./components/header/features/main";
import mainIncluded from "./components/main/mainIncluded/main";
import mainSubscribe from "./components/main/mainSubscribe/main";
import mainReviews from "./components/main/mainReviews/main";
import mainTrust from "./components/main/mainTrust/main";
import mainFQA from "./components/main/mainFQA/main";
import mainContactUs from "./components/main/mainContactUs/main";
import mainPlacesCleanUp from "./components/main/mainPlacesCleanUp/main";
import mainCalculator from "./components/main/mainCalculator/main"; 
import footer from "./components/footer/main";


if(document.querySelector('.menu')){
    headerMenu();
}

if(document.querySelector('.home')){
    headerHome();
    headerFeatures('.home');
}

if(document.querySelector('.office')){
    headerOffice();
    headerFeatures('.office');
}

if(document.querySelector('.placesCleanUp')){
    mainPlacesCleanUp();
}

if(document.querySelector('.calculator')){
    mainCalculator();
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

