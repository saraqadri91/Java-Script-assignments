// question 1
// var studentNames = [];

// question 2
// var studentNames = new Array();

// question 3
// var studentNames = ["Alice", "Bob", "Charlie"];

// question 4
// var numbers = [1, 2, 3, 4, 5, 6];

// question 5
// var booleanValues = [true, false, true, false, true];

// question 6
// var mixedArray = [1, "alice", true, 3.14, null];

// question 7
// var qualificationInPakistan = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"]
// document.write(qualificationInPakistan[0] + "<br />" + qualificationInPakistan[1] + "<br />"
//     + qualificationInPakistan[2] + "<br />" + qualificationInPakistan[3] + "<br />" +
//     qualificationInPakistan[4] + "<br />" + qualificationInPakistan[5] + "<br />"
//     + qualificationInPakistan[6] + "<br />" + qualificationInPakistan[7])

// question 8 
// var studentNames = ["Sara" , "Ayesha" , "Abdullah"];
// var studentScore  =[320 , 230 ,480];
// var totalMarks = 500;

// document.write("Score of " + studentNames[0] + " is " + studentScore[0] + ". Percentage: " + (studentScore[0] / totalMarks * 100)+"<br />");
// document.write("Score of " + studentNames[1] + " is " + studentScore[1] + ". Percentage: " + (studentScore[1] / totalMarks * 100)+"<br />");
// document.write("Score of " + studentNames[2] + " is " + studentScore[2] + ". Percentage: " + (studentScore[2] / totalMarks * 100));


// question 9
// Step 1: Initialize an array with color names and display it
// var colors = ["Red", "Green", "Blue", "Yellow", "Orange"];
// document.write("<b>Initial Array:</b> " + colors.join(", ") + "<br>");

// // Step 2a: Ask the user what color to add to the beginning and add it
// var colorToAddBeginning = prompt("Enter a color to add to the beginning:");
// colors.unshift(colorToAddBeginning);
// document.write("<b>After adding color to the beginning:</b> " + colors.join(", ") + "<br>");

// // Step 2b: Ask the user what color to add to the end and add it
// var colorToAddEnd = prompt("Enter a color to add to the end:");
// colors.push(colorToAddEnd);
// document.write("<b>After adding color to the end:</b> " + colors.join(", ") + "<br>");

// // Step 2c: Add two more colors to the beginning
// colors.unshift("Purple", "Pink");
// document.write("<b>After adding two more colors to the beginning:</b> " + colors.join(", ") + "<br>");

// // Step 2d: Delete the first color in the array
// colors.shift();
// document.write("<b>After deleting the first color:</b> " + colors.join(", ") + "<br>");

// // Step 2e: Delete the last color in the array
// colors.pop();
// document.write("<b>After deleting the last color:</b> " + colors.join(", ") + "<br>");

// // Step 2f: Ask the user at which index to add a color and add it
// var indexToAdd = prompt("Enter the index where you want to add a color:");
// var colorToAdd = prompt("Enter the color to add:");
// colors.splice(indexToAdd, 0, colorToAdd);
// document.write("<b>After adding color at index " + indexToAdd + ":</b> " + colors.join(", ") + "<br>");


// question 10
// var studentScore =[320 ,230 ,480 , 120]
// document.write("Scores Of Students " + studentScore + "<br />")
// studentScore.sort(function (a , b) {return a - b;
//    });
//    document.write("Ordered scores Of Students " + studentScore)


// question 11
// var cities = ["New York", "London", "Tokyo", "Paris", "Sydney"];
// var selectedCities = [];
// selectedCities.push(cities[0], cities[1], cities[2]);
// document.write("Selected Cities:", selectedCities);


// question 12
// var arr = ["This ", " is ", " my ", " cat"];
// document.write("Array <br />"+arr+"<br />")
// document.write("String <br />" + arr[0] + arr[1] + arr[2] + arr[3])


// question 13 
// var fifoArray = [];
// fifoArray.push("Keyboard")
// fifoArray.push("Mouse")
// fifoArray.push("Printer")
// fifoArray.push("Monitor")
// document.write("Devices <br/>" + fifoArray + "<br />")
// document.write("out <br />")
// document.write(fifoArray.shift() + "<br />");
// document.write("out <br />")
// document.write(fifoArray.shift() + "<br />");
// document.write("out <br />")
// document.write(fifoArray.shift() + "<br />");
// document.write("out <br />")
// document.write(fifoArray.shift() + "<br />");


// Qquestion
// var fifoArray = [];
// fifoArray.push("Keyboard")
// fifoArray.push("Mouse")
// fifoArray.push("Printer")
// fifoArray.push("Monitor")
// document.write("Devices <br/>" + fifoArray + "<br />")
// document.write("out <br />")
// document.write(fifoArray.pop() + "<br />");
// document.write("out <br />")
// document.write(fifoArray.pop() + "<br />");
// document.write("out <br />")
// document.write(fifoArray.pop() + "<br />");
// document.write("out <br />")
// document.write(fifoArray.pop() + "<br />");


// question
// Create an array to store phone manufacturers
var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// Start the dropdown menu
document.write('<select>');

// Loop through the array and create an option for each manufacturer
for (var i = 0; i < manufacturers.length; i++) {
    document.write('<option value="' + manufacturers[i] + '">' + manufacturers[i] + '</option>');
}

// Close the dropdown menu
document.write('</select>');







