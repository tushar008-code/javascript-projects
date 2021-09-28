const btn1=document.querySelector(".btn");
const modal=document.querySelector(".modal");
const btn2=document.querySelector(".btn2");
 btn1.addEventListener("click",function(){
   modal.classList.remove("none");
 })
// console.log("hello word");
btn2.addEventListener("click",function(){
  modal.classList.add("none");
})
