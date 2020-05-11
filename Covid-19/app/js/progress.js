function barProgress(valeur) {
	progress.firstElementChild.firstElementChild.style.width = `${100 / 23 * valeur}%`;
	progress.lastElementChild.textContent = `${valeur}/23`;
}