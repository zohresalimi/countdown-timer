class Timer {
	constructor(durationInput, startBtn, pauseBtn, callBacks) {
		if (typeof durationInput === "string") {
			this.duration = durationInput
		} else {
			this.durationInput = durationInput
			this.durationInput.addEventListener("change", this.reset())
		}
		if (startBtn && pauseBtn) {
			this.startBtn = startBtn
			this.pauseBtn = pauseBtn
			this.startBtn.addEventListener("click", this.start)
			this.pauseBtn.addEventListener("click", this.pause)
		}
		if (callBacks) {
			this.onStart = callBacks.onStart
			this.onTick = callBacks.onTick
			this.onPause = callBacks.onPause
			this.onComplete = callBacks.onComplete
		}
		this.reset()
	}
	start = () => {
		if (this.onStart && !this.inProgress) {
			this.onStart(this.timeRemaining)
		}
		this.inProgress = true
		this.tick()
		this.interval = setInterval(this.tick, 20)
	}

	pause = () => {
		clearInterval(this.interval)
		this.timeRemaining = this.timeRemaining
	}

	tick = () => {
		if (this.timeRemaining <= 0) {
			this.reset()
			this.pause()
			this.onComplete()
		} else {
			this.timeRemaining = this.timeRemaining - 0.02
			this.onTick(this.timeRemaining)
		}
	}

	reset = () => {
		this.inProgress = false
	}

	get timeRemaining() {
		return parseFloat(this.durationInput.value)
	}

	set timeRemaining(time) {
		this.durationInput.value = time.toFixed(2)
	}
}
