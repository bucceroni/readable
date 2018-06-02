# RESUMO REDUX

## Aula 1 - Benefícios de utilizar Redux

### OBJETIVO
* O objetivo principal do Redux é fazer com que o gerenciamento de estado do seu aplicativo seja mais manejável, ajuda no gerenciamento de estados entre os componentes, é um container de estado previsível para aplicações JavaScript.

### PRINCIPAIS MOTIVOS
* Estado compartilhado
    - componentes podem utilizar o mesmo estado.
    - acesso fácil entre componentes distantes(pai-filho).
* Caching(API)
    - respostas do servidor.
    - dados armazenados em cache.
    - dados locais ainda não enviados a um servidor.

### STORE
* Single source of thuth: a STORE, única árvore de objetos,{}, responsável pelo estado global da app.
* O estado no redux é imutável, somente leitura.
* A store será atualizada apenas por meio do reducer/actions, responsável por alterar os estados.
* Dados são consolidados em um local centralizado.
* Fluxo de dados unidirecional.

### COMPONENT STATE X REDUX STORE
* COMPONENT STATE = estados de vida curta, localizados, sem importância global para o app e que não mutem de formas complexas.
* REDUX STORE = estados compartilhados, globalmente acessado por todo o app ou que mutem de formas complexas.

### PURE FUNCTIONS
* Funções puras são parte integrante de como o estado de aplicativos Redux são atualizados.
* Retorna sempre o mesmo resultado se os mesmos argumentos forem passados.
* Dependem somente do argumento passado a elas.
* Não produzem SIDE EFFECTS (efeito colaterais).
    - Fazer chamadas HTTP.
    - Alterar o estado externo(variáveis externas).
    - Recuperar o estado do dia.
    - Math.random().
    - Enviar uma mensagem ao console.
    - Adicionar algo a um banco de dados.
* Exemplo: 
```
const square = x => x * x;
```

### IMPURE X PURE FUNCTIONS
* IMPURE  
```
const tipPercentage = 0.15;
const calculateTip = cost => cost * tipPercentage;
```
* PURE    
```
const calculateTip = (cost, tipPercentage = 0.15) => cost * tipPercentage;
```

### HIGH-ORDER
* .map(), .filter() e .reduce() são funções HIGH-ORDER, o que significa que ela pega uma função(ou seja, um callback) como primeiro argumento.
* Simplificando é uma função que chama outra função.

### REDUCE() = PURE FUNCTIONS/HIGH-ORDER
* REDUCER vem do método .reduce() JS, analisa uma grande quantidade de dados, mas retorna um único valor.
* .reduce() é uma função HIGH-ORDER, o que significa que ela pega uma função(callback) como argumento.
* .reduce() utiliza uma coleção de dados.
* Redux impulsiona esse mesmo princípio, usando REDUCERS para atualizar sua store de dados.
* Exemplo de .reduce(<function/callback>, <starting-value>):
```
iceCreamStats.reduce( (accumulator, currentValue) => {
return accumulator + currentValue.gallonsEaten}, 0);
```

<hr>

## Aula 2 - Principais entidades do Redux: actions, reducers e store

### PRINCIPAIS ELEMENTOS
* STORE - Abriga o estado do aplicativo, envia uma ACTION.
* ACTION - Envia a alteração/solicitação/evento(dispatch) para REDUCER.
* REDUCER - Atualiza/altera o estado na STORE.
* STORE - Atualiza a View.

### ACTION
* Actions descrevem qualquer evento de seu aplicativo que deva atualizar seu estado.
* Actions são objetos JavaScript com uma propriedade type e propriedades opcionais de carga útil contendo novas informações
* Eventos = actions
* Objeto JS {}
* Devem ter uma propriedade TYPE
* Exemplo:
```
const LOAD_PROFILE = 'LOAD_PROFILE';
const myAction = {
  type: LOAD_PROFILE
};
```

### ACTION CREATORS
* Função que cria e retorna uma ação, passadas para View.
* Exemplo:
```
const SUBMIT_USER = 'SUBMIT_USER';
const submitUser = user => ({type: SUBMIT_USER, user});
```

### REDUCERS
* O REDUCER é uma função que recebe dois argumentos, o estado atual e uma ACTION que foi despachada, depois atualiza o estado atual para um novo estado baseado na ACTION que recebeu.
* O SWITCH é utilizado para associar a propriedade TYPE da ACTION.
```
function reducer (state, action) {
  switch (action.type) {
    case 'SUBMIT_USER' :
      return Object.assign({}, state, {
        user: action.user
      })
  }
}
```
* Regras:
    - reducer deve ser uma PURE FUNCTION, função pura.
    - Retornam sempre o mesmo resultado quando um mesmo conjunto de argumentos é passado a elas
    - Dependem apenas dos argumentos passados a elase não produzem side effects
    - Nunca devem modificar o estado, payload.
```
function myReducer (state = initialState, action) {
  if (action.type === CHANGE_NAME) {
    return {
      ...state,
      name: 'Tyler'
    };
  }

  return state;
}
```
### STORE
* Para criar uma store, você passa uma função REDUCER como o primeiro argumento para o método createStore() do Redux. O que é retornado pelo createStore() é a próprio store. Essa store tem três propriedades:
* o método createStore() do Redux aceita apenas um reducer
    - getState()
    - dispatch()
    - subscribe()

* getState()
    - store.getState() não recebe nenhum argumento e retorna o estado atual da store.

* dispatch()
    - store.dispatch(action) recebe um objeto da action e chama a função reducer, passando o estado atual e a action que foi despachada para ela. Por exemplo:
```
// store.js

import { createStore } from 'redux';
import reducer from '../reducers/reducer';

let store = createStore(reducer);

const receiveComment = comment => ({
  type: 'RECEIVE_COMMENT',
  comment
});

export default store;
store.getState(); // []
store.dispatch(receiveComment('Redux is great!'));
store.getState(); // ['Redux is great!']
```

* subscribe()
    - store.subscribe(cb) recebe uma função listener de callback que será invocada sempre que o estado da store for alterado.

* {createStore}
    - criar store e passando uma função reducer      

* Install
    - `npm install redux`
    - src index.js add: 
```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

add. --> import {createStore} from 'redux'
add. --> import reducer from './reducer' 

add. --> const store = createStore(reducer)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
```

* Redux DevTools
    - https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en

### RESUMO
* Actions são despachadas no reducer da store, dizendo para ele qual informação deve ser atualizada.

<hr>

## Aula 3 - React e Redux = 'react-redux'

### REACT-REDUX
 * A maior vantagem do react-redux é percebida no despacho de actions e no acesso à store do Redux a partir dos seus componentes React. Isso tudo é possível graças ao componente Provider do react-redux, e ao método connect(). 
 * O connect() permite que você especifique quais componentes devem receber quais dados da store, e o Provider faz com que connect() funcione corretamente. Vamos nos aprofundar nesses dois elementos.
 * Install `npm install --save react-redux`

### PROVIDER
* Renderizado pelo DOM
* O provider é somente um componente de React que usamos para embalar todo o aplicativo. Ele pega store como um prop e, então, configura store e context, passando a todos os seus subcomponentes. Todos os componentes embalados pelo provider receberão store context.
```
//index.js

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { createStore } from "redux";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={createStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

### CURRYING
* PARTIAL APPLICATION, técnica usada em programação funcional(além do Redux).
* Currying é o processo de fornecer entradas parcialmente a uma função que precisa de informações adicionais. A parte da API do Redux que usa currying é seu método connect(). 
```
function plate(vegetables) {
  return function fruitFunc (fruit) {
    return `I ate a plate of ${vegetables} and ${fruit}!`;
  }
}

const sentence = plate('corn')('apples');
```
* Temos uma fruitFunc(), que podemos chamar passando uma fruit como argumento, e os vegetables (corn) continuam acessíveis através de closures.

### CLOSURES
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Closures
```
function init() {
  var name = "Mozilla";
  function displayName() {
    alert(name);
  }
  displayName();
}
init();
```
* A  função init() cria uma variável local chamada name, e depois define uma função chamada displayName(). displayName() é uma função aninhada (um closure) — ela é definida dentro da função init(), e está disponivel apenas dentro do corpo daquela função. Diferente de init(), displayName() não tem variáveis locais próprias, e ao invés disso reusa a variável name declarada na função pai.

```
function makeFunc() {
  var name = "Mozilla";
  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();
```
* Se você rodar este código o mesmo terá exatamente o mesmo efeito que o init() do exemplo anterior: a palavra "Mozilla" será mostrada na caixa de alerta. O que é diferente - e interessante - é o fato de que  a função interna do displayName() foi retornada da função externa antes de ser executada.
* Pode parecer não muito intuitivo de que o código de fato funciona. Normalmente variáveis locais a uma função apenas existem pela duração da execução da mesma. Uma vez que makeFunc() terminou de executar, é razoável esperar que a variável name não será mais necessária. Dado que o código ainda funciona como o esperado, este não é o caso.
* A solução para tal problema é que a função myFunc tournou-se uma closure. Uma closure (fechamento) trata-se de um tipo especial de objeto que combina duas coisas: a função e o ambiente onde a função foi criada. Este ambiente consiste de quaisquer variáveis que estavam no escopo naquele momento em que a função foi criada. Neste caso, myFunc é a closure que incorpora tanto a função displayName quanto a palavra Mozilla que existia quando a closure foi criada. 
* Exemplo
```
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

print(add5(2));  // 7
print(add10(2)); // 12
``` 

### CONNECT
* connect() é uma função que conecta um componente React ao store do Redux. mapStateToProps() permite que especifiquemos que estado do store você quer que seja passado para seu componente React. mapDispatchToProps() permite que vinculemos o despacho a seus action creators antes que eles cheguem ao seu componente.
* Se conecta a STORE e COMPONENTES configuradas pelo PROVIDER
```
import { connect } from 'react-redux';

...

connect(mapStateToProps, mapDispatchToProps)(MyComponent)
```
* Elementos connect:
    - MyComponent = Componente
    - mapStateToProps() = método para receber a store e props atuais
    - mapDispatchToProps() = envovle actions dentro do dispatch

### mapStateToProps()
    - mapStateToProps() permite que você especifique que dados do store você quer que sejam passados para seus componente React. Ele pega do state de store, um argumento opcional ownprops, e retorna um objeto. erá chamada toda vez que o store for atualizado.
    - permite connect() saber como mapear partes específicas do estado do store em props usáveis.
```
import { connect } from 'react-redux';

const User = ({ name, age }) => {
  // ...
};

const mapStateToProps = (state, props) => ({
  name: state.user.name,
  age: state.user.age
});

export default connect(mapStateToProps)(User);
```

* ownProps(opcional)
    - Fornece acesso aos props passados em um componente conectado.
    - Um ótimo lugar para utilizar ownProps é quando for filtrar algum dado. Vamos dizer que queremos construir um componente MyPhotos que, após o login, renderiza um index de todas as fotos do usuário. O usuário logado está armazenado em um outro local na aplicação, e é passado para o componente MyPhotos como um prop. Podemos aproveitar ownProps para acessar e exibir só o que precisamos:
```
const mapStateToProps = (state, ownProps) => ({
  photos: state.photos.filter(photo => photo.user === ownProps.user)
});

export default connect(mapStateToProps)(MyPhotos);
```

### mapDispatchToProps()
* Quando você conecta um componente, aquele componente será passado automaticamente para o método dispatch() do Redux.
* Conectar a View as Actions.
* mapDispatchToProps() é fazer com que você possa vincular dispatch() a seus action creators antes mesmo que eles cheguem ao seu componente. Em código, isso fica assim:
```
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateName } from './actions';

class User extends Component {
  state = { name: '' }
  handleUpdateUser = () => {
    this.props.boundUpdateName(this.state.name)
  }
  render () {
    // ...
  }
}

const mapDispatchToProps = dispatch => ({
    return{
        boundUpdateName: (name) => dispatch(updateName(name))
    }
});

export default connect(null, mapDispatchToProps)(User);
```
* Usar mapDispatchToProps() é completamente opcional e, sinceramente, não estou convencido de que torne as coisas muito mais simples, mas é uma daquelas coisas que vale a pena saber que existe.

<hr>

## Aula 4 - Redux Store

### REDUCER COMPOSITION
* Composição de reducers
* O método createStore() do Redux aceita apenas um reducer.
* Separamos nossos reducers para lidar com porções distintas e independentes do estado. Esse processo é chamado de reducer composition.

### COMBINEREDUCERS
*  combineReducers() é uma função auxiliar fornecida pelo Redux que transforma um objeto cujos valores são diferentes funções reducer em uma única função reducer. Passamos então este “root reducer” para o createStore() para criar a store do aplicativo. Vamos ver como isso pode se apresentar:
```
// reducers/root_reducer.js

import { combineReducers } from 'redux';

function users (state = {}, action) {
  // ...
}

function books (state = {}, action) {
  // ...
}

export default combineReducers({
  users,
  books,
});
```
```
// store/store.js

import rootReducer from '../reducers/root_reducer';

const store = createStore(rootReducer)
console.log(store.getState()) // { users: {}, books: {} }
```
* O reducer principal retornado pelo combineReducers chamará cada reducer filho, para então recolher todos os seus resultados em um único objeto correspondente ao estado. O formato do objeto de estado corresponde às chaves dos reducers passados; isso significa que se o seu objeto 'reducers', acima, tem propriedades 'users' e 'books', e essas serão, agora, propriedades da sua árvore de estados

* Dividir reducers para cada container
```
import { combineReducers } from 'redux';
import booksReducer from './books_reducer';
import userReducer from './user_reducer';

const rootReducer = combineReducers({
    books: booksReducer,
    users: userReducer
});

export default rootReducer;
```
* Resumo
    - Conforme um aplicativo cresce em complexidade, também crescerá a necessidade de termos múltiplos reducers para gerenciar diferentes aspectos da store do Redux. O problema é que o método createStore() do Redux recebe um único reducer, não vários. Para combinar todos os seus reducers em um só, você pode usar o método combineReducers(), do Redux. Isso permite que você use a reducer composition para gerenciar o estado em sua store.

### NORMALIZAÇÃO
Quando estamos arquitetando uma store do Redux, existem duas coisas que você deve ter em mente:

1. Não duplique os dados. Se os dados estão em mais de um local, você não terá uma única "source of truth" e terá que gastar recursos tentando mantê-los sincronizados.
2. Mantenha sua store o menos profundo possível. Dados aninhados fazem com que a lógica do reducer se torne mais complicada (tentar atualizar dados profundamente aninhados pode ficar complexo e lento rapidamente).

* EXEMPLO DO QUE NÃO SE DEVE FAZER 
```
function books (state, action) {
  const { bookType, genre, id, title } = action
  if (action.type = CHANGE_TITLE) {
    return {
      ...state,
      [bookType]: {
        ...state[bookType],
        [genre]: {
          ...state[bookType][genre]: {
            [id]: {
              ...state[bookType][genre][id],
              title,
            }
          }
        }
      }
    }
  }

  return state
}
```
* Resumo
    - Normalização é o processo de remover porções de dados duplicadas e garantir que os dados estejam estruturados da maneira menos profunda possível. Isso não só permite que os aplicativos mantenham uma única “source of truth” no estado da store -- a lógica do reducer que atualiza o estado também é mantida limpa e razoável. Em última instância, normalizar a loja do Redux vai levar a queries mais eficientes e consistentes.

<hr>

## Aula 5 - Middleware, Thunks e Estruturas

### MIDDLEWARE
* O middleware pode ser implementado dentro do mesmo padrão unidirecional de gerenciamento de estados que o Redux segue. Em especial, o middleware pode interceptar actions despachadas antes que elas cheguem ao reducer para, em sequência, redirecionar a action ou produzir um efeito colateral.

### INISERIR MIDDLEWARE
* Lembre-se que o método createStore() é usado para criar a store do Redux. Além de passar um reducer (muitas vezes o “root reducer” combinado), createStore() também pode receber um argumento opcional, chamado de enhancer! Aqui está a assinatura do método createStore():
```
//index.js 

import {createStore, applyMiddleware, compose} from 'redux'

const logger ....

const composeEnhacers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose

const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(logger)
    )
)

store.createStore(reducer, [preloadedState], [enhancer])
```
* Redux nos fornece a função applyMiddleware(), que podemos usar como nosso argumento enhancer. applyMiddleware() aceita múltiplos argumentos, então, caso necessário, podemos aplicar mais de um middleware a um aplicativo.

* LOGGER - produz um efeito colateral: exibir o estado da store antes e depois de o reducer processar a action.

### THUNKS
* Thunk ajuda a suportar assincronicidade de um aplicativo Redux.
* Em vez de retornar objetos de action, podemos usar os action creators thunk para despachar funções ou promises.
* Note que, sem thunks, despachos síncronos são o padrão. Ou seja, nós ainda podemos fazer chamadas à API a partir de componentes React (ex: usando o método do ciclo de vida componentDidMount() para fazer esses pedidos), mas nos esforçamos para manter duas coisas em aplicativos Redux:
    - Reusabilidade (pense em composição)
    - Previsibilidade, em que apenas action creators podem ser a fonte de cada atualização de estado

* Instalação : `npm install redux-thunk`
* Digamos que estamos construindo um aplicativo web que armazena uma lista de afazeres de um usuário. Depois que o usuário faz login, ele precisa buscar todos os afazeres do usuário em um banco de dados. Já que o Redux somente suporta o fluxo síncrono de dados, podemos usar o middleware thunk para produzir uma requisição HTTP para esta ação de fetch.
* Exemplo
```
// store.js

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';

const store = () => createStore(rootReducer, applyMiddleware(thunk));

export default store;
```
```
// util/todos_api_util.js

export const fetchTodos = () => fetch('/api/todos');

_____________________________________________________ 

import * as TodoAPIUtil from '../util/todo_api_util';

export const RECEIVE_TODOS = "RECEIVE_TODOS";

export const receiveTodos = todos => ({
  type: RECEIVE_TODOS,
  todos
});

export const fetchTodos = () => dispatch => (
  TodoAPIUtil
      .fetchTodos()
      .then(todos => dispatch(receiveTodos(todos)))
);
```
* O middleware de thunk intercepta as actions de tipo function antes que o dispatch é gerado. Em adição ao dispatch, getState também é passado como um segundo argumento; isto permite ao action creator de action de thunk ler o estado atual da store.
* Se um aplicativo requer interação com um servidor, usar um middleware como o thunk ajuda a resolver o problema do fluxo de dados assíncrono. O thunk nos permite escrever action creators assíncronos que retornam funções (em vez de objetos). O thunk pode, então, ser usado para atrasar o despacho de uma action ou para despachar somente se uma certa condição for satisfeita (ex: um pedido é resolvido).

### ESTRUTURA E ORGANIZAÇÃO
Capacidade
```
   - Components
      - component1.js
      - component2.js
      - component3.js
   - Actions
      - action1.js
      - action2.js
   - Reducers
      - reducer1.js
   - Util
   - Store
```

Feature
```
- nav
   - actions.js
   - index.js
   - reducer.js

- dashboard
   - actions.js
   - index.js
   - reducer.js
```



