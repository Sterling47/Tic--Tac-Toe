## Overview
 A javaScript application that re-creates the game, tic-tac-toe. The objective of the game is for the player to get three of their tokens in a row horizontally, vertically, or diagnolaly. If no one wins then the game is declared a draw, no points are awarded, and the game startsover.
 If there is a win the player who won will have their score updated and the game resets to the player who didnt start the last game.

## Tech 
HTML5, CSS, and JavaScript

## Setup
 ### Deploy
 [Play Game](https://sterling47.github.io/Tic--Tac-Toe/)
 ### Fork & Clone
 1. Click [Repo](https://github.com/Sterling47/Tic--Tac-Toe)
 2. Fork and clone to local enviroment.
 3. cd into Tic-Tac-Toe
 run open index.html
 4. Enjoy!

## Preview
![screenShot1](https://private-user-images.githubusercontent.com/116218432/324914110-f3cd6e35-ac5b-44eb-81e5-919581c98f12.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTM4ODk5ODcsIm5iZiI6MTcxMzg4OTY4NywicGF0aCI6Ii8xMTYyMTg0MzIvMzI0OTE0MTEwLWYzY2Q2ZTM1LWFjNWItNDRlYi04MWU1LTkxOTU4MWM5OGYxMi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNDIzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDQyM1QxNjI4MDdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT00NjM1Yzk3MGMyNWI3ZjQ1MDA5Njc2YzQxMTc5MDAxNTdlMzQxNmU4MGMxODkxMmZhY2Y1NTMzMjRlNTc4MDgxJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.1hEdbz3WN4fwkufs8_EdXo6_e0WEcy9FJKbBOWiBuyg)

![Draw](https://private-user-images.githubusercontent.com/116218432/324917248-378f7b07-82cf-49ac-98a2-8b866f7b6346.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTM4OTAyNzQsIm5iZiI6MTcxMzg4OTk3NCwicGF0aCI6Ii8xMTYyMTg0MzIvMzI0OTE3MjQ4LTM3OGY3YjA3LTgyY2YtNDlhYy05OGEyLThiODY2ZjdiNjM0Ni5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNDIzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDQyM1QxNjMyNTRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1jMDc5OWNhN2FlMTBmYWQ4ZDkwNWUzMTA3NDAzODM2ODRjZTVkNjE2NGNlZDZkM2Y2ZGVjYmFkYmJjNjA3NzcyJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.cWGFPrq5QPvwTEEAyXpb5dQoVu2fe0P1MiA7DKsrJHY)

![Player2Wins](https://private-user-images.githubusercontent.com/116218432/324917223-41b347f3-bbb7-43ce-a483-6dd60ac62846.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTM4OTAyNzQsIm5iZiI6MTcxMzg4OTk3NCwicGF0aCI6Ii8xMTYyMTg0MzIvMzI0OTE3MjIzLTQxYjM0N2YzLWJiYjctNDNjZS1hNDgzLTZkZDYwYWM2Mjg0Ni5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNDIzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDQyM1QxNjMyNTRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mMzRmYWI4MDk1YzYwNTgyZGFiM2M3ZmVhODA0Nzk5NGQyZDViNmVlODNlZGQxMzkxZjJmNjk0OWRjYTI5ZGZjJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.Nc2uU0AA2SfPxTzYIzrFYipRXjK4can5fCaCrrCRYmo)

## Context
This is my final solo project for the end of Mod 1. This project showcases my understanding and use of, functions, for loops, if statements, querySelectors and eventListeners. I incorporate these tools in my application by checking for win and draw conditions, updating the dom and updating the data model.

## Contributers
  Adam Konber [Github](https://github.com/Sterling47)

## Learning Goals
- Solidify and demonstrate your understanding of:
  - DRY JavaScript
  - event delegation to handle similar event listeners
- Understand the difference between the data model and how the data is displayed on the DOM
- Iterate through/filter DOM elements using for loops
- Use your problem solving process to break down large problems, solve things step by   step, and trust yourself to not rely on an outside “answer” to a logical challenge

## Wins & Challenges
  ### wins
  I kept my main.js file very organized and adhere to a proffesion git workflow.
  ### Challenges
  I attempted a Kanban but got overwelhemd due to lack of knowledge. plan to research up on it during intermission.

  I had an issue once the game reset it wouldnt allow the player to click on the cells.
  I realized i was calling all my other functions in my resetGame and StartGame functions in the imporper or resulting in currentPlayersTurn function to interfere. 


