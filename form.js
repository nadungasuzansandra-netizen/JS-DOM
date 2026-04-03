const signUpForm = document.getElementById("signup-form");

const messageArea =document.getElementById("message-area");

signUpForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    if (name === "") {
        messageArea.textContent ="Please enter your name.";
        messageArea.style.color = "Red";

    }else if (email === "") {
        messageArea.textContent = "Please enter your email";
        messageArea.style.color = "Red";
    }else {
        messageArea.textContent = "Thank you for signing up, " + name + "!";
        messageArea.style.color ="Green";
    }

})



 









