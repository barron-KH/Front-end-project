//function that gets the result of the test

function result(list, counter) {
	let pro = list.slice(11);
	let symp = list.slice(0, 5);

	//symptomes positive

	let fievre = list[0] === 'oui';
	let toux = list[2] === 'oui';
	let malGorge = list[4] === 'oui';
	let courbatures = list[3] === 'oui';
	let diarrhee = list[5] === 'oui';

	//symptomes négatives

	let noFievre = list[0] === 'non';
	let noToux = list[2] === 'non';
	let noMalGorge = list[4] === 'non';
	let noCourbatures = list[3] === 'non';
	let noDiarrhee = list[5] === 'non';

	//pas de symptomes

	let noSypms = !symp.includes('oui');

	//facteurs pronostiques

	let facPro = pro.includes('oui');
	let noFacPro = !pro.includes('oui');

	//gravité mineures positives

	let hauteFievre = list[1] > 39;
	let fatigue = list[7] === 'oui';
	let malaise = list[10] === 'fatigué' || list[10] === 'trop-fatigué';

	//gravité mineures négatives

	let noHauteFievre = list[1] < 39;
	let noFatigue = list[7] === 'non';
	let noMalaise = list[10] === 'bien' || list[10] === 'moyen';

	// gravité majeures positives

	let basseFievre = list[1] < 35.4;
	let gene = list[9] === 'oui';
	let diffAlim = list[8] === 'oui';

	// gravité majeures négatives

	let noBasseFievre = list[1] > 35.4;
	let noGene = list[9] === 'non';
	let noDiffAlim = list[8] === 'non';

	// paramétres

	let age = list[11];

	if (counter === 13 && age < 15) {
		circles[1].style.display = 'none';
		circles[2].style.display = 'block';
		questions.classList.remove('visible');
		progress.classList.remove('flex');
		resultat.style.display = 'block';

		resultat.children[1].lastElementChild.textContent =
			'Prenez contact avec votre médecin généraliste au moindre doute. Cette application n’est pour l’instant pas adaptée aux personnes de moins de 15 ans. En cas d’urgence, appeler le 15';
	}

	if (counter === 24) {
		circles[1].style.display = 'none';
		circles[2].style.display = 'block';
		questions.classList.remove('visible');
		progress.classList.remove('flex');
		resultat.style.display = 'block';

		if (fievre || (toux && malGorge) || (toux && courbatures)) {
			if (basseFievre || gene || diffAlim) {
				resultat.children[1].lastElementChild.textContent = 'veuillez appeler le numéro 141';
			} else if (
				(facPro &&
					noGene &&
					noDiffAlim &&
					noBasseFievre &&
					((hauteFievre && fatigue && malaise) ||
						(hauteFievre && fatigue) ||
						(fatigue && malaise) ||
						(hauteFievre && malaise))) ||
				(facPro && noGene && noDiffAlim && noBasseFievre && hauteFievre && noFatigue && noMalaise) ||
				(facPro && noGene && noDiffAlim && noBasseFievre && fatigue && noHauteFievre && noMalaise) ||
				(facPro && noGene && noDiffAlim && noBasseFievre && malaise && noHauteFievre && noFatigue)
			) {
				resultat.children[1].lastElementChild.textContent = 'veuillez appeler le numéro 141';
			} else if (facPro && noHauteFievre && noFatigue && noMalaise && noGene && noDiffAlim && noBasseFievre) {
				resultat.children[1].firstElementChild.textContent =
					'téléconsultation ou médecin généraliste ou visite à domicile ';
				resultat.children[1].lastElementChild.textContent =
					'appelez le 141 si une gêne respiratoire ou des difficultés importantes pour s’alimenter ou boire pendant plus de 24h apparaissent';
			} else if (
				(age > 50 &&
					age <= 69 &&
					(noFacPro && noHauteFievre && noFatigue && noMalaise && noGene && noDiffAlim && noBasseFievre)) ||
				(noFacPro && noBasseFievre && noGene && noDiffAlim && (hauteFievre || fatigue || malaise))
			) {
				resultat.children[1].firstElementChild.textContent =
					'téléconsultation ou médecin généraliste ou visite à domicile ';
				resultat.children[1].lastElementChild.textContent =
					'appelez le 141 si une gêne respiratoire ou des difficultés importantes pour s’alimenter ou boire pendant plus de 24h apparaissent';
			} else if (
				age < 50 &&
				noFacPro &&
				noHauteFievre &&
				noFatigue &&
				noMalaise &&
				noGene &&
				noDiffAlim &&
				noBasseFievre
			) {
				resultat.children[1].lastElementChild.textContent =
					'nous vous conseillons de rester à votre domicile et de contacter votre médecin en cas d’apparition de nouveaux symptômes. Vous pourrez aussi utiliser à nouveau l’application pour réévaluer vos symptômes';
			}else {
				resultat.children[1].lastElementChild.textContent =
					'Votre situation ne relève probablement pas du Covid-19. N’hésitez pas à contacter votre médecin en cas de doute. Vous pouvez refaire le test en cas de nouveau symptôme pour réévaluer la   situation.   Pour   toute information concernant   le   Covid-19 allez vers la page d’accueil.';
			}
		} else if (
			(fievre && noToux && noDiarrhee) ||
			(noFievre && toux && noMalGorge && noCourbatures) ||
			(noFievre && noToux && malGorge) ||
			(noToux && courbatures) ||
			(noFievre && diarrhee)
		) {
			if (noHauteFievre && noFatigue && noMalaise && noGene && noDiffAlim && noBasseFievre) {
				resultat.children[1].lastElementChild.textContent =
					'Votre situation ne relève probablement pas du Covid-19. Consultez votre médecin au moindre doute.';
			} else if (
				(noFacPro && noGene && noDiffAlim && noBasseFievre && hauteFievre && noFatigue && noMalaise) ||
				(noFacPro && noGene && noDiffAlim && noBasseFievre && fatigue && noHauteFievre && noMalaise) ||
				(noFacPro && noGene && noDiffAlim && noBasseFievre && malaise && noHauteFievre && noFatigue) ||
				(facPro && noGene && noDiffAlim && noBasseFievre && noMalaise && noHauteFievre && noFatigue)
			) {
				resultat.children[1].lastElementChild.textContent =
					'Votre situation ne relève probablement pas du Covid-19. Un avis médical est recommandé. Au moindre doute, appelez le 141. ';
			} else {
			resultat.children[1].lastElementChild.textContent =
				'Votre situation ne relève probablement pas du Covid-19. N’hésitez pas à contacter votre médecin en cas de doute. Vous pouvez refaire le test en cas de nouveau symptôme pour réévaluer la   situation.   Pour   toute information concernant   le   Covid-19 allez vers la page d’accueil.';
		}
	}
}
}
