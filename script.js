let followBtn = document.querySelector(".followBtn");
followBtn.addEventListener("click",()=>{
    let followBtnP = document.querySelector(".followBtn p");
    if(followBtnP.textContent === "Follow"){
        followBtnP.textContent = "UnFollow";
    }
    else{
        followBtnP.textContent = "Follow";
    }
})