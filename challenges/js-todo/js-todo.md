# JS TODO

![Giphy of the JS TODO application](../../assets/imgs/js-todo.gif)

## Desafio 🎯
Criar uma página com um TODO List que tenha as seguintes regras:
  - Um campo `input`: que receberá um texto digitado pelo usuário
  - Um botão `ADD`: quando pressionado adiciona em uma lista o texto inserido no `input`;
  - Uma lista que mostrará o texto enviado pelo botão `ADD`.


## Por onde posso começar? 💪🏽
- Você pode usar alguma das IDEs abaixo pra fazer o TODO:
  - [Codepen](https://codepen.io/) - O codpen é um editor de código on-line muito utilizado, onde você pode armazenar e compartilhar os seus códigos. Para obter mais detalhes você pode acessar [esse link.](https://blog.codepen.io/2016/02/01/learn-how-the-editor-works-the-editor-tour/)
  - [Glitch](https://glitch.com/) - pra saber o que é o Glitch você pode [entrar aqui](https://medium.com/glitch/what-is-glitch-90cd75e40277), você encontra maiores informações sobre o Glitch [aqui também.](https://medium.com/@glitch)  
- Abaixo tem os passos que você pode seguir, e para cada um deles tem um artigo que pode te ajudar a entender como fazer e o que é necessário em cada etapa.


## Manda umas dicas aí! 😱
- Primeira etapa -  Usar tags HTML para mostrar o `<button>` na tela, o campo de `<input>` que receberá o dado digitado pelo usuário e uma `<ol>` que mostrará a lista de textos adicionados no `<input>`. Abaixo deixo alguns artigos sobre tag HTML pra te ajudar a entender o que é esse troço :)  
  - [HTML basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)  
  - [HTML: HyperText Markup Language](https://developer.mozilla.org/en-US/docs/Web/HTML)  
- Crie um array vazio, ele será utilizado pra guardar a lista de textos que serão inseridas através do `input`.   
  - O que são arrays:
    - [JavaScript Arrays](https://www.devmedia.com.br/javascript-arrays/4079)
    - [Usando Arrays com JavaScript](https://crisgon.github.io/posts/Usando-Arrays-com-JavaScript/)
- Crie variáveis para guardar os elementos `input`, `<button>` e `<ol>`.
  - [How To Access Elements in the DOM ](https://www.digitalocean.com/community/tutorials/how-to-access-elements-in-the-dom)  
- Daqui pra frente você precisa: 
  - Pegar o valor digitado no `input` através da ação de click no botão `ADD`
    - [change input value - Pen example by Simone Amorim](https://codepen.io/simoneas02/pen/zeJXQP?editors=1111)
  - Adicionar esse valor ao array criado inicialmente.
    - [MDN: Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)  
  - Mostrar a lista de textos na tela, inserindo cada texto via javascript um novo element do tipo `<li>`
- Você vai precisar criar as seguintes funções:
  - `listItem(list)`: 
    - Essa função recebe a lista onde irá adicionar os `<li>`;
    - Use o `map` ou `for` para interar cada elemento do array criado inicialmente;
    - Use `document.createElement` para criar o elemento `<li>`que irá mostrar cada item da lista. ex.: `let newLi = document.createElement("li");`;
    - Use `innerHTML` para adicionar o texto dentro do `<li>`. ex.: `newLi.innerHTML = item;`;
    - Use `appendChild(newLi)` para adicionar o `<li>` na lista `<ol>` que você recebeu como parâmetro da função. ex.: `list.appendChild(newLi)`:
  - `showList()`:
    - Aqui você cria uma variável que vai guardar a tag `<ol>` que você criou no seu HTML;
    - Depois você chama a função `listItem(list);` e passa a variável criada a cima como parâmetro.
  - `addItem()`:
    - Aqui você vai adicionar cada item do input no array criado inicialmente. ex.: `listArray.push(inputEl.value);`
    - Depois você chama a função que mostra a lista. ex.: `showList();`.  
  - Por últimmo você tem que fazer a ação do botão `ADD` que vai rodar todo o processo acima, executando a função `addItem()`:
    - Tem várias formas de você adicionar essa ação ao botão, [nesse link tem uns exemplos](https://gist.github.com/simoneas02/8f4dea17be4a8ad3dbd3435009bad5a0) onde você pode dá uma olhada e usar o que se sentir mais confortável.
---

## Se você achou legal esse desafio e tentou fazer, adiciona aqui o link da tua solução pra gente ver também 😍

## Quem já fez???
