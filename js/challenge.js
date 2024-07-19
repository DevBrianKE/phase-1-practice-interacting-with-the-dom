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

// Add event listener for the heart button to like the current counter value
heart.addEventListener("click", () => {
    // Get the counter element by its ID
    const counter = document.getElementById("counter");
    // Convert the counter's text to an integer
    const count = parseInt(counter.innerText)

    // Get the likes list element
    const likes = document.querySelector(".likes")
    let existingLike
    let found = false

    // Check if the current counter value has already been liked
    for (let child of likes.children) {
        if (parseInt(child.dataset.num) === count) {
            existingLike = child
            found = true
            break
        }
    }

    // If the current counter value has already been liked
    if (found) {
        // Get the current like count
        const likeCount = parseInt(existingLike.children[0].innerText);
        // Increment the like count and update the displayed text
        existingLike.innerHTML = `${count} has been liked <span>${likeCount + 1}</span> times`
    } else {
        // Create a new list item element
        existingLike = document.createElement("li")
        // Set a data attribute to the current counter value
        existingLike.setAttribute("data-num", count)
        // Set the inner HTML to show that the counter value has been liked once
        existingLike.innerHTML = `${count} has been liked <span>1</span> time`
        // Append the new like element to the likes list
        likes.appendChild(existingLike)
    }
});

