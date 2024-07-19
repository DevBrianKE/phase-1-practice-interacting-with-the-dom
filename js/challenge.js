// Enforce strict mode to catch common mistakes
"use strict"; 

//fuction to start the timer
const startTimer = () => {
    return setInterval(() => {
        //Get the counter element by id
        const counter = document.getElementById("counter")
        //Convert the counter's text to an integer
        const count = parseInt(counter.innerText)
        //Increment the counter by 1 and and update the displayed text
        counter.innerText = count + 1
    }, 1000) //execute every 1 seond
};

//start the timer when the page loads
let interval = startTimer()
