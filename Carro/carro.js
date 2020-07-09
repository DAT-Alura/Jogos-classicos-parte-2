let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 265, 318];
let velocidadeCarros = [];
let comprimentoCarros = 50;
let alturaCarros = 40;

function geraVelocidadeCarros() {
  if (velocidadeCarros.length == 0) {
    for (let i = 0; i < imagemCarros.length; i++) {
      velocidadeCarros.push(
        Math.floor(Math.random() * 9) + 1
      );
    }
  }
}

function mostraCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    image(
      imagemCarros[i],
      xCarros[i],
      yCarros[i],
      comprimentoCarros,
      alturaCarros
    );
  }
}

function movimentaCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialDoCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    if (passouTodaATela(xCarros[i])) xCarros[i] = 600;
  }
}

function passouTodaATela(xCarro) {
  return xCarro < -(comprimentoCarros);
}

function resetaVelocidade() {
  velocidadeCarros = [];
}

function resetaOUltimoCarro() {
  xCarros[5] = 600;
}