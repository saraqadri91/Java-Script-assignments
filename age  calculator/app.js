var today = new Date();
var toMil = today.getTime()
var user = prompt("Enter your DOB like /n dd mm yy")
var userDob = new Date(user);
var userMil = userDob.getTime();
var sub = toMil - userMil
var fin = sub / (1000 * 60 * 60 * 24)
var final = Math.floor(fin / 365)
console.log(final);
document.write("Your age is " + final)