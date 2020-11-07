import React, { useEffect, useState } from 'react';
import Navbar from './Main/Navbar';
import Header from './Main/Header';
import Features from './Main/Features';
import About from './Main/About';
import Services from './Main/Services';
import Gallery from './Main/Gallery';
import Testimonials from './Main/Testimonials';
import Team from './Main/Team';
import Contact from './Main/Contact';

import { initialData } from './data';

export default function App() {
  const [landingPageData, setLandingPageData] = useState(null);

  useEffect(() => {
    setLandingPageData(initialData);
  }, []);

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
  );
}
