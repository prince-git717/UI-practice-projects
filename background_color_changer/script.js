const btn = document.querySelector(".click_me")
const hexcode = document.querySelector("#hexcode")

function randomColor(){
   let letters = "0123456789ABCDEF"
   let color = '#'
   for (let i = 0; i < 6; i++){
      color += letters[Math.floor(Math.random()*16)]
   }
   return color
}

btn.addEventListener('click', ()=>{
    const newColor = randomColor()
    document.body.style.backgroundColor = newColor
    hexcode.innerText = newColor
})