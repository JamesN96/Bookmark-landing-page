// DOM CACHE

let link1 = document.getElementById("first");
let link2 = document.getElementById("second");
let link3 = document.getElementById("third");
let link4 = document.getElementById("fourth");
let feat1 = document.getElementById("feat-1");
let feat2 = document.getElementById("feat-2");
let feat3 = document.getElementById("feat-3");

// Add event listener

link1.addEventListener("click", display);
link2.addEventListener("click", display);
link3.addEventListener("click", display);
link4.addEventListener("click", display);
feat1.addEventListener("click", active);
feat2.addEventListener("click", active);
feat3.addEventListener("click", active);


// Display Function

function display(e) {
    if(e.target.nextElementSibling.style.display == "") {
        e.target.nextElementSibling.style.display = "block";
        e.target.nextElementSibling.style.borderTop = "none";
    } else {
        e.target.nextElementSibling.style.display = "";
    }
}

// Active function

function active(e) {
    if(e.target.id == "feat-1") {
        feat1.parentElement.classList.add("active");
        feat2.parentElement.className = "";
        feat3.parentElement.className = "";
    } else if(e.target.id == "feat-2") {
        feat2.parentElement.classList.add("active");
        feat1.parentElement.className = "";
        feat3.parentElement.className = "";
    } else if(e.target.id == "feat-3") {
        feat3.parentElement.classList.add("active");
        feat1.parentElement.className = "";
        feat2.parentElement.className = "";
    }
}