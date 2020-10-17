# HW_04_Quiz_Game
Quiz game for demonstrating web API application

# Deployment


# Requirements & Use-Case
The purpose of this application is to build a multiple choice test using javascript DOM manipulations and web API's. 

* the page will load with a start button
* upon clicking the start button, the first question will display, and a countdown timer will start.
* the user will select an answer.
* if the answer is correct, a user will have a point added to their score.
* if the answer is incorrect, 5 seconds will be taken off the timer.
* an alert will notify the user if they gave the correct or incorrect answer.
* after answering all questions, the program will display the user score and ask them if they would like to save that score.
* they may then restart the game.

# PsuedoCode and Logic
1. on.click event for start quiz button calls function for quiz and begins timer = 15sec X # of questions. 
2. arrays are appended to html to display quiz questions with event listener for selections.
3. conditional statements evaluate selected answer and correct answer.
4. if correct, 10 points are added to users score textcontent "CORRECT".
5. if incorrect, 10 seconds are deducted from users time textcontent "INCORRECT".
6. variable will keep track of number of right answers.
7. score will be based on number of right answers + time remaining.
8. textcontent final score.
9. local storage to store final score and user name.
10. high score page to retrieve high scores and display.
