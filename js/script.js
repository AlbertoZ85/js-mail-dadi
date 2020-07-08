var email =prompt('Inserisci il tuo indirizzo email');
var indirizzi =['tizio@hotmail.com','caio@gmail.com','sempronio@yahoo.it','pinco@outlook.com',
'pallino@mail.com','toni@virgilio.it','bepi@email.it','areo@libero.it'];

var stop = false;

for (var i = 0; i < indirizzi.length; i++) {
    if (indirizzi[i] == email) {
        stop = true;}
}

if (stop) {
    alert('Benvenuto '+ email.substring(0, email.indexOf("@"))+'!');
}   else {
    alert('Ci dispiace, il tuo indirizzo email non è presente nel nostro database');
}
