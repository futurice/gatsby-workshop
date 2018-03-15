import React from "react";
import styled from "styled-components";

const PostImage = styled.div`
  margin: 2rem 0 1rem 0;
  width: 100%;
  height: 20rem;
  position: relative;
  z-index: 10;
  background-size: cover;
  background-position: 50% 50%;
`;

const PostHeader = styled.h1`
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

const PostMeta = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const PostDate = styled.small`
  font-size: 12px;
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

const MainContent = styled.div`
  p {
    margin-bottom: 1rem;
    line-height: 150%;
    font-size: 18px;
  }
`;

export default ({ data }) => {
  const post = data.markdownRemark;

  return (
    <div>
      <PostImage
        style={{
          backgroundImage: `url(${post.frontmatter.thumbnailUrl})`
        }}
      >
        <PostHeader>{post.frontmatter.title}</PostHeader>
      </PostImage>
      <PostMeta>
        <PostDate>{post.frontmatter.date}</PostDate>
        <PostTags>{post.frontmatter.tags}</PostTags>
      </PostMeta>
      <MainContent dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
};

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        thumbnailUrl
        tags
        date(formatString: "DD.M.YYYY")
      }
    }
  }
`;
