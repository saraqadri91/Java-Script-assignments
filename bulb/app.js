var img = document.getElementById("img")
console.log(img);
function btnon(){
    img.src="images/finon-removebg-preview.png"
    document.getElementById("off").disabled=false
}
function btnof() {
    img.src="images/finoff-removebg-preview.png"
    document.getElementById("on").disabled=false
}