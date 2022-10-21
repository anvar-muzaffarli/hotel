import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import './App.css'
import Carousel from './components/Carousel'
import FastReport from './components/FastReport'
import Introsection from './components/Introsection'
import Navbar from './components/Navbar'
import ReserManagement from './components/ReserManagement'
import Countsection from './components/Countsection'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Download from './components/Download'

import Footer from './components/Footer'


const App = () => {
  return (
  
    <BrowserRouter>
     <Navbar />

     <Routes>
      <Route path='/hotel' exact element={<Introsection />} />
     {/* <Introsection /> */}
     <Route path='/hotel/market-research' element={<Carousel />} />
     {/* <Carousel /> */}

     <Route path='/hotel/reserved' element={<ReserManagement />} />
     {/* <ReserManagement />
     <FastReport />
     <Countsection />

     <Download /> */}

     <Route path='/hotel/fastreport' element={<FastReport />} />
     <Route path='/hotel/countsection' element={<Countsection />} />
     <Route path='/hotel/download' element={<Download />} />
     </Routes>
     <Footer />
     </BrowserRouter>
     

     
     
  
  )
}

export default App