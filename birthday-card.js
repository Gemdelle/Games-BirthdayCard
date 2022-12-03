/* 01. User Inputs. */

const messageMe = prompt('Ingrese su nombre', '');
const messageBirthday = prompt('Ingrese el nombre de la persona que cumple años', '');
let messageAge =  parseInt(prompt('Ingrese la edad que cumple la persona', ''), 10);

/* 02. html Elements. */

const me = document.getElementById('me');
const birthday = document.getElementById('birthday');
const age = document.getElementById('age');


/* 03. Message in case the inserted age is invalid. */

if (isNaN(messageAge) || messageAge < 1 || messageAge > 99) {
    messageAge = prompt('La edad ingresada no es válida', '');
}

/* 04. Assign Inputs to html Elements. */

me.innerHTML = messageMe;
birthday.innerHTML = messageBirthday;
age.innerHTML = messageAge;

