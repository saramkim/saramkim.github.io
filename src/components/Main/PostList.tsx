import { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import PostItem from 'components/Main/PostItem';
import { PostListItemType } from 'types/PostItem.types';
import useInfiniteScroll, { useInfiniteScrollType } from 'hooks/useInfiniteScroll';

type PostListProps = {
  selectedCategory: string;
  posts: PostListItemType[];
};

const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, calc(1000px / 3));
  grid-gap: 20px;
  width: 1080px;
  margin: 0 auto;
  padding: 72px 20px;
  background-color: white;
  border-radius: 0 0 10px 10px;

  @media (max-width: 1096px) {
    grid-template-columns: 1fr 1fr;
    width: 100%;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 48px 20px;
  }
`;

const PostList: FunctionComponent<PostListProps> = function ({ selectedCategory, posts }) {
  const { containerRef, postList }: useInfiniteScrollType = useInfiniteScroll(
    selectedCategory,
    posts
  );

  return (
    <PostListWrapper ref={containerRef}>
      {postList.map(
        ({
          node: {
            id,
            fields: { slug },
            frontmatter,
          },
        }: PostListItemType) => (
          <PostItem {...frontmatter} link={slug} key={id} />
        )
      )}
    </PostListWrapper>
  );
};

export default PostList;
