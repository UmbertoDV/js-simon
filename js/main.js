const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const titleEl = document.getElementById("title");

const clockOrologio = setInterval(quantoMancaAlleNove, 1000);

function quantoMancaAlleNove() {
	const now = new Date().getTime();
	const tomorrow = new Date("2023-02-04 9:30").getTime();
	const differenceForLesson = tomorrow - now;

	// CONVERSIONI
	const seconds = Math.floor((differenceForLesson % (1000 * 60)) / 1000);
	const minutes = Math.floor((differenceForLesson % (1000 * 60 * 60)) / (1000 * 60));
	const hours = Math.floor((differenceForLesson % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const days = Math.floor(differenceForLesson / (1000 * 60 * 60 * 24));

	// console.log("Millisecondi in questo momento: " + now);
	// console.log("Millisecondi di domani alle 9.30: " + tomorrow);
	// console.log("Millisecondi che rimangono per far si che sono le 9.30: " + differenceForLesson);
	// console.log(`${hours} ${minutes} ${seconds}`);

	secondsEl.innerHTML = seconds < 10 ? "0" + seconds : seconds;
	minutesEl.innerHTML = minutes < 10 ? "0" + minutes : minutes;
	hoursEl.innerHTML = hours < 10 ? "0" + hours : hours;
	daysEl.innerHTML = days < 10 ? "0" + days : days;

	if (differenceForLesson <= 0) {
        clearInterval(clockOrologio);
        titleEl.innerHTML = 'Sono le 9:30!';
	}
}