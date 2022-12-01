// Déclaration des questions ainsi que des réponses dans des tableaux multidimensionnelles.
// Un tableau bonneRéponse est aussi créé pour comparé si les réponses données par le joueur correspondent à la bonne réponse.
//      Une variable score et une variable counter sont déclarées pour compter le score et 
//      compter à quelle questions nous sommes dans l'index du tableau des questions
//      afin de passer correctement aux questions suivantes.

document.querySelector("#containerQuizz").hidden = true;
document.querySelector("#monScore").hidden = true;

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

let tabInter = [];


function startQuizz() {
    document.querySelector("#support").hidden = true;
    document.querySelector("#containerQuizz").hidden = false;
    document.querySelector("#monScore").hidden = false;
    counter = 0;
    score = 0;
}
let counter = 0;
let score = 0;
let randomQ = randomNumber(0, 4);
let randomR = randomNumber(0, 3);

// Pour réaliser le quizz, nous avons besoin de trois fonctions pour l'instant :

// function displayQuestion() servira a afficher les questions dans le HTML.

// function displayReponse() servira a afficher les 4 réponses possibles dans des boutons clicables.
// Pour cela, on utilise le querySelectorAll qui permet d'obtenir une liste d'élément (grâce au All)
// La boucle for servira a afficher les réponses chacunes dans une question grace à l'index de reponse[counter][i]

// function reply(elem) servira a vérifier si la réponse donner par le joueur correspond à la bonne réponse. Si c'est le cas : score ++.
// Elle permet aussi de passer à la question suivante en augmentant la variable counter.

function displayQuestion() {
    if (questions[counter] !== undefined) {
        document.querySelector("#question").innerHTML = questions[counter];
        displayReponse();
    } else {
        document.querySelector("#support").hidden = false;
        document.querySelector("#containerQuizz").hidden = true;
        document.querySelector("#support").innerHTML = '<div class="text-center"> <h3> Vous avez terminé ! </h3> <span>Votre score est de ' + score + ' / 5. Merci d"avoir joué.</span></div>';
        score = 0;
        counter = 0;
    }

}

function displayReponse() {
    let container = document.querySelectorAll("#reponse");
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


// TODO :
// Trouver comment mettre des animations lorsque l'on passe à la question suivante (pas quand la div mais arrive mais quand elle part)
// Faut il modifier avec innerHTLM la classe de l'élément ou bien autre chose ?
// Ajouter une animation de félicitations (confettis)
// Ajouter l'aléatoire dans les questions / réponses
// Réussir à réinitialiser le jeu avec le bouton
// Demander à Thomas pourquoi la fonction reply ne fonctionne pas quand elle est dans la fonction startQuizz qui contient tout le quizz
// Ajouter un timer de 15 secondes pour chaque question qui se réinitialise à chaque question. Si le timer bip = question suivante
//

// Le problème d'undefined est que la boucle for continue de lire le tableau question mais arrive à [5] qui ne contient rien

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}