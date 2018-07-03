# Readable

UDACITY - PROGRAMA NANODEGREE  
Projeto faz parte da grade do curso [DESENVOLVEDOR REACT](https://br.udacity.com/course/react-nanodegree--nd019).

<hr>

## Descrição do Projeto

Blog Udacity, permite ler, classificar, criar, editar e excluir posts relacionados aos assuntos listados. 
Desenvolvido por meio da biblioteca de JavaScript React, utilizando Redux e grande parte do ecossistema.

* Requisitos

    - Sistema operacional: Windows, Mac ou Linux
    - Browser (Google Chrome, Firefox, etc...)
    - [Node.JS](https://nodejs.org/en/)

* Front
    * Projeto iniciado com [create-react-app](https://github.com/facebook/create-react-app)

    * Dependencias
        - Material UI - `npm install @material-ui/core`
        - Material Icon - `npm install @material-ui/icons`
        - React Loading - `npm install react-loading`
        - React Router - `npm install react-router-dom`
        - React Redux - `npm install react-redux`
        - Redux - `npm install redux`
        - Redux Logger - `npm install redux-logger` 
        - Redux Thunk - `npm install redux-thunk`
        - Axios - `npm install axios`
        - UUID - `npm install uuid`
   
* Back
    * API disponibilizada pela Udacity.

<hr >

## Inicie o Projeto

* Clone o repositório (Terminal)
    - escolher diretório (exemplo) `cd Documents`
    - clonar repositório `git clone https://github.com/bucceroni/readable.git`

* API (Terminal)
    - `cd api-server`
    - Instalar dependências `npm install`
    - Iniciar API `node server`
* API (Heroku)
    - Heroku é uma plataforma de serviço em nuvem (PaaS) suportando várias linguagens de programação.
    - Para facilitar o desenvolvimento do projeto foi utilizado o Heroku para hospedagem do back "api-server".
    - Endpoit `https://api-server-readable.herokuapp.com`

* Front (Em outra janela do terminal)
    - `cd frontend`
    - Instalar dependências `npm install`
    - Iniciar API `npm start`
    - acessar URL `http://localhost:3000/`
 
<hr>

## Deploy

* Heroku
    - Aplicação disponível em:
    - `https://front-readable.herokuapp.com/`

* SonarCloud - Continuous Code Quality
    - Plataforma online utilizada para analisar a qualidade do código, detectar bugs e vulnerabilidades em todo o processo de desenvolvimento. 
    - A configuração é simples, realizada na própria plataforma fornecem todos os passos, necessário incluir PATH no sistema, adicionar arquivo `sonar-project.properties` no projeto e executar script de acordo com o token gerado na plataforma.
    - Resultado do projeto disponível em:
        - `https://sonarcloud.io/dashboard?id=readable`
<hr>

## API
Information about the API server and how to use it can be found in its [README file](api-server/README.md).