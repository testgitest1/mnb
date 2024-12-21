import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AppContext from './Context/Context.jsx'
import {
  Navbar,
  Footer,
  HomePage,
  AllDoctorsPage,
  SpecialitiesPage,
  MedicinesPage,
  LoginPage,
  SignupPage,
  ErrorPage,
  FaqsPage,
  AboutUsPage,
  PrivacyPolicyPage,
  TermsAndConditionsPage,
  OrderHistoryPage,
  // Appointment,
  AddtoCart,
  ProductsByCategory,
  // SingleMedicine,
  // GoToTop,
  Bot,
} from './import-export/ImportExport.js'
import ConsultNow from './comp/ConsultNow.jsx'

// import React from 'react'
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import './App.css'
import Home from './comp/Home'
import SearchDoc from './comp/SearchDoc'
import Filter from './comp/Filter.jsx'
import DocsOverview from './comp/DocsOverview.jsx'
import AppointmentDetails from './comp/AppointmentDetails'
import Topbar from './comp/Topbar.jsx'
import AppProvider from './comp/AppContext.jsx'
import ReviewDetails from './comp/ReviewDetails'
import Submit from './comp/Submit.jsx'
import Payment from './comp/Payment'
import CardPayment from './comp/CardPayment'
// import ConsultNow from './comp/ConsultNow'
import SearchHospital from './comp/SearchHospital'
import HospitalOverview from './comp/HospitalOverview.jsx'
import PaymentDone from './comp/PaymentDone'
import { HospitalProvider } from './comp/HospitalContext.jsx'
import HospitalDetails from './comp/HospitalDetails'
import HospitalPreference from './comp/HospitalPreference.jsx'
import HospreviewDetails from './comp/HospreviewDetails.jsx'
import ForAppointments from './comp/ForAppointments.jsx'
import HospFilter from './comp/HospFilter.jsx'
import HospMail from './comp/HospMail.jsx'

function App() {
  return (
    //   <HospitalProvider>
    //   <AppProvider>
    //     <Router>
    //       <div className="App">
    //         <Topbar />

    //         {/* <div className="content" style={{ height: "auto", width: "auto" }}> */}
    //         <Routes>
    //           <Route path="/" element={<Home />} />
    //           <Route path="/search-doc" element={<SearchDoc />} />
    //           <Route path="/docs-overview" element={<DocsOverview />} />
    //           <Route path="/appointments" element={<AppointmentDetails />} />
    //           <Route path="/filter" element={<Filter />} />
    //           <Route path="/ReviewDetails" element={<ReviewDetails />} />
    //           <Route path="/Submit" element={<Submit />} />
    //           <Route path="/payment" element={<Payment />} />
    //           <Route path="/CardPayment" element={<CardPayment />} />
    //           <Route path="/ConsultNow" element={<ConsultNow />} />
    //           <Route path="/SearchHospital" element={<SearchHospital />} />
    //           <Route path="/hospitaloveview" element={<HospitalOverview />} />
    //           <Route path="/PaymentDone" element={<PaymentDone />} />
    //           <Route path="/Submit" element={<Submit />} />
    //           <Route path="/HospitalDetails" element={<HospitalDetails />} />
    //         </Routes>
    //         {/* </div> */}
    //       </div>
    //     </Router>
    //   </AppProvider>
    // </HospitalProvider>

    <BrowserRouter>
      <HospitalProvider>
        <AppProvider>
          <AppContext>
            <div className="App">
              {/* <Topbar /> */}
              <Navbar />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/alldoctors" element={<AllDoctorsPage />} />
                <Route path="/forAppointments" element={<ForAppointments />} />
                {/* <Route path="/ConsultNow" element={<ConsultNow />} /> */}

                {/* <Route path="/specialities" element={<SpecialitiesPage />} /> */}
                <Route path="/specialist" element={<DocsOverview />} />
                <Route path="/medicines" element={<MedicinesPage />} />
                <Route
                  path="/medicines/shop_by_category/:id"
                  element={<ProductsByCategory />}
                />
                {/* <Route path="/buy-medicines/:id" element={<SingleMedicine />} /> */}
                <Route path="/medicines/cart" element={<AddtoCart />} />
                <Route
                  path="/medicines/order_history"
                  element={<OrderHistoryPage />}
                />

                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />

                <Route path="/*" element={<ErrorPage />} />
                <Route path="/faqs" element={<FaqsPage />} />
                <Route path="/aboutus" element={<AboutUsPage />} />
                <Route path="/privacypolicy" element={<PrivacyPolicyPage />} />
                <Route
                  path="/termsandconditions"
                  element={<TermsAndConditionsPage />}
                />
               {/* <Route path="/" element={<Home />} /> */}
               <Route path="/hospfilter" element={<HospFilter />} />
               <Route path="/hospmail" element={<HospMail />} />

                <Route path="/search-doc" element={<SearchDoc />} />
                <Route path="/docs-overview" element={<DocsOverview />} />
                <Route path="/appointments" element={<AppointmentDetails />} />
                <Route path="/filter" element={<Filter />} />
                <Route path="/ReviewDetails" element={<ReviewDetails />} />
                <Route path="/Submit" element={<Submit />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/CardPayment" element={<CardPayment />} />
                <Route path="/ConsultNow" element={<ConsultNow />} />
                <Route path="/SearchHospital" element={<SearchHospital />} />
                <Route path="/hospitaloverview" element={<HospitalOverview />} />
                <Route path="/PaymentDone" element={<PaymentDone />} />
                {/* <Route path="/Submit" element={<Submit />} /> */}
                <Route path="/HospitalDetails" element={<HospitalDetails />} />
                <Route path='/HospreviewDetails' element={<HospreviewDetails/>}/>
                {/* <Route path="/Submit" element={<Submit />} /> */}
              </Routes>
            </div>
            <Bot />
            {/* <GoToTop /> */}
            <Footer />
            <ToastContainer position="top-right" />
          </AppContext>
        </AppProvider>
      </HospitalProvider>
    </BrowserRouter>
  )
}

export default App
