import React, { useEffect, useState } from 'react';
import {
  About,
  Contact,
  Features,
  Gallery,
  Header,
  Navbar,
  Services,
  Team,
  Testimonials,
} from './Main';

import { Footer } from './BsComponents';

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
          <Header data={landingPageData.header} />
          <Features data={landingPageData.features} />
          <About data={landingPageData.about} />
          <Services data={landingPageData.services} />
          <Gallery />
          <Testimonials data={landingPageData.testimonials} />
          <Team data={landingPageData.team} />
          <Contact
            data={landingPageData.contact}
            description="Please fill out the form below to send us an email and we will get
          back to you as soon as possible."
          />
        </>
      )}
      <Footer />
    </div>
  );
}
