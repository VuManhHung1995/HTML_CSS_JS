let intervalId = setInterval(countDown, 1000);
setInterval(chicken,10000);
let count = 600;
let score = 0;
function countDown() {
    let minute = Math.floor(count/60);
    let second = count%60;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;
    document.getElementById("minute").innerHTML = minute; 
    document.getElementById("second").innerHTML = second; 
    count--;
    if(count === 0) {
        clearInterval(intervalId);
    }
}
function chicken() {
    let chickenElement = document.getElementById("chicken");
    let newChicken = document.createElement("div");
    newChicken.className = "chicken";
    chickenElement.appendChild(newChicken);
    newChicken.onmouseover = () => {
        newChicken.style.border = "1px solid blue"
    }
    newChicken.onclick = () => {
        score+=10;
        document.getElementById("score").innerHTML = score;
    }
    }
