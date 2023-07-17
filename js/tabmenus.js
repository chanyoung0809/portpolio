const items = document.querySelectorAll(".skill_wrap .items .item");
const contexts = document.querySelectorAll(".skill_wrap .contexts .context");
// 클릭할 버튼 9개, 본문 9개
Array.from(items).forEach((item ,idx)=>{
    item.addEventListener("click", ()=>{
        Array.from(contexts).forEach((text,i)=>{
            text.classList.remove("on");
            Array.from(items)[i].classList.remove("on");
        });
        item.classList.add("on");
        Array.from(contexts)[idx].classList.add("on");
    });
})