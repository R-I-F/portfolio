import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import PortfolioPage from './pages/PortfolioPage';
import ProjectsPage from './pages/ProjectsPage';
import SingleProjectPage from './pages/SingleProjectPage';
import Navigation from './components/Navigation';
import StudiesPage from './pages/StudiesPage';



export default function App(){
  const [homepageSection, setHomepageSection] = React.useState(1);
  
    return(
      <>
        <BrowserRouter>
            <Routes>
                <Route element = {
                  <Navigation
                  homepageSection = {homepageSection}/>
                }>
                    <Route path='/' element = {
                      <PortfolioPage
                      homepageSection = {homepageSection}
                      setHomepageSection = {setHomepageSection}/>
                    }/>
                    <Route path='/projects' element = {
                      <ProjectsPage />
                    }/>
                    <Route path='/projects/:id' element = {
                      <SingleProjectPage />
                    }/>
                    <Route path='/studies' element = {
                      <StudiesPage />
                    }/>
                </Route>
            </Routes>
        </BrowserRouter>
      </>
    )
}
