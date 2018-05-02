//commenting for fun
/* ok 
ok  */

var name = "obinna";
var cow = true;
var boy = 365;

console.log( name + cow + boy  );


var price = 15; // price of hammer 
var money = 57; // money on me 

if (money >= price){
    console.log("buy")
} else{
    console.log("dont buy")
};

var x =1;
while( x <= 10){
    console.log( x + "obinna")
    x = x + 1 ;
}

for( var x=8 ; x < 6; x++){
    console.log(x = "printing out x ")
}

function isPrime(yam) {
    for( var x=2; x < yam ; x++){
        if( yam % x  === 0){
            console.log( yam + "can be divided by" + x );
            return false;
        }
    }
    return true;
}

    var cool = ["name","something","everything"];
    console.log( cool [1])


function coolStuff(ok) {var i = "amanda";
console.log(i.toUpperCase);
}

for(i=0;i<=4;i++){
    for(j=0;j<=i;j++){
        printf("*")
    }

}



var x =x(prompt("what is your number", ""));
alert("your number is the squareRoot of"+ x * x)

var w = obinna(prompt("what is your name"));

for(var x = 0; x<=7;x++){
console.log("*");
}

for(var x = 0; x<=7; x++){
    for(var line ="*"; line.length<8; line+="*"){
        Console.log(line);
    }
}

for(var line ="*"; line<8; line+="*"){
    console.log(line);
}
for(var x = 0; x<=7; x++){
    for(var line ="*"; line.length<8; line+="*"){
        Console.log(line);
    }
}; 

var x = name (prompt("enter a number", ""));
if(x % 3 === 0){
    alert("your number is a fizz");
   
} else if( x % 5 ===0){
    alert("your number is a fizz");
    
};

var x = Number(prompt("enter a number", ""));
if(x % 3 === 0){
    alert("your number is a fizz");
   
} else if( x % 5 ===0){
    alert("your number is a fizz");
    
};

for( var x =1; x<=100; x++){
    var outPut=Number(prompt("enter a number", ""));
    if (outPut % 3 === 0 ){
        console.log(output+="fizz")} 
    else if(outPut % 5 === 0 ) {
        console.log(output+="buzz")
    }
    else if (!outPut % 3 === 0 && outPut % 5 === 0) output+="not involved"
    
}

var theNumber = Number(prompt("Pick a number", "")); alert("Your number is the square root of " + theNumber * theNumber); 
var theNumber = Number (prompt("ok" , "")); alert("ok ok ");


(prompt("ok ok "))

for( var x =10 ; x<6; x++){
    for(var obinna ="#";obinna.length<5; obinna+="#"){
console.log(obinna);
}}

for( var x =1; x<=100; x++){
    var outPut=Number(prompt("enter a number", ""));
    if (outPut % 3 === 0 ){
        console.log(output+="fizz")} 
    else if(outPut % 5 === 0 ) {
        console.log(output+="buzz")
    }
    else if (!outPut % 3 === 0 && outPut % 5 === 0) output+="not involved"
    
}
/*  the code below iterates numbers
from 1- 100 and outputs 
fizz for /2 and buzz for /3
and fizzbuzz for both */
for(var x =1; x<=100; x++){
    
    if(x % 2 ===0 ){
        console.log("fizz");
    }
    else if(x % 3 ===0){
        console.log("buzz")
    };

    if(x % 2 === 0 && x % 3 ===0){
        console.log("fizzBuzz")
    }
    else{
        console.log(x)
    }
}   

/* chess board code */
//ways to write a function 

function obinna(){

};

const obinna = ()=>{

}

function minus(a,b){
    if(b === undefined){
        return -a
    }
    else{
        return a - b 
    }
}

function obinna (cow, chicken){
    let cowString = String(cow);
    while(cowString.length<3){
        cowString = "0" + cowString ;
    }
    console.log(`${cowString} Cow `);
    
}
obinna(7);

const student = {
    name: "john",
    age : 16 ,
    score : {
        maths : 65 ,
        english : 70,
        gov : 40
    }
    

};
function displayResult (student){
        console.log('Hello,' + student.name  );
        console.log('your maths score is '+ (student.score.maths || 0 ));
}

displayResult(student);

const game = [obinna,daniel,david,oscar] 
console.log(game[0]);

function show(word1,word2){
    if( typeof(word1 && word2) == "string"){
        var String1 = word1.toLowerCase().split('').sort().join('');
        var String2 = word2.toLowerCase().split('').sort().join('');
  
    if (String1 ==  String2){
        return true
    } else {
        return false
    };
}
}
console.log(show("army","mary"));