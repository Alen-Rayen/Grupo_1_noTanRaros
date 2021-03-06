let qs = (element) => {
    return document.querySelector(element);
}

window.onload = () => {
    let $form = qs('#form');
    let $inputEmail = qs('#email');
    let $emailErrors = qs('#emailErrors');
    let $inputPass = qs('#pass');
    let $passErrors = qs('#passErrors');
    let $faCrossEmail = qs('.fa-cross-email');
    let $faCheckEmail = qs('.fa-check-email');
    let $faCrossPass = qs('.fa-cross-pass');
    let $faCheckPass = qs('.fa-check-pass');
    let $submitErrors = qs('#submitErrors');
    let showPassBtn = qs('.fa-eye');

    let regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i

    let validationErrors = false;

    let showPass = (pass, btn) => {
        if(pass.type == 'password'){
            pass.type = 'text';
            btn.classList.remove('fa-eye');
            btn.classList.add('fa-eye-slash');
        }else{
            pass.type = 'password';
            btn.classList.remove('fa-eye-slash');
            btn.classList.add('fa-eye');
        }
    }

    showPassBtn.onclick = () => {
        showPass($inputPass, showPassBtn)
    }

    $inputEmail.addEventListener('blur', () => {
        switch(true){
            case !$inputEmail.value.trim():
                $faCheckEmail.style.display = 'none';
                $faCrossEmail.style.display = 'block';
                $emailErrors.innerHTML = 'Por favor ingresa tu email';
                $inputEmail.classList.remove('is-valid');
                $inputEmail.classList.add('is-invalid');
                validationErrors = true
                break;
            case !regExEmail.test($inputEmail.value):
                $faCheckEmail.style.display = 'none';
                $faCrossEmail.style.display = 'block';
                $emailErrors.innerHTML = 'Ingresa un email valido';
                $inputEmail.classList.remove('is-valid');
                $inputEmail.classList.add('is-invalid');
                validationErrors = true
                break;
            default:
                $faCrossEmail.style.display = 'none';
                $faCheckEmail.style.display = "block";
                $inputEmail.classList.remove('is-invalid');
                $inputEmail.classList.add('is-valid');
                $emailErrors.innerHTML = "";
                validationErrors = false;
                break;
        }
    })

    $inputEmail.addEventListener('keyup', () => {
        switch(true){
            case !$inputEmail.value.trim():
                $faCheckEmail.style.display = 'none';
                $faCrossEmail.style.display = 'block';
                $emailErrors.innerHTML = 'Por favor ingresa tu email';
                $inputEmail.classList.remove('is-valid');
                $inputEmail.classList.add('is-invalid');
                validationErrors = true
                break;
            case !regExEmail.test($inputEmail.value):
                $faCheckEmail.style.display = 'none';
                $faCrossEmail.style.display = 'block';
                $emailErrors.innerHTML = 'Ingresa un email valido';
                $inputEmail.classList.remove('is-valid');
                $inputEmail.classList.add('is-invalid');
                validationErrors = true
                break;
            default:
                $faCrossEmail.style.display = 'none';
                $faCheckEmail.style.display = "block";
                $inputEmail.classList.remove('is-invalid');
                $inputEmail.classList.add('is-valid');
                $emailErrors.innerHTML = "";
                validationErrors = false;
                break;
        }
    })

    $inputPass.addEventListener('keyup', () => {
        switch(true){
            case !$inputPass.value.length > 0:
                $faCheckPass.style.display = 'none';
                showPassBtn.style.marginRight = '20px';
                $faCrossPass.style.display = 'block';
                $passErrors.innerHTML = 'Por favor ingresa tu contrase??a';
                $inputPass.classList.add('is-invalid');
                validationErrors = true
                break;
            case $inputPass.value.length > 0:
                $inputPass.classList.remove('is-invalid');
                $faCheckPass.style.display = 'none';
                $faCrossPass.style.display = 'none';
                showPassBtn.style.marginRight = 0;
                $passErrors.innerHTML = '';
                validationErrors = false
                break;
            default:
                $faCrossPass.style.display = 'none';
                showPassBtn.style.marginRight = 0;
                $inputPass.classList.remove('is-invalid');
                
                $passErrors.innerHTML = "";
                validationErrors = false;
                break;
        }
    })

    $inputPass.addEventListener('blur', () => {
        switch(true){
            case !$inputPass.value.length > 0:
                $faCheckPass.style.display = 'none';
                showPassBtn.style.marginRight = '20px';
                $faCrossPass.style.display = 'block';
                $passErrors.innerHTML = 'Por favor ingresa tu contrase??a';
                $inputPass.classList.add('is-invalid');
                validationErrors = true
                break;
            case $inputPass.value.length > 0:
                $faCheckPass.style.display = 'none';
                $faCrossPass.style.display = 'none';
                showPassBtn.style.marginRight = 0;
                $passErrors.innerHTML = '';
                $inputPass.classList.remove('is-invalid');
                validationErrors = false
                break;
            default:
                $faCrossPass.style.display = 'none';
                
                $inputPass.classList.remove('is-invalid');
                showPassBtn.style.marginRight = 0;
                $passErrors.innerHTML = "";
                validationErrors = false;
                break;
        }
    })

    $form.addEventListener('submit', (e) => {
        e.preventDefault();

        let error = false;
        let elementsForm = $form.elements;


        
            if(!$inputEmail.value.trim()){
                $faCheckEmail.style.display = 'none';
                $faCrossEmail.style.display = 'block';
                $emailErrors.innerHTML = 'Por favor ingresa tu email';
                $inputEmail.classList.remove('is-valid');
                $inputEmail.classList.add('is-invalid');
                error = true;
            }
            
            if(!$inputPass.value.length > 0){
                $faCheckPass.style.display = 'none';
                $faCrossPass.style.display = 'block';
                showPassBtn.style.marginRight = '20px';
                $passErrors.innerHTML = 'Por favor ingresa tu contrase??a';
                $inputPass.classList.add('is-invalid');
                validationErrors = true;
            }
                
        /* for(let i = 0; i < elementsForm.length -1; i++){
            if(elementsForm[i].value == "" && elementsForm[i].type !== 'password'){
                elementsForm[i].classList.remove('is-valid');
                elementsForm[i].classList.add('is-invalid');
                $submitErrors.innerHTML = 'Los campos se??alados son obligatorios';
                $submitErrors.style.display = 'block'
                error = true;
            }
        } */

        if(!error && !validationErrors ){
            $form.submit();
        }
    })
}