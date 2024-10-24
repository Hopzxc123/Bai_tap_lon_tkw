var check_ho = /^[A-Za-zÀ-ỹ\s]{1,20}$/;       //Gom 1->20 ki tu bao gom cac chu tu a->z va cho phep khoang trang
var check_ten = /^[A-Za-zÀ-ỹ\s]{1,20}$/;
var check_sdt = /^\d{10}$/;              //chi gom 10 chu so
var check_email = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[a-zA-Z]{2,}$/     //email gom cac phan ...+ @ +...+ "." + ...
var check_matkhau = /^[A-Za-z0-9!@#$%^&*().]{8,12}$/        //mat khau tu 8->12 ki tu gom chu so va cac ki tu dac biet

//ham check ho
function checkho(txt){
    return check_ho.test(txt.value);
}

//ham check ten
function checkten(txt){
    return check_ten.test(txt.value);
}

//hàm check so dien thoai
function checksdt(txt){
    return check_sdt.test(txt.value);
}

//ham check email
function checkemail(txt){
    return check_email.test(txt.value);
}

//ham check mat khau
function checkmatkhau(txt){                 
    return check_matkhau.test(txt.value);
}

//ham xac nhan xem da tich checkbox chua
function checkbox(check){
    return check.checked;
}


function kiemtra(f){
    if(!checkho(f.lastname)){
        alert("Họ không hợp lệ. Họ phải gồm từ 1 đến 20 kí tự và không chứa số");
        return false;
    }

    if(!checkten(f.fristname)){
        alert("Tên không hợp lệ. Tên phải gồm từ 1 đến 20 kí tự và không chứa số");
        return false;
    }

    if(!checksdt(f.phone)){
        alert("Số điện thoại không hợp lệ. Số điện thoại phải gồm 10 chữ số.");
        return false;
    }

    if(!checkemail(f.email)){
        alert("Email không hợp lệ");
        return false;
    }
    
    if(!checkmatkhau(f.password)){
        alert("Mật khẩu không hợp lệ. Mật khẩu phải từ 8 đến 12 kí tự");
        return false;
    }

    if(!checkbox(f.dongy)){
        alert("Bạn phải đồng ý với Chính sách, quy định chung và Thông báo bảo mật cá nhân");
        return false;
    }
    alert("Đăng kí tài khoản thành công");
    return true;
}

function dangnhapngay(){
    window.location = "Dn.html";
}
