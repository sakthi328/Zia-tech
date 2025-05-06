// if else
function eligible(age){
if(age>=18){
  console.log("You are eligible to vote.");
}
else{
  console.log("You are not eligible to vote.");
  }
  }
eligible(18)
eligible(15)


// // if ...elseif
let grade;
function MarkGrade(marks){

if (marks >= 90 && marks <= 100) {
  grade = "A";
} else if (marks >= 80 && marks < 90) {
  grade = "B";
} else if (marks >= 70 && marks < 80) {
  grade = "C";
} else if (marks >= 60 && marks < 70) {
  grade = "D";
} else if (marks >= 50 && marks < 60) {
  grade = "E";
} else if (marks >= 0 && marks < 50) {
  grade = "F (Fail)";
} else {
  grade = "Invalid marks";
}
}

MarkGrade(75)
console.log(grade);
MarkGrade(35)
console.log(grade);