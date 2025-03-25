// '수정하기' 체크박스가 체크되면 수정할 수 있는 박스가 보이도록 설정
document.getElementById("blessing").addEventListener("click", function () {
    var editableBox = document.querySelector(".editable-box");
    // 체크박스 상태에 따라 수정 박스 보이기/숨기기
    if (this.checked) {
        editableBox.style.display = "block";
    } else {
        editableBox.style.display = "none";
    }
});

// 저장하기 버튼 클릭 시 수정된 정보 적용
document.getElementById("save-changes").addEventListener("click", function () {
    // 입력된 수정 정보를 변수에 저장
    const birthdate = document.getElementById("birthdate").value;
    const calendar = document.getElementById("calendar").value;
    const birthtime = document.getElementById("birthtime").value;

    // 출생 정보 텍스트를 업데이트
    let birthInfoText = `${calendar} ${birthdate} ${birthtime ? birthtime + " " : ""}`;
    
    // 수정된 정보를 출생 정보 영역에 업데이트
    document.querySelector(".rounded-box p").innerHTML = `<strong>출생:</strong> ${birthInfoText} (수정됨)`;

    // 수정 박스를 숨기고, 체크박스도 비활성화
    document.getElementById("blessing").checked = false;
    document.querySelector(".editable-box").style.display = "none";
});

