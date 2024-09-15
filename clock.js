const clock = document.querySelector("h2#clock");

function sayHello(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = (date.getMinutes()).padStart(2, "0");
    const seconds = (date.getSeconds()).padStart(2, "0");
    clock.InnerText = '${hours}:${minutes}:${seconds}';
}

getClock()
setInterval(getClock, 1000);