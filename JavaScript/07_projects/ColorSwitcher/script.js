const body = document.querySelector('body')
const buttons  = document.querySelectorAll('.button')
console.log(buttons)
buttons.forEach((button)=>{
    button.addEventListener('click',changeColor)
})

function changeColor(e){
    console.log(e)
    console.log(e.target);
    body.style.backgroundColor = e.target.id;
}