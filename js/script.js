// var email =prompt('Inserisci il tuo indirizzo email');
// var indirizzi =['tizio@hotmail.com','caio@gmail.com','sempronio@yahoo.it','pinco@outlook.com',
// 'pallino@mail.com','toni@virgilio.it','bepi@email.it','areo@libero.it'];
//
// // var stop = false;
// // var bgc;
// // var message;
// //
// // for (var i = 0; i < indirizzi.length; i++) {
// //     if (indirizzi[i] == email) {
// //         stop = true;}
// // }
// //
// // if (stop) {
// //     message = 'Benvenuto '+ email.substring(0, email.indexOf("@"))+'!';
// //     bgc = "lightgreen";
// // }   else {
// //     message = 'Ci dispiace, il tuo indirizzo email non è presente nel nostro database.';
// //     bgc = "#e60000";
// // }
// //
// // document.getElementById('esito').innerHTML= message;
// // document.getElementById('esito').style.backgroundColor = bgc;
//
// // OPPURE
//
// var stop = 'Ci dispiace, il tuo indirizzo email non è presente nel nostro database.';
// var bgc = "#e60000";
//
// for (var i = 0; i < indirizzi.length; i++) {
//     if (indirizzi[i] == email) {
//         stop = 'Benvenuto '+ email.substring(0, email.indexOf("@"))+'!';
//         bgc = "lightgreen";
//     }
// }
//
// document.getElementById('esito').innerHTML= stop;
// document.getElementById('esito').style.backgroundColor = bgc;

// ESERCIZIO DADI
// Faccio estrarre un numero casuale 1 <= x <= 6 sia all'utente che al computer
var utente = Math.floor(Math.random()*6) + 1;
var computer = Math.floor(Math.random()*6) + 1;
// Inizializzo una variabile "risultato" e una variabile "background color" ai valori di parità tra i due giocatori
var risultato = 'Non vince nessuno, tiè!';
var bgc = "brown";

// Istruzione condizionale per decretare il vincitore, se ce n'è uno...
if (utente > computer) {
    risultato = 'Bravo, hai vinto!';
    bgc = "lightgreen";
}   else if (utente < computer) {
    risultato = 'Azz, il computer ti ha battuto!';
    bgc = "#e60000";
}

// Stampa sul documento del risultato, con relativo colore di background
document.getElementById('esito').innerHTML= risultato;
document.getElementById('esito').style.backgroundColor = bgc;
