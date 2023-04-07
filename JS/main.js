// question 1
// 1- Write a program that allow to user enter number then printit

document.getElementById("answer1").onclick = function () { printInput() };
function printInput() {
    var userInput = window.prompt("ENTER YOUR NUMBER", '5');
    document.getElementById("outputone").innerHTML = userInput;
}

// question 2
/* 2- Write a program that take number from user then print yes if that number can divide by 3 
and 4 otherwise print no */
document.getElementById("answer2").onclick = function () { checkDivisonInput() };
function checkDivisonInput() {
    var divisionInput = prompt("Please Enter your Input");
    if (Number(divisionInput) % 3 == 0 && Number(divisionInput) % 4 == 0) {
        document.getElementById("outputtwo").innerHTML = 'Yes'

    } else {
        document.getElementById("outputtwo").innerHTML = 'No'

    }


}

// question 3
/* 3- Write a program that allows the user to insert 2 integers then print the max*/

document.getElementById("answer3").onclick = function () { checkMaximum() };
function checkMaximum() {
    var firstNumber = window.prompt("Please enter your first Number");
    var secNumber = window.prompt("please enter your secound Number");
    if (Number(firstNumber) > Number(secNumber)) {
        document.getElementById("outputthree").innerHTML = firstNumber;
    } else if (Number(secNumber) > Number(firstNumber)) {
        document.getElementById("outputthree").innerHTML = secNumber;
    } else {
        document.getElementById("outputthree").innerHTML = ' '
        alert("Both input should be numbers and not empty")
    }
}


//  question 4
/*4- Write a program that allows the user to insert an integer then print negative if it is
negative number otherwise print positive.*/

document.getElementById("answer4").onclick = function () { checkPosNeg() };
function checkPosNeg() {
    var PosNegNum = window.prompt("Please Enter Your Num");
    if (Number(PosNegNum) > 0) {
        document.getElementById("outputfour").innerHTML = "Positive"
    } else if (Number(PosNegNum) < 0) {
        document.getElementById("outputfour").innerHTML = "Negative"
    } else {
        document.getElementById("outputfour").innerHTML = ' '
        alert("Both input should be numbers and not empty")
    }
}

//  question 5
/*5- Write a program that take 3 integers from user then print the max element 
and the min element*/

document.getElementById("answer5").onclick = function () { checknum() };
function checknum() {
    var number1 = window.prompt("Please enter 1st number");
    // console.log(number1)
    var number2 = window.prompt("please enter 2nd number");
    // console.log(number2)
    var number3 = window.prompt("please enter 3rd number");
    // console.log(number3)
    if (Number(number1) > Number(number2) && Number(number2) > Number(number3)) {
        document.getElementById("outputfive").innerHTML = "max is  " + number1 +' & ' + "Min is  "+ number3;
    } else if (Number(number2) > Number(number1) && Number(number1) > Number(number3)) {
        document.getElementById("outputfive").innerHTML = "max  " + number2 +' & ' + "Min is  "+ number3;
    } else if (Number(number3) > Number(number1) && Number(number2) > Number(number1)) {
        document.getElementById("outputfive").innerHTML = "max  " + number3 +' & ' + "Min is  "+ number1;
    } else {
        document.getElementById("outputfive").innerHTML = ' '
        alert("Both input should be numbers and not empty");
    }
}

//  question 6
/*6- Write a program that allows the user to insert integer number then 
check If a number is oven or odd*/

document.getElementById("answer6").onclick = function () { checkevenodd() };
function checkevenodd() {
    var evOddNum = window.prompt("Please enter a num to check");
    if (Number(evOddNum) % 2 == 0) {
        document.getElementById("outputsix").innerHTML = "Even"
    } else if (Number(evOddNum) % 2 != 0) {
        document.getElementById("outputsix").innerHTML = "Odd"
    } else {
        document.getElementById("outputsix").innerHTML = ' '
        alert("Both input should be numbers and not empty");
    }
}

//  question 7
/* 7- Write a program that take character from user then if it is vowel chars (a,e,I,o,u) 
then print vowel otherwise print consonant */

document.getElementById("answer7").onclick = function () { checkVowel() };
function checkVowel() {
    var checkVowelChar = window.prompt("Enter A character 'A,B,C'");
    var checkVowelSmall = checkVowelChar.toLowerCase();
    if (checkVowelSmall == 'a' || checkVowelSmall == 'e' || checkVowelSmall == 'i' || checkVowelSmall == 'o' || checkVowelSmall == 'u') {
        document.getElementById("outputseven").innerHTML = "Vowel"
    } else {
        document.getElementById("outputseven").innerHTML = "Consonant"
    }
}

//  question 8
/* 8- write a program that allow suser to insert integer then print all numbers between 1 to 
   that’s number*/

document.getElementById("answer8").onclick = function () { getNumBetweenInts() };
function getNumBetweenInts() {
    var lastNum = window.prompt("Please Enter your Number");
    var concatenatedValue = ' '
    for (var i = 1; i <= lastNum; i++) {
        concatenatedValue = concatenatedValue + i
        if (i < lastNum) {
            concatenatedValue = concatenatedValue + ','
        } else if (i == lastNum) {
            document.getElementById("outputeight").innerHTML = concatenatedValue
        }
    }
}

// question 9
/* 9- Write a program that allows userto insert integerthen print a multiplication table up to 12*/

document.getElementById("answer9").onclick = function () { getMultipyNo() };
function getMultipyNo() {
    var myNum = window.prompt("Please Enter your Number");
    var concatenatedValue = ' '
    for (var i = 1; i <= 12; i++) {
        x = myNum * i
        concatenatedValue = concatenatedValue + x
        if (i < 12) {
            concatenatedValue = concatenatedValue + ','
        } else if (i == 12) {
            document.getElementById("outputnine").innerHTML = concatenatedValue
        }
    }
}

// question 10
/* 10- Write a program that allows to user to insert number then print all even numbers 
   between 1 to this number*/

document.getElementById("answer10").onclick = function () { getEvenNum() };
function getEvenNum() {
    var myNum = window.prompt("Please Enter your Number");
    var concatenatedValue = ' '
    for (var i = 1; i <= myNum; i++) {
        if (i % 2 == 0) {
            concatenatedValue = concatenatedValue + i + ","
        } else {
            concatenatedValue = concatenatedValue
        }

        if (i == myNum) {
            document.getElementById("outputten").innerHTML = concatenatedValue

        }
    }
}

// question 11
/*Write a program that take two integers then print the power */

document.getElementById("answer11").onclick = function () { printPower() };
function printPower() {
    var firstNumber = window.prompt("Please enter your first Number");
    var power = window.prompt("Please enter the power");
    var myNo = 1;
    for (i = 1; i <= power; i++) {
        myNo = firstNumber * myNo

        if (i == power) {
            document.getElementById("outputeleven").innerHTML = myNo

        }
    }
}

// question 12
/*12- Write a program to enter marks of five subjects and calculate total, average and 
percentage.*/

document.getElementById("answer12").onclick = function () { subjectData() };
function subjectData() {
    var totalNo = 0;
    for (var i = 0; i < 5; i++) {
        var enteredNum = Number(prompt("Please Enter your Input no" + "(" + (i + 1) + ")"));
        totalNo = totalNo + enteredNum
        if (i == 4) {
            document.getElementById("outputtwelve").innerHTML = 'Total=' + totalNo + ', ' + 'Avg=' + totalNo / 5 + ', ' + 'Perc=' + totalNo / 5 + '%'
        }
    }
}

// question 13
/*13- write a program to input month number and print number of days in that 
month.
*/

document.getElementById("answer13").onclick = function () { daysInMonth() };
function daysInMonth() {
    var enteredMonth = window.prompt("Please enter your month number");
    var dayInThatMonth = getDaysInMonth(2023, enteredMonth);
    document.getElementById("output13").innerHTML = "Day in Month:" + dayInThatMonth;
}
// Get Days in month
function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

// question 14
/*14- write a program to input marks of five subjects
 Physics, Chemistry, Biology, Mathematics and Computer
 , Find percentage and grade 
*/

document.getElementById("answer14").onclick = function () { fivesubjectavg() };
function fivesubjectavg() {
    var concatenatedValue = ' ';
    for (var i = 0; i < 5; i++) {
        var subjectmark = Number(prompt("Please Enter your Subject no" + "(" + (i + 1) + ") mark"));
        var grade;
        if (subjectmark >= 90) {
            grade = 'A'
        } else if (subjectmark >= 80) {
            grade = 'B'
        } else if (subjectmark >= 70) {
            grade = 'C'
        } else if (subjectmark >= 60) {
            grade = 'D'
        } else if (subjectmark >= 50) {
            grade = 'E'
        } else if (subjectmark < 50) {
            grade = 'F'
        }
        concatenatedValue = concatenatedValue + ' Percentage = ' + subjectmark + '% ' + 'Grade = ' + grade + '<br>'

        document.getElementById("output14").innerHTML = concatenatedValue

    }
}

// question 15
/* 15- Write a program to input month number and print number of days in that month. */

document.getElementById("answer15").onclick = function () { daysInThatMonth() };

function daysInThatMonth() {
    var month = Number(prompt("please ebter the month number"))
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            document.getElementById("output15").innerHTML = "Day in this month Is: " + 31;
            break;
        case 2:
            document.getElementById('output15').innerHTML = "Day in this month Is: " + 28;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            document.getElementById("output15").innerHTML = "Day in this month Is: " + 30;
            break;
        default:
            document.getElementById("output15").innerHTML = "you did not enter a month number"
    }
}


// question 16
/* 16- Write a program to check whether an alphabet is vowel or consonant */
document.getElementById("answer16").onclick = function () { checkVowelSwitch() };
function checkVowelSwitch() {
    var checkVowelChar = window.prompt("Enter A character 'A,B,C'");
    var checkVowelSmall = checkVowelChar.toLowerCase();
    switch (checkVowelSmall) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            document.getElementById("output16").innerHTML = "Vowel";
            break;
        default:
            document.getElementById("output16").innerHTML = "consonant"
    }
}

// question 17
/* 17- Write a program to find maximum between two numbers */

document.getElementById("answer17").onclick = function () { maxNumSwitch() };
function maxNumSwitch() {
    var number1 = window.prompt("Please enter 1st number");
    var number2 = window.prompt("please enter 2nd number");

    switch (true) {
        case Number(number1) > Number(number2):
            document.getElementById('output17').innerHTML = "Maximum Num is:" + number1;
            break;
        case number2 > number1:
            document.getElementById('output17').innerHTML = "Maximum Num is:" + number2;
            break;
        default:
            document.getElementById('output17').innerHTML = "please enter a number"
    }
}


// question 18
/* 18- Write a program to check whether a number is even or odd */

document.getElementById("answer18").onclick = function () { checkEvenOddSwitch() };
function checkEvenOddSwitch() {
    var evOddNum = window.prompt("Please enter a num to check");
    switch (true) {
        case Number(evOddNum) % 2 == 0:
            document.getElementById("output18").innerHTML = "Even"
            break;
        case Number(evOddNum) % 2 != 0:
            document.getElementById("output18").innerHTML = "Odd"
            break;
        default:
            document.getElementById('output18').innerHTML = "please enter a number"
    }
}

// question 19
/* 19-  Write a program to check whether a number is positive or negative or zero  */

document.getElementById('answer19').onclick = function(){ posNegSwitch()};
function posNegSwitch(){
    var PosNegNum = window.prompt("Please Enter Your Num");
    switch(true){
        case Number(PosNegNum) == 0:
            document.getElementById('output19').innerHTML = "0"
            break;
            case Number(PosNegNum) > 0:
            document.getElementById('output19').innerHTML = "Positive"
            break;
            case Number(PosNegNum) < 0:
            document.getElementById('output19').innerHTML = "Negative"
            break;
            default:
            document.getElementById('output19').innerHTML = "Please enter a number"

    }
}

// question 20
/* 20- Write a program to create Simple Calculator */

document.getElementById('answer20').onclick = function(){makeCalc()};
function makeCalc(){
    var number1 = window.prompt("Please enter 1st number");
    var operation = window.prompt('please enter an OPERATION EX: "+,-,*,/"')
    var number2 = window.prompt("please enter 2nd number");
    switch(operation){
        case '+':
            var finalNum = Number(number1) + Number(number2);
            document.getElementById('output20').innerHTML = number1 + ' ' + operation + ' ' + number2 + '=' + finalNum;
            break;
            case '-':
            var finalNum = Number(number1) - Number(number2);
            document.getElementById('output20').innerHTML = number1 + ' ' + operation + ' ' + number2 + '=' + finalNum;
            break;
            case '/':
            var finalNum = Number(number1) / Number(number2);
            document.getElementById('output20').innerHTML = number1 + ' ' + operation + ' ' + number2 + '=' + finalNum;
            break;
            case '*':
            var finalNum = Number(number1) * Number(number2);
            document.getElementById('output20').innerHTML = number1 + ' ' + operation + ' ' + number2 + '=' + finalNum;
            break;
            default:
            document.getElementById('output20').innerHTML = "Please enter a number"
    }
}