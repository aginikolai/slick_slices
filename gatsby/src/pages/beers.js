import React from 'react';
import { graphql } from 'gatsby';

import Nav from '../components/Nav';

export default function BeersPage({ data }) {
  console.log(data);
  return (
    <div>
      <p>Hey I'm on beers page!!</p>
    </div>
  );
}

// export const query = graphql`
//   query {
//     beers: allBeer {
//       nodes {
//         id
//         name
//         price
//         image
//         rating {
//           average
//           reviews
//         }
//       }
//     }
//   }
// `;