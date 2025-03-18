let list = document.querySelector(".list-item");
// console.log(list)
let leftBtn = document.querySelector("button.left");
// console.log(leftBtn);
leftBtn.addEventListener("click", function () {
	list.scrollBy({ left: -100, behavior: "smooth" });
});
let rightBtn = document.querySelector("button.right");
rightBtn.addEventListener("click", function () {
	list.scrollBy({ left: 100, behavior: "smooth" });
});

let signinBtn = document.querySelector("div.signin");
// console.log(loginBtn);
let mask = document.querySelector("div.mask");
let signinDialog = document.querySelector("div.signin-dialog");
// console.log(mask);
signinBtn.addEventListener("click", function () {
	mask.style.display = "block";
	signinDialog.style.display = "block";
});
window.addEventListener("keydown", function (ev) {
	if (ev.key == "Escape") {
		mask.style.display = "none";
		signinDialog.style.display = "none";
	}
});
let closeBtn = document.querySelector("div.close");
// console.log(closeBtn);
closeBtn.addEventListener("click", function () {
	// console.log("HI");
	mask.style.display = "none";
	signinDialog.style.display = "none";
});