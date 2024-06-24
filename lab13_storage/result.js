/* DISPLAY FORM 'display.html' */
const collectedname = document.querySelector(".collectedname")
const collectedlanguage = document.querySelector(".collectedlanguage")
// set teh valuyes stored in sessionStorage to each collected elements
collectedname.innerHTML = sessionStorage.getItem("firstname")
collectedlanguage.innerHTML = sessionStorage.getItem("selection_language")