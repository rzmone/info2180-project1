document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".newsletter form");
    const emailInput = document.querySelector("#email");
    const messageDiv = document.querySelector(".message");

    if (!form) return; // safety guard

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = emailInput.value.trim();

        if (email === "") {
            messageDiv.textContent = "Please enter a valid email address.";
        } else {
            messageDiv.textContent =
                `Thank you! Your email address ${email} has been added to our mailing list!`;
            emailInput.value = "";
        }
    });
});
