function loadContent(){
    const urlParams = new URLSearchParams(window.location.search);
    const form = urlParams.get('form');

    document.getElementById('form-a').style.display = 'none';
    document.getElementById('form-b').style.display = 'none';
    document.getElementById('form-c').style.display = 'none';
    document.getElementById('form-d').style.display = 'none';
    document.getElementById('form-e').style.display = 'none';
    document.getElementById('form-f').style.display = 'none';

    document.getElementById('form-cf(1)').style.display = 'none';
    document.getElementById('form-cf(2)').style.display = 'none';
    document.getElementById('form-cf(3)').style.display = 'none';

    document.getElementById('form-update(1)').style.display = 'none';
    document.getElementById('form-update(2)').style.display = 'none';
    document.getElementById('form-update(3)').style.display = 'none';

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

    else if(form === 'cf(1)'){
        document.getElementById('form-cf(1)').style.display = 'block';
    }
    else if(form === 'cf(2)'){
        document.getElementById('form-cf(2)').style.display = 'block';
    }
    else if(form === 'cf(3)'){
        document.getElementById('form-cf(3)').style.display = 'block';
    }

    else if(form === 'update(1)'){
        document.getElementById('form-update(1)').style.display = 'block';
    }

    else if(form === 'update(2)'){
        document.getElementById('form-update(2)').style.display = 'block';
    }

    else if(form === 'update(3)'){
        document.getElementById('form-update(3)').style.display = 'block';
    }

    else{
        document.getElementById('error').innerText = 'Không tìm thấy nội dung.';
    }
}

window.onload = loadContent;