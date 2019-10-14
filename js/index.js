// DOM CACHE

let link1 = document.getElementById("first");

let link2 = document.getElementById("second");


let link3 = document.getElementById("third");


let link4 = document.getElementById("fourth");

// Add event listener

link1.addEventListener("click", display);

// Function

function display(e) {
    if(e.target.nextElementSibling.style.display == "") {
        e.target.nextElementSibling.style.display = "block";
    } else {
        e.target.nextElementSibling.style.display = "";
    }
}

