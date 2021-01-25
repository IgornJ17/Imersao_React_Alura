import styled from 'styled-components'
import db from "../db.json";
import Widget from "../src/components/Widget/index"

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;
const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
`;

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px,
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;



export default function Home() {
  return (
    
    <BackgroundImage>
      <QuizContainer>
        <Widget>
          <Widget.Header>
          </Widget.Header>
          <Widget.Content>
          </Widget.Content>
          </Widget>
        <Widget>
          <Widget.Header>
          </Widget.Header>
          <Widget.Content>
          </Widget.Content>
          </Widget>
      </QuizContainer> 
    </BackgroundImage>);
}