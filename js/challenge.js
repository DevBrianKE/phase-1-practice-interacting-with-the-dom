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


//getting refrences to the buttons and comment form by there IDs for use in event listeners
const minus = document.getElementById("minus")
const plus = document.getElementById("plus")
const heart = document.getElementById("heart")
const pause = document.getElementById("pause")
const commentForm = document.getElementById("comment-form")

//adding event listener for minus button
minus.addEventListener("click",() => {
    //get the conuter element by ID
    const counter = document.getElementById("counter")
    //convert the counter's text to an interger
    const count = parseInt(counter.innerText)
    //decrement the counter;s value by 1 and update the displayed text
    counter.innerText = count - 1
})

//adding event listener for plus button
plus.addEventListener("click", () => {
    //get the counter by its ID
    const counter = document.getElementById("counter")
    //convert the counter's text to an integer
    const count = parseInt(counter.innerText)
    //increment the counter's value by1 and update the displayed text
    counter.innerText = count + 1
})