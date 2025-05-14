
document.addEventListener("DOMContentLoaded", function () {
	const hamburger = document.querySelector(".hamburger");
	const linksContainer = document.querySelector(".links-container");

	hamburger.addEventListener("click", function () {
		linksContainer.classList.toggle("active");
		hamburger.classList.toggle("active");
	});
});