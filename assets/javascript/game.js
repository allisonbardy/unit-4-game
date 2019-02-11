// varibles to start at zero
var wins = 0;
var losses = 0;
var userScore = 0;
// generates random value for each crystal between 1-12
var redRan = Math.floor(Math.random() * 11 + 1);
var blueRan = Math.floor(Math.random() * 11 + 1);
var pinkRan = Math.floor(Math.random() * 11 + 1);
var greenRan = Math.floor(Math.random() * 11 + 1);
// generates random target score between 19-120
var targetGen = Math.floor(Math.random() * 101 + 19);

// start game function
function start() {
// set starting variables as text into document
    $("#target").text(targetGen);
    $("#userScore").text(userScore);
    $("#wins").text(wins);
    $("#losses").text(losses);
};

start();

// clicking on each crystal, random value of crystal will be added to user score
$("#red").on("click", function() {
    userScore += redRan;
    $("#userScore").text(userScore);
    // if user score matches target score, check if user wins
    if (userScore === targetGen) {
        checkWin();    
    }
    // if user score greater than targe score, check if user loses
    else if (userScore >= targetGen) {
       checkLose();
    }
});
$("#blue").on("click", function() {
    userScore += blueRan;
    $("#userScore").text(userScore);
    if (userScore === targetGen) {
        checkWin();
    }
    else if (userScore >= targetGen) {
        checkLose();
    }
});
$("#pink").on("click", function() {
    userScore += pinkRan;
    $("#userScore").text(userScore);
    if (userScore === targetGen) {
        checkWin();
    }
    else if (userScore >= targetGen) {
        checkLose();
    }
});
$("#green").on("click", function() {
    userScore += greenRan;
    $("#userScore").text(userScore);
    if (userScore === targetGen) {
        checkWin();
    }
    else if (userScore >= targetGen) {
       checkLose();
    }
});
// if user score matches target score 
function checkWin() {
    // inscrease wins by 1
    wins++;
    $("#wins").text(wins);
    // set user score to 0 
    userScore = 0;
    $("#userScore").text(userScore);
    // generate a new random target score
    targetGen = Math.floor(Math.random() * 101 + 19);
    $("#target").text(targetGen);
    // reset crysal values
    resetCrys();
    // alert user they won
    alert("Congratulations! You Win!");
 };
 // if user score greater than targt score
 function checkLose() {
     // increase losses by 1
    losses++;
    $("#losses").text(losses);
    // set user score to 0
    userScore = 0;
    $("#userScore").text(userScore);
    // generate new random target score
    targetGen = Math.floor(Math.random() * 101 + 19);
    $("#target").text(targetGen);
    //reset crystal values
    resetCrys();
    // alert user they lost
    alert("Sorry! You Lose!");
 };
 // resets crystal to have random values between 1-12
 function resetCrys() {
    blueRan = Math.floor(Math.random() * 11 + 1);
    greenRan = Math.floor(Math.random() * 11 + 1);
    redRan = Math.floor(Math.random() * 11 + 1);
    pinkRan = Math.floor(Math.random() * 11 + 1);
 };