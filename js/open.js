// 포트폴리오 부분 미디어 쿼리 보기 
let openWindow = (link, screenwidth, screenheight)=>{
    let width = screenwidth;
    let height = screenheight;
    let left = (window.screen.width - width) / 2;
    let top = (window.screen.height - height) / 2;
    let windowFeatures = `width=${width}, height=${height},left=${left},top=${top}`;
    window.open(link, '_blank', windowFeatures);
}
let openTablet = (link, screenwidth, screenheight)=>{
    let width = 1200;
    let height = 675;
    let left = (window.screen.width - width) / 2;
    let top = (window.screen.height - height) / 2;
    let windowFeatures = `width=${width}, height=${height},left=${left},top=${top}`;
    window.open(link, '_blank', windowFeatures);
}
// 모바일
let openPhone = (link, screenwidth, screenheight)=>{
    let width = 414;
    let height = 749;
    let left = (window.screen.width - width) / 2;
    let top = (window.screen.height - height) / 2;
    let windowFeatures = `width=${width}, height=${height},left=${left},top=${top}`;
    window.open(link, '_blank', windowFeatures);
}
// 강점 부분 이미지 확대해서 보기
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
