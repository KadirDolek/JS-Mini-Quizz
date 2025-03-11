
let questions1 = ["Qui a signé l'armistice mettant fin à la Première Guerre mondiale ?"]
let questions2 = ["Quel événement a marqué le début de la Seconde Guerre mondiale ?"]
let questions3 = ["Quel homme est à l'origine de la fin de l'apartheid en Afrique du Sud ?"]
let questions4 = ["Quel est le nom du président américain pendant la crise des missiles de Cuba ?"]
let questions5 = ["Quelle mouvement allemand a été un des principaux acteur de la Guerre mondiale(en un mot) ?"]
let questions6 = ["Quel traité a mis fin à la Première Guerre mondiale ?"]
let questions7 = ["Quel événement a eu lieu le 11 septembre 2001 ?"]
let questions8 = ["Qui a été le leader de l'Union soviétique pendant la Seconde Guerre mondiale ?"]
let questions9 =  ["Dans quel pays a eu lieu la révolution de 1917 ?"]
let questions10 = ["Quel mur a symbolisé la division de l'Allemagne pendant la guerre froide ?"]

let reponse1 =["Foch"]
let reponse2 =["Invasion"]
let reponse3 =["Nelson Mandela"]
let reponse4 =["Kennedy"]
let reponse5 =["Nazi"]
let reponse6 =["Versailles"]
let reponse7 =["Attentat"]
let reponse8 =["Staline"]
let reponse9 =["Russie"]
let reponse10 =["Berlin"]
let total = 0

alert("Bonjour, le test qui va suivre sera composé de 10 questions, vous pourrez vérifier vos erreurs dans la console ensuite")

    var user = prompt(questions1)
        if (user==reponse1) {
            console.log("Bonne réponse!")
            total++;}
        else {
            console.log("Mauvaise réponse!")};
    var user = prompt(questions2)
        if (user==reponse2){
            console.log("Bonne réponse!")
            total++;}
        else {
            console.log("Mauvaise réponse!")};
    var user = prompt(questions3)
        if (user==reponse3){
            console.log("Bonne réponse!")
            total++;}
        else {
            console.log("Mauvaise réponse!")};
    var user = prompt(questions4)
        if (user==reponse4){
            console.log("Bonne réponse!")
            total++;}
        else {
            console.log("Mauvaise réponse!")}
    var user = prompt(questions5)
        if (user==reponse5){
            console.log("Bonne réponse!")
            total++;}
        else (user!=reponse5)
            console.log("Mauvaise réponse!")
    var user = prompt(questions6)
        if (user==reponse6){
            console.log("Bonne réponse!")
            total++;}
        else (user!=reponse6)
            console.log("Mauvaise réponse!")
    var user = prompt(questions7)
        if (user==reponse7){
            console.log("Bonne réponse!")
            total++;}
        else {
            console.log("Mauvaise réponse!")}
    var user = prompt(questions8)
        if (user==reponse8){
            console.log("Bonne réponse!")
            total++}
        else {
            console.log("Mauvaise réponse!")};
    var user = prompt(questions9)
        if (user==reponse9){
            console.log("Bonne réponse!")
            total++}
        else {
            console.log("Mauvaise réponse!")};
    var user = prompt(questions10)
        if (user==reponse10){
            console.log("Bonne réponse!")
            total++;}
        else {
            console.log("Mauvaise réponse!")}
    

         alert("Vous avez un total de "+ total + "Points")
