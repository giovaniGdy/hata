import React from "react";

import NavBar from "../../components/navbar/navbar";
import myGif from "../../assets/images/my-image.gif";

export default class Home extends React.Component {  
  render() {
    return (
      <body>
        <header>
          <nav>
            <NavBar />
          </nav>
        </header>
        <div className="sub-body">
          <div id="sobreTittle">
            <p>SOBRE</p>
            <hr />
          </div>
          <div id="QAbox">
            <p>
              Olá, este é um site que criei para aperfeiçoar meus conhecimentos
              em front-end e React.js aqui quero compartilhar informações,
              tutoriais, dicas e coisas sobre mim.
            </p>
            <hr />
            <p>
              <figure id="my-gif">
                <img src={myGif} alt="Scary Smile Gif" />
                <figcaption>Gif do meu avatar.</figcaption>
              </figure>
              Sou formado em Análise e Desenvolvimento de Sistemas com foco em
              desenvolvimento web front-end, não que eu não goste do back-end
              também é bem interessante e gosto de mexer com isso mas também
              gosto muito de design e edição de vídeos/imagens, por isso tenho
              preferência pelo front, onde posso fazer uso das edições que gosto
              de fazer. <br />É bem engraçado porque durante o curso e até mesmo
              hoje em dia, quando converso com outros Devs e digo que gosto do
              front a reação da maioria é a mesma: "Noooosssa não suporto
              front-end, ta loco", será que só existe dev backend nesse mundo?
            </p>
            <p>
              Atualmente passo a maior parte do tempo fazendo as coisas que
              gosto: <br />
              Jogar video games, assistir alguns vídeos, filmes, arranhar umas
              musicas no violão e também, infelizmente, fazer as tarefas diárias
              em casa, também tiro um tempo da minha semana para mexer no site
              aqui e fazer cursos da minha área.
            </p>
            <hr />
            <p>
              Sou intusiasta de técnologia, principalmente na área de computação
              e smartphones gosto de assistir vídeos de reviews, manutenção e
              novidades nessas áreas pra saber o que há de novo e como estão as
              coisas no meio.
            </p>
          </div>
        </div>
      </body>
    );
  }
}
