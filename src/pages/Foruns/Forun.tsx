import React from "react";
import {Link} from "react-router-dom";
import * as S from './estilo';
import logo from "../../assets/img/logo.jpg"

const Forun = () => {
    return (
      <><><S.Header>
        <S.h1>CANTORIA</S.h1>
        <S.h3>A música popular brasileira e seu espaço !</S.h3>
      </S.Header>
        <S.Section>
        <S.h5>Fóruns de debates</S.h5>
        <S.button><Link to="/Foruns" >A música é deveria ser implantada na grade curricular do ensino funda-mental?</Link></S.button>
        </S.Section></>
        <S.footer>
          <S.h4>copyleft</S.h4>
          <S.img src={logo}></S.img>
        </S.footer></>
    );
  };

export default Forun();
