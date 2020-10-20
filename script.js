// object array for questions
var questions = [
    {question: "This meme is affectionately known as:",
    choices: ["Attracted Boyfriend", "Distracted Boyfriend", "Annoyed Girlfriend", "Red Dress"],
    answer: "Distracted Boyfriend",
    meme: "./assets/distracted.jpg"    
    },
    {question: "What is my name?",
    choices: ["Dog", "Shiba", "Doge", "Cat"],
    answer: "Doge",
    meme: "./assets/doge.png"    
    },
    {question: "Where did this meme come from?",
    choices: ["Futurama", "Rick & Morty", "American Dad", "Family Guy"],
    answer: "Family Guy",
    meme: "./assets/farm.jpg"    
    },
    {question: "Greg is a...",
    choices: ["Good Guy", "Bad Guy", "Stoned Guy", "Philosoraptor"],
    answer: "Good Guy",
    meme: "./assets/greg.jpg"    
    },
    {question: "My nickname is:",
    choices: ["Mike", "Jump", "Air", "King"],
    answer: "Air",
    meme: "./assets/jordan.jpg"    
    },
    {question: "Where is he walking into?",
    choices: ["DisneyLand", "Sauron", "Winterfell", "Mordor"],
    answer: "Mordor",
    meme: "./assets/mordor.jpg"    
    },
    {question: "What team do I play for?",
    choices: ["Brooklyn Nets", "Golden State Warriors", "Toronto Raptors", "Cleveland Caviliers"],
    answer: "Brooklyn Nets",
    meme: "./assets/mvp.jpg"    
    },
    {question: "I am a:",
    choices: ["Diknowitall", "Jurassiphiser", "Sageasauras", "Philosoraptor"],
    answer: "Philosoraptor",
    meme: "./assets/raptor.jpg"    
    },
    {question: "Come with me, and you see, a world of...",
    choices: ["Much Procastination", "Pure Imagination", "Sad Lamentation", "Infinite Experimentation"],
    answer: "Pure Imagination",
    meme: "./assets/willy.jpg"    
    },
];


// VARIABLES FOR DOM
var highScoresEl = document.querySelector("#highScores");
var quizReturnEl = document.querySelector("#quizLink");
var cardEl = document.querySelector(".card-body");
var imageEl = document.querySelector(".card-img-top")
var questionEl = document.querySelector(".card-title");
var startEl = document.querySelector("#startButton");
var paragraphEl = document.querySelector(".card-text");
var choicesEl = document.querySelector("#choicesMenu");
var inputEl = document.querySelector("#userInitials");
var formEl = document.querySelector("#userData");
var scoreEl = document.querySelector("#scores");
var progressEl = document.querySelector(".progress-bar");
// VARIABLES FOR QUIZ

var questionNumber = 0;
var choicesArray = questions[questionNumber].choices;
var finalScore;
var highScoreStore = [];
var quizTime = 100;

// FUNCTION TO RENDER HIGH SCORES from local storage and push them to highScoreStore
function renderHighScores () {
    //checks local storage for localScores item
    if(JSON.parse(localStorage.getItem("localScores")) === null) {
        return;
    }
    // if localScores is in local storage, parses string to highScoreStore array.
    highScoreStore = JSON.parse(localStorage.getItem("localScores"));
}
//FUNCTION TO SORT HIGH SCORES
function scoreSort() {
    highScoreStore.sort(function(a, b) {
        return b.score -a.score;
    });
}


//FUNCTION TO VIEW HIGH SCORES
    function viewHighScores() { 
    renderHighScores();
    scoreSort();    
    cardEl.innerHTML = " ";
    imageEl.setAttribute("src","./assets/titleCard.png");
    quizReturnEl.style.display = "inline";
    highScoresEl.style.display = "none";

    // create table for high scores list
    var scoreTable = document.createElement("table");
    //set attributes for new element
    scoreTable.setAttribute("id","scoreTable");
    scoreTable.setAttribute("class","table");
    scoreTable.setAttribute("style","width: 50%; margin: auto;");
    // append element
    scoreEl.appendChild(scoreTable);
    // create variable for element to append to
    var scoreTableEl = document.querySelector("#scoreTable");
    
        // create high scores header
        var scoreHeader = document.createElement("thead");
        //set attributes for new element
        scoreHeader.setAttribute("id","scoreHead");
        // append element
        scoreTableEl.appendChild(scoreHeader);
        // create variable for element to append to
        var scoreHeaderEl = document.querySelector("#scoreHead");

            // create table row high scores header
            var scoreHeadRow = document.createElement("tr");
            //set attributes for new element
            scoreHeadRow.setAttribute("id","scoreHeadRow");
            // scoreTable.setAttribute("class","table");
            // scoreTable.setAttribute("style","width: 50%; margin: auto;");
            // append element
            scoreHeaderEl.appendChild(scoreHeadRow);
            // create variable for element to append to
            var scoreHeadRowEl = document.querySelector("#scoreHeadRow");

                // create table headers
                var tableHeader1 = document.createElement("th");
                //set attributes for new element
                tableHeader1.setAttribute("scope","col");
                tableHeader1.textContent = "Initals";
                // append element
                scoreHeadRowEl.appendChild(tableHeader1);

                var tableHeader2 = document.createElement("th");
                //set attributes for new element
                tableHeader2.setAttribute("scope","col");
                tableHeader2.textContent = "Score";
                // append element
                scoreHeadRowEl.appendChild(tableHeader2);

        //create table body
        var tableBody = document.createElement("tbody");
        tableBody.setAttribute("id", "tableBod");
        scoreTableEl.appendChild(tableBody);
        var tableBodyEl = document.querySelector("#tableBod");    

    for (var j=0; j < highScoreStore.length; j++) {
        //create table row for each stored score
        var tableRow = document.createElement("tr");
        tableRow.setAttribute("id","trow"+j);
        tableBodyEl.appendChild(tableRow);
        var tableRowEl = document.querySelector("#trow"+j);
        var tableDataInit = document.createElement("td");
        tableDataInit.textContent = highScoreStore[j].initials;
        tableRowEl.appendChild(tableDataInit);
        var tableDataScore = document.createElement("td");
        tableDataScore.textContent = highScoreStore[j].score;
        tableRowEl.appendChild(tableDataScore);        
        console.log(highScoreStore[j].initials + "      " + highScoreStore[j].score);
    }    
}

// FUNCTION TO RETURN TO QUIZ
function reloadQuiz() {
    location.reload();
}    

// EVENT LISTENER FOR START BUTTON
startEl.addEventListener("click", function () {
    //hide p element
    paragraphEl.style.display = "none";
    //hide start button element
    startEl.style.display = "none";
    getQuestions();
    timer();
})

// FUNCTION TO BE CALLED TO GET QUESTIONS FOR DISPLAY
function getQuestions() {
        //clears alert
        // changes image src attribute
        imageEl.src = questions[questionNumber].meme;
        //changes question 
        questionEl.textContent = questions[questionNumber].question;
        // calls get choices functions to create buttons for userChoice
        createChoices();
};

// FUNCTION TO BE CALLED TO CREATE BUTTTONS FOR QUESTION CHOICES
function createChoices() {
        for (i=0; i < choicesArray.length; i++) {
        var choiceButton = document.createElement("button");
        choiceButton.setAttribute("type","button");
        choiceButton.setAttribute("class","btn btn-outline-secondary btn-lg btn-block");
        choiceButton.setAttribute("style","width: 50%; margin: auto; padding: 1em; white-space: normal");
        choiceButton.setAttribute("id","choice");
        choiceButton.textContent = questions[questionNumber].choices[i];
        choicesEl.appendChild(choiceButton);
        };
}

 // EVENT LISTENER FOR USER SELECTION
document.addEventListener("click", function(event) {
        // conditional to evaluate element id click
        if (event.target.matches("#choice")) {
        // set variable for userChoice to be compared to question answer    
        var userChoice = event.target.textContent;
        // evaluate if answer is right
        if(userChoice === questions[questionNumber].answer) {
            //increase time by 5 seconds
            quizTime += 5;
            //increment question number and see if any questions remain            
            questionNumber ++;
            // conditional for end of questions
            if (questionNumber <= (questions.length - 1)) {
                choicesEl.innerHTML = "";
                getQuestions();
                correct();
            } else {
                choicesEl.innerHTML = "";
                correct();
            }
            
        } 
        else {
            //decrease time by 10 seconds
            quizTime -= 10;
            //increment question number and see if any questions remain            
            questionNumber ++;
            // conditional for end of questions
            if (questionNumber <= (questions.length - 1)) {
                choicesEl.innerHTML = "";
                getQuestions();
                incorrect();
            } else {
                choicesEl.innerHTML = "";
                correct();
            }
                

        } 
        
    }
})

// FUNCTION TO BE CALLED FOR CORRECT CHOICE
function correct () {
    var correctChoice = document.createElement("div");
    correctChoice.setAttribute("role","alert");
    correctChoice.setAttribute("class","alert alert-success");
    correctChoice.setAttribute("style","width: 50%; margin: auto; padding: 1em");
    correctChoice.textContent = "That's right. You gain 5 seconds!";
    choicesEl.appendChild(correctChoice);
}
// FUNCTION TO BE CALLED FOR INCORRECT CHOICE
function incorrect () {
    var incorrectChoice = document.createElement("div");
    incorrectChoice.setAttribute("role","alert");
    incorrectChoice.setAttribute("class","alert alert-danger");
    incorrectChoice.setAttribute("style","width: 50%; margin: auto; padding: 1em");
    incorrectChoice.textContent = "That's incorrect. You lose 10 seconds!";
    choicesEl.appendChild(incorrectChoice);
}
//FUNCTION FOR TIMER
function timer() {
    // sets up timer and passes value to progress bar element
    var timerClock = setInterval(function() {
        progressEl.style.width = (quizTime + "%");
        quizTime --;
        // conditional for end of time or end of game
    //parameters for time expiration
    if (quizTime <= 0) {
        clearInterval(timerClock);
        choicesEl.innerHTML = " ";
        progressEl.style.width = (quizTime + "%");
        questionNumber = 0;
        questionEl.textContent = "You ran out of time.";
        var restartButton = document.createElement("button");
        restartButton.setAttribute("type","button");
        restartButton.setAttribute("class","btn btn-outline-secondary btn-lg btn-block");
        restartButton.setAttribute("style","width: 50%; margin: auto; padding: 1em");
        restartButton.setAttribute("id","restart");
        restartButton.textContent = "Restart";
        choicesEl.appendChild(restartButton);
        imageEl.src = "./assets/fail.jpg";
    }
    //parameters for quiz finish
    else if (questionNumber === (questions.length)) {
        clearInterval(timerClock);
        choicesEl.innerHTML = " ";
        questionNumber = 0;
        questionEl.textContent = "Your score is " + quizTime + "!";
        var restartButton = document.createElement("button");
        restartButton.setAttribute("type","button");
        restartButton.setAttribute("class","btn btn-outline-secondary btn-lg btn-block");
        restartButton.setAttribute("style","width: 50%; margin: auto; padding: 1em");
        restartButton.setAttribute("id","restart");
        restartButton.textContent = "Restart";
        choicesEl.appendChild(restartButton);
        imageEl.src = "./assets/success.jpg";
        // form element to record user initials & push high score to local storage
        formEl.setAttribute("style","width: 50%; margin: auto; display: block; margin-top: 5px;");
        formEl.addEventListener("submit", function(event) {
        event.preventDefault();
        var initialsText = inputEl.value;
        // Return from function early if submitted todoText is blank
        if (initialsText === "") {
            return;
        }
        console.log(initialsText);
        // store object for userinitials and score
        var userScore = {
            initials: initialsText,
            score: quizTime
        }
        // pushes values from userScore to highScoreStore variable
        var localScores = localStorage.getItem("localScores"); 
        if (localScores === null) {
            localScores = [];
        } 
        else {
        localScores = JSON.parse(localScores);
        }
        localScores.push(userScore);
        var storeScores = JSON.stringify(localScores);
        localStorage.setItem("localScores", storeScores);
        inputEl.value = "";
        });
    }
    }, 1000);
}

//EVENT LISTENER FOR RESTART BUTTON
    document.addEventListener("click", function(event) {
    // conditional to evaluate element id click
    if (event.target.matches("#restart")) {
    location.reload();
    }
})

