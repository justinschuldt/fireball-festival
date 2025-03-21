import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Gallery from 'components/gallery';
import Item from 'components/gallery/item';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const FeatureContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 4rem;
  padding: 0 4rem;
  margin: 2rem 0;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;

  ${MEDIA.TABLET`
    display: block;
  `};
`;

const Index = ({ data }) => (
  <Layout>
    <Box>
      <Title as="h2" size="large">
        {data.homeJson.content.childMarkdownRemark.rawMarkdownBody}
      </Title>
    </Box>
    <Gallery items={data.homeJson.gallery} />
    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.homeJson.body.childMarkdownRemark.html,
        }}
      />
    </Box>

    {data.homeJson.featureGallery &&
    data.homeJson.featureGallery.length == 1 ? (
      <FeatureContainer>
        <Item {...data.homeJson.featureGallery[0]}></Item>
      </FeatureContainer>
    ) : null}
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      body {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      gallery {
        title
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      featureGallery {
        title
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
