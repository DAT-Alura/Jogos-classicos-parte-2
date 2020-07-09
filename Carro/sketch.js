let comprimentoTela = 500;
let alturaTela = 400;

function setup() {
  createCanvas(comprimentoTela, alturaTela);
  somDaTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  geraVelocidadeCarros()
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialDoCarro();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}
