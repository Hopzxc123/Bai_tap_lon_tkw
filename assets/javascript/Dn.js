var check_email = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[a-zA-Z]{2,}$/
var check_matkhau = /^[A-Za-z0-9!@#$%^&*().]{8,12}$/

function checkemail(txt){
    return check_email.test(txt.value);
}

function checkmatkhau(txt){                 
    return check_matkhau.test(txt.value);
}

function kiemtra(f){
    if(!checkemail(f.email)){
        alert("Email không hợp lệ");
        return false;
    }

    if(!checkmatkhau(f.matkhau)){
        alert("Mật khẩu không hợp lệ. Mật khẩu phải từ 8 đến 12 kí tự");
        return false;
    }

    window.location = "Trangchu.html";
    return true;
}

function dangky(){
    window.location = "Taotk.html";
}