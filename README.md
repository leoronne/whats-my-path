<p align="center">
  <img src="misc\img\transparent-banner.png" width="60%" />
</p>

<br>

Este arquivo também está disponível em outros idiomas: [Inglês](https://github.com/leoronne/whats-my-path/blob/master/README.en.md).

<br>

##

<p align="center">
  <a href="#projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#techs">Techs</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#informacoes-gerais">Informações Gerais</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#instalacao">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#inicializacao">Inicialização</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#testes">Testes</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#licenca">Licença</a>
</p>

##

<br>

<p align="center">
  <img src="misc\img\banner.png"/>
</p>

<br>

## Projeto

Esse repositório contêm um [desafio front-end](https://github.com/iclinic/challenge-front) proposto pela iClinic.

O propósito da aplicação é mostrar ao usuário em qual lado da Força ele está e qual o seu mestre, com base no tempo de resposta de duas requisições à SWAPI (uma API do Star Wars) - o determinante aqui é qual requisição retorna os dados primeiro.

Há duas opções para o alinhamento/mester:
-> Luz, o mestre será Luke Skywalker;
-> Sombrio, o mestre será Darth Vader.

<br>

Hospedado [aqui](https://whatsmypath.ronne.dev).

<br>

## Techs

- [x] [ReactJS](https://reactjs.org);
- [x] [TypeScript](https://www.typescriptlang.org/);
- [x] [Styled Components](https://styled-components.com/).

<br>

## Informações Gerais

Como explicado acima, o alinhamento/mestre é definido por qual requisição é finalizada primeiro, para atingir isso foi utilizado [Promise.race()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise/race). O serviço que fica responsável por essas requisições foi separado dentro da pasta `src/services`, para individualizar a sua responsabilidade e facilitar nos testes unitários.

Para determinar o alinhamento foi implementado uma regra que compara a URL da response do `Promise.race`, já que no endpoint que retorna os dados do mestre não há uma propriedade indicando o alinhamento dele. O alinhamento é utilizado dentro da aplicação para definir a UI das telas (cores, em específico) ao invés de usar diretamente o nome do mestre.

Os dados de alinhamento/mestre e loading das requests ficam dentro do hook `usePeople` para poder compartilhar os dados entre os componentes que os utilizam, assim como à função que chama o serviço `define-master`.

Enquanto a aplicação faz as requisições os botões ficam desativados e o texto é substituído por um spinner para melhorar a experiência do usuário, também é apresentado uma notificação que indica ao usuário qual alinhamento ele faz parte ou caso ocorra algum erro no fluxo.

Na [página](https://github.com/leoronne/whats-my-path/blob/master/src/pages/Master/index.tsx) onde apresenta qual é o mestre, há uma regra que redireciona o usuário para página inicial caso ele não tenha iniciado o fluxo através da página inicial. Isso foi implementado para impedir que o usuário acesse diretamente a rota `/master` e fazer com que o processo sempre deva iniciar na página inicial, através do botão "Start" (eliminando a necessidade do `useEffect` toda vez que ele acessa a rota, seja recarregando a página ou acessando ela diretamente).

No entanto, ele consegue redefinir seu alinhamento/mestre clicando no botão `choose your path again, Padawan`, como definido na descrição do desafio.

Foi implementado uma página adicional caso o usuário tente acessar uma rota inexistente, ela evidencia que a página tentando ser acessada não existe e contém um link que o redireciona para a página inicial.

<br>

<p align="center">
  <img src="misc\img\project-1.gif"/>
</p>

<br>

<p align="center">
  <img src="misc\img\project-2.gif"/>
</p>

<br>

## Instalação

Primeiro clone o projeto utilizando `git clone https://github.com/leoronne/whats-my-path.git` e depois instale as dependências utilizando `yarn` no seu terminal (no diretório raiz do projeto).

<br>

## Inicialização

Para iniciar a aplicação, utilize `yarn start` no seu terminal.

<strong>Nota: Lembre-se de criar um arquivo .env no diretório raiz do projeto baseado no arquivo de [exemplo](https://github.com/leoronne/whats-my-path/blob/master/.env.example).</strong>

<br>

## Testes

Para rodar os tests dessa aplicação, utilize o comando `yarn test` no seu terminal. Caso você deseje gerar os arquivos de cobertura dos testes, utilize `yarn test:cover`.

<br>

## Licença

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](https://github.com/leoronne/whats-my-path/blob/master/LICENSE)**
- Copyright 2021 © <a href="https://github.com/leoronne" target="_blank">Leonardo Ronne</a>.

##
