import React from 'react';
import PropTypes from 'prop-types';

import cx from 'classnames';
import { Form, SocialLinks } from '../../BsComponents';
import { Center, Divider, FlexLayout, Grid } from '../../Components';

import styles from './styles.module.css';

const ContactItemContainer = ({ children, heading = '' }) => (
  <div className="contact-item">
    <h3 className={styles.contactItemHeading}>{heading || null}</h3>
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

const Contact = ({ data = {}, heading = 'Contact Us', description }) => (
  <FlexLayout id="contact">
    <Center
      className={cx('section-title', styles.sectionWrapper)}
      totallyCentered
    >
      <h2>{heading}</h2>
      {description ? (
        <p>
          Please fill out the form below to send us an email and we will get
          back to you as soon as possible.
        </p>
      ) : null}
      <Divider size="large" />
      <Grid gap={3}>
        <Form id="contactForm" name="sentMessage" />

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
      </Grid>
    </Center>

    <Grid fullWidth>
      <SocialLinks links={['twitter', 'facebook', 'youtube']} />
    </Grid>
  </FlexLayout>
);

Contact.propTypes = {
  data: PropTypes.object,
  description: PropTypes.string,
  heading: PropTypes.string,
};

export default Contact;

// OLD LAYOUT

// const ContactItemContainer = ({ children, heading = '' }) => (
// <div className="contact-item">
//   <h3>{heading || null}</h3>
//   {children}
// </div>
// );

// const Contact = ({ data = {} }) => (
//   <div id="contact">
//     <Container hasRow={false}>
//       <div className="col-md-8">
//         <Container showRowOnly>
//           <div className="section-title">
//             <h2>Get In Touch</h2>
//             <p>
//               Please fill out the form below to send us an email and we will get
//               back to you as soon as possible.
//             </p>
//           </div>

//           <Form />
//         </Container>
//       </div>

//       <div className="col-md-3 col-md-offset-1 contact-info">
//         <ContactItemContainer heading="Contact Info">
//           <ContactItem
//             {...{
//               data,
//               itemType: 'Address',
//               icon: <i className="fa fa-map-marker" />,
//             }}
//           />
//           <ContactItem
//             {...{
//               data,
//               itemType: 'Phone',
//               icon: <i className="fa fa-phone" />,
//             }}
//           />
//           <ContactItem
//             {...{
//               data,
//               itemType: 'Email',
//               icon: <i className="fa fa-envelope-o" />,
//             }}
//           />
//         </ContactItemContainer>
//       </div>

//       <div className="col-md-12">
//         <SocialLinks links={['twitter', 'facebook', 'youtube']} />
//       </div>
//     </Container>
//   </div>
// );
