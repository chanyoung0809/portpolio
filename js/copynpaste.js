const texts = document.querySelectorAll(".contacts .contact > p ");
Array.from(texts).forEach((text, idx)=>{
    text.addEventListener("click", async () => {
        // 클립보드 복사가 비동기적 작업이기 때문에, 비동기 작업 가능하게 하는 async와 지연시켜주는 await 키워드 사용
        await navigator.clipboard.writeText(text.innerText);
        let sort = ['전화번호가', 'URL이', '이메일주소가']
        alert(`${sort[idx]} 클립보드에 복사되었습니다.`);
    })
});
