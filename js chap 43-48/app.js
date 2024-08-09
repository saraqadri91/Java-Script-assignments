// question 1
// function alerrt(){
//     alert("Hello user")
// }

// question 3
// function remove(e) {
//     e.parentNode.parentNode.remove()

// }

// question 5
var counter = 0
function increase(){
    counter++
    document.getElementById('counter').innerText= counter;
}
function decrease(){
    if (counter>0) {
        counter--       
    }
    document.getElementById('counter').innerText= counter;
}