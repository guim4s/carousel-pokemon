let cartaoAtual = 0;

const cartoes = document.querySelectorAll('.cartao');

const btnVoltar = document.getElementById('btn-voltar');
const btnAvancar = document.getElementById('btn-avancar');

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');
}

function mostrarCartao(indiceCartao){
    cartoes[indiceCartao].classList.add('selecionado');
}

btnAvancar.addEventListener('click', function (){

    if (cartaoAtual == cartoes.length - 1) return; 

    esconderCartaoSelecionado();
    cartaoAtual++;
    mostrarCartao(cartaoAtual);

});

btnVoltar.addEventListener('click', function (){

    if (cartaoAtual == 0 ) return;

    esconderCartaoSelecionado();
    cartaoAtual--;
    mostrarCartao(cartaoAtual);

});