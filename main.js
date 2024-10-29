// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// Select the heart element and the error modal
const heart = document.querySelector(".like-glyph");
const errorModal = document.getElementById("modal");

// Initially hide the error modal
errorModal.classList.add("hidden");

// Function to handle heart click events
function handleHeartClick() {
  // Call mimicServerCall to simulate a server request
  mimicServerCall()
    .then(() => {
      // On success: Change the heart to a full heart and add activated class
      if (heart.textContent === EMPTY_HEART) {
        heart.textContent = FULL_HEART; // Change to full heart
        heart.classList.add("activated-heart"); // Make the heart appear red
      } else {
        heart.textContent = EMPTY_HEART; // Change back to empty heart
        heart.classList.remove("activated-heart"); // Remove red color
      }
    })
    .catch((error) => {
      // On failure: Show the error modal
      errorModal.classList.remove("hidden"); // Display the error modal
      errorModal.querySelector("#modal-message").textContent = error; // Show error message

      // Hide the error modal after 3 seconds
      setTimeout(() => {
        errorModal.classList.add("hidden");
      }, 3000);
    });
}

// Attach the event listener to the heart icon
heart.addEventListener("click", handleHeartClick);

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
