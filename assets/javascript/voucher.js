function toggleApplyButton() {
    const promoCodeInput = document.getElementById('promoCode').value.trim();
    const applyButton = document.getElementById('applyButton');
    // Bật hoặc tắt nút dựa trên nội dung của ô nhập
    applyButton.disabled = promoCodeInput === '';
}

function isValidPromoCode(code) {
    // Danh sách mã khuyến mãi hợp lệ
        const validCodes = ['20k', '10%', '39k', '30%', '30k', 'freeship'];
        return validCodes.includes(code.toLowerCase()); // Chuyển đổi mã thành chữ thường
    }
    
function usePromo(promoCode) {
    if (isValidPromoCode(promoCode)) {
        // Chuyển đến giỏ hàng với mã khuyến mãi
        localStorage.setItem('promoCode', promoCode.toLowerCase()); // Lưu mã khuyến mãi vào Local Storage
        window.location.href = `giohang.html?promoCode=${promoCode}`;
    } else {
        alert('Mã khuyến mãi không hợp lệ.');
    }
}

function applyPromoCode() {
    const promoCodeInput = document.getElementById('promoCode').value.trim();

    // Kiểm tra nếu ô nhập mã khuyến mãi trống
    if (promoCodeInput === '') {
        alert('Vui lòng nhập mã khuyến mãi trước khi áp dụng.');
        return; // Thoát khỏi hàm nếu không có mã khuyến mãi được nhập
    }

    // Gọi hàm sử dụng mã khuyến mãi
    usePromo(promoCodeInput);
}
// Đảm bảo rằng các phần tử DOM đã được tải trước khi thêm sự kiện
document.addEventListener('DOMContentLoaded', function () {
    const promoCodeInput = document.getElementById('promoCode');
    if (promoCodeInput) {
        promoCodeInput.addEventListener('input', toggleApplyButton);
    }

    const applyButton = document.getElementById('applyButton');
    if (applyButton) {
        applyButton.addEventListener('click', applyPromoCode);
    }
});