// JavaScript for validation
function validate() {
    var username = document.getElementById("Username").value;
    var password = document.getElementById("password").value;

    if (username === "admin" || password === "admin") {
        alert("Login Successful!!!");
        return false; // Prevent form submission
    }

    // Additional validation logic if needed

    return true; // Allow form submission
}

// Attach event listener to the form's submit button
document.addEventListener("DOMContentLoaded", function() {
    var loginForm = document.querySelector(".box");
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            if (!validate()) {
                event.preventDefault(); // Prevent form submission if validation fails
            }
        });
    }
});
