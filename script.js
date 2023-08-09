const startContainer = document.querySelector(".start-container")
const thanksContainer = document.querySelector(".thanks-container")

const rateButtons = document.querySelectorAll(".rate-button")
const submitButton = document.getElementById("subB")

const theRate = document.getElementById("the-rate")

const one = document.querySelector(".rate-button.one")
const two = document.querySelector(".rate-button.two")
const three = document.querySelector(".rate-button.three")
const four = document.querySelector(".four")
const five = document.querySelector(".rate-button.five")

const theMessage = document.getElementById("message")

let rateClicked = false
let submitClicked = false

rateButtons.forEach (rateButton => {
    rateButton.addEventListener("click", () => {
        if (rateButton === one) {
            theMessage.textContent = "We're sorry you had a disappointing experience. We'll work to improve. Thank you for your feedback."
        } else if (rateButton === two) {
            theMessage.textContent = "Thank you for your feedback. We'll work on enhancing your next visit. Let us know how we can better serve you."
        } else if (rateButton === three) {
            theMessage.textContent = "We appreciate your input. We're striving to meet your expectations. Feel free to suggest ways we can exceed them."
        } else if (rateButton === four) {
            theMessage.textContent = "Thanks for your positive review! We're delighted you enjoyed your experience. We're here to make it even better next time."
        } else {
            theMessage.textContent = "Wow, thanks for the glowing feedback! We're thrilled you had an excellent experience. Looking forward to wowing you again!"
        }

        rateClicked = true
        theRate.innerHTML = rateButton.innerHTML
    })
})

submitButton.addEventListener("click", () => {
    submitClicked = true
    allClicked()
})

function allClicked() {
    if (rateClicked && submitClicked) {
        thanksContainer.style.display = "flex"
        startContainer.style.display = "none"
    }
}