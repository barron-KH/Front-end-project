const launch = document.querySelector('.demarrer');
const launchBtn = document.querySelector('.demarrer_button');
const preambule = document.querySelector('.preambule');
const progress = document.querySelector('.progress');
const questions = document.querySelector('.ques');
const previous = document.querySelector('.button_previous');
const next = document.querySelector('.button_next');
const questionText = document.querySelector('.ques_text');
const form = document.querySelector('.ques_form');
const answer = document.getElementsByName('choice');
const circles = document.querySelectorAll('.circle');
const resultat = document.querySelector('.resultat');
const reprendre = document.querySelector('.resultat_reprendre');


console.log(circles);

circles[0].style.display = 'block';

let counter = 0;
let values = [];