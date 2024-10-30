let cartItems = [];
    // thêm món
    function addItem() {
    const newItem = { name: 'Cà phê sữa đá', price: 39000, quantity: 1 };
    cartItems.push(newItem);
    renderCartItems();
}
    //hiện sp trong giỏ hàng
    function renderCartItems() {
        const cartItemsContainer = document.getElementById('cartItems');
        cartItemsContainer.innerHTML = '';
        //hiển thị từng sp
        cartItems.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            //chèn thông tin, tạo nút tăng giảm số lượng
            itemElement.innerHTML = `
                <div class="item-info">
                    <p>${item.name}</p>
                    <p>Giá: ${item.price.toLocaleString('vi-VN')}đ</p>
                </div>
                <div class="item-quantity">
                    <button class="quantity-button" onclick="changeQuantity(${index}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-button" onclick="changeQuantity(${index}, 1)">+</button>
                </div>
            `;
            // thêm sản phẩm vào giỏ hàng
            cartItemsContainer.appendChild(itemElement);
        });
            //cập nhập tổng giá trị
            updateTotalPrice();
        }
//thay đổi số lượng sản phẩm
    function changeQuantity(index, change) {
        cartItems[index].quantity += change;
//xóa số lượng nếu về 0
        if (cartItems[index].quantity < 1) {
            cartItems.splice(index, 1);
        }
        renderCartItems();
    }
    // xóa hết giỏ hàng
    function clearCart() {
       cartItems = [];
        renderCartItems();
    }

    function updateTotalPrice() {
        const totalPriceElement = document.getElementById('totalPrice');
        const shippingFeeElement = document.getElementById('shippingFee');
        const finalPriceElement = document.getElementById('finalPrice');

        let total = 0;
            cartItems.forEach(item => {
            total += item.price * item.quantity;
        });

        const shippingFee = cartItems.length > 0 ? 25000 : 0;
        const finalPrice = total + shippingFee;

        totalPriceElement.textContent = total.toLocaleString('vi-VN') + 'đ';
        shippingFeeElement.textContent = shippingFee.toLocaleString('vi-VN') + 'đ';
        finalPriceElement.textContent = finalPrice.toLocaleString('vi-VN') + 'đ';

        const checkoutButton = document.getElementById('checkoutButton');
        checkoutButton.disabled = cartItems.length === 0;
        }
        function redirectToVoucher() {
            window.location.href = 'voucher.html'; // Chuyển đến trang voucher
        }
        function validateForm() {
            const recipientName = document.getElementById('recipientName').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const email = document.getElementById('email').value.trim();
            const address = document.getElementById('address').value.trim();
            const paymentMethods = document.querySelectorAll('input[name="payment"]');
        
            // Ẩn tất cả thông báo lỗi trước khi kiểm tra
            document.getElementById('phone-error').style.display = 'none';
            document.getElementById('email-error').style.display = 'none';
            document.getElementById('recipient-error').style.display = 'none';
            document.getElementById('address-error').style.display = 'none';
        
            let isValid = true; // Biến để theo dõi tính hợp lệ của biểu mẫu
        
            // Kiểm tra thông tin
            if (!recipientName) {
                document.getElementById('recipient-error').textContent = 'Vui lòng nhập tên người nhận.';
                document.getElementById('recipient-error').style.display = 'block';
                isValid = false; // Đặt isValid thành false nếu có lỗi
            }
        
            if (!phone) {
                document.getElementById('phone-error').textContent = 'Vui lòng nhập số điện thoại.';
                document.getElementById('phone-error').style.display = 'block';
                isValid = false; // Đặt isValid thành false nếu có lỗi
            }
        
            if (!email) {
                document.getElementById('email-error').textContent = 'Vui lòng nhập email.';
                document.getElementById('email-error').style.display = 'block';
                isValid = false; // Đặt isValid thành false nếu có lỗi
            }
        
            if (!address) {
                document.getElementById('address-error').textContent = 'Vui lòng nhập địa chỉ.';
                document.getElementById('address-error').style.display = 'block';
                isValid = false; // Đặt isValid thành false nếu có lỗi
            }
        
            // Nếu không có lỗi, tiếp tục kiểm tra các trường khác
            if (isValid) {
                // Kiểm tra tên người nhận
                if (!recipientName.match(/[a-zA-Z0-9]/)) {
                    document.getElementById('recipient-error').textContent = 'Tên người nhận không hợp lệ. Vui lòng nhập tên.';
                    document.getElementById('recipient-error').style.display = 'block';
                    return;
                }
                
                // Kiểm tra định dạng số điện thoại
                const phoneRegex = /^0[0-9]{8,10}$/;
                if (!phoneRegex.test(phone)) {
                    document.getElementById('phone-error').textContent = 'Số điện thoại không hợp lệ. Vui lòng nhập số điện thoại bắt đầu bằng số 0 và có từ 9 đến 11 chữ số.';
                    document.getElementById('phone-error').style.display = 'block';
                    return;
                }
        
                // Kiểm tra định dạng email
                const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
                if (!emailRegex.test(email)) {
                    document.getElementById('email-error').textContent = 'Email không hợp lệ. Vui lòng nhập email có định dạng @gmail.com.';
                    document.getElementById('email-error').style.display = 'block';
                    return;
                }
        
                // Kiểm tra địa chỉ
                if (!address.match(/[a-zA-Z0-9]/)) {
                    document.getElementById('address-error').textContent = 'Địa chỉ không hợp lệ. Vui lòng nhập địa chỉ.';
                    document.getElementById('address-error').style.display = 'block';
                    return;
                }
                // Kiểm tra giỏ hàng
                if (cartItems.length === 0) {
                    alert('Giỏ hàng của bạn hiện không có sản phẩm nào. Vui lòng thêm sản phẩm trước khi đặt hàng.');
                    return;
                }   
                alert('Đặt hàng thành công!');
                // Thực hiện các thao tác đặt hàng ở đây
                checkFormCompletion();
            }
        }
        document.getElementById('promoButton').addEventListener('click', function() {
            window.location.href = 'voucher.html'; // Chuyển sang trang voucher.html
        });
    
        