const body = document.querySelector("body");
const toggle_btn = document.querySelector("#toggle_btn");

// 토글 버튼 클릭 이벤트 리스너 등록
toggle_btn.addEventListener('click',()=>{
    if(body.classList.contains("dark")){
        console.log("다크모드 사용 안할거에요");
        body.classList.remove("dark");
        toggle_btn.firstElementChild.innerText = 'dark_mode';
    }
    else{
        console.log("다크모드 사용할 거에요");
        body.classList.add("dark");
        toggle_btn.firstElementChild.innerText = 'light_mode';
    }
});


