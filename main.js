// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const errorModal = document.getElementById("modal");
errorModal.classList.add("hidden");

// Select the heart element
const heart = document.querySelector(".like-glyph");

// Function to handle heart click events
function handleHeartClick() {
  // Call mimicServerCall to simulate a server request
  mimicServerCall()
    .then(() => {
      // On success: Toggle heart state and styling
      if (heart.textContent === EMPTY_HEART) {
        heart.textContent = FULL_HEART;
        heart.classList.add("activated-heart");
      } else {
        heart.textContent = EMPTY_HEART;
        heart.classList.remove("activated-heart");
      }
    })
    .catch((error) => {
      // On failure: Display error modal with message
      errorModal.classList.remove("hidden");
      errorModal.querySelector("#modal-message").textContent = error;

      // Hide the error modal after 3 seconds
      setTimeout(() => {
        errorModal.classList.add("hidden");
      }, 3000);
    });
}

// Attach event listener to the heart icon
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
