//declare and initializa a string array//
var fruits = ["Apple" , "Banana" , "orange" , "Peach"]

//declare and initializa a number array//
var num = [0 , 1, 2 , 3 , 70]

//declare and initializa boolean array//
var boolean = [true , false]

//declare and initializa mixed array//
var mixedarray =  [true , "Ali" , 52 , "Batool"]


//Declares an array of qualifications//
var qualifications = ["SSC" , "HSC" , "BCS" , "BS" , "BCOM" , "MS" , "M.phil" , "PHD"]

console.log("qualifications:")
 
console.log(qualifications[0]  )
console.log(qualifications[1]  )
console.log(qualifications[2]  )
console.log(qualifications[3]  )
console.log(qualifications[4]  )
console.log(qualifications[5]  )
console.log(qualifications[6]  )
console.log(qualifications[7]  )

document.write("<h1>qualifications:</h1><br>")

document.write(qualifications[0] + "<br>")
document.write(qualifications[1] + "<br>")
document.write(qualifications[2] + "<br>")
document.write(qualifications[3] + "<br>")
document.write(qualifications[4] + "<br>")
document.write(qualifications[5] + "<br>")
document.write(qualifications[6] + "<br>")
document.write(qualifications[7] + "<br><br>")



var students = ["Michael" , "John" , "Tony"]
var scores = [320, 230, 480]
var totalMarks = [500]

console.log("score of " + students[0] + "is " + scores[0] + ". percentage: " + (scores[0] / totalMarks * 100) + "%" )
document.write("score of " + students[0] + "is " + scores[0] + ". percentage: " + (scores[0] / totalMarks * 100) + "%<br>" )

console.log("score of " + students[1] + "is " + scores[0] + ". percentage: " + (scores[1] / totalMarks * 100) + "%" )
document.write("score of " + students[0] + "is " + scores[1] + ". percentage: " + (scores[1] / totalMarks * 100) + "%<br>" )

console.log("score of " + students[2] + "is " + scores[2] + ". percentage: " + (scores[2] / totalMarks * 100) + "%" )
document.write("score of " + students[2] + "is " + scores[2] + ". percentage: " + (scores[2] / totalMarks * 100) + "%<br>" )



var colors = ["Red" , "Green" , "Blue"]
console.log("initial Array " + colors)
document.write("initial Array " + colors + "<br><br>")
 

var addColor = prompt("Enter a color to add at the beginning")
colors.unshift("pink")
console.log("After unshift " + colors )
document.write("After unshift " + colors + "<br><br>")

var addColor = prompt("Enter a color to add at the end")
colors.push("Orange")
console.log("After push " + colors )
document.write("After push " + colors + "<br><br>")

//Add two more color at the beginning//
colors.unshift("blue" , "white")
console.log("After unshift " + colors )
document.write("After unshift " + colors + "<br><br>")

//Delete the first color in Array//
colors.shift()
console.log("After shift " + colors )
document.write("After shift " + colors + "<br><br>")

//Delete the last color in Array//
colors.pop()
console.log("After pop " + colors )
document.write("After pop " + colors + "<br><br>")


//ask the user at which index he /she wants to add a color and color name then add the color to desired position/index . display the updated array in your browser .//
var index = +prompt("At which index do you want to add the color?")
var colorName = prompt("Enter the color name")
colors.splice(index, 0 , colorName);

console.log("Updated Array: " + colors);
document.write("Updated Array: " + colors +"<br><br>");



//ask the user at which index he /she wants to delete colors,and how many color he she want to delete then remove the same number of color from user defined position index display the updated array in your browser//

var index = +prompt("At which index do you want to delete the color?")
var deletecount = prompt("How many colors you want to delete")
colors.splice(index, deletecount);
document.write("Updated Array: " + colors + "<br><br>");
console.log("Updated Array:", colors);


var stuScores = ["320" , "230", "480" , "120"]
console.log(stuScores.sort());


//write an array to initialize an array with city name , copy 3 array elements from cities array to selectedcitites array .//
var cities = ["karachi","lahore","islamabad","Quetta","peshawar"]

var selectedcities = cities.slice(2,4)
console.log(cities)
console.log(selectedcities)
document.write("Cities List: " + cities + "<br><br>")
document.write("Selected Cities List: " + selectedcities)


//write a program to create a single string from the below mentioned array://
//var arr = [""This", "is", "my", "cat""]//
var cat = ["This", "is", "my", "cat"]
console.log(cat.join(" "))



//Create a new array, store value one by one in such a way that you can access the value in the order in which they were stored. (First In First Out)
var queue = [];

queue.unshift("A");
queue.unshift("B");
queue.unshift("C");

console.log("Queue after inserting values: " + queue)
document.write("Queue after inserting values: " + queue + "<br><br>");

var firstOut = queue.shift();

console.log("First Out Value: " + firstOut)
console.log("Remaining Queue: " + queue)
document.write("First Out Value: " + firstOut + "<br><br>");
document.write("Remaining Queue: " + queue);
