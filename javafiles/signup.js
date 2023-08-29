let agree = document.getElementById("agree");
agree.addEventListener('change', function(){
    let Register = document.getElementById("Register");
    if (agree.checked) {
        Register.removeAttribute("disabled");
        window.location.href = "business.html";
    }
})
let disagree = document.getElementById("disagree");
disagree.addEventListener('change', function(){
    let Register = document.getElementById("Register");
    if (disagree.checked) {
        Register.removeAttribute("disabled");
        window.location.href = "homepage.html";
    }
})