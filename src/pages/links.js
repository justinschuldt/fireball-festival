import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';

const Links = ({ data }) => (
  <Layout>
    <Head pageTitle={data.linksJson.title} />
    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.linksJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
  </Layout>
);

Links.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Links;

export const query = graphql`
  query LinksQuery {
    linksJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
