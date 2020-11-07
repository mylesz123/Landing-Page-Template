import React from 'react';
import PropTypes from 'prop-types';

import { Container } from '../../BsComponents';
import { Center } from '../../Components';

const Header = ({ data = {} }) => (
  <header id="header">
    <div className="intro">
      <div className="overlay">
        <Container>
          <Center className="intro-text">
            <h1>{data ? data.title : 'Loading'}</h1>
            <p>{data ? data.paragraph : 'Loading'}</p>
            <a href="#features" className="btn btn-custom btn-lg page-scroll">
              Learn More
            </a>
          </Center>
        </Container>
      </div>
    </div>
  </header>
);
// const Header = ({ data = {} }) => (
//   <header id="header">
//     <div className="intro">
//       <div className="overlay">
//         <Container>
//           {/* type, size, classname */}
//           <div className="col-md-8 col-md-offset-2 intro-text">
//             <h1>
//               {data ? data.title : 'Loading'}
//               <span />
//             </h1>
//             <p>{data ? data.paragraph : 'Loading'}</p>
//             <a href="#features" className="btn btn-custom btn-lg page-scroll">
//               Learn More
//             </a>
//           </div>
//         </Container>
//       </div>
//     </div>
//   </header>
// );

Header.propTypes = {
  data: PropTypes.object,
};

export default Header;
