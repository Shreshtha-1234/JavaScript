const buttons = document.querySelectorAll("button")
console.log(buttons);
buttons.forEach((button)=>{
button.addEventListener('click',()=>{
    document.body.style.backgroundColor = button.className
})
})