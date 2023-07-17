const body = document.querySelector("body");
const toggle_btn = document.querySelector("#toggle_btn");

// 토글 버튼 클릭 이벤트 리스너 등록
toggle_btn.addEventListener('click',()=>{
    if(body.classList.contains("dark")){
        body.classList.remove("dark");
        toggle_btn.firstElementChild.innerText = 'dark_mode';
    }
    else{
        body.classList.add("dark");
        toggle_btn.firstElementChild.innerText = 'light_mode';
    }
});


