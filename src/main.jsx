import React from 'react'
import ReactDOM from 'react-dom/client'

import HeaderMenu from './components/header/headerMenu/main'
import HeaderHome from './components/header/headerHome/main'
import HeaderOffice from './components/header/headerOffice/main'
import HeaderAfterRenovation from './components/header/headerAfterRenovation/main'
import MainIncluded from './components/main/mainIncluded/main'
import MainSubscribe from './components/main/mianSubscribe/main'
import MainReviews from './components/main/mainReviews/main'
import MainTrust from './components/main/mainTrust/main'
import MainFQA from './components/main/mainFQA/main'
import MainContactUs from './components/main/mainContactUs/main'
import MainPlacesCleanUp from './components/main/mainPlacesCleanUp/main'
import MainCalculator from './components/main/mainCalculator/main'
import FooterMenu from './components/footer/main'
import './index.css'

const currentPage = window.location.pathname;

ReactDOM.createRoot(document.getElementById('Page')).render(
  <React.StrictMode>
    <HeaderMenu />
    {(currentPage === "/" || currentPage === "/index.html") && (
      <>
        <HeaderHome />
        <MainIncluded />
      </>
    )}
    {(currentPage === "/pages/office/" || currentPage === "/pages/office/index.html") && (
      <>
        <HeaderOffice />
        <MainPlacesCleanUp />
        <MainCalculator />
      </>
    )}

    {(currentPage === "/pages/afterRenovation/" || currentPage === "/pages/afterRenovation/index.html") && (
        <>
        <HeaderAfterRenovation />
        <MainPlacesCleanUp />
        <MainCalculator />
      </>
    )}

    <MainSubscribe />
    <MainReviews />
    <MainTrust />
    <MainFQA />
    <MainContactUs />
    <FooterMenu />
  </React.StrictMode>,
)
