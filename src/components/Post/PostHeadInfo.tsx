import { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export type PostHeadInfoProps = {
  title: string;
  date: string;
  categories: string[];
};

const PostHeadInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1080px;
  height: 100%;
  margin: 0 auto;
  padding: 60px 20px;
  color: #ffffff;

  @media (max-width: 1096px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const PrevPageIcon = styled.div`
  display: grid;
  place-items: center;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background: #ffffff;
  color: #000000;
  font-size: 30px;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 22px;
  }
`;

const Title = styled.div`
  display: -webkit-box;
  overflow: hidden;
  overflow-wrap: break-word;
  margin-top: auto;
  text-overflow: ellipsis;
  white-space: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 50px;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const PostData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  font-size: 22px;
  font-weight: 500;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    font-size: 16px;
    font-weight: 400;
  }
`;

const PostHeadInfo: FunctionComponent<PostHeadInfoProps> = function ({ title, date, categories }) {
  const goBackPage = () => window.history.back();

  return (
    <PostHeadInfoWrapper>
      <PrevPageIcon onClick={goBackPage}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </PrevPageIcon>
      <Title>{title}</Title>
      <PostData>
        <div>{categories.join(' / ')}</div>
        <div>{date}</div>
      </PostData>
    </PostHeadInfoWrapper>
  );
};

export default PostHeadInfo;
