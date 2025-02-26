let hardGuess=document.querySelector('#hardGuess')
let hardSubmit=document.querySelector('#hardSubmit')
let correctImage3=document.querySelector('#correctImage3')

hardSubmit.addEventListener("click", (e)=> {
  if (hardGuess.value==="229") {
   console.log("good job");
   correctImage3.innerHTML = "<img src='check.jpg'>";
   hardGuess.value= ""
   hardSubmit.disabled = true
  }
})
