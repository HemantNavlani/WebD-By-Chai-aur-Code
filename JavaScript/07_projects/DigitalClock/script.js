const clock = document.getElementById('clock')

setInterval(function(){
    const date = new Date();
    clock.innerHTML = date.toLocaleTimeString('en-US ');
},1000);