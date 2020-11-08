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

import { NAV_LINKS } from './constants';

export default function App() {
  const [landingPageData, setLandingPageData] = useState(null);

  useEffect(() => {
    setLandingPageData(initialData);
  }, []);

  return (
    <div>
      <Navbar links={NAV_LINKS} title="Landing Page" />
      {landingPageData && (
        <>
          <Header
            title="Landing Page"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum."
            nextSectionName="features"
          />
          <Features data={landingPageData.Features} />
          <About data={landingPageData.About} />
          <Services data={landingPageData.Services} />
          <Gallery />
          <Testimonials data={landingPageData.Testimonials} />
          <Team data={landingPageData.Team} />
          <Contact
            data={landingPageData.Contact}
            description="Please fill out the form below to send us an email and we will get
          back to you as soon as possible."
          />
        </>
      )}
      <Footer />
    </div>
  );
}
