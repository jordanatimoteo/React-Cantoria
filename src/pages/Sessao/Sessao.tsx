import React from "react";
import * as S from './estilo';
import logo from "../../assets/img/logo.jpg"
const Sessao = () => {
    return (
      <><><S.Header>
        <S.h1>CANTORIA</S.h1>
        <S.h3>A música popular brasileira e seu espaço !</S.h3>
      </S.Header>
        <S.Section>
           <S.h5>Sessão de Curiosidades</S.h5>
        </S.Section></>
        <S.footer>
          <S.h4>copyleft</S.h4>
          <S.img src={logo}></S.img>
        </S.footer></>
    );
  };

export default Sessao();
