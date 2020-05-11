function sequenceQuestions(step) {
	if (step < 24) {
		let currentQuestion = quesList.find((ques) => {
			return ques.number == step;
		});

		questionText.textContent = currentQuestion.text;
		form.innerHTML = currentQuestion.choices;
	}
}