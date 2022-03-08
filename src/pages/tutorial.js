import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

const TutorialPage = ({ data }) => {
  return (
    <Layout pageTitle="Tutorials">
      {
          data.allFile.nodes.map(node => (
          <li key={node.name}>{node.name}</li>))
      }
    </Layout>
  );
}

  export const query = graphql`
    query {
      allFile {
        nodes {
          name
        }
      }
    }
  `

export default TutorialPage;
