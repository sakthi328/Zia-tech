<!-- 1 You are given a number **A** in *Kilometers*. Convert this into **B**: *Meters* and **C**: *Centi-Metres*.

    **Input Description:**

    A number "A" representing some distance in kilometer is provided to you as the input.

    **Output Description:**

    Convert and print this value in meters and centimeters.

    **`Sample Input :**2`

    **`Sample Output :`**

    `2000`

    `200000`

solution: -->

function KilometerConvertion(a){
var meter = a*1000;
var centimeter = a*10000;
return {meter,centimeter}

}
const value = KilometerConvertion(2);
console.log(value.meter );
console.log(value.centimeter);

<!-- 2. You are given three numbers **A**, **B** & **C**. Print the largest amongst these three numbers.

   **Input Description:**


    Three numbers are provided to you.

    **Output Description:**

    Find and print the largest among the three

    **`Sample Input :**1,2,3`

    **`Sample Output :**3`

solution: -->

function LargestNumber(a,b,c){
if (a >= b && a >= c) {
var largest = a;
} else if (b >= a && b >= c) {
largest = b;
} else {
largest = c;
}
return largest;
}
console.log(LargestNumber(2,1,6)+" is largest");

// 3.  Print the First 3 multiples of the given number "**N**". (**N** is a positive integer)
//         Note: print the characters with a single space between them.

//         **Input Description:**

//         A positive integer is provided to you as an input.

//         **Output Description:**

//         Print the First 3 multiples of the number with single spaces between them as an output.

//         **`Sample Input :**2`

//         **`Sample Output :**2 4 6`
//     solution:

function MultiplesOfNumber(a){
var b = a*1;
var c = a*2;
var d = a*3;

return [b, c,d];
}

console.log(MultiplesOfNumber(6));

// 4.  Write a code to get the input in the given format and print the output in the given format.

//         **Input Description:**

//         A single line contains a string.

//         **Output Description:**

//         Print the characters in a string separated by comma.

//         **`Sample Input :sathishkumar`**

//         **`Sample Output :s,a,t,h,i,s,h,k,u,m,a,r`

// Solution

    let name = "sathishkumar";

    let format = name.split('');
    console.log(format);

// 5.  Write a code to get the input in the given format and print the output in the given format.
//         **Input Description:**

//         A single line contains a string.

//         **Output Description:**

//         Print the characters in a string separated by line.

//         **`Sample Input :sathishkumar`**

//         **`Sample Output :`**

//         **`s`**

//         `a`

//         `t`

//         `h`

//         `i`

//         `s`

//         `h`

//         `k`

//         `u`

//         `m`

//         `a`

//         `r`
//     solution:

let name = "sathishkumar";
let format = name.split('').join('\n\n');
console.log(format);

//  Using for loop

let name = "sathishkumar";
let format = name.split('');
for(let i=0; i<format.length;i++)
{
  console.log(format[i]);
}
