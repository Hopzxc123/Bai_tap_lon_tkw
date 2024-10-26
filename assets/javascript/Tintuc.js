function loadContent(){
    const urlParams = new URLSearchParams(window.location.search);
    const form = urlParams.get('form');

    document.getElementById('form-a').style.display = 'none';
    document.getElementById('form-b').style.display = 'none';
    document.getElementById('form-c').style.display = 'none';
    document.getElementById('form-d').style.display = 'none';
    document.getElementById('form-e').style.display = 'none';
    document.getElementById('form-f').style.display = 'none';
    document.getElementById('form-g').style.display = 'none';
    document.getElementById('form-h').style.display = 'none';

    if(form === 'a'){
        document.getElementById('form-a').style.display = 'block';
    } 
    else if(form === 'b'){
        document.getElementById('form-b').style.display = 'block';
    }
    else if(form === 'c'){
        document.getElementById('form-c').style.display = 'block';
    }
    else if(form === 'd'){
        document.getElementById('form-d').style.display = 'block';
    }
    else if(form === 'e'){
        document.getElementById('form-e').style.display = 'block';
    }
    else if(form === 'f'){
        document.getElementById('form-f').style.display = 'block';
    }
    else if(form === 'g'){
        document.getElementById('form-g').style.display = 'block';
    }
    else if(form === 'h'){
        document.getElementById('form-h').style.display = 'block';
    }
    else{
        document.getElementById('error').innerText = 'Không tìm thấy nội dung.';
    }
}

window.onload = loadContent;