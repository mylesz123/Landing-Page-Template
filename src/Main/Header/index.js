import React from 'react';
import PropTypes from 'prop-types';

import cx from 'classnames';
import { Button } from '../../BsComponents';
import { Center, FlexLayout, Grid } from '../../Components';
import styles from './styles.module.css';

const Header = ({ title = 'Landing Page', paragraph, nextSectionName }) => (
  <header id="header">
    <div className="intro">
      <FlexLayout className="overlay">
        <Grid className={cx('intro-text', styles.grid)}>
          <h1>{title}</h1>
          <p>{paragraph || null}</p>
          <Center>
            <Button
              href={`#${nextSectionName}`}
              className="btn btn-custom btn-lg page-scroll"
            >
              Learn More
            </Button>
          </Center>
        </Grid>
      </FlexLayout>
    </div>
  </header>
);
// const Header = ({ title = 'Landing Page', paragraph, nextSectionName }) => (
//   <header id="header">
//     <div className="intro">
//       <div className="overlay">
//         <Container>
//           <Center className="intro-text">
//             <h1>{title}</h1>
//             <p>{paragraph || null}</p>
//             <Button
//               href={`#${nextSectionName}`}
//               className="btn btn-custom btn-lg page-scroll"
//             >
//               Learn More
//             </Button>
//           </Center>
//         </Container>
//       </div>
//     </div>
//   </header>
// );

Header.propTypes = {
  nextSectionName: PropTypes.string,
  paragraph: PropTypes.string,
  title: PropTypes.string,
};

export default Header;
