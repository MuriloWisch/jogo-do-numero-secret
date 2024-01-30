//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'jogo do numero secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'escolha um numero entre 1 e 10';
let listaDeNumerosSorteados = [];
let NumeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
 
function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'jogo do numero secreto');
    exibirTextoNaTela('p', 'escolha um numero entre 1 e 10');
}
exibirMensagemInicial();


function verificarChute() {
    let chute = document.querySelector('input').value;
   
    if (chute == numeroSecreto) {
       exibirTextoNaTela('h1', 'Isso aí! ');
       let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
       let mensagemTentativas = `você descobriu o numero secreto com ${tentativas} ${palavraTentativas}!`;
       exibirTextoNaTela('p', mensagemTentativas);
       document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela ('p', 'Ó numero secreto é menor que o seu chute');
        } else {
        exibirTextoNaTela('p', 'o numero secreto é maior');
    }
    tentativas++;
    limparCampo();
  }
}
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * NumeroLimite + 1);
    let QuatidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (QuatidadeDeElementosNaLista == NumeroLimite){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
} 