import React from 'react';
import PropTypes from 'prop-types';

import { Container, SocialLinks } from '../../BsComponents';

const ContactItemContainer = ({ children, heading = '' }) => (
  <div className="contact-item">
    <h3>{heading || null}</h3>
    {children}
  </div>
);

ContactItemContainer.propTypes = {
  children: PropTypes.node,
  heading: PropTypes.string,
};

const ContactItem = ({ data = {}, itemType = '', icon }) => (
  <p>
    <span>
      {icon || null} {itemType}
    </span>
    {data[itemType.toLowerCase()] ?? 'loading'}
  </p>
);

ContactItem.propTypes = {
  data: PropTypes.object,
  icon: PropTypes.node,
  itemType: PropTypes.string,
};

const Contact = ({ data = {} }) => (
  <div id="contact">
    <Container hasRow={false}>
      <div className="col-md-8">
        <Container showRowOnly>
          <div className="section-title">
            <h2>Get In Touch</h2>
            <p>
              Please fill out the form below to send us an email and we will get
              back to you as soon as possible.
            </p>
          </div>
          <form name="sentMessage" id="contactForm" noValidate>
            <Container showRowOnly>
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder="Name"
                    required="required"
                  />
                  <p className="help-block text-danger" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Email"
                    required="required"
                  />
                  <p className="help-block text-danger" />
                </div>
              </div>
            </Container>
            <div className="form-group">
              <textarea
                name="message"
                id="message"
                className="form-control"
                rows="4"
                placeholder="Message"
                required
              />
              <p className="help-block text-danger" />
            </div>
            <div id="success" />
            <button type="submit" className="btn btn-custom btn-lg">
              Send Message
            </button>
          </form>
        </Container>
      </div>

      <div className="col-md-3 col-md-offset-1 contact-info">
        <ContactItemContainer heading="Contact Info">
          <ContactItem
            {...{
              data,
              itemType: 'Address',
              icon: <i className="fa fa-map-marker" />,
            }}
          />
          <ContactItem
            {...{
              data,
              itemType: 'Phone',
              icon: <i className="fa fa-phone" />,
            }}
          />
          <ContactItem
            {...{
              data,
              itemType: 'Email',
              icon: <i className="fa fa-envelope-o" />,
            }}
          />
        </ContactItemContainer>
      </div>

      <div className="col-md-12">
        <SocialLinks links={['twitter', 'facebook', 'youtube']} />
      </div>
    </Container>
  </div>
);

Contact.propTypes = {
  data: PropTypes.object,
};

export default Contact;
