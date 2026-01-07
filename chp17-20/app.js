var multi_arr = []
console.log(multi_arr);

var matrix = [[0,1,2,3], [1,0,1,2],[2,1,0,1]]


var counting = [1,2,3,4,5,6,7,8,9,10]

for(var i=0; i<counting.length; i++){
     console.log(`${counting[i]}`);
     document.write(`<h1>${counting[i]}</h1>`);
}


var table = +prompt("Enter a number to show its multiplication table");
var length = +prompt("Enter length of multiplication table");

document.write("<h3>Multiplication table of " + table + "</h3>");
document.write("<h4>Length " + length + "</h4><br>");

for (var i = 1; i <= length; i++) {
    document.write(table + " x " + i + " = " + (table * i) + "<br><br><br>");
}


var fruits = ["apple" , "banana" , "mango" , "orange" , "strawberry"]
for(i=0; i<fruits.length; i++){
    document.write(fruits[i] + "<br><br><br>")
    console.log(fruits[i] )
}

for (var i = 0; i < fruits.length; i++) {
    console.log("Element at index " + i + " is " + fruits[i] );
    document.write("Element at index " + i + " is " + fruits[i] + "<br>");
}

