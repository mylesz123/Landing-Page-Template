import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../BsComponents';

const Navbar = ({ links, title }) => (
  <nav id="menu" className="navbar navbar-default navbar-fixed-top">
    <div className="container">
      <div className="navbar-header">
        <Button
          className="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#bs-example-navbar-collapse-1"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" /> <span className="icon-bar" />
          <span className="icon-bar" />
        </Button>
        <a className="navbar-brand page-scroll" href="#page-top">
          {title}
        </a>
      </div>

      <div
        className="collapse navbar-collapse"
        id="bs-example-navbar-collapse-1"
      >
        <ul className="nav navbar-nav navbar-right">
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="page-scroll">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </nav>
);

Navbar.propTypes = {
  links: PropTypes.array,
  title: PropTypes.string,
};

export default Navbar;
