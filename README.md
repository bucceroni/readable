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

    * Estrutura e organização
        ```
            - src
                - containers
                    - Home
                        - types 
                        - action
                        - reducer
                        - Home
                        - index
                    - ReactPage
                        - types 
                        - action
                        - reducer
                        - ReactPage
                        - index
                    - ReduxPage
                        - types 
                        - action
                        - reducer
                        - ReduxPage
                        - index
                    - UdacityPage
                        - types 
                        - action
                        - reducer
                        - UdacityPage
                        - index
                - components
                    - Template 
                - utils
                    - api.js 
                    - helpers.js
                - store 
                - App.js (Components + React Router)
        ```
    
* Back
    * API disponibilizada pela Udacity.

<hr >

## Inicie o Projeto

* Clone o repositório

* Install and start the API server
    - `cd api-server`
    - `npm install`
    - `node server`
* In another terminal window, use Create React App to scaffold out the front-end
    - `create-react-app frontend`
    - `cd frontend`
    - `npm start`

## Iniciar projeto - Terminal
* escolher diretório (exemplo) `cd Documents`
* clonar repositório `git clone https://github.com/bucceroni/myReads.git`
* instalar dependências do projeto `npm install`
* iniciar servidor `npm start`
* acessar URL `http://localhost:3000/`
* 
<hr>

## API

Information about the API server and how to use it can be found in its [README file](api-server/README.md).
