import React from "react";
import * as S from './estilo';
import logo from "../../assets/img/logo.jpg"

const Sobre = () => {
    return (
      <><><S.Header>
        <S.h1>CANTORIA</S.h1>
        <S.h3>A música popular brasileira e seu espaço !</S.h3>
      </S.Header>
        <S.Section>
           <S.h5>quem é “Cantoria”?</S.h5>
           <S.h2>
             Cantoria é um blog que pretente divulgar a riqueza cultural da música brasileira. Aqui será abordada a<br/> 
             importância da música nacional em um contexto mundial. Falaremos da arte musical sem preconceito<br/>
             de estilo ou estética, abrindo espaço para debates com muitas indicações que poderão surpreender o lei-<br/>
             tor. Sim, porque o nosso som é muito maior e mais abrangente do que pensamos.<br/>
           </S.h2>
        </S.Section></>
        <S.footer>
          <S.h4>copyleft</S.h4>
          <S.img src={logo}></S.img>
        </S.footer></>
    );
  };

export default Sobre();
