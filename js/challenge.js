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

heart.addEventListener("click", () => {
    const counter = document.getElementById("counter");
    // Get the counter element by its ID
    const count = parseInt(counter.innerText);
    // Convert the counter's text to an integer
    const likes = document.querySelector(".likes");
    // Get the likes list element
    let existingLike;

    // Check if the current counter value has already been liked
    if ([...likes.children].map(child => parseInt(child.dataset.num)).includes(count)) {
        existingLike = document.querySelector(`[data-num="${count}"]`);
        // Get the existing like element for the current counter value
        const likeCount = parseInt(existingLike.children[0].innerText);
        // Get the current like count
        existingLike.innerHTML = `${count} has been liked <span>${likeCount + 1}</span> times`;
        // Increment the like count and update the displayed text
    } else {
        existingLike = document.createElement("li");
        // Create a new list item element
        existingLike.setAttribute("data-num", count);
        // Set a data attribute to the current counter value
        existingLike.innerHTML = `${count} has been liked <span>1</span> time`;
        // Set the inner HTML to show that the counter value has been liked once
        likes.appendChild(existingLike);
        // Append the new like element to the likes list
    }
});


// Boolean to track if the timer is currently playing
let playing = true;

// Add an event listener to the pause button for pausing or resuming the timer
pause.addEventListener("click", () => {

    // Check if the timer is currently playing
    if (playing) {
        // Set playing to false to indicate the timer is paused
        playing = false;

        // Clear the interval to stop the timer
        clearInterval(interval);

        // Change the button text to "resume"
        pause.innerText = "resume";
    } else {
        // Set playing to true to indicate the timer is running
        playing = true;

        // Restart the timer
        interval = startTimer();

        // Change the button text to "pause"
        pause.innerText = "pause";
    }

    // Get all button elements
    [...document.getElementsByTagName("button")].forEach(button => {
        // Check if the button is not the pause button
        if (button.id !== "pause") {
            // Disable other buttons when the timer is paused, and enable them when the timer is running
            button.disabled = !playing;
        }
    });
});
