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
