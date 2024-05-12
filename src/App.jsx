import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import PortfolioPage from './pages/PortfolioPage';
import ProjectsPage from './pages/ProjectsPage';
import SingleProjectPage from './pages/SingleProjectPage';
import Navigation from './components/Navigation';

export default function App(){
  const [homepageSection, setHomepageSection] = React.useState(1);
  const [clicked, setIsClicked] = React.useState(false);

    return(
      <>
        <BrowserRouter>
            <Routes>
                <Route element = {
                  <Navigation
                  homepageSection = {homepageSection}
                  clicked = {clicked}
                  setIsClicked = {setIsClicked}/>
                }>
                    <Route path='/' element = {
                      <PortfolioPage
                      homepageSection = {homepageSection}
                      setHomepageSection = {setHomepageSection}/>
                    }/>
                    <Route path='/projects' element = {
                      <ProjectsPage 
                      clicked = {clicked}
                      setIsClicked = {setIsClicked}/>
                    }/>
                    <Route path='/projects/:id' element = {
                      <SingleProjectPage />
                    }/>
                </Route>
            </Routes>
        </BrowserRouter>
      </>
    )
}
