let cartCount = 0; // Biến để lưu số lượng sản phẩm trong giỏ hàng
document.addEventListener("DOMContentLoaded", function() {
    // Bây giờ bạn có thể gọi addToCart
});
        function addToCart(name, price) {
            let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            // Tìm sản phẩm trong giỏ hàng
            const existingItem = cartItems.find(item => item.name === name);
            
            if (existingItem) {
                existingItem.quantity++; // Tăng số lượng nếu sản phẩm đã tồn tại
            } else {
                cartItems.push({ name: name, price: price, quantity: 1 }); // Thêm sản phẩm mới
            }
        
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            
            cartCount++; // Tăng số lượng sản phẩm
            updateCartCount(); // Cập nhật số lượng hiển thị
        
            showToast(name); // Hiển thị thông báo
            updateCartDisplay(); // Cập nhật giỏ hàng
        }
        
        function showToast(name) {
            const toast = document.querySelector('#toast');
            toast.innerText = `Thêm ${name} vào giỏ hàng thành công!`;
            toast.style.display = 'flex'; // Hiển thị toast
            setTimeout(() => {
                toast.style.opacity = '1'; // Đặt độ mờ thành 1
            }, 10); // Thêm độ trễ nhỏ để đảm bảo chuyển đổi hoạt động
        
            // Ẩn toast sau 3 giây
            setTimeout(() => {
                hideToast();
            }, 3000);
        }
        
        function hideToast() {
            const toast = document.querySelector('#toast');
            toast.style.opacity = '0'; // Đặt độ mờ thành 0 để ẩn
            setTimeout(() => {
                toast.style.display = 'none'; // Ẩn toast
            }, 500); // Đợi 500ms để hoàn thành hiệu ứng
        }
        
        // Hàm cập nhật giỏ hàng trên trang giohang.html
        function updateCartDisplay() {
            const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            const cartContainer = document.getElementById('cartItems');
            cartContainer.innerHTML = ''; // Xóa danh sách cũ
        
            // Tạo danh sách sản phẩm
            cartItems.forEach(item => {
                const itemElement = document.createElement('div');
                itemElement.classList.add('cart-item');
                itemElement.innerHTML = `<p>${item.name} x ${item.quantity}</p><p>${(item.price * item.quantity).toLocaleString()}đ</p>`;
                cartContainer.appendChild(itemElement);
            });
        
            // Cập nhật tổng tiền
            const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
            document.getElementById('totalPrice').innerText = `${totalPrice.toLocaleString()}đ`;
        }
        
        // Cập nhật số lượng sản phẩm trong giỏ hàng
        function updateCartCount() {
    // Lấy giỏ hàng từ Local Storage
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    // Tính tổng số lượng sản phẩm trong giỏ hàng
    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
    
    // Cập nhật nội dung thẻ span
    const cartCountElement = document.getElementById('cart-count');
    cartCountElement.innerText = totalQuantity > 0 ? totalQuantity : ''; // Nếu không có sản phẩm, bỏ trống
}

window.onload = function() {
    // Lấy giỏ hàng từ Local Storage
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    // Hiển thị thông tin đơn hàng
    const orderDetailsElement = document.getElementById('orderDetails');
    orderDetailsElement.innerHTML = ''; // Xóa nội dung cũ

    cartItems.forEach(item => {
        const itemDetail = document.createElement('div');
        itemDetail.innerHTML = `<p>${item.name} - ${(item.price * item.quantity).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })} x ${item.quantity}</p>`;
        orderDetailsElement.appendChild(itemDetail);
    });

    // Cập nhật tổng tiền
    updateTotalPrice(); // Gọi hàm tính toán tổng tiền

    // Cập nhật số lượng giỏ hàng
    updateCartCount(); // Gọi hàm cập nhật số lượng giỏ hàng
};

// Hàm tính toán tổng tiền
function updateTotalPrice() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    
    const totalPriceElement = document.getElementById('total-price');
    totalPriceElement.innerHTML = totalPrice.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}

