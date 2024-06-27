const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você prefere o Circuito de Mônaco ou o Circuito de Spa-Francorchamps?",
        alternativas: [
            {
                texto: "Mônaco!",
                afirmacao: "Você é atraído (a) pelo calor e pela lealdade inabalável."
            },
            {
                texto: "Spa-Francorchamps!",
                afirmacao: "Você é atraído(a) pelo mistério e pela elegância."
            }
        ]
    },
    {
        enunciado: "Você prefere Sebastian Vettel ou Fernando Alonso?",
        alternativas: [
            {
                texto: "Sebastian Vettel.",
                afirmacao: "representa aventura, parceria e um amor que é sempre protetor e apaixonado."
            },
            {
                texto: "Fernando Alonso.",
                afirmacao: "oferece um amor eterno e uma ligação intelectual profunda."
            }
        ]
    },
    {
        enunciado: "Corridas noturnas ou corridas diurnas?",
        alternativas: [
            {
                texto: "noturnas.",
                afirmacao: "Vocês dois compartilham uma conexão profunda com a natureza e uma energia vibrante."
            },
            {
                texto: "diurnas.",
                afirmacao: "Quer compreender tudo o que faz parte do universo, mas há uma área que costuma intrigá-lo particularmente: o sobrenatural."
            }
        ]
    },
    {
        enunciado: "Você prefere a emoção da largada ou a tensão das últimas voltas?",
        alternativas: [
            {
                texto: "largada.",
                afirmacao: "Quer compreender tudo o que faz parte do universo, mas há uma área que costuma intrigá-lo particularmente: a natureza humana."
            },
            {
                texto: "tensão.",
                afirmacao: ","
            }
        ]
    },
    {
        enunciado: "Você prefere o GP de Silverstone ou o GP de Monza?",
        alternativas: [
            {
                texto: "GP de Silverstone.",
                afirmacao: "Você é Ferrari!  "
            },
            {
                texto: "GP de Monza.",
                afirmacao: "Você é Mercedes! "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Você…";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
