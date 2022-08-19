import { FunctionComponent, ReactNode } from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

export type CategoryListProps = {
  selectedCategory: string;
  categoryList: {
    [key: string]: number;
  };
};

type CategoryItemProps = {
  active: boolean;
};

type GatsbyLinkProps = {
  children: ReactNode;
  className?: string;
  to: string;
} & CategoryItemProps;

const CategoryListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1080px;
  margin: 0 auto;
  padding: 40px 20px 0;
  background-color: white;
  border-radius: 10px 10px 0 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);

  @media (max-width: 1096px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    padding: 20px 20px 0;
  }
`;

const CategoryItem = styled(({ active, ...props }: GatsbyLinkProps) => (
  <Link {...props} />
))<CategoryItemProps>`
  margin-right: 20px;
  padding: 5px 0;
  font-size: 18px;
  font-weight: ${({ active }) => (active ? '800' : '400')};
  cursor: pointer;

  &:last-of-type {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const CategoryList: FunctionComponent<CategoryListProps> = function ({
  selectedCategory,
  categoryList,
}) {
  return (
    <CategoryListWrapper>
      {Object.entries(categoryList).map(([name, count]) => (
        <CategoryItem to={`/?category=${name}`} active={name === selectedCategory} key={name}>
          #{name}({count})
        </CategoryItem>
      ))}
    </CategoryListWrapper>
  );
};

export default CategoryList;
