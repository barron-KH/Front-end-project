// launching the test

launchBtn.addEventListener('click', () => {
	launch.classList.add('invisible');
	preambule.classList.add('invisible');
	questions.classList.add('visible');
	progress.classList.add('flex');
	counter = 1;
	sequenceQuestions(counter);
	barProgress(counter);
	circles[0].style.display = 'none';
	circles[1].style.display = 'block';
});



reprendre.addEventListener('click', () => {
	values = [];
	circles[2].style.display = 'none';
	circles[1].style.display = 'block';
	resultat.style.display = 'none';
	next.textContent = 'Question suivante';
	questions.classList.add('visible');
	progress.classList.add('flex');
	counter = 1;
	sequenceQuestions(counter);
	barProgress(counter);
});