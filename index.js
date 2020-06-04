// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * In counter1, the value of count is declared on a function-level. However, in counter2, the value of count is declared on a global level.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * A closure is used in counter1 because count is defined on a function-level - it cannot be accessed outside the scope.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * 
 * Counter1 would be best used if you do not need to be able to reference count thoughout other areas of your code because it will not be accessible outside of the function it is within. 
 * Counter2 would be best if you will need to reference count in orher areas of the code because it is globally declared in this example.
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
let score = Math.floor(Math.random()* 3);
return score;
}
console.log(inning());
console.log(inning());
console.log(inning());
console.log(inning());
console.log(inning());
console.log(inning());
console.log(inning());
console.log(inning());
console.log(inning());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}
*/ 
function finalScore(cb,numInnings) {
  let homeTeam = 0; //setting starting scores to 0
  let awayTeam = 0;

  for (let i=0; i <= numInnings; i++) { //create our loop to loop through all innings
    homeTeam += cb();// set our two teams to callbacks - with the "+=", this reads as homeTeam = homeTeam + cb - callbacks are a function, so you add ()
    awayTeam += cb();
  }
  return "Home: " + homeTeam + "\nAway: " + awayTeam;
}
console.log(finalScore(inning,9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `inning` that you wrote above
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: 0 - 2
2nd inning: 1 - 3
3rd inning: 1 - 3
4th inning: 2 - 4
5th inning: 4 - 6
6th inning: 4 - 6
7th inning: 4 - 6
8th inning: 5 - 8
9th inning: 6 - 10

Final Score: 6 - 10 */

function scoreboard(cb,inningNum) { 
  let homeTeam = 0;
  let awayTeam = 0;
  let numInnings = 9;

   for (let i= 1; i <= numInnings; i++){
     homeTeam += cb();
     awayTeam += cb();
     inningNum += 1;
   }

   for (let i= 1; i <= numInnings; i++){
    homeTeam += cb();
    awayTeam += cb();
    inningNum += 1;
   }
   return ("Inning: " + inningNum + "\nHome: " + homeTeam + "\nAway: " + awayTeam);
 }
 console.log(scoreboard());


/*1. In your own words, define closure (1-2 sentences).

  Closure refers to defining the different variables and arguements the function needs allowing it to have all the information it requires to do what we are asking it to do. It allows the function a "memory"
  to refer to in order to know what something we put in means.

2. Study the following code, then answer the questions below.
```js
function personalDice(name){
  return function(){
      // generate random number between 1 and 6
    const newRoll = Math.floor(Math.random() * 6);
    console.log(`${name} rolled a ${newRoll}`)
  }
}

const dansRoll = personalDice("Dan");

const zoesRoll = personalDice("Zoe");


dansRoll();
dansRoll();
```

  a. Where is closure used in this code? How can you tell?
    
    The closure is in defining newRoll because it is on the function-level scope - cannot be accessed outside the function.

  b. Compare and contrast calling `dansRoll` the first and second time. What is always the same? What could change?
    
    Calling dansRoll each time will always result in an example of a dice roll that Dan made. What changes is the number he rolls because it is a random number generator.

  c. What is the lexical scope of `newRoll`? 

    The lexical scope is Math.floor(Math.random() * 6).
*/
