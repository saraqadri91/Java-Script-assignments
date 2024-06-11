// question 1
// var array = [[],[],[],[]]


// question 2
// var array = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]]
// for (var i = 0; i < array.length; i++) {
//     for (var j = 0; j < array[i].length; j++) {
//         document.write(array[i][j] + " ")
//     }
//     document.write("<br />")
//  }


// question 3
// for (var i=1; i<=10;i++){
//     document.write(i + "<br />")
// }


// question 4 
// var usernum = +prompt("Enter the number")
// var numLength = +prompt("Enter the length of table")
// var ans = [];
// for (i = 1; i <= numLength; i++) {
//      ans = usernum * i
//     document.write(usernum + "x" + i + "=" + ans + "<br />")
//  }


// question 5
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
// for (var i = 0; i < fruits.length; i++) {
//     document.write(fruits[i] + "<br />")
// }
// for ( var i = 0; i < fruits.length; i++) {
//     document.write("Element at index " +i + " is " + fruits[i] + "<br />")
// }


// question 6
// document.write("Counting" + "<br />")
// for (i = 1; i <= 15; i++) {
//     document.write(i + ",")
// }
// document.write("<br /> Reverse Counting" + "<br />")
// for (i = 15; i >= 1; i--) {
//     document.write(i + ",")
// }
// document.write("<br /> Even" + "<br />")
// for (i = 0; i <= 15; i +=2) {
//     document.write(i + ",")
// }
// document.write("<br /> Odd" + "<br />")
// for (i = 1; i <= 15; i +=2) {
//     document.write(i + ",")
// }
// document.write("<br /> Series" + "<br />")
// for (i = 2; i <= 15; i +=2) {
//     document.write(i + "k,")
// }


// question 7
// var fruits = ["cake", "apple pie", "cookie", "chips", "patties"]
// var userInput = prompt("Welcome to sweet bakers.What do you want sir/ma'am")
// var flag = false;
// for (var i = 0; i < fruits.length; i++){
//     if (userInput == fruits[i]){
//  flag=true
//     }        
// }
// if(flag){ alert( userInput +" is available at index " + i)

// }
// else{alert("We're sorry the item you have entered is not available in our bakery")}


// question 8

// var A = [24, 53, 78, 91, 12];
// var largest = A[0]
// for (i = 1; i < A.length; i++) {
//     if (A[i] > largest){largest=A[i];}
   
// }
// document.write("The largest number in the array is" + largest)


// question 9
// var A = [24, 53, 78, 91, 12];
// var largest = A[0]
// for (i = 1; i < A.length; i++) {
//     if (A[i] < largest){largest=A[i];}
   
// }
// document.write("The shortest number in the array is" + largest)


// question 10
// for (i=0; i<=100;i+=5){
//     document.write(i + "<br />")
// }