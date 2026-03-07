var mainContent = document.getElementById("main-content")
console.log(mainContent.children);

var renderElements = document.getElementsByClassName("render")
for(var i=0 ; i<renderElements.length ; i++){
    console.log(renderElements[i].innerHTML);
}

document.getElementById("first-name").value="Alex";
document.getElementById("last-name").value="Bank";
document.getElementById("email").value="alexbank@wexample.com";


var element = document.getElementById("form-content")
console.log(element.nodeType)

var lastName = document.getElementById("lastName")
console.log(lastName.nodeType)
console.log(lastName.childNodes[0].nodeType)

var lastName = document.getElementById("lastName")
lastName.childNodes[0].nodeValue = "last Name: Mazhar"

var mainContent = document.getElementById("main-content")
console.log(mainContent.firstChild)
console.log(mainContent.lastChild)

var lastName = document.getElementById("lastName")
console.log(lastName.previousElementSibling)
console.log(lastName.nextElementSibling)

var email = document.getElementById("email")
console.log(email.parentNode)
console.log(email.parentNode.nodeType)