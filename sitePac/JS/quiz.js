
// Perguntas
var myQuestions = [
	{
		question: "O que é a tecnologia robótica?",
		answers: {
			a: ' É a ciência que estuda as tecnologias associadas a concepção e construção de robôs, unindo a informática, mecânica e elétrica, com o objetivo de automatizar processos e/ou perigosos.<br>',
			b: 'É a ciência que estuda os robôs na sociedade contemporânea, e como eles podem ser perigosos para a evolução humana atualmente<br>',
			c: 'É a tecnologia que constrói e estuda apenas carros autônomos, em prol de um transito melhor<br>',
			d: 'É a tecnologia que tem como único objetivo aprimorar os atuais aparelhos celulares, afim de que eles possam se tornar aparelhos de espionagem'
		},
		correctAnswer: 'a'
	},
	{
		question: "Porque robótica na TI",
		answers: {
			a: 'A robótica na T.I. é importante pela criação de processos mais rápidos e eficientes. Assim como o aumento na produtividade. redução de custos, ganho de eficiência, menos riscos e aumento no número de empregos<br>',
			b: 'Por que sem ela voltaríamos a idade das pedras<br>',
			c: 'Por que diminui os custos de mão de obra em várias áreas, apenas por isso<br>',
			d: 'Ela não é importante, robótica é uma área onde apenas se perde tempo,<br>'
		},
		correctAnswer: 'a'
	},
	{
		question: "Para fazer um semáforo simples no arduino precisamos de quantos resistores?",
		answers: {
			a: '1<br>',
			b: '2<br>',
			c: '3<br>',
			d: '4<br>'
		},
		correctAnswer: 'c'
	},
	{
		question: "Qual entrada precisa ser ligada na linha negativa da placa de ensaio no Arduino para que o projeto de certo?",
		answers: {
			a: 'A0<br>',
			b: 'A5<br>',
			c: 'GND<br>',
			d: '5V<br>'
		},
		correctAnswer: 'c'
	},
	{
		question: "Quantas entradas tem um acionador de motor ponte H L293D(muito utilizado na robótica)",
		answers: {
			a: '30<br>',
			b: '16<br>',
			c: '29<br>',
			d: '15<br>'
		},
		correctAnswer: 'b'
	},
	{
		question: "",
		answers: {
			a: '<br>',
			b: '<br>',
			c: '<br>',
			d: '<br>'
		},
		correctAnswer: 'b'
	},
	{
		question: "",
		answers: {
			a: '<br>',
			b: '<br>',
			c: '<br>',
			d: '<br>'
		},
		correctAnswer: 'b'
	},
	{
		question: "",
		answers: {
			a: '<br>',
			b: '<br>',
			c: '<br>',
			d: '<br>'
		},
		correctAnswer: 'b'
	},
	{
		question: "",
		answers: {
			a: '<br>',
			b: '<br>',
			c: '<br>',
			d: '<br>'
		},
		correctAnswer: 'b'
	},
];
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		var output = [];
		var answers;

		// para cada questão
		for(var i=0; i<questions.length; i++){
			
			// mas, primeiro resetamos a lista de questões
			answers = [];

			// e aqui faremos para cada resposta na questão.
			for(letter in questions[i].answers){

				// Aqui será escrito para html para usar o Radio.
				answers.push(
					'<label>'
						+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					
						+ questions[i].answers[letter]
					+ '</label>'
				);
			}

			// adicione esta pergunta e suas respostas à saída
			output.push(
				'<div class="question">' + questions[i].question + '</div>'
				+ '<div class="answers">' + answers.join('') + '</div>'
			);
		}

		// Combina nossa lista de saída em uma string de html e coloca na página
		quizContainer.innerHTML = output.join('');
	}


	function showResults(questions, quizContainer, resultsContainer){
			
		
		var answerContainers = quizContainer.querySelectorAll('.answers');
		
		
		var userAnswer = '';
		var numCorrect = 0;
		
		
		for(var i=0; i<questions.length; i++){

			// agora ele vai virar a letra que esta marcada.
			userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
			
			
			
			if(userAnswer===questions[i].correctAnswer){
				
				numCorrect++;
				
				
				answerContainers[i].style.color = 'lightgreen';
			}
			
			else{
				
				answerContainers[i].style.color = 'red';
			}
		}

			
			resultsContainer.innerHTML = numCorrect + ' de ' + questions.length;
		}

	// Mostrar as Perguntas
	showQuestions(questions, quizContainer);
	// mostra resultados
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}
var btn = document.querySelector("#refresh");
btn.addEventListener("click", function() {
    
    location.reload();
});
