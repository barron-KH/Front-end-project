const quesList = [
	{
		text: 'Pensez-vous avoir eu de la fièvre ces derniers jours (frissons, sueurs) ?',
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 1
	},
	{
		text: 'quelle est votre température ?',
		choices: `<label for="numerique">degrée</label>
        <input type="number" id="numerique">`,
		number: 2
	},
	{
		text: 'Avez-vous une toux ou une augmentation de votre toux habituelle ces derniers jours ?',
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 3
	},
	{
		text: 'Avez-vous des douleurs musculaires ou des courbatures inhabituelles ces derniers jours ? ',
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 4
	},
	{
		text: 'Avez-vous un mal de gorge apparu ces derniers jours ? ',
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 5
	},
	{
		text: 'Avez-vous de la diarrhée ces dernières 24 heures (au moins 3 selles molles) ?',
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 6
	},
	{
		text: 'Avez-vous une fatigue inhabituelle ces derniers jours ?',
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 7
	},
	{
		text: 'Cette fatigue vous oblige-t-elle à vous reposer plus de la moitié de la journée ?',
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 8
	},
	{
		text: 'Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h ? ',
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 9
	},
	{
		text:
			'Avez-vous vu apparaître une gêne respiratoire ou une augmentation de votre gêne respiratoire habituelle ? ',
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 10
	},
	{
		text: 'Comment vous sentez-vous ? ',
		choices: `<div class="flex-radio">
		<div class="mini">
		<label for="fatigue">Fatigué</label>
		<input type="radio" value="fatigué" id="fatigue" name="choice"><br>
		</div>
		<div class="mini">
		<label for="bien">Bien</label>
		<input type="radio" id="bien" value="bien" name="choice"><br>
		</div>
	</div>
	<div class="flex-radio">
		<div class="mini">
		<label for="trop-fatigue">Trop fatigué</label>
		<input type="radio" value="trop-fatigué" id="trop-fatigue" name="choice"><br>
	</div>
		<div class="mini">
		<label for="moyen">Moyen</label>
		<input type="radio" id="moyen" value="moyen" name="choice"><br>
	</div>
	</div>`,
		number: 11
	},
	{
		text: `Quel est votre âge ? 
        Ceci, afin de calculer un facteur de risque spécifique.`,
		choices: `<label for="numerique">ans</label>
        <input type="number" id="numerique" name="choice">`,
		number: 12
	},
	{
		text: `Quel est votre taille ? 
        Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.`,
		choices: `<label for="numerique">cm</label>
        <input type="number" id="numerique" name="choice">`,
		number: 13
	},
	{
		text: `Quel est votre poids ?
        Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.`,
		choices: `<label for="numerique">kg</label>
        <input type="number" id="numerique" name="choice">`,
		number: 14
	},
	{
		text: `Avez-vous de l’hypertension artérielle ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez-vous un traitement à visée cardiologique ?`,
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>
        <label for="sspas">Ne sait pas</label>
        <input type="radio" id="sspas" value="oui" name="choice" >`,
		number: 15
	},
	{
		text: `Êtes-vous diabétique ?`,
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 16
	},
	{
		text: `Avez-vous ou avez-vous eu un cancer ?`,
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 17
	},
	{
		text: `Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ? ?
        Ou êtes-vous suivi par un pneumologue ?`,
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 18
	},
	{
		text: `Avez-vous une insuffisance rénale chronique dialysée ?`,
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 19
	},
	{
		text: `Avez-vous une maladie chronique du foie ?`,
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 20
	},
	{
		text: `Êtes-vous enceinte ?`,
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>
        <label for="sspas">Non applicable</label>
        <input type="radio" id="sspas" value="non" name="choice" >`,
		number: 21
	},
	{
		text: `Avez-vous une maladie connue pour diminuer vos défenses immunitaires ?`,
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>
        <label for="sspas">Ne sait pas</label>
        <input type="radio" id="sspas" value="non" name="choice" >`,
		number: 22
	},
	{
		text: `Prenez-vous un traitement immunosuppresseur ?
        C’est un traitement qui diminue vos défenses contre les infections.
        Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).`,
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>
        <label for="sspas">Ne sait pas</label>
        <input type="radio" id="sspas" value="non" name="choice">`,
		number: 23
	}
];