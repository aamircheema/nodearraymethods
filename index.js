// The length property

const capitals = ['Mosco', 'Washington', 'Beijing', 'Islamabad', 'Paris' ];

const numOfCapital  = capitals.length;

console.log(numOfCapital);
//input = const numOfCapital  = capitals.length;
//output = 5


// Array push method

let push = capitals.push('London');

console.log(capitals);

// input = [ 'Mosco', 'Washington', 'Beijing', 'Islamabad', 'Paris'] 
// output = [ 'Mosco', 'Washington', 'Beijing', 'Islamabad', 'Paris', 'London' ] 


//Array pop method 

capitals.pop();
console.log(capitals);

// input = [ 'Mosco', 'Washington', 'Beijing', 'Islamabad', 'Paris', 'London' ] 
// output = [ 'Mosco', 'Washington', 'Beijing', 'Islamabad', 'Paris'] 

//Array shift

 capitals.shift()
console.log(capitals);
//Input = [ 'Mosco', 'Washington', 'Beijing', 'Islamabad', 'Paris', 'London' ] 
// output = [ 'Washington', 'Beijing', 'Islamabad', 'Paris', 'London' ] 

//Array unshift

capitals.unshift('Islamabad');
console.log(capitals);
// input =  [ 'Washington', 'Beijing', 'Islamabad', 'Paris', 'London' ] 
// output = [ 'Islamabad', 'Washington', 'Beijing', 'Islamabad', 'Paris' ]

//Array toString

let convert = capitals.toString();
console.log(convert)

//input = [ 'Islamabad', 'Washington', 'Beijing', 'Islamabad', 'Paris' ]
//output = Islamabad,Washington,Beijing,Islamabad,Paris

//Array join method
let join  = capitals.join(' # ');
console.log(join);
console.log(capitals);
// input = [ 'Islamabad', 'Washington', 'Beijing', 'Islamabad', 'Paris' ]
// output = Islamabad # Washington # Beijing # Islamabad # Paris


//array concat
let newCapital = ['Ottawa'];
let addTwoArray = capitals.concat(newCapital)

console.log(addTwoArray)
//input = [ 'Islamabad', 'Washington', 'Beijing', 'Islamabad', 'Paris' ]
//output = ['Islamabad','Washington','Beijing','Islamabad','Paris','Ottawa']

//Array splice method

capitals.splice(0,0,'Kabul');
console.log(capitals);
// input = [ 'Islamabad', 'Washington', 'Beijing', 'Islamabad', 'Paris' ]
// output = [ 'Kabul', 'Islamabad', 'Washington', 'Beijing', 'Islamabad', 'Paris' ]

//Array slice method
let newList = capitals.slice(0,3);
console.log(newList)
//input = [ 'Kabul', 'Islamabad', 'Washington', 'Beijing', 'Islamabad', 'Paris' ] 
//output = [ 'Kabul', 'Islamabad', 'Washington' ]


//Array sort method 
capitals.sort();
console.log(capitals);

//input = [ 'Kabul', 'Islamabad', 'Washington', 'Beijing', 'Islamabad', 'Paris' ]  
//output = [ 'Beijing', 'Islamabad','Islamabad', 'Kabul', 'Paris', 'Washington' ]

//Array reverse method
capitals.reverse();
console.log(capitals)
//input = [ 'Beijing', 'Islamabad','Islamabad', 'Kabul', 'Paris', 'Washington' ]
//output = [ 'Washington', 'Paris', 'Kabul', 'Islamabad', 'Islamabad', 'Beijing' ]

//Array map method
let numbers = [3, 4, 6, 7, 8, 9]
let  square = numbers.map( number => number*number);
console.log(square);

//input = [3, 4, 6, 7, 8, 9]
//output = [ 9, 16, 36, 49, 64, 81 ]

//Array Filter method 
let smallNumfrom7 = numbers.filter( number => number < 7)
console.log(smallNumfrom7);
//input = [3, 4, 6, 7, 8, 9]
//output = [ 3, 4, 6 ]

//Array reduce 
let sum = numbers.reduce((a,b) => {
    return a + b;
}, 0);
console.log(sum);
//input = [3, 4, 6, 7, 8, 9]
//output = 37

//Array every
let a = numbers.every( number => number>5);
console.log(a);
//input = [3, 4, 6, 7, 8, 9]
//output = false


//Array find methhod

let firstOddNum  = numbers.find((number)=> number%2!==0);
console.log(firstOddNum);
//input = [3, 4, 6, 7, 8, 9]
//output = 3;

// Array indexof 

 let oddNumIndex = numbers.findIndex(number => number%2 ===0);
 console.log(oddNumIndex);
 //input = [3, 4, 6, 7, 8, 9]
 //output = 1


//Array form

let arr = Array.from('lucifer');
console.log(arr);

//input  = Array.from('lucifer')
//output = ['l', 'u', 'c', 'i', 'f', 'e', 'r']

//Array keys
const keys = capitals.keys();
for(let key of keys){
    console.log(key);
}

//Array entries
 let f = capitals.entries();
 for(let x of f){
    console.log(x)
 }
//input =[ 'Washington', 'Paris', 'Kabul', 'Islamabad', 'Islamabad', 'Beijing' ] 
 /*-- output = [ 0, 'Washington' ]
[ 1, 'Paris' ]
[ 2, 'Kabul' ]
[ 3, 'Islamabad' ]
[ 4, 'Islamabad' ]
[ 5, 'Beijing' ]  --*/

//Array includes method
let include = capitals.includes('Kabul');
console.log(include);
//input =[ 'Washington', 'Paris', 'Kabul', 'Islamabad', 'Islamabad', 'Beijing' ] 
//output = true

// Spread Operator method
let score1 = [12, 23, 34, 55];
let score2 = [12, 23, 34, 55];
let score = [...score1, ...score2];
console.log(score);

//input =[...score1, ...score2]
// output = [12, 23, 34, 55,12, 23, 34, 55]


//Array.isArray()

let check = Array.isArray(capitals);
console.log(check)
//input = Array.isArray(capitals)
//output = true
