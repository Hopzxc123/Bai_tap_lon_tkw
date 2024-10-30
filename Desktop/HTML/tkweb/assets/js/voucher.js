function toggleApplyButton() {
    const promoCodeInput = document.getElementById('promoCode').value.trim();
    const applyButton = document.getElementById('applyButton');
    // Bật hoặc tắt nút dựa trên nội dung của ô nhập
    applyButton.disabled = promoCodeInput === '';
}
function applyPromoCode() {
    const promoCodeInput = document.getElementById('promoCode').value.trim();

    // Kiểm tra nếu ô nhập mã khuyến mãi trống
    if (promoCodeInput === '') {
        alert('Vui lòng nhập mã khuyến mãi trước khi áp dụng.');
        return; // Thoát khỏi hàm nếu không có mã khuyến mãi được nhập
    }

    // Kiểm tra mã khuyến mãi hợp lệ
    if (isValidPromoCode(promoCodeInput)) {
        // Logic để áp dụng mã khuyến mãi ở đây
        alert('Mã khuyến mãi đã được áp dụng!');
    } else {
        alert('Mã khuyến mãi không hợp lệ!');
    } 
}
//có thể bỏ
function isValidPromoCode(code) {    
    // Danh sách mã khuyến mãi hợp lệ (bạn có thể tùy chỉnh)
    const validCodes = ['HOPDEPTRAI', 'HIENTHUBA'];
    return validCodes.includes(code); // Kiểm tra mã khuyến mãi có nằm trong danh sách hợp lệ không
}
document.getElementById('useVoucherButton').addEventListener('click', function() {
    // Lưu giá trị giảm giá vào localStorage
    localStorage.setItem('discount', 20); // Ví dụ: giảm giá 20%

    // Chuyển về giohang.html
    window.location.href = 'giohang.html';
});