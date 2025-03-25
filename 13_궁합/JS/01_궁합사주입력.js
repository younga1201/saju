// 예시로 음력, 양력, 윤달 체크박스 선택 시 콘솔에 표시
document.querySelectorAll('input[type="checkbox"]').forEach(item => {
    item.addEventListener('change', (event) => {
        console.log(`${event.target.name}: ${event.target.checked}`);
    });
});
