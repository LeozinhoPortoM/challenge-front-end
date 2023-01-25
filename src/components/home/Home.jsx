import React from "react";
import Main from "../template/Main";

export default (props) => (
  <Main
    icon="home"
    title="Início"
    subtitle="Desafio front e back da BitconinToYou."
  >
    <div className="display-4 text-center">Bem vindo!</div>
    <hr />
    <p className="mb-0 text-center">
      Sistema desenvolvido com React no front-end e nodejs no back-end.
    </p>
  </Main>
);
