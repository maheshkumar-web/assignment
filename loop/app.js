// for(var i=1; i<= 10 ;i++){
//     document.write("hello world <br> ")
// }
// for(var i=1; i<= 10 ;i++){
//     document.write(i)
// }


// var tabenum= prompt("enter your number" )
// for(var i=1; i<=10 ;i++){
//     document.write(`<h2>${tabenum}x${i}=${i*tabenum}<br></h2>`)
// }


// var tabenum= prompt("enter your number" )
// var endnum= prompt("enter your ending number")
// for(var i=1; i<= endnum ;i++){
//     document.write(`<h2>${tabenum}x${i}=${i*tabenum}<br></h2>`)
// }

// --------XXXXX--------
// var phone =["phone" +"samsung"]
// for (var i=1; i<=5; i++){
//     document.write(phone)
// }
// var fruits = ["apple, banana, mango, orange, strawberry"]
// for (var i = 0; i <=3; i++) {
//     document.write(`${fruits}<br> `);
// }

//  use br
// for (var i = 1; i <= 15; i++) {
//     document.write(`${i}<br>`)
// }
// without br


// =======counting:
// for (var i = 1; i <= 15; i++) {
//     document.write(i)
// }


// =========Reverse counting:
// for (var i = 15; i >= 1; i--) {
//     document.write(i);
// }

function factorial(n) {
    var result = 1;
    for (var i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5)); // Output: 120


//  ====even
// for (var i = 0; i <= 20; i += 2) {
//     document.write(i);
// }

// var num = +prompt("Enter the number of items:")
// var items = [i]
// for (var i = 0; i < num; i++) {
//     var item = prompt(`Enter item ${i + 1}:`); document.write(item)

// }

//  ====even

// for(var i=1 ; i<=100; i= i+10){
//     for(var j=i; j< i+10; j++){
//             document.write(j)
    
//         }
//             document.write('<br>')
    // }
    
    // for (var i = 1; i <=5 ;i+4) {
        //     for (var j = 1; j < i +1; j++) {
//         document.write("*")
//     }
//     document.write('<br>')

// }

// var num = +prompt('enter number')
// var arr = [];

// for (var i=0 ;i < num; i++){
    // arr[i] = prompt('enter value')
    // }
    // document.write(arr.join`<hr>`)
    
    
    
    // var A=[34,78,54,67,88]
    // var largest=Math.max(...A)
    // document.write("Array Items :::",A );
    // document.write("<hr> The Largest Number is ", largest);
    
    
    //  var fruite = ['apple','mango','banana','kiwi']
//  for(var i=0; i < fruite.length; i++){
//      document.write(fruite[i] + "<hr>")                             
//  }

// var student = ['mahesh','sammad','faraz','sharjeel']
// var fname = ['sadar','lyari']
// for (var i=0;i<student.length; i++){
//     for (var j=0; j<fname.length; j++) 
//         document.write(student[i] +" " + fname[j]+"<hr>")
// }
// var  student=["ali","mass","waqar","raza"]
// var score =[30,46,66,43]
// for (var i=0; i<student.length; i++){
//     for (var j=0; j+score.length; j+1)
//         document.write(student[i] + score [j]+"<hr>")
// }


var cars =['mehran','civic','alyo','foxi','audi']
var user= prompt("enter car name")

for(var i=0; i< cars.length; i++){

    
    if(user== cars[i]){document.write(user+"car find")}
        
}
// var cars=['mehran','civic','alyo','foxi','audi']
// var user = prompt("enter your car name")
// for(let i=0; i< cars.length;i++){
//     document.write(cars[i])
//     if(user == cars[i]){document.write(user+"car find")}
// }



























