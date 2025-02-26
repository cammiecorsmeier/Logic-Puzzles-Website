//declares variables for medium
let medGuess=document.querySelector('#medGuess')
let medSubmit=document.querySelector('#medSubmit')
let correctImage2=document.querySelector('#correctImage2')
let nextButton2=document.querySelector('#nextButton2')
let medium2=document.querySelector('#medium2')
//enables buttons on medium screen to work
medSubmit.addEventListener("click", (e)=> {
  if (medGuess.value==="10") {
   console.log("good job");
   correctImage2.innerHTML = "<img src='check.jpg'>";
   medGuess.value = "";
   medSubmit.disabled = true
    nextButton2.addEventListener("click", (e)=> {
    console.log("next");
    medium2.innerHTML="<img src='medium2.png'>";
    medSubmit.disabled = false
    })
  }
  else if(medGuess.value==="36") {
    console.log("good job");
    medium2.innerHTML = "<img src='check.jpg'>"
    medGuess.value = ""
    medSubmit.disabled = true
    nextButton2.disabled = true
  }
})