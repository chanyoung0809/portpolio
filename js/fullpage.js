new fullpage('#fullpage', {
    //options here
    autoScrolling:true,
    menu: '#navis',
    anchors:['intro', 'about', 'strength', 'portpolio', 'contact'],
    licenseKey: 'gplv3-license',
	keyboardScrolling: true,
	animateAnchor: true,
	recordHistory: true,
    slideSelector: '.slide',
    resetSliders : false,
});

const navis = document.querySelector("#navis");
const anchors = document.querySelectorAll("#navis > li");

// 휠 동작 시 메뉴 색상 변경
window.addEventListener("wheel", (e)=>{
    let selectedAnchor = document.querySelector("#navis > li.active");
    let datas = selectedAnchor.getAttribute('data-menuanchor');
    console.log(selectedAnchor, datas);
    (datas === 'intro') ? navis.classList.remove('on') : navis.classList.add('on');
});

// 하단 메뉴 클릭 시 메뉴 스타일, 색상 변경
anchors.forEach((anchor)=>{
    anchor.addEventListener("click", ()=>{
        anchors.forEach((el)=>{
            el.classList.remove("active");
        })
        anchor.classList.add("active");
        let datas = anchor.getAttribute('data-menuanchor');
        (datas === 'intro') ? navis.classList.remove('on') : navis.classList.add('on');
    });
})

// 포폴 목록 메뉴
const navis2 = document.querySelectorAll(".navis2 .wrap > li");
// 포폴 이전, 다음 메뉴
// const prevBtn = document.querySelector(".fp-prev");
// const nextBtn = document.querySelector(".fp-next");
// data-anchor 3개
const locates = ["#portpolio", '#portpolio/jameson', '#portpolio/pinkgym']
// 돌려쓸 숫자
// let index = 0;

// 메뉴 클릭시 스타일 변경
// navis2.forEach((menu, idx)=>{
//     menu.addEventListener("click", ()=>{
//         navis2.forEach((el)=>{
//             el.classList.remove("active");
//         })
//         menu.classList.add("active");
//         index = idx;
//     });
// });

// //이전, 이후 버튼 클릭 시 스타일 변경
// prevBtn.addEventListener("click", ()=>{
//     (index === 0) ? index = 2 : index--;
//     navis2.forEach((el)=>{
//         el.classList.remove("active");
//     })
//     navis2[index].classList.add("active");
// });
// nextBtn.addEventListener("click", ()=>{
//     (index === 2) ? index = 0 : index++;
//     navis2.forEach((el)=>{
//         el.classList.remove("active");
//     })
//     navis2[index].classList.add("active");
// });

// window.addEventListener('hashchange', function() {
//     const anchor = location.hash;
//     if(anchor === locates[0]){
//         navis2.forEach((el)=>{
//             el.classList.remove("active");
//         })
//         navis2[0].classList.add("active");
//     } 
//     else if(anchor === locates[1]){
//         navis2.forEach((el)=>{
//             el.classList.remove("active");
//         })
//         navis2[1].classList.add("active");
//     }
//     else if(anchor === locates[2]){
//         navis2.forEach((el)=>{
//             el.classList.remove("active");
//         })
//         navis2[2].classList.add("active");
//     }
// });