// import { useState } from "react"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './assets/pages/home'
import AddContact from './assets/pages/addContact'
import Contact from './assets/pages/conatct'

import Header from './assets/components/Header/Header'

function App() {
   return (
      <>
         <Router>
            <Header />
            <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/contact-list' element={<Contact />} />
               <Route path='/add-contact' element={<AddContact />} />
               <Route path='*' element={<Contact />} />
            </Routes>
         </Router>
      </>
   )
}

export default App
