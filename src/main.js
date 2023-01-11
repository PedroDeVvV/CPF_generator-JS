import GeraCPF from './modules/GeraCPF';

import './assets/css/style.css';

const botao = document.querySelector('.iniciar');

function gerador() {
    const gera = new GeraCPF();
    const cpfGerado = document.querySelector('.cpf-final');
    cpfGerado.value = gera.geraNovoCpf();
}

botao.addEventListener('click', function (e) {
    gerador();
});

gerador();



