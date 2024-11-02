document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const phoneInput = document.getElementById('phone');
    const errorMessage = document.getElementById('error-message');

    if (!loginForm || !phoneInput || !errorMessage) {
        console.error("Một trong các phần tử không được tìm thấy:", {
            loginForm,
            phoneInput,
            errorMessage
        });
        return;
    }

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Ngăn chặn gửi biểu mẫu
        
        const phoneValue = phoneInput.value;
        
        // Kiểm tra định dạng số điện thoại (bắt đầu bằng số 0 và có độ dài từ 9-11)
        const phoneRegex = /^0[0-9]{8,10}$/;

        if (!phoneRegex.test(phoneValue)) {
            errorMessage.style.display = 'block'; // Hiển thị thông báo lỗi
            errorMessage.textContent = 'Số điện thoại phải bắt đầu bằng số 0 và có độ dài từ 9 đến 11 chữ số.'; // Thông báo lỗi
        } else {
            errorMessage.style.display = 'none'; // Ẩn thông báo lỗi
            window.location.href = 'order.html'; // Chuyển hướng đến trang order.html
        }
    });
});
