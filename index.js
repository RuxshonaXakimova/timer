let hours = document.querySelector('.hours')
let mins = document.querySelector('.mins')
let seconds = document.querySelector('.seconds')
let resetBtn = document.querySelector('#reset')
let pauseBtn = document.querySelector('#pause')
let startBtn = document.querySelector('#start')




let int
let time = 0

resetBtn.onclick = () => {
    clearInterval(int)
    hours.innerHTML = 0
    mins.innerHTML = 0
    seconds.innerHTML = 0
    time = 0
}

startBtn.onclick = () => {
    clearInterval(int)
    int = setInterval(() => {
        time++
        seconds.innerHTML = time
        if(time>59){
            time = 0
            +mins.innerHTML ++
        }
        if(+mins.innerHTML == 24) {
            mins.innerHTML = 0
            +hours.innerHTML ++
        }
    }, 1000); 

}
pauseBtn.onclick = () => {
    clearInterval(int)
}






