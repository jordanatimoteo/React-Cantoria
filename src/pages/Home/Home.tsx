import React from "react";
import {Link} from "react-router-dom";
import * as S from './estilo';
import logo from "../../assets/img/logo.jpg"


const Home = () => {
    return (
     
      <><><S.Header>
        <S.h1>CANTORIA</S.h1>
        <S.h3>A música popular brasileira e seu espaço !</S.h3>
      </S.Header>
      <S.nav>
           <Link to="/Foruns"><S.button>FÓRUNS</S.button></Link>
           <Link to="/Sessao"><S.button>CURIOSIDADES</S.button></Link>
           <Link to="/Sobre"><S.button>SOBRE NÓS</S.button></Link>
      </S.nav>
        <S.Section>
           <S.h2>
             Jack Soul brasileiro<br/>
             Do tempero, do batuque<br/>
             Do truque, do picadeiro<br/>
             E do pandeiro, e do repique<br/>
             Do pique do funk rock<br/>
             Do toque da platinela<br/>
             Do samba na passarela<br/>
             Dessa alma brasileira<br/>
             Despencando da ladeira<br/>
             Na zueira da banguela<br/>
             Essa alma brasileir<br/>
             Despencando da ladeira<br/>
             Na zueira da banguela<br/>
             - Lenine
             </S.h2>
        </S.Section></>
        <S.footer>
          <S.h4>copyleft</S.h4>
          <S.img src={logo}></S.img>
        </S.footer></>
      
    );
  };

export default Home();
