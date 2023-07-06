const imgs = document.querySelectorAll(".talks > img");
const popup = document.querySelector(".photo");
const closeBtn = document.querySelector(".photo > .close");
const showimg = document.querySelector(".photo > img");

imgs.forEach((talk, i)=>{
    talk.addEventListener("click", ()=>{
        let source = talk.getAttribute('src');
        popup.classList.add("on");
        showimg.setAttribute('src', source);
    });
});
closeBtn.addEventListener("click", ()=>{
    popup.classList.remove("on");
});
