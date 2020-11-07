import React from 'react';
import PropTypes from 'prop-types';
import Container from '../Container';

const SocialLink = ({ value }) => (
  <li>
    <a href={value ?? '/'}>
      <i className={`fa fa-${value}`} />
    </a>
  </li>
);

SocialLink.propTypes = {
  value: PropTypes.string,
};

const SocialLinks = ({ links = [] }) => (
  <Container showRowOnly>
    <div className="social">
      <ul>
        {links
          ? links.map((value) => <SocialLink key={value} value={value} />)
          : null}
      </ul>
    </div>
  </Container>
);

SocialLinks.propTypes = {
  links: PropTypes.arrayOf(PropTypes.oneOf(['twitter', 'facebook', 'youtube'])),
};

export default SocialLinks;
