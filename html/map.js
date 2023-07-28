const btn = document.getElementById("btn");
const image = document.getElementsByClassName("img");

btn.addEventListener("click",function(event){
image[0].classList.toggle("show");
})