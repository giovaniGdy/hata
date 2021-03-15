import React from "react";

import Navbar from "../../components/navbar/navbar";
import myGif from "../../assets/images/my-image.gif";
import siteURLimg from "../../assets/images/hatakasy.gif";

export default class Home extends React.Component {
  render() {
    return (
      <body>
        <header>
          <nav>
            <Navbar />
          </nav>
        </header>
        <div className="sub-body">
          <figure className="siteURLfig">
            <img src={siteURLimg} alt="HATAKASY.COM.BR" />
          </figure>
          <div class="QAbox">
            <p>
              Hatakasy.com.br é um projeto para aperfeiçoar meus conhecimentos
              em front-end e React.js.
            </p>
            <hr />
            <figure class="my-gif">
              <img src={myGif} alt="Scary Smile Gif" />
              <figcaption>Gif do meu avatar.</figcaption>
            </figure>
            <p>
              Sou intusiasta de técnologia, principalmente na área de computação
              e smartphones gosto de assistir vídeos de reviews, manutenção e
              novidades nessas áreas pra saber o que há de novo e como estão as
              coisas no meio.
            </p>
            <hr />
            <p>
              Sou formado em Análise e Desenvolvimento de Sistemas com foco em
              desenvolvimento web front-end, não que eu não goste do back-end,
              também é bem interessante e gosto de mexer com isso mas também
              gosto muito de design e edição de vídeos/imagens, por isso tenho
              preferência pelo front, onde posso fazer uso das edições que
              gosto. <br />É bem engraçado porque durante o curso e até mesmo
              hoje em dia, quando converso com outros Devs e digo que gosto do
              front a reação da maioria é a mesma: "Noooosssa não suporto
              front-end, ta loco", será que só existe dev backend nesse mundo?
            </p>
            <hr />
            <p>
              Atualmente passo a maior parte do tempo fazendo as coisas que
              gosto: <br />
              Jogar video games, assistir alguns vídeos, filmes, arranhar umas
              musicas no violão e também fazer as tarefas diárias em casa,
              também tiro um tempo da minha semana para mexer no site aqui
              (quando consigo) e fazer cursos da minha área algumas horas por
              dia.
            </p>
          </div>
        </div>
      </body>
    );
  }
}
