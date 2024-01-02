let listaDeNumerosSorteado = [];
let NumeroAleatorio = gerarNumeroAleatorio();
let tentativas = 1

function exibirTextoNaTela(tags,texto) {
    let campo = document.querySelector(tags);
    campo.innerHTML = texto;
}
function exibirMensagem() { 
    exibirTextoNaTela('h1', 'Jogo do núremo secreto');
    exibirTextoNaTela('p', 'Escolha o núemro de 1 a 10');
 }
        exibirMensagem();

function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if(chute == gerarNumeroAleatorio) {
        exibirTextoNaTela('h1', 'Acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o Numero secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > gerarNumeroAleatorio) {
            exibirTextoNaTela('p', 'O numero secreto e menor');
        } else {
            exibirTextoNaTela ('p', 'O numero secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * 10 + 1);
  let quantidadeDeElemetoNaLista = listaDeNumerosSorteadoq.length;

    if(quantidadeDeElemetoNaLista == 10) {
        listaDeNumerosSorteado = [];
 }

  if (listaDeNumerosSorteado.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaDeNumerosSorteado.push(numeroEscolhido);
    console.log(listaDeNumerosSorteado);
    return numeroEscolhido
  }
}


function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
    
}

function reiniciarJogo() {
        gerarNumeroAleatorio = 5;
        limparCampo();
        tentativas = 1;
        exibirMensagem();
        document.getElementById('reiniciar') .setAttribute('disabled',true);
}

