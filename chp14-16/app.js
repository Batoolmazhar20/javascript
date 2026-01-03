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