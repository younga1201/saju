document.addEventListener("DOMContentLoaded", function () {
    // ✅ 로그인/로그아웃 버튼 기능
    const loginBtn = document.getElementById("login-btn");
    const logoutBtn = document.getElementById("logout-btn");

    function updateAuthButtons() {
        if (localStorage.getItem("isLoggedIn") === "true") {
            loginBtn.style.display = "none";
            logoutBtn.style.display = "block";
        } else {
            loginBtn.style.display = "block";
            logoutBtn.style.display = "none";
        }
    }

    if (loginBtn && logoutBtn) {
        loginBtn.addEventListener("click", function () {
            localStorage.setItem("isLoggedIn", "true");
            updateAuthButtons();
        });

        logoutBtn.addEventListener("click", function () {
            localStorage.removeItem("isLoggedIn");
            updateAuthButtons();
        });

        updateAuthButtons(); // 초기 버튼 상태 설정
    }

    // ✅ 팝업창 열기/닫기 기능
    function toggleInputBox(id) {
        const inputBox = document.getElementById(id);
        if (inputBox) {
            inputBox.style.display = "block";
        }
    }

    function closeInputBox(id, event) {
        event.stopPropagation(); // 부모 div 클릭 이벤트 방지
        const inputBox = document.getElementById(id);
        if (inputBox) {
            inputBox.style.display = "none";
        }
    }

    // ✅ 박스를 클릭하면 해당하는 팝업 열기
    const wishes = document.querySelectorAll(".pink-text1, .pink-text2");
    const popups = document.querySelectorAll(".input-box");
    const closeButtons = document.querySelectorAll(".close-btn");
    const saveButtons = document.querySelectorAll(".save-btn");

    wishes.forEach((wish, index) => {
        wish.addEventListener("click", function () {
            popups[index].style.display = "block";
        });
    });

    closeButtons.forEach((btn, index) => {
        btn.addEventListener("click", function (event) {
            event.stopPropagation();
            popups[index].style.display = "none";
        });
    });

    saveButtons.forEach((btn, index) => {
        btn.addEventListener("click", function () {
            popups[index].style.display = "none";
        });
    });

    // ✅ 특정 버튼을 클릭하면 팝업 열기 (toggleButton ID가 존재하는 경우)
    const toggleButton = document.getElementById("toggleButton");
    if (toggleButton) {
        toggleButton.addEventListener("click", function () {
            toggleInputBox("inputBox");
        });
    }

    // ✅ 전역에서 접근 가능하도록 window 객체에 추가
    window.toggleInputBox = toggleInputBox;
    window.closeInputBox = closeInputBox;
});
