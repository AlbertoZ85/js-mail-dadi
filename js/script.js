var email =prompt('Inserisci il tuo indirizzo email');
var indirizzi =['tizio@hotmail.com','caio@gmail.com','sempronio@yahoo.it','pinco@outlook.com',
'pallino@mail.com','toni@virgilio.it','bepi@email.it','areo@libero.it'];

var stop = false;
var bgc;
var message;

for (var i = 0; i < indirizzi.length; i++) {
    if (indirizzi[i] == email) {
        stop = true;}
}

if (stop) {
    message = 'Benvenuto '+ email.substring(0, email.indexOf("@"))+'!';
    bgc = "lightgreen";
}   else {
    message = 'Ci dispiace, il tuo indirizzo email non è presente nel nostro database.';
    bgc = "#e60000";
}

document.getElementById('esito').innerHTML= message;
document.getElementById('esito').style.backgroundColor = bgc;
