const inputs = document.querySelectorAll("input[type='radio'");

inputs.forEach((item) => {
	item.addEventListener("change", () => {
		inputs.forEach((element) => element.parentElement.classList.remove("collapse-red-arrow"));
		item.parentElement.classList.add("collapse-red-arrow");
	});
});

const elInput = document.querySelector("input[type='checkbox']");
const elButtons = document.querySelectorAll(".features__buttons");

elButtons.forEach((item) => {
	item.addEventListener("click", () => {
		elButtons.forEach((element) => {
			element.classList.remove("border-b-[#FA5959]");
			element.classList.add("border-b-transparent");
		});
		item.classList.remove("border-b-transparent");
		item.classList.add("border-b-[#FA5959]");
	});
});

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

// Slick settings

$(".features__list").slick({
	dots: false,
	arrows: false,
	infinite: true,
	speed: 300,
	slidesToShow: 1,
	swipe: false,
	adaptiveHeight: true,
});

$(".features__control-list").slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	asNavFor: ".features__list",
	dots: false,
	centerMode: false,
	variableWidth: true,
	focusOnSelect: true,
});
