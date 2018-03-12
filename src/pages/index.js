import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import headerImage from "../static/images/header.jpg";

const HeroImage = styled.img`
  margin: 1rem 0;
`;

const PostCount = styled.h4`
  margin: 0;
`;

const PostHeader = styled.h3`
  margin-bottom: 0;
`;

export default ({ data }) => (
  <div>
    <HeroImage src={headerImage} alt="Hero Image" />
    <PostCount>{data.allMarkdownRemark.totalCount} posts</PostCount>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <Link to={node.fields.slug}>
          <PostHeader>{node.frontmatter.title}</PostHeader>
        </Link>
        <small>{node.frontmatter.date}</small>
        <p>{node.excerpt}</p>
      </div>
    ))}
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
