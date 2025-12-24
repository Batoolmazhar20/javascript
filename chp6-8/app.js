//write a program to take a number in a variable ,do the required airthmetic to display the following result in your browser//
var a = 10;
document.write("Result<br>")
document.write(" The value of a is: " + a + "<br><br>")

++a;
console.log(a);
document.write("The value of ++a is " + a + "<br>")
document.write("Now the value of a is " + a + "<br><br>")


console.log(a);
document.write("The value of a++ is " + a + "<br>")
a++;
document.write("Now the value of a is " + a + "<br><br>")


--a;
console.log(a);
document.write("The value of --a is " + a + "<br>")
document.write("Now the value of a is " + a + "<br><br>")


console.log(a)
document.write("The value of a-- is " + a + "<br>")
a--;
document.write("Now the value of a is " + a + "<br><br>")

// //
var a = 2;
var b = 1;

--a;
console.log(a)
document.write(" value of --a is " + a + "<br>")

--b;
console.log(b)
document.write(" value of --b is " + b + "<br>")

var part1 = a - b;
console.log(part1);

++b;
console.log(b);

var part2 = b;  
console.log(part2);
b--;


var result = part1 + part2 + 1; 
document.write(" result is " + result + "<br>");