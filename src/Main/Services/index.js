import React from 'react';
import PropTypes from 'prop-types';

import { Center } from '../../Components';
import ShowCase from '../Showcase';

const Services = ({ data = [] }) => (
  <ShowCase id="services" title="Services">
    {data
      ? data.map((d, i) => (
          <Center key={`${d.name}-${i}`}>
            <i className={d.icon} />
            <div className="service-desc">
              <h3>{d.name}</h3>
              <p>{d.text}</p>
            </div>
          </Center>
        ))
      : 'loading...'}
  </ShowCase>
);

Services.propTypes = {
  data: PropTypes.array,
};

export default Services;
