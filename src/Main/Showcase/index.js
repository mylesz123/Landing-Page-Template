import React from 'react';
import PropTypes from 'prop-types';

// import { Container } from '../../BsComponents';
import { Grid, Center } from '../../Components';

const ShowCase = ({
  id = '',
  children,
  description,
  fullWidth = false,
  title = 'Title',
  shouldCenter = true,
}) => (
  <Center id={id} className="text-center" totallyCentered>
    <div className=" section-title">
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
    {shouldCenter ? (
      <Center totallyCentered>
        <Grid {...{ fullWidth }}>{children}</Grid>
      </Center>
    ) : (
      <Grid>{children}</Grid>
    )}
  </Center>
);

// const ShowCase = ({ id = '', children, title = 'Title' }) => (
//   <div id={id} className="text-center">
//     <Container hasRow={false}>
//       <div className="col-md-10 col-md-offset-1 section-title">
//         <h2>{title}</h2>
//       </div>
//       <Container showRowOnly>{children || 'loading...'}</Container>
//     </Container>
//   </div>
// );

ShowCase.propTypes = {
  children: PropTypes.node,
  description: PropTypes.string,
  fullWidth: PropTypes.bool,
  id: PropTypes.string,
  shouldCenter: PropTypes.bool,
  title: PropTypes.string,
};

export default ShowCase;
