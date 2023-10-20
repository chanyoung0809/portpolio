const portfolioSlide = document.querySelectorAll(".portfolioSwiper .swiper-slide .moreview");
// 클릭하면 세부 내용 보이게 할 큰 슬라이드
const contents_wrap = document.querySelector(".contents_wrap");
// 콘텐츠 감싸는 부모
const contents = document.querySelectorAll(".contents_wrap > .content");
// 슬라이드별 세부 콘텐츠들
const backBtns = document.querySelectorAll(".right_content > .backBtn");
// 세부 콘텐츠 보기-> 슬라이드로 돌아갈 뒤로가기 버튼

window.addEventListener('keyup', (e)=>{
    //세부 콘텐츠가 보이지 않는 상태일 때 엔터 키를 누르면
    if (e.key === 'Enter' && !contents_wrap.classList.contains("on")){
        e.preventDefault(); // 링크이동기능 막고
        let allslides = document.querySelectorAll(".portfolioSwiper .swiper-slide");
        let activeSlide = document.querySelector(".portfolioSwiper .swiper-slide.swiper-slide-active");
        let activeNum = Array.from(allslides).indexOf(activeSlide);
        contents_wrap.classList.add("on"); // 콘텐츠 감싸는 부모 보이게 함
        contents.forEach((content,i)=>{ // 반복문으로 모든 콘텐츠 안보이게 하고
            content.classList.remove("on");
        });
        contents[activeNum].classList.add("on"); //해당 콘텐츠만 보이게 함
    }
    else if(e.key === 'Enter' && contents_wrap.classList.contains("on")){
        contents.forEach((content,i)=>{ // 반복문으로 모든 콘텐츠 안보이게 함
            content.classList.remove("on");
        });
        contents_wrap.classList.remove("on"); // 콘텐츠 감싸는 부모 안보이게 함
    }

});

// 포폴 슬라이드 클릭하면
Array.from(portfolioSlide).forEach((slide, idx)=>{
    slide.addEventListener('click', (e)=>{
        e.preventDefault(); //a태그 기능 막고
        contents_wrap.classList.add("on"); // 콘텐츠 감싸는 부모 보이게 함
        contents.forEach((content,i)=>{
            content.classList.remove("on");
        });
        contents[idx].classList.add("on");
        // 콘텐츠들 중 순번에 맞는 콘텐츠만 표시
    });
});
Array.from(backBtns).forEach((backBtn, idx)=>{
    backBtn.addEventListener('click', ()=>{
        contents.forEach((content,i)=>{
            content.classList.remove("on");
        });
        contents_wrap.classList.remove("on"); 
        // 콘텐츠와 부모 사라지게 함   
    })
})
