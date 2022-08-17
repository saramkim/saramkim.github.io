import { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const Background = styled.div`
  width: 100%;
  color: white;
  position: fixed;
  z-index: 10;

  background: #1c4470;
  background: -moz-linear-gradient(left, #1c4470 0%, #42a2bf 100%);
  background: -webkit-linear-gradient(left, #1c4470 0%, #42a2bf 100%);
  background: linear-gradient(to right, #1c4470 0%, #42a2bf 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1c4470', endColorstr='#42a2bf',GradientType=1 );
`

const Wrapper = styled.div`
  width: 1080px;
  height: 50px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1096px) {
    width: 100%;
  }
`

const Title = styled(Link)`
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`

const Buttons = styled.div`
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`

const Navbar: FunctionComponent = function () {
  return (
    <Background>
      <Wrapper>
        <Title to={'/'}>김사람 블로그</Title>
        <Buttons>@</Buttons>
      </Wrapper>
    </Background>
  )
}

export default Navbar
