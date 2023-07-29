const updateTime = () => {
	var date = new Date();
	const h = date.getHours();
	const m = date.getMinutes();
	const time = `${h < 10 ? "0" + h.toString() : h.toString()}:${m < 10 ? "0" + m.toString() : m.toString()}`;
	const respects_message = h < 12 ? "Bom Dia" : h < 18 ? "Boa Tarde" : "Boa Noite";
	const element = document.getElementById("time");
	element.innerText = time;
	const respects = document.getElementById("respects");
	respects.innerText = respects_message;
};

window.onload = function () {
	setTimeout(() => {
		updateTime();
		setInterval(updateTime, 1000);
	}, 1000);

	let message = document.getElementById("message");
	let author = document.getElementById("author");

	message.addEventListener("mouseover", function () {
		author.classList.toggle("show-author");
	});
	message.addEventListener("mouseout", function () {
		author.classList.remove("show-author");
	});
};
