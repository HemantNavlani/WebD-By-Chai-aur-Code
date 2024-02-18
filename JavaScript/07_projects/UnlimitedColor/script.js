const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0;i<6;i++){
        color+= hex[Math.floor(Math.random()*16)]
    }
    return color;
}
let intervalId;
function startChangingColor(){
    if(!intervalId) intervalId = setInterval(changeColor,1000);
    function changeColor(){
        document.body.style.backgroundColor = randomColor();
    }
}
function stopChangingColor(){
    clearInterval(intervalId);
    intervalId = null
}
document.getElementById('start').addEventListener('click',startChangingColor)


document.getElementById('stop').addEventListener('click',stopChangingColor)