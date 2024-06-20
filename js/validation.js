// in the name of god
// validations form
"use strict";
const userForm = document.getElementById("user-form")
const dataContainer = document.getElementById("data-container")

const username = document.getElementById("username");

const email = document.getElementById("email");
const emailError = document.getElementById("email-error");

const phone = document.getElementById("phone");
const phoneError = document.getElementById("phone-error");

const password = document.getElementById("password");
const letter = document.getElementById("letter");
const capital = document.getElementById("capital");
const number = document.getElementById("number");
const textlength = document.getElementById("length");

const confirmPassword = document.getElementById("confirm-password")
const confirmLetter = document.getElementById("confirm-letter");
const confirmCapital = document.getElementById("confirm-capital");
const confirmNumber = document.getElementById("confirm-number");
const confirmLength = document.getElementById("confirm-length");
const confirmPasswordChecker = document.getElementById("confirm-password-checker");

const passwordViewer = document.getElementById("password-view")
const confirmPasswordViewer = document.getElementById("confirm-password-view")


function ValidateName() {
    if (username.value !== "") {
        username.classList.add("border-green-400")
        username.classList.remove("border-gray-300")
    }
    else {
        username.classList.remove("border-green-400")
        username.classList.add("border-red-400")
    }
}

username.addEventListener("keyup", () => {
    ValidateName()
})


function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.value)) {
        email.classList.add("border-green-400")
        email.classList.remove("border-red-400")
        emailError.classList.add("hidden")
        emailError.classList.remove("block")
        return true
    }
    else {
        email.classList.add("border-red-400")
        email.classList.remove("border-green-400")
        emailError.classList.remove("hidden")
        emailError.classList.add("block")
        return false;
    }
}

email.addEventListener("keyup", () => {
    ValidateEmail(email)
})



function ValidatePhoneNumber(phoneNumber) {
    if (phoneNumber.value.length === 10) {
        phone.classList.add("border-green-400")
        phone.classList.remove("border-red-400")
        phoneError.classList.add("hidden")
        phoneError.classList.remove("block")
    }
    else {
        phone.classList.remove("border-green-400")
        phone.classList.add("border-red-400")
        phoneError.classList.remove("hidden")
        phoneError.classList.add("block")
    }
}

phone.addEventListener("keyup", () => {
    ValidatePhoneNumber(phone)
})



function ValidatePassword(passwordValue, letter, capital, number, length,confirmChecker) {

    const lowerCaseLetters = /[a-z]/g;
    if (passwordValue.value.match(lowerCaseLetters)) {
        letter.classList.remove("block");
        letter.classList.add("hidden");
    } else {
        letter.classList.remove("hidden");
        letter.classList.add("block");
    }

    // Validate capital letters
    const upperCaseLetters = /[A-Z]/g;
    if (passwordValue.value.match(upperCaseLetters)) {
        capital.classList.remove("block");
        capital.classList.add("hidden");
    } else {
        capital.classList.remove("hidden");
        capital.classList.add("block");
    }

    // Validate numbers
    const numbers = /[0-9]/g;
    if (passwordValue.value.match(numbers)) {
        number.classList.remove("block");
        number.classList.add("hidden");
    } else {
        number.classList.remove("hidden");
        number.classList.add("block");
    }

    // Validate length
    if (passwordValue.value.length >= 10) {
        length.classList.remove("block");
        length.classList.add("hidden");
    } else {
        length.classList.remove("hidden");
        length.classList.add("block");
    }

    if (letter.classList.contains("block") || capital.classList.contains("block")
        || number.classList.contains("block") || length.classList.contains("block")) {
        passwordValue.classList.add("border-red-400")
        passwordValue.classList.remove("border-green-400")
    }
    else {
        passwordValue.classList.remove("border-red-400")
        passwordValue.classList.add("border-green-400")
    }
}

password.addEventListener("keyup", () => {
    ValidatePassword(password, letter, capital, number, textlength)
  confirmPass()
})



const confirmPass = () => {
  ValidatePassword(confirmPassword, confirmLetter, confirmCapital, confirmNumber, confirmLength,confirmPasswordChecker)
    if (password.value !== confirmPassword.value) {
        confirmPasswordChecker.classList.add("block");
        confirmPasswordChecker.classList.remove("hidden");
        confirmPassword.classList.add("border-red-400")
        confirmPassword.classList.remove("border-green-400")
    }
    else {
        confirmPasswordChecker.classList.add("hidden");
        confirmPasswordChecker.classList.remove("block");
        confirmPassword.classList.remove("border-red-400")
        confirmPassword.classList.add("border-green-400")
    }
}
confirmPassword.addEventListener("keyup",confirmPass)



userForm.addEventListener("submit", (e) => {
    e.preventDefault()
    if (username.classList.contains("border-green-400") && phone.classList.contains("border-green-400") &&
        email.classList.contains("border-green-400") && password.classList.contains("border-green-400") &&
        confirmPassword.classList.contains("border-green-400")) {
        let finalData = {
            username: username.value,
            email: email.value,
            phone: phone.value,
            password: password.value,
            confirmPassword: confirmPassword.value
        }
        dataContainer.innerHTML = `
                        <div class="flex flex-col gap-3">
                        <p>Username - ${finalData["username"]}</p>
                        <p>Email - ${finalData["email"]}</p>
                        <p>Phone - ${finalData["phone"]}</p>
                        <p>Password - ${finalData["password"]}</p>
                        <p>Confirm Password - ${finalData["confirmPassword"]}</p>
                        </div>
        `
    }
})



const showPassword = (value) => {
    if (value.type === "password") {
        value.type = "text"
    }
    else {
        value.type = "password"
    }
}

passwordViewer.addEventListener("click", (e) => {
    e.preventDefault()
    e.stopPropagation()
    showPassword(password)
})
confirmPasswordViewer.addEventListener("click", (e) => {
    e.preventDefault()
    e.stopPropagation()
    showPassword(confirmPassword)
})