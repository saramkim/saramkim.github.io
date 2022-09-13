import { FunctionComponent, useState } from 'react';
import styled from '@emotion/styled';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import ProfileImage from 'components/Main/ProfileImage';
import { GoMarkGithub } from 'react-icons/go';
import { Link } from 'gatsby';
import { ImMail4 } from 'react-icons/im';

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

const MoreInfo = styled.div`
  position: absolute;
  right: 20px;
  font-size: 50px;
  width: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 40px;
    width: 90px;
  }
`;

const MailIcon = styled.div`
  cursor: pointer;
`;

const ToastPopup = styled.div`
  position: absolute;
  left: -230px;
  top: 0;
  // color: black;
  background: black;
  padding: 5px;
  border-radius: 5px;
  font-size: 18px;
  @media (max-width: 768px) {
    left: -190px;
    font-size: 15px;
  }
`;

const Introduction: FunctionComponent<IntroductionProps> = function ({ profileImage }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleMailClickEvent = () => {
    navigator.clipboard.writeText('saramkimm@gmail.com').then(() => {
      setIsClicked(true);
      setTimeout(() => {
        setIsClicked(false);
      }, 1500);
    });
  };

  return (
    <Background>
      <Wrapper>
        <ProfileImage profileImage={profileImage} />
        <div>
          <SubTitle>개발하는 개발자</SubTitle>
          <Title>김사람</Title>
        </div>
        <MoreInfo>
          {isClicked && (
            <ToastPopup>
              saramkimm@gmail.com<br></br>클립보드에 복사되었습니다
            </ToastPopup>
          )}
          <MailIcon>
            <ImMail4 onClick={handleMailClickEvent} />
          </MailIcon>
          <Link to={'https://github.com/saramkim'}>
            <GoMarkGithub />
          </Link>
        </MoreInfo>
      </Wrapper>
    </Background>
  );
};

export default Introduction;
