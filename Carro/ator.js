// Ator
let xAtor = 100;
let yAtor = 366;
let diametroAtor = 30;
let raioAtor = diametroAtor / 2;
let hit = false;
let meusPontos = 0;

function mostraAtor() {
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (podeSeMover('y', 'baixo')) yAtor += 3;
  }
  if (keyIsDown(LEFT_ARROW)) {
    if (podeSeMover('x', 'esquerda')) xAtor -= 3;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    if (podeSeMover('x', 'direita')) xAtor += 3;
  }
}

function verificaColisao() {
  for (let i = 0; i < imagemCarros.length; i++) {
    colisao = collideRectCircle(
      xCarros[i],
      yCarros[i],
      comprimentoCarros,
      alturaCarros,
      xAtor,
      yAtor,
      raioAtor
    );
    if (colisao) {
      somDaColisao.play();
      voltaAtorParaPosicaoInicial();
      resetaVelocidade();
      if (meusPontos > 0) meusPontos--;
    }
  }
}

function voltaAtorParaPosicaoInicial() {
  yAtor = 366;
}

function incluiPontos() {
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60));
  text(meusPontos, (comprimentoTela / 5), 27);
}

function marcaPonto() {
  if (yAtor < 15) {
    somDoPonto.play();
    resetaOUltimoCarro();
    voltaAtorParaPosicaoInicial();
    meusPontos++;
    resetaVelocidade();
  }
}

function podeSeMover(eixo, direcao) {
  if (eixo == 'y' && direcao == 'baixo') {
    return yAtor < 366;
  }
  if (eixo == 'x' && direcao == 'direita') {
    return xAtor < 470;
  }
  if (eixo == 'x' && direcao == 'esquerda') {
    return xAtor > 0;
  }
}