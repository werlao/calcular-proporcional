const body = document.querySelector('body');
const diasDeUso = document.querySelector('#diasDeUso');
const resultado = document.querySelector('#result');

const selectPlano = document.getElementById('lista-planos');
const selectVencimento = document.getElementById('lista-vencimentos');
const selectAgendamento = document.getElementById('lista-agendamento');

let vencimento = 0;
let valor = 0;
let agendamento = 0;
let result = 0;

function valorPlano() {
    if(selectPlano.value === 'comboCem'){
        return valor = 69.90;
    } else if(selectPlano.value === 'comboTrezentos'){
        return valor = 79.90;
    } else if(selectPlano.value === 'comboQuatrocentos'){
        return valor = 89.90;
    } else if(selectPlano.value === 'comboQuinhentos'){
        return valor = 99.90;
    } else if(selectPlano.value === 'comboSeiscentos'){
        return valor = 109.90;
    } else if(selectPlano.value === 'comboSetecentos'){
        return valor = 139.90;
    }
}

function vencimentoPlano() {
    if(selectVencimento.value === 'cinco'){
        return vencimento = 5;
    } else if(selectVencimento.value === 'dez'){
        return vencimento = 10;
    } else if(selectVencimento.value === 'quinze'){
        return vencimento = 15;
    } else if(selectVencimento.value === 'vinte'){
        return vencimento = 20;
    } else if(selectVencimento.value === 'vintecinco'){
        return vencimento = 25;
    }
}

function agendamentoPlano() {
    if(selectAgendamento.value === 'um'){
        return agendamento = 1;
    } else if(selectAgendamento.value === 'dois'){
        return agendamento = 2;
    } else if(selectAgendamento.value === 'tres'){
        return agendamento = 3;
    } else if(selectAgendamento.value === 'quatro'){
        return agendamento = 4;
    } else if(selectAgendamento.value === 'cinco'){
        return agendamento = 5;
    } else if(selectAgendamento.value === 'seis'){
        return agendamento = 6;
    } else if(selectAgendamento.value === 'sete'){
        return agendamento = 7;
    } else if(selectAgendamento.value === 'oito'){
        return agendamento = 8;
    } else if(selectAgendamento.value === 'nove'){
        return agendamento = 9;
    } else if(selectAgendamento.value === 'dez'){
        return agendamento = 10;
    } else if(selectAgendamento.value === 'onze'){
        return agendamento = 11;
    } else if(selectAgendamento.value === 'doze'){
        return agendamento = 12;
    } else if(selectAgendamento.value === 'treze'){
        return agendamento = 13;
    } else if(selectAgendamento.value === 'quatorze'){
        return agendamento = 14;
    } else if(selectAgendamento.value === 'quinze'){
        return agendamento = 15;
    } else if(selectAgendamento.value === 'dezeseis'){
        return agendamento = 16;
    } else if(selectAgendamento.value === 'dezesete'){
        return agendamento = 17;
    } else if(selectAgendamento.value === 'dezoito'){
        return agendamento = 18;
    } else if(selectAgendamento.value === 'dezenove'){
        return agendamento = 19;
    } else if(selectAgendamento.value === 'vinte'){
        return agendamento = 20;
    } else if(selectAgendamento.value === 'vinteum'){
        return agendamento = 21;
    } else if(selectAgendamento.value === 'vintedois'){
        return agendamento = 22;
    } else if(selectAgendamento.value === 'vintetres'){
        return agendamento = 23;
    } else if(selectAgendamento.value === 'vintequatro'){
        return agendamento = 24;
    } else if(selectAgendamento.value === 'vintecinco'){
        return agendamento = 25;
    } else if(selectAgendamento.value === 'vinteseis'){
        return agendamento = 26;
    } else if(selectAgendamento.value === 'vintesete'){
        return agendamento = 27;
    } else if(selectAgendamento.value === 'vinteoito'){
        return agendamento = 28;
    } else if(selectAgendamento.value === 'vintenove'){
        return agendamento = 29;
    } else if(selectAgendamento.value === 'trinta'){
        return agendamento = 30;
    }
}

function diasProporcionais() {
    if(vencimentoPlano() > agendamentoPlano()){
        return result = vencimentoPlano() - agendamentoPlano();
    } else if(agendamentoPlano() > vencimentoPlano()){
        return result = 30 - agendamentoPlano() + vencimentoPlano();
    }
}

selectPlano.addEventListener('change', (event) => {
    resultado.value = 'R$' + (valorPlano() / 30 * diasProporcionais()).toFixed(2);
})

selectAgendamento.addEventListener('change', (event) => {
    diasDeUso.value = diasProporcionais();
})