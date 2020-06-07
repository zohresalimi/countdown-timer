const durationInput = document.querySelector('#duration')
const startBtn = document.querySelector('#start')
const pauseBtn = document.querySelector('#pause')
const circle = document.querySelector('circle')
const perimeter = circle.getAttribute("r") * 2 * Math.PI

circle.setAttribute('stroke-dasharray', perimeter)
let totalDuration = 3;
const timer = new Timer(durationInput, startBtn, pauseBtn, {
    onStart(duration) {
        totalDuration = totalDuration || duration
    },
    onTick(timeRemaining) {
        circle.setAttribute('stroke-dashoffset',
            perimeter * timeRemaining / totalDuration - perimeter
        )
    },
    onPause() { console.log('Timer Paused') },
    onComplete() { console.log('Timer Completed') }
})
