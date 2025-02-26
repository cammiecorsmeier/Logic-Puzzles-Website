// Easy 
//variables for easy declared here
let easyGuess=document.querySelector('#easyGuess')
let easySubmit=document.querySelector('#easySubmit')
let correctImage=document.querySelector('#correctImage')
let easyTwo=document.querySelector ('#easyTwo')
let easyThree=document.querySelector ('#easyThree')
let nextButton=document.querySelector('#nextButton')
//enables the submit and next buttons on the easy screen to work
easySubmit.addEventListener("click", (e)=> {
  console.log("test")
  if (easyGuess.value.toLowerCase()==="apple pie") {
   console.log("good job");
   correctImage.innerHTML = "<img src='check.jpg'>";
   easyGuess.value = "";
   easySubmit.disabled = true
    nextButton.addEventListener("click", (e)=> {
    console.log("next");
    easyTwo.innerHTML="<img src='firstAid.jpg'>";
    easySubmit.disabled = false
    });
  }
  else if (easyGuess.value.toLowerCase()==="first aid") {
   console.log("good job");
   easyTwo.innerHTML = "<img src='check.jpg'>";
   easyGuess.value = "";
   easySubmit.disabled= true
    nextButton.addEventListener("click", (e)=> {
    console.log("next");
    easyThree.innerHTML="<img src='tripod.jpg'>";
    easySubmit.disabled = false
    });
  }
  else if (easyGuess.value.toLowerCase()==="tripod") {
   console.log("good job")
   easyThree.innerHTML = "<img src='check.jpg'>"
   easyGuess.value = ""
   easySubmit.disabled= true
   nextButton.disabled = true
  }
//code for the home button
//addevent listener=document.querySelector
//location.href=index.html;
})