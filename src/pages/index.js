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

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: auto;
`;

const Card = styled(Link)`
  margin-right: 1rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: #333;
  transition: 0.1s all;

  &:hover {
    transform: scale(1.02);
  }
`;

const CardImage = styled.div`
  position: relative;
  z-index: 10;
  height: 10rem;
  background-size: cover;
  background-position: 50% 50%;
  border-radius: 5px 5px 0 0;
`;

const CardContent = styled.div`
  padding: 1rem;
`;

const PostHeader = styled.h3`
  position: absolute;
  z-index: 20;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  color: white;

  &:after {
    content: "";
    position: absolute;
    z-index: -1;
    bottom: 0;
    left: 0;
    right: 0;
    height: 5rem;
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0)
    );
  }
`;

const PostDate = styled.small`
  font-size: 12px;
`;

const PostExcerpt = styled.p`
  margin-bottom: 0.5rem;
  font-size: 14px;
`;

const PostMeta = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const PostTags = styled.span`
  display: inline-block;
  padding: 0.2rem 0.5rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: bold;
  background: #e74c3c;
  color: white;
  border-radius: 20px;
`;

export default ({ data }) => (
  <div>
    <PostCount>{data.allMarkdownRemark.totalCount} posts</PostCount>
    <CardGrid>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Card key={node.id} to={node.fields.slug}>
          <CardImage
            style={{
              backgroundImage: `url(${node.frontmatter.thumbnailUrl})`
            }}
          >
            <PostHeader>{node.frontmatter.title}</PostHeader>
          </CardImage>
          <CardContent>
            <PostMeta>
              <PostDate>{node.frontmatter.date}</PostDate>
              <PostTags>{node.frontmatter.tags}</PostTags>
            </PostMeta>
            <PostExcerpt>{node.excerpt}</PostExcerpt>
          </CardContent>
        </Card>
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
