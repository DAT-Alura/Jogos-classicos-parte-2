# Perguntas

## Aula 1

1 - Uma pessoa, após incluir a imagem da estrada como background, do carro e do personagem do jogo, adicionou o seguinte código para mover o personagem, quando as setas para cima e para baixo forem pressionadas:

``` javascript
function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor = yAtor + 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    yAtor = yAtor - 3;
  }
}
```

Analisando o código acima, podemos afirmar que:

- __Quando a tecla seta para cima for pressionada, o personagem irá para baixo.__

> Certo! O código que verifica se a tecla seta para cima está pressionada, está aumentando o valor armazenado na variável yAtor, fazendo que o personagem se mova para baixo.

- Quando a tecla seta para cima for pressionada, o personagem irá para cima.
- __Quando a tecla seta para baixo for pressionada, o personagem irá para cima.__

> Certo! O código que verifica se a tecla seta para baixo está pressionada, está diminuindo o valor armazenado na variável yAtor, fazendo que o personagem se mova para cima.

- Quando a tecla seta para baixo for pressionada, o personagem irá para baixo.

## Aula 2

1 - Para fazer com que os carros voltem a aparecer na tela e passem a rodovia mais uma vez, uma pessoa desenvolveu o seguinte código:

``` javascript
function voltaPosicaoInicialDoCarro(){
  if (xCarro < 50){
    xCarro = 600
  }
  if (xCarro2 < 50){
    xCarro2 = 600
  }
  if (xCarro3 < 50){
    xCarro3 = 600
  }
}
```

Porém algo não saiu como a pessoa queria. Com base nessas informações podemos afirmar que:

- Os carros estão parados no canto esquerdo da tela.
- Os carros não estão aparecendo novamente.
- Os carros nem aparecem na tela.
- __Os carros desaparecem antes de passar toda a tela.__

> Certo! Com base no código acima, se o valor da variável xCarro for menor que 50, ele volta para a posição inicial. O valor correto seria -50.

## Aula 3

1 - Para evitar uma grande quantidade de variáveis para cada carro, criamos listas para armazenar essas informações. Sabendo que trata-se de uma estrutura de dados ordenados, observe a seguinte lista:

``` javascript
let palavras = ["Dia", "programar", "javascript", "de"]
```

Com base no exemplo acima, analise as afirmações abaixo e marque as verdadeiras:

- O primeiro elemento de uma lista pode ser recuperado pelo índice 1, ou seja, com o código palavras[1].
- __Para descobrir a quantidade de elementos de uma lista, podemos usar a palavra length.__

> Certo! No nosso caso, palavras.length nos mostraria como resultado o valor 4, indicando a quantidade total de elementos da lista.

- __Podemos recuperar os valores dentro de uma lista através de índice.__

> Certo! Para recuperarmos valores dentro de uma lista, podemos utilizar o índice de cada elemento.

- __Podemos formar uma frase com o seguinte código: console.log(palavras[0],palavras[3],palavras[1],palavras[2])__

> Certo! O resultado da execução do código acima nos mostraria um resultado no console escrito: Dia de programar javascript.
