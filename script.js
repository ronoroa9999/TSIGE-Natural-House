// ===============================
// SEARCH PRODUCTS
// ===============================

const searchBox = document.getElementById("searchBox");

if (searchBox) {

searchBox.addEventListener("keyup", function () {

const searchValue = searchBox.value.toLowerCase();

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

const product = card.querySelector("h3").textContent.toLowerCase();

if (product.includes(searchValue)) {

card.style.display = "block";

} else {

card.style.display = "none";

}

});

});

}

// ===============================
// ORDER POPUP
// ===============================

const popup = document.getElementById("orderPopup");

const productTitle = document.getElementById("productTitle");

const whatsappBtn = document.getElementById("whatsappBtn");

function buyProduct(productName) {

productTitle.innerHTML = "Order " + productName;

const message =
"Hello TSIGE Natural House,%0A%0AI would like to order:%0A" +
productName +
"%0A%0APlease provide more information.";

whatsappBtn.href =
"https://wa.me/251911479327?text=" + message;

popup.style.display = "block";

}

// ===============================
// CLOSE POPUP
// ===============================

function closePopup() {

popup.style.display = "none";

}

// ===============================
// CLOSE WHEN CLICK OUTSIDE
// ===============================

window.onclick = function (event) {

if (event.target == popup) {

popup.style.display = "none";

}

};

// ===============================
// ESC KEY CLOSE
// ===============================

document.addEventListener("keydown", function (event) {

if (event.key === "Escape") {

popup.style.display = "none";

}

});

// ===============================
// CONTACT FORM
// ===============================

const form = document.querySelector("form");

if (form) {

form.addEventListener("submit", function (e) {

e.preventDefault();

alert("✅ Thank you! Your message has been sent.");

form.reset();

});

}

// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll("nav a").forEach(link => {

link.addEventListener("click", function (e) {

e.preventDefault();

const target = document.querySelector(this.getAttribute("href"));

window.scrollTo({

top: target.offsetTop - 70,

behavior: "smooth"

});

});

});

// ===============================
// HEADER SHADOW
// ===============================

window.addEventListener("scroll", function () {

const header = document.querySelector("header");

if (window.scrollY > 40) {

header.style.boxShadow = "0 10px 25px rgba(0,0,0,.2)";

} else {

header.style.boxShadow = "0 5px 20px rgba(0,0,0,.15)";

}

});