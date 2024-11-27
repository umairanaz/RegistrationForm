const h4 = document.querySelector("#Error");
const form = document.querySelector("form");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    
    const emailvalid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordvalid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    if (email === "" && password === "") {
        h4.textContent = "Enter your email and passward.";
        h4.style.color = "red";
    }
    else if (email === "") {
        h4.textContent = "Enter your email.";
        h4.style.color = "red";
    }
    else if (password === "") {
        h4.textContent = "Enter your pasward.";
        h4.style.color = "red";
    }
    else if (!emailvalid.test(email)) {
        h4.textContent = "Invalid email ";
        h4.style.color = "red";
    }
    else if (!passwordvalid.test(password)) {
        h4.textContent = "Password must be at least 8 characters long, include uppercase, lowercase, a number, and a special character.";
        h4.style.color = "red";
    } else {
        h4.textContent = "Form submitted successfully!";
        h4.style.color = "green";
    }
});
