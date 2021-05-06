## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
7) Think about how to validate each of your steps
8) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
9) Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.



##HTML
Header
-For Logo and instructions purposes
Three Images (one for Rock, Paper, Scissors)
-Why-For user selection(input)
Submit button
-Why? To compare user guess and machine choice
DIV1
-Why? To display game results
DIV2
-Why? Display total number of games played


##STATE
Game State
-let gamesPlayed = 0
Reset Game
-

##EVENTS
ButtonClick
-What should happen?
    -User guess should be captured
    -Machine Throw should be captured
    -Total games tallied/Logged
    -Wins/losses tallies /logged
Presented to HTML


