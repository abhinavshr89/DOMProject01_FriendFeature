var istatus = document.querySelector("h3");
var addFriend = document.querySelector("#add");

addFriend.addEventListener("click" , ()=>{
    istatus.innerHTML ="Friends";
    istatus.style.color = "green";
})

var remove = document.querySelector("#remove")
remove.addEventListener("click" ,()=>{
    istatus.innerHTML ="Stranger";
    istatus.style.color = "crimson";
})