const btn = document.querySelector("#btn");
const container = document.querySelector("#container");

btn.addEventListener("click",()=>{
    createNotification();
})


function createNotification(){
    //add html element
    const notification = document.createElement("div");
    //add css class
    notification.classList.add("toast");
    notification.innerText = " Hellow everyone";

    container.appendChild(notification);
    setTimeout(()=>{
    
       notification.remove();

    },2000);
}