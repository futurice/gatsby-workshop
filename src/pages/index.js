import React from "react";
import styled from "styled-components";
import Card from "../components/Card";

const HeroImage = styled.img`
  margin: 1rem 0;
`;

const PostCount = styled.h4`
  margin-bottom: 1rem;
  color: rgba(0, 0, 0, 0.4);
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 1px;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: auto;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
`;

export default ({ data }) => (
  <div>
    <PostCount>{data.allMarkdownRemark.totalCount} posts</PostCount>
    <CardGrid>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Card key={node.id} to={node.fields.slug} node={node} />
      ))}
    </CardGrid>
  </div>
);

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD.M.YYYY")
            thumbnailUrl
            tags
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
