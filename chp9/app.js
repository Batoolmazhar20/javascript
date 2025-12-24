var fName = prompt("Enter your firts Name","Batool")
var lName = prompt("Enter your last Name","Mazhar")
var fullName = "Ms. "+ fName+" "+lName + "!"
console.log(fullName);

var welcomeNote = "Thank you for signing up to get updates from "+ fName +" "+lName +"!. We take our job of providing you with expert advice on new tech solutions very seriously. To see a full list of our services and partners, visit our website.Thank you for signing up to get updates from "+ fName +" "+lName +"!. We take our job of providing you with expert advice on new tech solutions very seriously. To see a full list of our services and partners, visit our website.Thank you for signing up to get updates from "+ fName +" "+lName +"!. We take our job of providing you with expert advice on new tech solutions very seriously. To see a full list of our services and partners, visit our website.Thank you for signing up to get updates from "+ fName +" "+lName +"!. We take our job of providing you with expert advice on new tech solutions very seriously. To see a full list of our services and partners, visit our website.Thank you for signing up to get updates from "+ fName +" "+lName +"!. We take our job of providing you with expert advice on new tech solutions very seriously. To see a full list of our services and partners, visit our website.Thank you for signing up to get updates from "+ fName +" "+lName +"!. We take our job of providing you with expert advice on new tech solutions very seriously. To see a full list of our services and partners, visit our website. "

document.write("<h1 class='heading'>"+ fullName+"</h1>" + "<p class='para'>"+ welcomeNote+ "</p><br><br><br>")



document.writeln("<h1 class='heading'>Multiplication Table:</h1>")
var num = prompt("Enter a number for multiplication table", 5);

document.write("<section class='table-section'>");


document.write(num + " x 1 = " + (num * 1) + "<br>");
document.write(num + " x 2 = " + (num * 2) + "<br>");
document.write(num + " x 3 = " + (num * 3) + "<br>");
document.write(num + " x 4 = " + (num * 4) + "<br>");
document.write(num + " x 5 = " + (num * 5) + "<br>");
document.write(num + " x 6 = " + (num * 6) + "<br>");
document.write(num + " x 7 = " + (num * 7) + "<br>");
document.write(num + " x 8 = " + (num * 8) + "<br>");
document.write(num + " x 9 = " + (num * 9) + "<br>");
document.write(num + " x 10 = " + (num * 10) + "<br><br><br>");

document.write("</section>");


var sub1 = "English";
var sub2 = "Math";
var sub3 = "Urdu";

var totalMarksEach = 100;

var marks1 = +prompt(" Enter obtained marks for " + sub1);
var marks2 = +prompt(" Enter obtained marks for " + sub2);
var marks3 = +prompt(" Enter obtained marks for " + sub3);

var totalMarks = totalMarksEach * 3;
var obtainedTotal = marks1 + marks2 + marks3;

var per1 = (marks1 / totalMarksEach) * 100;
var per2 = (marks2 / totalMarksEach) * 100;
var per3 = (marks3 / totalMarksEach) * 100;

var finalPercentage = (obtainedTotal / totalMarks) * 100;


document.write("<div class='result-table'>");

document.write("<table border='4' cellpadding='8'>");

document.write("<tr>");
document.write("<th>Subject</th>");
document.write("<th>Total Marks</th>");
document.write("<th>Obtained Marks</th>");
document.write("<th>Percentage</th>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + sub1 + "</td>");
document.write("<td>100</td>");
document.write("<td>" + marks1 + "</td>");
document.write("<td>" + per1 + "%</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + sub2 + "</td>");
document.write("<td>100</td>");
document.write("<td>" + marks2 + "</td>");
document.write("<td>" + per2 + "%</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + sub3 + "</td>");
document.write("<td>100</td>");
document.write("<td>" + marks3 + "</td>");
document.write("<td>" + per3 + "%</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<th></th>");
document.write("<th>" + totalMarks + "</th>");
document.write("<th>" + obtainedTotal + "</th>");
document.write("<th>" + finalPercentage + "%</th>");
document.write("</tr>");

document.write("</table>");
document.write("</div>");
