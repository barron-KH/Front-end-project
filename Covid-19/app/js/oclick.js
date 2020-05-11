//returning to the previous question and deleting the last value

previous.addEventListener('click', () => {
	if (counter <= 1) {
		previous.classList.remove('visible');
	}

	if (counter < 23) {
		next.textContent = 'Question suivante';
	}

	if (counter === 3 && values[0] === 'non') {
		values.pop();
		counter -= 1;
		previous.classList.remove('visible');
	}
	if (counter === 9 && values[6] === 'non') {
		values.pop();
		counter -= 1;
	}

	counter -= 1;

	values.pop();

	console.log(values);

	secenceQuestions(counter);
	barProgress(counter);
});

//going to next question and adding a value

next.addEventListener('click', () => {
	const detail = document.querySelector('#numerique');

	if (form.children[1].id === 'numerique') {
		if (detail.value === '') {
			alert('please enter valid infos');
			return;
		} else if (counter === 2 && (detail.value < 34 || detail.value > 42)) {
			alert('la temperature doit etre comprise entre 34 et 42');
			return;
		} else if (counter === 12 && detail.value > 110) {
			alert("l'age doit etre inferieure a 110");
			return;
		} else if (counter === 13 && (detail.value < 80 || detail.value > 250)) {
			alert('la taille doit etre comprise entre 80 et 250');
			return;
		} else if (counter === 14 && (detail.value < 20 || detail.value > 250)) {
			alert('le poids doit etre compris entre 20 et 250');
			return;
		} else {
			values.push(detail.value);
			console.log(detail.value);
			counter += 1;
		}
	} else {
		for (i = 0; i < answer.length; i++) {
			if (answer[i].checked) {
				if (counter === 1 && answer[i].value === 'non') {
					values.push(answer[i].value);
					values.push(37);
					counter += 2;
				} else if (counter === 7 && answer[i].value === 'non') {
					values.push(answer[i].value);
					values.push('non');
					counter += 2;
				} else {
					values.push(answer[i].value);
					counter += 1;
				}
			}
		}
	}

	console.log(counter);
	console.log(values);

	if (counter === 23) {
		next.textContent = 'Enregistrer et continuer';
	}
	if (counter > 1) {
		previous.classList.add('visible');
	}

	sequenceQuestions(counter);
	barProgress(counter);

	result(values, counter);
});