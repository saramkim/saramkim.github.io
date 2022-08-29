import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { FunctionComponent } from 'react';
import { PageContext } from 'templates/post_template';

const PostFootWrapper = styled.div`
  width: 1080px;
  margin: 0 auto;
  padding: 10px;
  background: white;

  @media (max-width: 1096px) {
    width: 100%;
  }
`;

const NextPost = styled(Link)`
  width: 300px;
  text-align: left;
  float: left;
  background: rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
  margin-left: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);

  &:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    width: 260px;
    padding: 15px;
    border-radius: 8px;
  }
`;

const PreviousPost = styled(Link)`
  width: 300px;
  text-align: right;
  float: right;
  background: rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
  margin-right: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);

  &:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  }
  @media (max-width: 768px) {
    width: 260px;
    padding: 15px;
    border-radius: 8px;
  }
`;

const Title = styled.div`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  margin-bottom: 0.2em;
  font-size: 20px;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
const SubTitle = styled.div`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.6);

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const PostFoot: FunctionComponent<PageContext> = ({ next, prev }) => {
  return (
    <PostFootWrapper>
      {next && (
        <NextPost to={next.fields.slug}>
          <Title>{next.frontmatter.title}</Title>
          <SubTitle>← 다음 글</SubTitle>
        </NextPost>
      )}
      {prev && (
        <PreviousPost to={prev.fields.slug}>
          <Title>{prev.frontmatter.title}</Title>
          <SubTitle>이전 글 →</SubTitle>
        </PreviousPost>
      )}
    </PostFootWrapper>
  );
};

export default PostFoot;
