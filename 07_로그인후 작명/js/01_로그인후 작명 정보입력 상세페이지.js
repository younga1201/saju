// 버튼 클릭 시 색을 보라색으로 변경하는 함수
function toggleButtonColor(event) {
    // 터치 이벤트에 대한 처리 (모바일 대응)
    if (event.type === "touchstart") {
      event.preventDefault(); // 모바일에서 여러 번 터치가 발생하는 것을 방지
    }
  
    // 현재 클릭된 버튼만 보라색으로 바꿔줍니다.
    let buttons = event.target.parentElement.querySelectorAll('.select-button');
    buttons.forEach(button => {
      button.classList.remove('active'); // 모든 버튼에서 'active' 클래스를 제거
    });
  
    // 클릭된 버튼에 'active' 클래스 추가
    event.target.classList.add('active');
  }
  
  // 성별 버튼 클릭 시
  document.querySelectorAll('#male, #female').forEach(button => {
    button.addEventListener('click', toggleButtonColor);
    button.addEventListener('touchstart', toggleButtonColor); // 터치 이벤트 추가
  });
  
  // 이름 선택 버튼 클릭 시
  document.querySelectorAll('#single-name, #double-name').forEach(button => {
    button.addEventListener('click', toggleButtonColor);
    button.addEventListener('touchstart', toggleButtonColor); // 터치 이벤트 추가
  });
  
  // 시간모름 버튼 클릭 시
  document.querySelector('#unknown-time').addEventListener('click', toggleButtonColor);
  document.querySelector('#unknown-time').addEventListener('touchstart', toggleButtonColor); // 터치 이벤트 추가
  