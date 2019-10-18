// Global Variable

const mediaLg = window.matchMedia("(max-width: 1440px)");
const media = window.matchMedia("(min-width: 500px)");

// DOM CACHE
    // Header

let toggle = document.getElementById("toggle");
let ul = document.getElementById("header-ul");
let header = document.querySelector("header");
let headerIcon = document.querySelector("#header-icons");

    // Faq list div
let link1 = document.getElementById("first");
let link2 = document.getElementById("second");
let link3 = document.getElementById("third");
let link4 = document.getElementById("fourth");

    // Features nav li elements
let feat1 = document.getElementById("feat-1");
let feat2 = document.getElementById("feat-2");
let feat3 = document.getElementById("feat-3");

    // Features tab
let img1 = document.getElementById("img-1");
let h1 = document.getElementById("first-h1");
let p1 = document.getElementById("first-p");

// Add event listener

toggle.addEventListener("click", toggleCollapse)
link1.addEventListener("click", display);
link2.addEventListener("click", display);
link3.addEventListener("click", display);
link4.addEventListener("click", display);
feat1.addEventListener("click", currentTab);
feat2.addEventListener("click", currentTab);
feat3.addEventListener("click", currentTab);

// toggleCollapse function

function toggleCollapse(e) {
    if(ul.style.display == ""){
        if(media.matches) {
            header.style.background = "hsl(229, 31%, 21%)";
            header.style.height = "100vh";
            header.style.width = "100vw";
            header.style.opacity = "0.85";
            header.style.position = "absolute";
            ul.style.display = "block";
            toggle.src = "/images/icon-close.svg";
            headerIcon.style.display = "block";
        } else {
            header.style.background = "hsl(229, 31%, 21%)";
            header.style.height = "140vh";
            header.style.width = "100vw";
            header.style.opacity = "0.85";
            header.style.position = "absolute";
            ul.style.display = "block";
            toggle.src = "/images/icon-close.svg";
            headerIcon.style.display = "block";
        }
    } else {
        ul.style.display = "";
        header.removeAttribute("style");
        toggle.src = "/images/icon-hamburger.svg";
        headerIcon.style.display = "";
    }
}

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

function currentTab(e) {
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
    if(mediaLg.matches) {
        img1.src = "/images/illustration-features-tab-1.svg";
        img1.style.height = "350px";
        img1.style.width = "540px";
        img1.style.marginLeft = "25px";
    } else if(media.matches) {
        img1.style.height = "270px";
        img1.style.width = "410px";
        img1.style.marginLeft = "0px";
    }else {
        img1.style.height = "220px";
        img1.style.width = "310px";
        img1.style.marginLeft = "0px";
    };
    h1.textContent = "Bookmark in one click";
    p1.textContent = "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
}

function changeTab2(e) {
    img1.src = "/images/illustration-features-tab-2.svg";
    img1.style.height = "415px";
    img1.style.width = "480px";
    img1.style.marginLeft = "100px";
    if(media.matches) {
        img1.style.height = "335px";
        img1.style.width = "400px";
        img1.style.marginLeft = "20px";
    }else {
        img1.style.width = "310px";
        img1.style.height = "270px";
        img1.style.marginLeft = "5px";
    };
    h1.textContent = "Intelligent Search";
    p1.textContent = "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
}

function changeTab3(e) {
    img1.src = "/images/illustration-features-tab-3.svg";
    img1.style.height = "385px";
    img1.style.width = "440px";
    img1.style.marginLeft = "100px";
    if(media.matches) {
        img1.style.height = "335px";
        img1.style.width = "400px";
        img1.style.marginLeft = "15px";
    }else {
        img1.style.width = "310px";
        img1.style.height = "250px";
        img1.style.marginLeft = "5px";
    };
    h1.textContent = "Share your bookmarks";
    p1.textContent = "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
}