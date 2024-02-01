const hourEL =  document.querySelector('.hour')
const minuteEL =  document.querySelector('.minute')
const secondEL =  document.querySelector('.second')
const timeEL =  document.querySelector('.time')
const dateEL =  document.querySelector('.date')
const toggle =  document.querySelector('.toggle')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Nov", "Dec"];

toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    if (html.classList.contains('dark')){
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark Mode'
    } else {
        html.classList.add('dark')
        e.target.innerHTML = 'Light Mode'
    }

})
function setTime() {
    const time = new Date();
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    const hoursForClock = hours % 24
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()

    hourEL.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)` 
    minuteEL.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)` 
    secondEL.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)` 

    timeEL.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}`:minutes}`
    dateEL.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>` 
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
setTime()

setInterval(setTime,1000);
