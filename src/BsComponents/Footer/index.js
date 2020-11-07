import React from 'react';
// import PropTypes from 'prop-types';
import Container from '../Container';

const Footer = () => (
  <div id="footer">
    <Container className="text-center" hasRow={false}>
      <p>
        &copy; 2020 Issaaf Kattan React Land Page Template. Design by
        <a href="http://www.templatewire.com" rel="nofollow">
          TemplateWire
        </a>
      </p>
    </Container>
  </div>
);

Footer.propTypes = {};

export default Footer;
