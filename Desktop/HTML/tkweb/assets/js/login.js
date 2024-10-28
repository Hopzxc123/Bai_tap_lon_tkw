document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn gửi biểu mẫu
    
    const phoneInput = document.getElementById('phone').value;
    const errorMessage = document.getElementById('error-message');
    
    // Kiểm tra định dạng số điện thoại (chỉ cho phép số và có độ dài từ 10-15)
    const phoneRegex = /^[0-9]{10,15}$/;
    
    if (!phoneRegex.test(phoneInput)) {
        errorMessage.style.display = 'block'; // Hiển thị thông báo lỗi
    } else {
        errorMessage.style.display = 'none'; // Ẩn thông báo lỗi
        // Tiến hành gửi biểu mẫu hoặc xử lý đăng nhập
        alert('Đăng nhập thành công!'); // Thay thế bằng logic thực tế
    }
});