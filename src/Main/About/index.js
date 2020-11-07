import React from 'react';
import PropTypes from 'prop-types';

import { Container } from '../../BsComponents';

const About = ({ data = {} }) => (
  <div id="about">
    <Container>
      <div className="col-xs-12 col-md-6">
        <img src="img/about.jpg" className="img-responsive" alt="" />
      </div>
      <div className="col-xs-12 col-md-6">
        <div className="about-text">
          <h2>About Us</h2>
          <p>{data ? data.paragraph : 'loading...'}</p>
          <h3>Why Choose Us?</h3>
          <div className="list-style">
            <div className="col-lg-6 col-sm-6 col-xs-12">
              <ul>
                {data
                  ? data.why.map((d, i) => <li key={`${d}-${i}`}>{d}</li>)
                  : 'loading'}
              </ul>
            </div>
            <div className="col-lg-6 col-sm-6 col-xs-12">
              <ul>
                {data
                  ? data.why2.map((d, i) => <li key={`${d}-${i}`}> {d}</li>)
                  : 'loading'}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </div>
);

About.propTypes = {
  data: PropTypes.object,
};

export default About;
