# HW_04_Quiz_Game

Quiz game for demonstrating web API application

# Deployment

[Github Repository](https://github.com/langjeff/HW_04_Quiz_Game)
<https://langjeff.github.io/HW_04_Quiz_Game/>

# Requirements & Use-Case

The purpose of this application is to build a multiple choice test using javascript DOM manipulations and web API's.

- the page will load with a start button
- upon clicking the start button, the first question will display, and a countdown timer will start.
- the user will select an answer.
- if the answer is correct, the user will have 5 seconds added to the timer.
- if the answer is incorrect, 10 seconds will be taken off the timer.
- an alert will notify the user if they gave the correct or incorrect answer.
- if the user runs out of time, the game will end.
- after answering all questions, the program will display the user score and ask them if they would like to save that score.
- they may then restart the game.
- a link to view high scores will display all saved high scores.

# PsuedoCode and Logic

1. on.click event for start quiz button calls function for quiz and begins timer (setInterval).
2. on.click event for start quiz references array of objects in for loop and creates html elements to display content and choices.
3. event.listener for user choices stores userChoice and compares to correct answer in array object.
4. it true (userChoice = answer) increment to next question in array. Display correct. Add 5 seconds to timer.
5. if false (userChoice != answer) increment to next question. Display incorrect. Decrement timer interval 10 seconds.
6. if time runs out end quiz and display restart button.
7. score will be based on time remaining for quiz completion.
8. display final secure and create form input for initials with submit button and event.listener for storing to local.
9. get function to retrieve elements from local storage and JSON to store to array.
10. document.createElement to display high scores.

# Files in Repository

\*\* index.html
Contains .html structure and placeholders for created elements in quiz.

\*\* script.js
Contains javascript for all functions and variables neccessary for project requirements.

\*\* assets folder
has all image elements for project.

- this project also used bootstrap material design elements for styling.
  <https://mdbootstrap.github.io/bootstrap-material-design/>
