import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
const Test  = ()=> (
  <Query
    query={gql`
    {
        movies{
          id
          name
          
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
        console.log(data, 'ini data')
      return data;
    }}
  </Query>
);
export default Test;