class Timer {
	constructor(durationInput, startButton, pauseButton, callbacks) {
		this.durationInput = durationInput
		this.startButton = startButton
		this.pauseButton = pauseButton
		this.inProgress = false
		if (callbacks) {
			this.onStart = callbacks.onStart
			this.onTick = callbacks.onTick
			this.onComplete = callbacks.onComplete
		}

		this.startButton.addEventListener("click", this.start)
		this.pauseButton.addEventListener("click", this.pause)
		this.durationInput.addEventListener("keyup", this.reset)
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
	}

	tick = () => {
		if (this.timeRemaining <= 0) {
			this.reset()
			this.pause()
			if (this.onComplete) {
				this.onComplete()
			}
		} else {
			this.timeRemaining = this.timeRemaining - 0.02
			if (this.onTick) {
				this.onTick(this.timeRemaining)
			}
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
