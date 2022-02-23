let qs = (element) => {
    return document.querySelector(element);
}

window.onload = () => {

    let $form = qs('#form');
    let $inputName = qs('#nombre');
    let $nameErrors = qs('#nameErrors');
    let $inputLastName = qs('#apellido');
    let $lastNameErrors = qs('#lastNameErrors');
    let $inputEmail = qs('#email');
    let $emailErrors = qs('#emailErrors');
    let $inputPass = qs('#pass');
    let $passErrors = qs('#passErrors');
    let $inputPass2 = qs('#pass2');
    let $pass2Errors = qs('#pass2Errors');
    let $inputFile = qs('#avatar');
    let $fileErrors = qs('#fileErrors');
    let $terms = qs('#terms');
    let $termsErrors = qs('#termsErrors');
    let $submitErrors = qs('#submitErrors');
    let $imgPreview = qs('#img-preview')

    let regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    let regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(.{8,16})$/
    let regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/

    let validationErrors = false;

    $inputName.addEventListener('blur', () => {
        switch(true){
            case !$inputName.value.trim():
                $nameErrors.innerHTML = 'El campo es obligatorio'
                $inputName.classList.remove('is-valid');
                $inputName.classList.add('is-invalid');
                validationErrors = true;
                break;
            case !regExAlpha.test($inputName.value):
                $nameErrors.innerHTML = 'Ingrese un nombre válido'
                $inputName.classList.remove('is-valid');
                $inputName.classList.add('is-invalid');
                validationErrors = true;
                break;
            case $inputName.value.length < 2:
                $nameErrors.innerHTML = 'El nombre debe tener al menos 2 caracteres'
                $inputName.classList.remove('is-valid');
                $inputName.classList.add('is-invalid');
                validationErrors = true;
                break;
            default:
                $inputName.classList.remove('is-invalid');
                $inputName.classList.add('is-valid');
                $nameErrors.innerHTML = "";
                validationErrors = false;
                break;
        }
    })

    $inputLastName.addEventListener('blur', () => {
        switch(true){
            case !$inputLastName.value.trim():
                $lastNameErrors.innerHTML = 'El campo es obligatorio';
                $inputLastName.classList.remove('is-valid');
                $inputLastName.classList.add('is-invalid');
                validationErrors = true;
                break;
            case !regExAlpha.test($inputLastName.value):
                $lastNameErrors.innerHTML = 'Ingresa un apellido válido';
                $inputLastName.classList.remove('is-valid');
                $inputLastName.classList.add('is-invalid');
                validationErrors = true;
                break;
            case $inputLastName.value.length < 2:
                $lastNameErrors.innerHTML = 'El apellido debe tener al menos 2 caracteres';
                $inputLastName.classList.remove('is-valid');
                $inputLastName.classList.add('is-invalid');
                validationErrors = true;
                break;
            default:
                $inputLastName.classList.remove('is-invalid');
                $inputLastName.classList.add('is-valid');
                $lastNameErrors.innerHTML = "";
                validationErrors = false;
                break;
        }
    })

    $inputEmail.addEventListener('blur', () => {
        switch(true){
            case !$inputEmail.value.trim():
                $emailErrors.innerHTML = 'El campo es obligatorio';
                $inputEmail.classList.remove('is-valid');
                $inputEmail.classList.add('is-invalid');
                validationErrors = true;
                break;
            case !regExEmail.test($inputEmail.value):
                $emailErrors.innerHTML = 'Ingresa un email válido';
                $inputEmail.classList.remove('is-valid');
                $inputEmail.classList.add('is-invalid');
                validationErrors = true;
                break;
            default:
                $inputEmail.classList.remove('is-invalid');
                $inputEmail.classList.add('is-valid');
                $emailErrors.innerHTML = "";
                validationErrors = false;
                break;
        }
    })

    $inputPass.addEventListener('blur', () => {
        switch(true){
            case !$inputPass.value.trim():
                $passErrors.innerHTML = 'El campo es obligatorio';
                $inputPass.classList.remove('is-valid');
                $inputPass.classList.add('is-invalid');
                validationErrors = true;
                break;
            case !regExPass.test($inputPass.value):
                $passErrors.innerHTML = 'La contraseña debe tener entre 8 y 16 caracteres, al menos una mayúscula, una minúscula y un número';
                $inputPass.classList.remove('is-valid');
                $inputPass.classList.add('is-invalid');
                validationErrors = true;
                break;
            default:
                $inputPass.classList.remove('is-invalid');
                $inputPass.classList.add('is-valid');
                $passErrors.innerHTML = "";
                validationErrors = false;
                break;
        }
    })

    $inputPass2.addEventListener('blur', () => {
        switch(true){
            case !$inputPass2.value.trim():
                $pass2Errors.innerHTML = 'El campo es obligatorio';
                $inputPass2.classList.remove('is-valid');
                $inputPass2.classList.add('is-invalid');
                validationErrors = true;
                break;
            case $inputPass2.value !== $inputPass.value:
                $pass2Errors.innerHTML = 'Las contraseñas no coinciden';
                $inputPass2.classList.remove('is-valid');
                $inputPass2.classList.add('is-invalid');
                validationErrors = true;
                break;
            default:
                $inputPass2.classList.remove('is-invalid');
                $inputPass2.classList.add('is-valid');
                $pass2Errors.innerHTML = "";
                validationErrors = false;
                break;
        }
    })  

    $form.addEventListener('submit', (e) => {
        e.preventDefault();

        let error = false;
        let elementsForm = $form.elements;

        console.log(elementsForm);

        for(let i = 0; i < elementsForm.length -1; i++){
            if(elementsForm[i].value == ""
            && elementsForm[i].type !== 'file'
            ){
                elementsForm[i].classList.add('is-invalid');
                $submitErrors.innerHTML = 'Los campos señalados son obligatorios';
                $submitErrors.style.display = 'block'
                error = true;
            }
        }

        if(!$terms.checked){
            $terms.classList.add('is-invalid');
            $termsErrors.innerHTML = 'Debes aceptar los terminos y condiciones';
            error = true;
        }

        if(!error && !validationErrors ){
            $form.submit();
        }
    })

    $inputFile.addEventListener('change', () => {
        let filePath = $inputFile.value;
        let allowedExtensions = /(.jpg|.jpeg|.png|.gif|.web)$/i;
        if(!allowedExtensions.exec(filePath)){
            $fileErrors.innerHTML = 'Carga un archivo de imagen válido, con las extensiones (.jpg - .jpeg - .png - .gif)'
            $inputFile.value = "";
            $imgPreview.innerHTML = "";
            return false;
        }else{
            if($inputFile.files && $inputFile.files[0]){
                let reader = new FileReader();
                reader.onload = (e) => {
                    $imgPreview.innerHTML = `<img src="${e.target.result}" alt="">`
                }
                reader.readAsDataURL($inputFile.files[0]);
                $fileErrors.innerHTML = "";
                $inputFile.classList.remove('is-invalid')
            }
        }
    })
    
}