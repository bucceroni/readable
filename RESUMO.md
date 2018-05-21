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

___________________________________________________________________________________________________________________
## Aula 3 - conecta o React e Redux com bindings do react-redux
## Aula 4 - estabelece padrões fundamentais no Redux, como composição e normalização do reducer
## Aula 5 - apresenta o Middleware e outros aprimoramentos para aplicativos React que utilizam Redux