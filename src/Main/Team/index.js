import React from 'react';
import PropTypes from 'prop-types';

import ShowCase from '../Showcase';

import { FlexLayout, Grid } from '../../Components';

const Team = ({ data = {} }) => (
  <ShowCase
    shouldCenter={false}
    id="team"
    title="Meet the Team"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
          dapibus leonec."
  >
    <FlexLayout>
      {data
        ? data.map((d, i) => (
            <div key={`${d.name}-${i}`}>
              <Grid
                className="thumbnail"
                style={{
                  gridTemplateColumns: 'auto',
                }}
              >
                <img src={d.img} alt="..." className="team-img" />
                <div className="caption">
                  <h4>{d.name}</h4>
                  <p>{d.job}</p>
                </div>
              </Grid>
            </div>
          ))
        : 'loading'}
    </FlexLayout>
  </ShowCase>
);

// const Team = ({ data = {} }) => (
//   <div id="team" className="text-center">
//     <div className="container">
//       <div className="col-md-8 col-md-offset-2 section-title">
//         <h2>Meet the Team</h2>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
//           dapibus leonec.
//         </p>
//       </div>
//       <div id="row">
//         {data
//           ? data.map((d, i) => (
//               <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
//                 <div className="thumbnail">
//                   <img src={d.img} alt="..." className="team-img" />
//                   <div className="caption">
//                     <h4>{d.name}</h4>
//                     <p>{d.job}</p>
//                   </div>
//                 </div>
//               </div>
//             ))
//           : 'loading'}
//       </div>
//     </div>
//   </div>
// );

Team.propTypes = {
  data: PropTypes.array,
};

export default Team;
