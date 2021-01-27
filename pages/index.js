import styled from 'styled-components'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import db from "../db.json";
import Widget from "../src/components/Widget/"
import Footer from "../src/components/Footer/"
import GitHubCorner from "../src/components/GitHubCorner/"
import QuizBackground from "../src/components/QuizBackground/"
import QuizLogo from "../src/components/QuizLogo/"


const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;
const BackgroundImage = styled.div`
  background-image: url(../_images/page_principal.jpg);
  flex: 1;
  background-size: cover;
  background-position: center;
`;

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;


export default function Home() {
  var router = useRouter();
  var [name, setName] = useState('');

  return (
    <QuizBackground>
      <Head>
        <title>Responda o Quiz</title>
      </Head>
      <QuizContainer>
        <Widget>
          <Widget.Header>
          </Widget.Header>
          <Widget.Content>
              <form onSubmit={function(event) {
                event.preventDefault();
                router.push(`/quiz?name=${name}`)
              }}>
                  <input onChange={function(event){
                    setName(event.target.value);

                  }} placeholder="Digite seu nome" />
                  <button type="submit" disabled={name.length === 0}>
                    Start {name}
                  </button>
              </form>
          </Widget.Content>
          </Widget>
        <Widget>
          <Widget.Header>
          </Widget.Header>
          <Widget.Content>
          </Widget.Content>
          </Widget>
          <Footer/>
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/IgornJ17/Imersao_React_Alura"/>
    </QuizBackground>
  );
}
