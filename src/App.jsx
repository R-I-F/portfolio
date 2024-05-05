import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import PortfolioPage from './pages/PortfolioPage';
import Navigation from './components/Navigation';
export default function App(){
  const [selectedPage, setSelectedPage] = React.useState(1);
    return(
      <>
        <BrowserRouter>
            <Routes>
                <Route element = {
                  <Navigation
                  selectedPage = {selectedPage}/>
                }>
                    <Route path='/' element = {
                      <PortfolioPage
                      selectedPage = {selectedPage}
                      setSelectedPage = {setSelectedPage}/>
                    }/>
                </Route>
            </Routes>
        </BrowserRouter>
      </>
    )
}
