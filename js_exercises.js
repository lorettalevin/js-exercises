// 1. Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

var today = new Date();
    var day = today.getDay();
    var daylist = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();
    var amOrPm = (hour >= 12) ? " PM " : " AM ";
    hour = (hour >= 12) ? hour - 12 : hour;
    if (hour === 0 && amOrPm === ' PM ') {
        if (minute === 0 && second === 0) {
            hour = 12;
            amOrPm = 'Noon';
        } else {
            hour = 12;
            amOrPm = ' PM'
        }
    }
    if (hour === 0 && amOrPm === ' AM ') {
        if (minute === 0 && second === 0) {
            hour = 12;
            amOrPm = ' Midnight';
        } else {
            hour = 12;
            amOrPm; ' AM';
        }
    }
console.log("Today is " + daylist[day] + " and the current time is " + hour + ":" + minute + ":" + second + amOrPm);



// 2. Write a JavaScript program to print the contents of the current window.

function printCurrentWindow() {
    window.print();
}
printCurrentWindow();



// 3. Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

var today = new Date();
    var month = today.getMonth() + 1;
    var day = today.getDate();
    var year = today.getFullYear();
    if (month < 10) {
        month = "0" + month;
    }
    if (day < 10) {
        day = "0" + day;
    }
console.log(month + "/" + day + "/" + year);



// 4. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

function triangleArea(a, b, c) {
    let sp = (a + b + c) / 2;
    let area = Math.sqrt(sp * (sp - a) * (sp - b) * (sp - c));
    return area;
}
console.log(triangleArea(5, 6, 7));



// 5. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.

function animate_string(id) {
    var element = document.getElementById(id);
    var textNode = element.childNodes[0]; // assuming no other children
    var text = textNode.data;

    setInterval(function() {
        text = text[text.length - 1] + text.substring(0, text.length - 1);
        textNode.data = text;
    }, 100);
}



// 6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
