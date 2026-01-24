var date = new Date;
document.write(date + "<br><br>")

var date = new Date();
var months= ["January", "February", "March", "April",
  "May", "June", "July", "August",
  "September", "October", "November", "December"]
var month = months[date.getMonth()];
document.write("current month:" + month + "<br><br>")

var date = new Date();
dateStr = date.toString()
var day = dateStr.slice(0,3)
document.write("Today is " +day+ "<br><br>")

var date = new Date();
var day = date.getDay();
var userDay = prompt("Enter today's day number (0 = Sunday, 6 = Saturday)")
if((day==0 || day==6 )&& userDay==day){
    document.write("Its a Funday <br><br>")
}else{
    document.write("OOPs!! its a weekday <br><br>")
}


var dateNow = new Date();
var date = dateNow.getDate();
if(date < 16){
   document.write("“First fifteen days of the month");
} 
else{
   document.write("Last days of the month");
}


