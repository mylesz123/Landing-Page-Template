import React from 'react';
import PropTypes from 'prop-types';

import ShowCase from '../Showcase';
import { Center } from '../../Components';

const Testimonials = ({ data = {} }) => (
  <ShowCase id="testimonials" title="What our clients say">
    {data
      ? data.map((d, i) => (
          <Center key={`${d.name}-${i}`}>
            <div className="testimonial">
              <div className="testimonial-image">
                <img src={d.img} alt="" />
              </div>
              <div className="testimonial-content">
                <p>"{d.text}"</p>
                <div className="testimonial-meta"> - {d.name} </div>
              </div>
            </div>
          </Center>
        ))
      : 'loading'}
  </ShowCase>
);

Testimonials.propTypes = {
  data: PropTypes.array,
};

export default Testimonials;
