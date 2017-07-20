import * as React from 'react'
import { graphql, gql } from "react-apollo";

const enhance = graphql(gql`
  query someQuery { 
    someProp
  }
`, {
  props: {
    test: ({mutate}) => {
      
    },
  }
})

export const View = ({data}) =>
  <div></div>

export const Test = enhance(View)