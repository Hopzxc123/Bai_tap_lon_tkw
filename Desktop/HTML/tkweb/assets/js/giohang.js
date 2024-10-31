let cartItems = JSON.parse(localStorage.getItem('cartItems')) || []; // Đọc giỏ hàng từ Local Storage
let promoCode = localStorage.getItem('promoCode'); // Đọc mã khuyến mãi từ Local Storage

function saveCartToLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(cartItems)); // Lưu giỏ hàng
}

// Hàm để lấy mã khuyến mãi từ URL
function getPromoCodeFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('promoCode');
}

// Hàm khởi tạo
function init() {
    promoCode = getPromoCodeFromURL() || localStorage.getItem('promoCode'); // Lấy mã khuyến mãi từ URL hoặc Local Storage
    if (promoCode) {
        localStorage.setItem('promoCode', promoCode); // Lưu mã khuyến mãi vào Local Storage
    }
    renderCartItems();
    updateTotalPrice(); // Cập nhật tổng tiền khi trang tải
}


// Hàm thêm món
function addItem() {
    
    saveCartToLocalStorage(); // Lưu giỏ hàng sau khi thêm sản phẩm
    renderCartItems();
    updateTotalPrice();
}
// Hiện sản phẩm trong giỏ hàng
function renderCartItems() {
    const cartItemsContainer = document.getElementById('cartItems');
    cartItemsContainer.innerHTML = '';
    // Hiển thị từng sản phẩm
    cartItems.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        // Chèn thông tin, tạo nút tăng giảm số lượng
    // Chèn thông tin, tạo nút tăng giảm số lượng
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
        // Thêm sản phẩm vào giỏ hàng
        cartItemsContainer.appendChild(itemElement);
    });
    // Cập nhật tổng giá trị
    updateTotalPrice();
}

// Thay đổi số lượng sản phẩm
function changeQuantity(index, change) {
    cartItems[index].quantity += change;
    // Xóa số lượng nếu về 0
    if (cartItems[index].quantity < 1) {
        cartItems.splice(index, 1);
    }
    saveCartToLocalStorage(); // Lưu giỏ hàng khi cập nhật số lượng
    renderCartItems();
}

// Xóa hết giỏ hàng
function clearCart() {
    cartItems = [];
    localStorage.removeItem('cartItems'); // Xóa giỏ hàng khỏi Local Storage
    localStorage.removeItem('promoCode');  // Xóa mã khuyến mãi khỏi Local Storage
    renderCartItems();
    updateTotalPrice();
}


// Cập nhật tổng tiền
function updateTotalPrice() {
    console.log('Promo Code:', promoCode); // Debug: In giá trị của promoCode để kiểm tra
    const totalPriceElement = document.getElementById('totalPrice');
    const shippingFeeElement = document.getElementById('shippingFee');
    const finalPriceElement = document.getElementById('finalPrice');
    const discountElement = document.getElementById('discount'); // Thêm dòng này
    const promoAmountElement = document.getElementById('promo-amount'); // Thêm dòng này

    let total = 0;
    cartItems.forEach(item => {
        total += item.price * item.quantity;
    });

    const shippingFee = cartItems.length > 0 ? 25000 : 0;
    let discount = 0;

    
    // Tính toán giảm giá dựa trên mã khuyến mãi
    switch (promoCode) {
        case '20k':
            discount = 20000; // Giảm 20k
            console.log('Applied Promo Code: 20k');
            break;
        case '10%':
            discount = total * 0.1; // Giảm 10%
            console.log('Applied Promo Code: 10%');
            break;
        case '39k':
            if (total >= 39000) {
                discount = 25000; // Giảm phí ship cho đơn hàng từ 39k
            }
            console.log('Applied Promo Code: freeship');
            break;
        case '30%':
            discount = total * 0.3 +25000 ; // Giảm 30%
            console.log('Applied Promo Code: 30%');
            break;
        case '30k':
            discount = 30000; // Giảm 30k
            console.log('Applied Promo Code: 30k');
            break;
        case 'freeship':
            discount = 25000; // Giảm phí ship 25k
            console.log('Applied Promo Code: freeship');
            break;
        default:
            discount = 0; // Không có giảm giá
            console.log('No applicable promo code.');
            break;
    }

 
    const finalPrice = total + shippingFee - discount;

    totalPriceElement.textContent = total.toLocaleString('vi-VN') + 'đ';
    shippingFeeElement.textContent = shippingFee.toLocaleString('vi-VN') + 'đ';
    finalPriceElement.textContent = finalPrice.toLocaleString('vi-VN') + 'đ';
    discountElement.textContent = discount.toLocaleString('vi-VN') + 'đ'; // Cập nhật hiển thị số tiền khuyến mãi bị trừ
    promoAmountElement.textContent = discount.toLocaleString('vi-VN') + 'đ'; // Hiển thị số tiền khuyến mãi

    const checkoutButton = document.getElementById('checkoutButton');
    checkoutButton.disabled = cartItems.length === 0;
       
    // Debugging: Kiểm tra các giá trị trong console
       console.log('Total:', total);
       console.log('Shipping Fee:', shippingFee);
       console.log('Discount:', discount);
       console.log('Final Price:', finalPrice);
       console.log('Promo Code:', promoCode);
}
// Hàm khởi tạo khi trang tải
window.onload = init;

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
    }
}
document.getElementById('promoButton').addEventListener('click', function() {
    window.location.href = 'voucher.html'; // Chuyển sang trang voucher.html
});