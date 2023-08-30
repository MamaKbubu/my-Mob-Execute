let agree = document.getElementById("agree");
let disagree = document.getElementById("disagree");
let Register = document.getElementById("Register");

agree.addEventListener('change', function() {
    if (agree.checked) {
        Register.removeAttribute("disabled");
        disagree.checked = false; // Uncheck the other checkbox
    }
});

disagree.addEventListener('change', function() {
    if (disagree.checked) {
        Register.removeAttribute("disabled");
        agree.checked = false; // Uncheck the other checkbox
    }
});

Register.addEventListener('click', function() {
    if (agree.checked) {
        window.location.href = "business.html";
    } else if (disagree.checked) {
        window.location.href = "homepage.html";
    }
});
