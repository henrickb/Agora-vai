let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')
//let respostaEsta = document.querySelector('#respostaEsta')
let pontos = 0
let placar = 0

//Pergunta
let numQuestao = document.querySelector('#numQuestao')
let pergunta = document.querySelector('#pergunta')

//Alternativa
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

// article com a classe questões
let articleQuestoes = document.querySelector('.questoes')
//ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao  :1,
    pergunta    :"O que é a tecnologia robótica?",
    alternativaA:"É a ciência que estuda as tecnologias associadas a concepção e construção de robôs, unindo a informática, mecânica e elétrica, com o objetivo de automatizar processos e/ou perigosos.<br>",
    alternativaB:"É a ciência que estuda os robôs na sociedade contemporânea, e como eles podem ser perigosos para a evolução humana atualmente<br>",
    alternativaC:"É a tecnologia que constrói e estuda apenas carros autônomos, em prol de um transito melhor<br>",
    alternativaD:"É a tecnologia que tem como único objetivo aprimorar os atuais aparelhos celulares, afim de que eles possam se tornar aparelhos de espionagem",
    correta     :"A",
}

const q1 = {
    numQuestao  :2,
    pergunta    :"Porque robótica na TI",
    alternativaA:"A robótica na T.I. é importante pela criação de processos mais rápidos e eficientes. Assim como o aumento na produtividade. redução de custos, ganho de eficiência, menos riscos e aumento no número de empregos<br>",
    alternativaB:"Por que sem ela voltaríamos a idade das pedras<br>",
    alternativaC:"Por que diminui os custos de mão de obra em várias áreas, apenas por isso<br>",
    alternativaD:"Ela não é importante, robótica é uma área onde apenas se perde tempo,<br>",
    correta     :"A",
}

const q2 = {
    numQuestao  :3,
    pergunta    :"Para fazer um semáforo simples no arduino precisamos de quantos resistores?",
    alternativaA:"1<br>",
    alternativaB:"2<br>",
    alternativaC:"3<br>",
    alternativaD:"4<br>",
    correta     :"C",
}

const q3 = {
    numQuestao  :4,
    pergunta    :"Qual entrada precisa ser ligada na linha negativa da placa de ensaio no Arduino para que o projeto de certo?",
    alternativaA:"A0<br>",
    alternativaB:"A5<br>",
    alternativaC:"GND<br>",
    alternativaD:"5V<br>",
    correta     :"C",
}

const q4 = {
    numQuestao  :5,
    pergunta    :"Quantas entradas tem um acionador de motor ponte H L293D(muito utilizado na robótica)",
    alternativaA:"30<br>",
    alternativaB:"16<br>",
    alternativaC:"29<br>",
    alternativaD:"15<br>",
    correta     :"B",
}

const q5 = {
    numQuestao  :6,
    pergunta    :"O que é PID e o que ele faz?",
    alternativaA:"O controle PID não fornece uma variação contínua da saída dentro de um mecanismo de realimentação, ou seja, dentro de um mecanismo de looping.",
    alternativaB:"O PID é um sistema de controle desproporcional com ação integral e derivativa. Esse sistema um dia já foi o mais eficiente sistema de controle. ",
    alternativaC:"É o controle de pressão utilizando PID, sigla para Proporcional, Integral, Derivativo. O controle PID fornece uma variação contínua da saída dentro de um mecanismo de realimentação de loop de controle para controlar com precisão o processo, removendo a oscilação e aumentando a eficiência.",
    alternativaD:"O PID é um sistema de controle proporcional com ação integral e derivativa. Esse sistema ainda é o mais eficiente sistema de controle na atualidade. ",
    correta     :"D",
}

const q6 = {
    numQuestao  :7,
    pergunta    :"Que tipo de plataforma de prototipagem eletrônica é usada originalmente na construção de um robô seguidor de linha?",
    alternativaA:"Arduino",
    alternativaB:"Uno r3",
    alternativaC:"Wemos D1",
    alternativaD:"Atmega 16u2",
    correta     :"A",
}

const q7 = {
    numQuestao  :8,
    pergunta    :"Quais linguagens da programação são mais recomendadas para a montagem de um site para iniciantes? (Como alunos do primeiro semestre de Engenharia de Software)",
    alternativaA:"HTML5, CSS e Java Script",
    alternativaB:"Python",
    alternativaC:"Programação em blocos",
    alternativaD:"Todas as respostas acima trabalhadas de forma conjunta.",
    correta     :"A",
}

const q8 = {
    numQuestao  :9,
    pergunta    :"O que é um robô seguidor de linha?",
    alternativaA:"Robôs capazes de andar em cima de qualquer fio, como um barbante, por exemplo.",
    alternativaB:"Robôs seguidores de linha são máquinas capazes de percorrer um determinado trajeto através de marcações no chão.",
    alternativaC:"Robôs capazes de seguir marcações, desde que sejam pretas.",
    alternativaD:"Robôs capazes de seguir marcações, desde que sejam brancas.",
    correta     :"B",
}

// Constante com um array de objetos com todas as quetões
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8]

let numero = document.querySelector('#numero')
let total = document.querySelector('#total')

numero.textContent = q0.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// Montar a 1a questão completa, para iniciar o Quiz
numQuestao.textContent = q0.numQuestao
pergunta.textContent   = q0.pergunta
a.textContent = q0.alternativaA
b.textContent = q0.alternativaB
c.textContent = q0.alternativaC
d.textContent = q0.alternativaD

//Configurar o valor inicial da 1a questao completa
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')

// Para montar as proximas questões
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
    d.setAttribute('value', nQuestao+'D')
}

function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
    d.classList.add('bloqueado')
}

function desbloquearAlternativas(){
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
    d.classList.remove('bloqueado')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.value
    console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    console.log("RespC " + certa)

    if(respostaEscolhida == certa){
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta"
        pontos += 1
    } else {
         //console.log("Errou!")
        //respostaEsta.textContent = "Errada"
    }

    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos" + placar

    // bloquear a escolha de opções
    bloquearAlternativas()

    setTimeout(function() {
        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Quiz!')
            fimDoJogo()
        } else {
            proxima(proxima)
        }
    }, 250)
    desbloquearAlternativas()
}

function fimDoJogo() {
    instrucoes.textContent = "Fim do Quiz!"
    numQuestao.textContent = ""

    let pont = ''
    pontos == 0 ? pont = 'ponto' : pont = 'pontos'

    pergunta.textContent = "Você conseguiu " + pontos + " " + pont

    aviso.textContent = "Você conseguiu " + pontos + " " + pont

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""
    d.textContent = ""

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')
    d.setAttribute('value', '0')

    //Ocultar o article da questão
    articleQuestoes.getElementsByClassName.display = 'none'

    setTimeout(function() {
        pontos = 0 //zerar placar
        location.reload();
    }, 4000)
}