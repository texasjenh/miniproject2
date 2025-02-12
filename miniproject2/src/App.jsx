import { useState } from 'react'
import './App.css'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './pages/header'
import Navbar from './pages/navbar'
import AllBooks from './pages/AllBooks'
import AboutUs from './pages/AboutUs'
import Footer from './pages/footer'
import EmailForm from './pages/EmailList'
import HomePage from './pages/HomePage'
import SubscribeForm from './components/Subscribe'




function App() {
  return (
      // <BrowserRouter>
      //   <Routes>
      //     <Route path="/" element={<Header />}>
      //       <Route index element={<HomePage />}/>
      //       <Route path="AllBooks" element={<AllBooks />} />
      //       <Route path="AboutUs" element={<AboutUs />} />
      //     </Route>
      //   </Routes>
      // </BrowserRouter>
        
    <div className="App">
        <Header />
        <Navbar />
        <br />
        <HomePage />
          {/* <EmailForm /> */}
        <AllBooks/>
        <AboutUs />
        <br />
        <Footer />

    </div>
  )
}

export default App

