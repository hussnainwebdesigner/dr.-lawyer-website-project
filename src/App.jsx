import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import SplashPage from './Auth/SplashPage/SplashPage'
import Login from './Auth/Login/Login'
import SignUp from './Auth/SignUp/SignUp'
import UploadLicense from './Auth/UploadLicense/UploadLicense'
import BankDetails from './Auth/BankDetails/BankDetails'
import Home from './Pages/Home/Home'
import Layout from './Components/Layout/Layout'
import History from './Pages/History/History'
import AllCases from './Pages/Home/AllCases/AllCases'
import CaseNote from './Pages/Home/CaseNote/CaseNote'
import PriorityCasesDetail from './Pages/Home/PriorityCasesDetail/PriorityCasesDetail'
import PriorityCasesSubmit from './Pages/Home/PriorityCasesDetail/PriorityCasesSubmit/PriorityCasesSubmit'
import Settings from './Pages/Settings/Settings'
import FranchisingRequest from './Pages/FranchisingRequest/FranchisingRequest'
import AboutUs from './Pages/AboutUs/AboutUs'
import MyProfile from './Pages/MyProfile/MyProfile'
import EditProfile from './Pages/MyProfile/EditProfile/EditProfile'
import Chats from './Pages/Chats/Chats'
import Notifications from './Pages/Notifications/Notifications'
import Request from './Pages/Request/Request'
import AllOffers from './Pages/Home/AllOffers/AllOffers'


const App = () => {



  return (
    <>
      <Routes>
        <Route path='/' element={<SplashPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/sign-up/upload-license' element={<UploadLicense />} />
        <Route path='/sign-up/bank-details' element={<BankDetails />} />
        <Route path='/settings/franchising-request' element={<FranchisingRequest />} />
        <Route element={<Layout />} >
          <Route path='/home' element={<Home />} />
          <Route path='/home/all-cases' element={<AllCases />} />
          <Route path='/home/all-offers' element={<AllOffers />} />
          <Route path='/home/case-note' element={<CaseNote />} />
          <Route path='/home/priority-cases-detail' element={<PriorityCasesDetail />} />
          <Route path='/home/priority-cases-submit' element={<PriorityCasesSubmit />} />
          <Route path='/history' element={<History />} />
          <Route path='/request' element={<Request />} />
          <Route path='/chat' element={<Chats />} />
          <Route path='/notification' element={<Notifications />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/settings/about-us' element={<AboutUs />} />
          <Route path='/settings/my-profile' element={<MyProfile />} />
          <Route path='/settings/edit-profile' element={<EditProfile />} />
        </Route>
      </Routes>
    </>
  )
}

export default App



