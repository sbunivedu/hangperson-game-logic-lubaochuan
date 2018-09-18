# TDD: Hangperson Game Logic

In this assignment you'll practice the basic cycle of TDD (in a disciplined way).

The full Agile cycle includes talking to the customer, using BDD to develop
scenarios, turning those scenarios into runnable integration/acceptance tests
with Cucumber, using those scenarios plus TDD to drive the creation of actual
code, and deploying the result.

You provided JavaScript tests
(in [Jasmine](https://jasmine.github.io/2.1/introduction.html)) to help you
develop the game logic for the popular word-guessing game Hangman.
Normally, you'd develop these tests yourself as you code.

Later on we'll make the Hangman game available as a web app. We'll use Cucumber
to describe how gameplay will work from the user/player's perspective and as
"full stack" integration tests. In the full Agile cycle, you'd develop Cucumber
scenarios yourself based on consultation with the customer, and create the
necessary step definitions (Cucumber code that turns plain-English scenarios
into runnable tests).

## Goals
Use test-driven development (TDD) to develop the game logic for Hangman.
The tests are provided. You will need to think about what data is necessary to
capture the game's state.

## Overview
Our Web-based version of the popular game "hangman" works as follows:

* The computer picks a random word
* The player guesses letters in order to guess the word
* If the player guesses the word before making seven wrong guesses of letters,
  they win; otherwise they lose. (Guessing the same letter repeatedly is simply
  ignored.)

## Steps
* Clone this repo in your working environment.
* Change into the directory of the repo and "preview" `SpecRunner.html`.
  Jasmine will look for test files under `spec/` and the corresponding class
  files in `src/`.

We've provided a set of 18 test cases to help you develop the game class. Take a
look at `spec/HangpersonGameSpec.js`. It specifies behaviors that it expects
from the class `lib/HangpersonGame.js`.

The describe 'Hangperson Game' block means "the following block of tests
describe the behavior of a 'new' HangpersonGame instance." A new instance of
the game class is created, and the "it" blocks verify the presence and values
of instance variables.

*Self-check*: According to our test cases, how many arguments does the game
class constructor expect, and therefore what is the first line of the method
definition look like that you must add to ```HangpersonGame.js```?

*Self-check*: According to the tests in this describe block, what instance
variables is a HangpersonGame expected to have?
`word`, `correct_guesses`, and `wrong_guesses`.

Continue in this manner, focusing on one testcase/example at a time working
your way down the specs, until you've implemented all the instance methods of
the game class: `guess`, which processes a guess and modifies the instance
variables wrong_guesses and `correct_guesses` accordingly; `check_win_or_lose`,
which returns one of the strings `win`, `lose`, or `play` depending on the
current game state; and `word_with_guesses`, which substitutes the correct
guesses made so far into the word.

## Debugging Tip
You can debug your code in your workspace by running the executable code
(outside of your class definition) in `HangpersonGame.js` as follows:
```shell
node src/HangpersonGame.js
```
You will see all console output in the command line.

You can also use online JavaScript environment to experiment and debug your code:
* http://jsbin.com
* https://jsfiddle.net

There are many online resources for JavaScript programming and TDD. Here are
two examples:
* https://www.pluralsight.com/guides/introduction-to-test-driven-development-in-javascript
* https://scotch.io/tutorials/better-javascript-with-es6-pt-ii-a-deep-dive-into-classes
