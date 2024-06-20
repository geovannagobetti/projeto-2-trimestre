const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");        
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O que podemos fazer parar preservar o meio ambiente?",
        alternativas: [
            "Descartar resíduos em qualquer lugar",
            "Descartar de forma apropriada e separar o lixo"
        ]
    },
    {
        enunciado: "Qual o impacto do desmatamento?",
        alternativas: [
            "O desmatamento acaba com a diversidade e reduz o habitat dos animais",
            "Essa ação contribui para a diversidade das espécies"
        ]
    }
]; 
const perguntas = [
    {
        enunciado: "Qual a principal causa do aquecimento global?",
        alternativas: [
            "O aumento das emissões de gases de efeito estufa",
            "Usar fontes de energia limpa e renovável"
        ]
    },
    {
        enunciado: "O que causa a chuva ácida?",
        alternativas: [
            "Pela presença de poluentes atmosféricos",
            "É causado por processos naturais, liberação de calor"
        ]
    }
]; 
const perguntas = [
    {
        enunciado: "Como as atividades gumas impactam os oceanos?",
        alternativas: [
            "Por resíduos plásticos e produtos químicos",
            "Quando reciclamos o lixo dos mares"
        ]
    },
];