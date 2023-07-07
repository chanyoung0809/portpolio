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