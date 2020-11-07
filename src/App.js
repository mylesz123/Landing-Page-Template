import React, {useEffect, useState} from 'react'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Features from './components/Features';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Contact from './components/Contact';

import {initialData} from './data';

export default function App() {
  const [landingPageData, setLandingPageData] = useState(null);

  useEffect(() => {
    setLandingPageData(initialData);
  }, [landingPageData]);

    
    return (
      <div>
        <Navbar />
        {landingPageData && (
          <>
          
          <Header data={landingPageData.Header} />
          <Features data={landingPageData.Features} />
          <About data={landingPageData.About} />
          <Services data={landingPageData.Services} />
          <Gallery />
          <Testimonials data={landingPageData.Testimonials} />
          <Team data={landingPageData.Team} />
          <Contact data={landingPageData.Contact} />
          </>

        )}
      </div>
    )
}

