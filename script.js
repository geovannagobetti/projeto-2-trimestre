const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
         enunciado: "O que podemos fazer parar preservar o meio ambiente?",
         alternativas: [
            {
                texto: "Descartar de forma apropriada e separar o lixo",
                afirmacao: "correto",

            },
            {
                texto: "Descartar resíduos em qualquer lugar",
                afirmacao: "incorreta",
            }
        ]
    },
    {
        enunciado: "Qual o impacto do desmatamento?",
        alternativas: [
            {
                texto: "O desmatamento acaba com a diversidade e reduz o habitat dos animais",
                afirmacao: "correto",
            },
            {
                texto: "Essa ação contribui para a diversidade das espécies",
                afirmacao: "incorreta",
            }
        ]
    },
    {
        enunciado: "Qual a principal causa do aquecimento global?",
        alternativas: [
            {
                texto: "O aumento das emissões de gases de efeito estufa",
                afirmacao: "correta",
            },
            {
                texto: "Usar fontes de energia limpa e renovável",
                afirmacao: "incorreta",
            }
        ]
    },
    {
        enunciado: "O que causa a chuva ácida?",
        alternativas: [
            {
                texto: "Pela presença de poluentes atmosféricos",
                afirmacao: "correta",
            },
            {
                texto: "É causado por processos naturais, liberação de calor",
                afirmacao: "incorreta",
            }
        ]
    },
    {
        enunciado: "Como as atividades gumas impactam os oceanos?",
        alternativas: [
            { 
                texto: "Por resíduos plásticos e produtos químicos",
                afirmacao: "correta",
            },
            {
                texto: "Quando reciclamos o lixo dos mares",
                afirmacao: "incorreta",
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
    caixaPerguntas.textContent = 
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();