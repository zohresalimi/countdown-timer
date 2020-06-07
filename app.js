const durationInput = document.querySelector("#duration")
const startBtn = document.querySelector("#start")
const pauseBtn = document.querySelector("#pause")
const circle = document.querySelector("circle")
const perimeter = circle.getAttribute("r") * 2 * Math.PI

circle.setAttribute("stroke-dasharray", perimeter)
let totalDuration
const timer = new Timer(durationInput, startBtn, pauseBtn, {
	onStart(timeRemaining) {
		totalDuration = timeRemaining
	},
	onTick(timeRemaining) {
		circle.setAttribute(
			"stroke-dashoffset",
			perimeter * (timeRemaining / totalDuration) - perimeter
		)
	},
	onPause() {
		console.log("Timer Paused")
	},
	onComplete() {
		console.log("Timer Completed")
	},
})
