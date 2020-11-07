import React from 'react';
import PropTypes from 'prop-types';

import ShowCase from '../Showcase';

import { Center } from '../../Components';

const Features = ({ data = [] }) => (
  <ShowCase id="features" title="Features">
    {data
      ? data.map((d, i) => (
          <Center key={`${d.title}-${i}`}>
            <i className={d.icon} />
            <h3>{d.title}</h3>
            <p>{d.text}</p>
          </Center>
        ))
      : 'Loading...'}
  </ShowCase>
);

Features.propTypes = {
  data: PropTypes.array,
};

export default Features;
