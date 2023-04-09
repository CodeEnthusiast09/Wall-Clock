let secondHand = document.getElementById('second')
let minuteHand = document.getElementById('minute')
let hourHand = document.getElementById('hour')

function setDate() {
    let now = new Date();

    let seconds = now.getSeconds();
    let secondsDegree = (seconds / 60) * 360 + 90;
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;

    let mins = now.getMinutes();
    let minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
    minuteHand.style.transform = `rotate(${minsDegrees}deg)`;

    let hour = now.getHours();
    let hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

}
setInterval(setDate, 1000);
setDate();