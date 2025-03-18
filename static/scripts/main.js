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