let cartItems = [];

    function addItem() {
    const newItem = { name: 'Cà phê sữa đá', price: 39000, quantity: 1 };
    cartItems.push(newItem);
    renderCartItems();
}

    function renderCartItems() {
        const cartItemsContainer = document.getElementById('cartItems');
        cartItemsContainer.innerHTML = '';

        cartItems.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
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
        `   ;
            cartItemsContainer.appendChild(itemElement);
        });

            updateTotalPrice();
        }

    function changeQuantity(index, change) {
        cartItems[index].quantity += change;
        if (cartItems[index].quantity < 1) {
            cartItems.splice(index, 1);
        }
        renderCartItems();
    }

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
    
        // Kiểm tra thông tin
            if (!recipientName || !phone || !email || !address) {
            alert('Vui lòng điền đầy đủ thông tin: Tên người nhận, Số điện thoại, Email, và Địa chỉ.');
            return; // Ngừng nếu không đầy đủ thông tin
            }

            if (![...paymentMethods].some(method => method.checked)) {
                alert('Vui lòng chọn phương thức thanh toán.');
                return;
            }

            alert('Đặt hàng thành công!');
            
            // Thực hiện các thao tác đặt hàng ở đây
            checkFormCompletion();
        }
            
        function checkFormCompletion() {
            const recipientName = document.getElementById('recipientName').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const email = document.getElementById('email').value.trim();
            const address = document.getElementById('address').value.trim();
            const paymentMethods = document.querySelectorAll('input[name="payment"]');

            const checkoutButton = document.getElementById('checkoutButton');
            const isFormComplete = recipientName && phone && email && address && [...paymentMethods].some(method => method.checked);

            checkoutButton.disabled = !isFormComplete; // Kích hoạt nút nếu tất cả đều hợp lệ
        }

        // Gọi hàm kiểm tra khi có thay đổi trong các trường
        document.getElementById('recipientName').addEventListener('input', checkFormCompletion);
        document.getElementById('phone').addEventListener('input', checkFormCompletion);
        document.getElementById('email').addEventListener('input', checkFormCompletion);
        document.getElementById('address').addEventListener('input', checkFormCompletion);