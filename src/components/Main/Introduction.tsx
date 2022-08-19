import { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import ProfileImage from 'components/Main/ProfileImage';
import { GoMarkGithub } from 'react-icons/go';
import { Link } from 'gatsby';

type IntroductionProps = {
  profileImage: IGatsbyImageData;
};

const Background = styled.div`
  width: 100%;
  color: #ffffff;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 1080px;
  height: 300px;
  margin: 50px auto 0;
  padding: 0 20px;

  @media (max-width: 1096px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    height: 200px;
  }
`;

const SubTitle = styled.div`
  font-size: 22px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Title = styled.div`
  font-size: 35px;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

const MoreInfo = styled(Link)`
  position: absolute;
  right: 20px;
  font-size: 50px;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

const Introduction: FunctionComponent<IntroductionProps> = function ({ profileImage }) {
  return (
    <Background>
      <Wrapper>
        <ProfileImage profileImage={profileImage} />

        <div>
          <SubTitle>개발하는 개발자</SubTitle>
          <Title>김사람</Title>
        </div>
        <MoreInfo to={'https://github.com/saramkim'}>
          <GoMarkGithub />
        </MoreInfo>
      </Wrapper>
    </Background>
  );
};

export default Introduction;
