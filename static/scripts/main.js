let list = document.querySelector(".list-item");
let leftBtn = document.querySelector("button.left");
leftBtn.addEventListener("click", function () {
	list.scrollBy({ left: -100, behavior: "smooth" });
});
let rightBtn = document.querySelector("button.right");
rightBtn.addEventListener("click", function () {
	list.scrollBy({ left: 100, behavior: "smooth" });
});


let mask = document.querySelector("div.mask");
let signLink = document.querySelector(".navigation div.sign");
let signinLink = document.querySelector(".signup-main div.signin");
let signupLink = document.querySelector(".signin-main div.signup");
let signinDialog = document.querySelector("div.signin-dialog");
let signupDialog = document.querySelector("div.signup-dialog");
signLink.addEventListener("click", function () {
	mask.style.display = "block";
	signinDialog.style.display = "block";
});
signinLink.addEventListener("click", function () {
	signinDialog.style.display = "block";
	signupDialog.style.display = "none";
});
signupLink.addEventListener("click", function () {
	signinDialog.style.display = "none";
	signupDialog.style.display = "block";
});
let closeBtns = document.querySelectorAll("div.close");
for (let closeBtn of closeBtns) {
	closeBtn.addEventListener("click", function () {
		mask.style.display = "none";
		signinDialog.style.display = "none";
		signupDialog.style.display = "none";
	});
}
window.addEventListener("keydown", function (ev) {
	if (ev.key == "Escape") {
		mask.style.display = "none";
		signinDialog.style.display = "none";
		signupDialog.style.display = "none";
	}
});

