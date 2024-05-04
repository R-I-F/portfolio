import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import PortfolioPage from './pages/PortfolioPage';
import Navigation from './components/Navigation';
export default function App(){
    
    return(
      <>
        <BrowserRouter>
            <Routes>
                <Route element = {<Navigation/>}>
                    <Route path='/' element ={<PortfolioPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
      </>
    )
}
