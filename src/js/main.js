const inputs = document.querySelectorAll("input[type='radio'");

inputs.forEach((item) => {
	item.addEventListener("change", () => {
		inputs.forEach((element) => element.parentElement.classList.remove("collapse-red-arrow"));
		item.parentElement.classList.add("collapse-red-arrow");
	});
});

const elInput = document.querySelector("input[type='checkbox']");

elInput.addEventListener("change", () => {
	document.querySelector(".site-header").classList.toggle("open");
	const elLogo = document.querySelector(".logo-img");
	if (elInput.checked) {
		elLogo.src = "./src/images/menulogo.svg";
		document.body.style.overflow = "hidden";
	} else {
		elLogo.src = "./src/images/mobilelogo.svg";
		document.body.removeAttribute("style");
	}
});

const elButtonsList = document.querySelector(".features__control-list");

// elButtonsList.addEventListener("click", (evt) => {
// 	evt.target;
// });

$(".features__list").slick({
	dots: false,
	arrows: false,
	infinite: true,
	speed: 300,
	slidesToShow: 1,
	adaptiveHeight: true,
});

$(".features__control-list").slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	asNavFor: ".features__list",
	dots: false,
	centerMode: false,
	focusOnSelect: true,
});
