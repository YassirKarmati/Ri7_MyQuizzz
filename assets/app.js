function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Le problème d'undefined est que la boucle for continue de lire le tableau question mais arrive à [5] qui ne contient rien



let questions = [
    "Géographie : Sur quel continent se situe l'Arabie Saoudite ? ",
    "Mathématiques : Combien font 6 x 7 ? ",
    "Français : Quelle est la bonne orthographe ? ",
    "Histoire : En quelle année a eu lieu la révolution française ? ",
    "Science : D'où provient l'obsidienne ? "
];

let reponse = [
    ["Afrique", "Asie", "Europe", "Océanie"],
    ["43", "54", "36", "42"],
    ["Ornithorinque", "Ornitorynque", "Ornythorinque", "Ornithorynque"],
    ["1809", "1789", "1799", "1889"],
    ["Des volcans", "Des fonds marins", "D'origine extra-terrestre", "Sur les plages"]
];
let bonneReponse = ["Asie", "42", "Ornithorynque", "1789", "Des volcans"];

let counter = 0;
let score = 0;

function displayQuestion() {
    if (questions[counter] !== undefined) {
        document.querySelector("#question").innerHTML = questions[counter];
        displayReponse();
    } else {

        document.querySelector("#containerQuizz").innerHTML = '<div id="containerQuizz"><h3> Vous avez terminé ! </h3> <span>Votre score est de ' + score + ' / 5. Merci d"avoir joué.</span></div>';
    }


}

function displayReponse() {
    let container = document.querySelectorAll(".reponse");
    for (let i = 0; i <= reponse[counter].length; i++) {
        container[i].innerHTML = reponse[counter][i];

    }
}

function reply(elem) {
    if (elem.innerHTML == bonneReponse[counter]) {
        score++;
        document.querySelector("#score").innerHTML = score;
    }
    counter++;
    displayQuestion();

}

displayQuestion();




// Ajouter un if counter = 5 -> fin du jeu
// Ajouter l'aléatoire Questions + réponses
// Travailer le design