/*
Exercise 1: Define an empty array

1) Create an empty array and assign it to a variable called `foods`.

Exercise 1 has been completed for you:
*/

/*
const foods = [];  

//console.log('Exercise 1 result:', foods);


foods[0] = 'pizza'
foods[1] = 'cheeseburger'

//console.log('Exercise 2 result:', foods)

foods.unshift('taco')

//console.log('Exercise 3 results:', foods)

let favFood = foods[1]

//console.log('Exercise 4 result:', favFood)

foods.splice(2,0, 'tofu')

//console.log('Exercise 5 result:', foods)


foods[1] = 'sushi' 
foods.splice(2,0, 'cupcake')

//console.log('Exercise 6 result:', foods)

let yummy = foods.slice(1,3)

//console.log('Exercise 7 result:', yummy)

let soyIdx = foods.indexOf('tofu')

console.log('Exercise 8 results:', soyIdx)

console.log('Exercise 9 results:', foods.join('->'))

let hasSoup = foods.includes('soup')

console.log('Exercise 10 results:', hasSoup)
*/


/*
Exercise 11: Odd numbers from an array

1) Choose a method to iterate through the `nums` array.

2) Push each odd number to a new array named `odds`.

Hint: Initialize the `odds` variable to an empty array before the iteration.

Complete Exercise 11 in the space below:
*/

/*
const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
const odds = []
forEach( let i = 0; i < nums.length; i +=1){
    if(Number(that element)=== 'an odd number')
        push that nums element to the odds[]
}
!! I don't know how to make computer identify an odd number but the function should set up as this.!!


console.log('Exercise 11 result:', odds);
*/

/*
Exercise 12: FizzBuzz with arrays

1) Choose a method to iterate through the `nums` array. 

2. As you loop, sort the numbers into new arrays based on the following rules:

   - Push any number evenly divisible by 3 to an array called `fizz`.
   - Push any number evenly divisible by 5 to an array called `buzz`.
   - Push any number that is evenly divisible by 3 and 5 to an array called
     `fizzbuzz`.

   Note: A single number may meet more than one of the above rules. If it does,
         it should be placed in multiple arrays. For example, the number `15`
         will appear in the `fizz`, `buzz`, and `fizzbuzz` arrays.

Complete Exercise 12 in the space below:
*/

/*
const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
const fizz =[]
const buzz =[]
const fizzbuzz =[]
forEach(let i = 0; i < nums.length; i +=1){
    if(num === 'to a number evenly divisible by 3'){
        push that number into fizz[]
    } else if(num === 'to a number evenly divisible by 5'){
        push that number into buzz[]
    }else if(num === fizz[] && buzz[]){
        push that number into fizzbuzz[]
    } else {
        leave number alone 
    }
}
!! once again I don't know formulas for code to be run but I think i understand what is being asked!!
console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzbuzz:', fizzbuzz);
*/

