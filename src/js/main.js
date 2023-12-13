const inputs = document.querySelectorAll("input[type='radio'");

inputs.forEach((item) => {
	item.addEventListener("change", () => {
		inputs.forEach((element) => element.parentElement.classList.remove("collapse-red-arrow"));
		item.parentElement.classList.add("collapse-red-arrow");
	});
});
