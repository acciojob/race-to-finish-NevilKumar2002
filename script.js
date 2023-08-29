// script.js

// Array of promises
var promises = [
    createPromise(1, 5),
    createPromise(1, 5),
    createPromise(1, 5),
    createPromise(1, 5),
    createPromise(1, 5)
];

// Utility function to create a promise with a random delay
function createPromise(min, max) {
    var delay = Math.random() * (max - min) + min;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(delay);
        }, delay * 1000);
    });
}

// Use Promise.any() to wait for the first promise to resolve
Promise.any(promises)
    .then(result => {
        // Print the result to the output div
        var outputDiv = document.getElementById("output");
        outputDiv.textContent = "First promise resolved with delay: " + result ;
    })
    .catch(error => {
        console.error("All promises rejected:", error);
    });
