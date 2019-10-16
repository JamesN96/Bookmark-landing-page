// DOM CACHE

let link1 = document.getElementById("first");
let link2 = document.getElementById("second");
let link3 = document.getElementById("third");
let link4 = document.getElementById("fourth");
let feat1 = document.getElementById("feat-1");
let feat2 = document.getElementById("feat-2");
let feat3 = document.getElementById("feat-3");
let img1 = document.getElementById("img-1");
let h1 = document.getElementById("first-h1");
let p1 = document.getElementById("first-p");


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
        changeTab();
    } else if(e.target.id == "feat-2") {
        feat2.parentElement.classList.add("active");
        feat1.parentElement.className = "";
        feat3.parentElement.className = "";
        changeTab2();
    } else if(e.target.id == "feat-3") {
        feat3.parentElement.classList.add("active");
        feat1.parentElement.className = "";
        feat2.parentElement.className = "";
        changeTab3();
    }
}

// Change Tab function


function changeTab(e) {
    img1.src = "/images/illustration-features-tab-1.svg";
    h1.textContent = "Bookmark in one click";
    p1.textContent = "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
}

function changeTab2(e) {
    img1.src = "/images/illustration-features-tab-2.svg";
    h1.textContent = "Intelligent Search";
    p1.textContent = "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
}

function changeTab3(e) {
    img1.src = "/images/illustration-features-tab-3.svg";
    h1.textContent = "Share your bookmarks";
    p1.textContent = "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
}