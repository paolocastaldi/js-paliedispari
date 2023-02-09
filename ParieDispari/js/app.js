let valore = prompt("scrivi la parola \'pari\' se vuoi essere pari o scrivi la parola \'dispari\' se vuoi essere dispari:");
console.log(valore);

let userN = parseInt(prompt("scrivi il tuo numero fra 1 e 5:"));
console.log(userN);


if (valore !== "pari" && valore !== "dispari") {
    alert("!i valori inseriti non sono validi!");   
} else if ((userN < 1 || userN > 5)) {
    alert("!i valori inseriti non sono validi!");
} else {
    let pcN = Math.floor(Math.random() * 5) + 1;
    console.log(pcN);
    let somma = pcN + userN;
    console.log(somma);
    if (somma % 2 == 0 && valore == "pari") {
        alert('hai vinto!');    
    } else if (somma % 2 !== 0 && valore == "dispari") {
        alert('hai vinto!');                
    } else {
        alert('hai perso!')
    }
    
}