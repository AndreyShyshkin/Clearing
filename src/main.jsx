import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import Menu from './components/menu/main'
import HeaderMenu from './components/header/headerMenu/main'
import HeaderHome from './components/header/headerHome/main'
import HeaderOffice from './components/header/headerOffice/main'
import HeaderAfterRenovation from './components/header/headerAfterRenovation/main'
import MainIncluded from './components/main/mainIncluded/main'
import IncludedBlocks from './components/main/mainIncluded/includedBlocks'
import MainSubscribe from './components/main/mianSubscribe/main'
import MainReviews from './components/main/mainReviews/main'
import MainTrust from './components/main/mainTrust/main'
import MainFQA from './components/main/mainFQA/main'
import MainContactUs from './components/main/mainContactUs/main'
import MainPlacesCleanUp from './components/main/mainPlacesCleanUp/main'
import MainCalculator from './components/main/mainCalculator/main'
import MainServices from './components/main/mainServices/main'
import AfterPay from './components/main/afterPay/main';
import FooterMenu from './components/footer/main'
import './index.css'

const currentPage = window.location.pathname;

ReactDOM.createRoot(document.getElementById('Page')).render(
  <BrowserRouter>
    <Menu />
    <HeaderMenu />
    {(currentPage == "/" || currentPage == "/index.html") && (
      <>
        <HeaderHome />
        <MainIncluded />
        <MainSubscribe />
        <MainReviews />
        <MainTrust />
        <MainFQA />
        <MainContactUs />
      </>
    )}

    {(currentPage == "/pages/office/" || currentPage == "/pages/office" || currentPage == "/pages/office/index.html") && (
      <>
        <HeaderOffice />
        <MainPlacesCleanUp />
        <MainCalculator />
        <MainSubscribe />
        <MainReviews />
        <MainTrust />
        <MainFQA />
        <MainContactUs />
      </>
    )}

    {(currentPage == "/pages/afterrenovation/" || currentPage == "/pages/afterrenovation" || currentPage == "/pages/afterrenovation/index.html") && (
        <>
        <HeaderAfterRenovation />
        <MainPlacesCleanUp />
        <MainCalculator />
        <MainSubscribe />
        <MainReviews />
        <MainTrust />
        <MainFQA />
        <MainContactUs />
      </>
    )}

    {(currentPage == "/pages/fqa/" || currentPage == "/pages/fqa" || currentPage == "/pages/fqa/index.html") && (
        <>
        <MainFQA />
      </>
    )}

    {(currentPage == "/pages/contactus/" || currentPage == "/pages/contactus" || currentPage == "/pages/contactus/index.html") && (
        <>
        <MainContactUs />
      </>
    )}

    {(currentPage == "/pages/services/" || currentPage == "/pages/services" || currentPage == "/pages/services/index.html") && (
        <>
        <MainServices />
      </>
    )}

    {(currentPage == "/pages/calculator/" || currentPage == "/pages/calculator" || currentPage == "/pages/calculator/index.html") && (
        <>
        <MainSubscribe />
        <IncludedBlocks />
        <MainCalculator />
        <MainReviews />
      </>
    )}

{(currentPage == "/pages/afterpay/" || currentPage == "/pages/afterpay" || currentPage == "/pages/afterpay/index.html") && (
        <>
        <AfterPay />
      </>
    )}

    
    <FooterMenu />
  </BrowserRouter>,
)
