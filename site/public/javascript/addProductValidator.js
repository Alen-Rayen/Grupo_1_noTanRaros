let qs = (element) => {
    return document.querySelector(element)
}

window.onload = () => {

    /* Captura de elementos */

    let $form = qs('#form');

    let $inputName = qs('#name');
    let $nameErrors = qs('#nameErrors');
    let $faCrossName = qs('.fa-cross-name');
    let $faCheckName = qs('.fa-check-name');

    let $categorySelect = qs('#category');
    let $categoryErrors = qs('#categoryErrors');

    let $subcategorySelect = qs('#subcategory')
    let $subcategoryErrors = qs('#subcategoryErrors');

    let $colorSelect = qs('#color');
    let $colorErrors = qs('#colorErrors');

    let $brandSelect = qs('#brand');
    let $brandErrors = qs('#brandErrors');

    let $inputFile = qs('#image');
    let $fileErrors = qs('#imageErrors');
    let $imgPreview = qs('#img-preview');

    let $inputDescription = qs('#description');
    let $descriptionErrors = qs('#descriptionErrors');

    let $inputPrice = qs('#price');
    let $priceErrors = qs('#priceErrors');
    let $faCrossPrice = qs('.fa-cross-price');
    let $faCheckPrice = qs('.fa-check-price');

    let $inputDiscount = qs('#discount');
    let $discountErrors = qs('#discountErrors');
    let $faCrossDiscount = qs('.fa-cross-discount');
    let $faCheckDiscount = qs('.fa-check-discount');

    let $submitErrors = qs('#submitErrors');

    let validationErrors = false;


    /* Validaciones */

    /* INPUT NAME ONKEYUP */
    $inputName.addEventListener('keyup', () => {

        switch(true){
                //Nombre mayor a 5 caracteres
            case $inputName.value.length > 0 && $inputName.value.length < 5:
                $inputName.classList.remove('is-valid');
                $inputName.classList.add('is-invalid');
                $faCheckName.style.display = 'none';
                $faCrossName.style.display = 'block';
                $nameErrors.style.display = 'block';
                $nameErrors.innerHTML = 'El nombre debe tener al menos 5 caracteres';
                validationErrors = true;
                break;
                //Evitar que se deje el campo en blanco
            case $inputName.value.length < 1:
                $inputName.classList.remove('is-valid');
                $inputName.classList.add('is-invalid');
                $faCheckName.style.display = 'none';
                $faCrossName.style.display = 'block';
                $nameErrors.style.display = 'block';
                $nameErrors.innerHTML = 'El campo es obligatorio';
                validationErrors = true;
                break;
            case $inputName.value.length > 50:
                $inputName.classList.remove('is-valid');
                $inputName.classList.add('is-invalid');
                $faCheckName.style.display = 'none';
                $faCrossName.style.display = 'block';
                $nameErrors.style.display = 'block';
                $nameErrors.innerHTML = 'El nombre no puede tener mas de 50 caracteres';
                validationErrors = true;
                break;
            default:
                $inputName.classList.remove('is-invalid');
                $inputName.classList.add('is-valid');
                $faCheckName.style.display = 'block';
                $faCrossName.style.display = 'none';
                $nameErrors.style.display = 'none';
                $nameErrors.innerHTML = '';
                validationErrors = false;
                break;
        }

    })

    /* INPUT NAME ONBLUR */
    $inputName.addEventListener('blur', () => {

        switch(true){
            //Contraseña mayor a 5 caracteres
            case $inputName.value.length > 0 && $inputName.value.length < 5:
                $inputName.classList.remove('is-valid');
                $inputName.classList.add('is-invalid');
                $faCheckName.style.display = 'none';
                $faCrossName.style.display = 'block';
                $nameErrors.style.display = 'block';
                $nameErrors.innerHTML = 'El nombre debe tener al menos 5 caracteres';
                validationErrors = true;
                break;
                //Evitar que se deje el campo en blanco
            case $inputName.value.length < 1:
                $inputName.classList.remove('is-valid');
                $inputName.classList.add('is-invalid');
                $faCheckName.style.display = 'none';
                $faCrossName.style.display = 'block';
                $nameErrors.style.display = 'block';
                $nameErrors.innerHTML = 'El campo es obligatorio';
                validationErrors = true;
                break;
            case $inputName.value.length > 50:
                $inputName.classList.remove('is-valid');
                $inputName.classList.add('is-invalid');
                $faCheckName.style.display = 'none';
                $faCrossName.style.display = 'block';
                $nameErrors.style.display = 'block';
                $nameErrors.innerHTML = 'El nombre no puede tener mas de 50 caracteres';
                validationErrors = true;
                break;
            default:
                $inputName.classList.remove('is-invalid');
                $inputName.classList.add('is-valid');
                $faCheckName.style.display = 'block';
                $faCrossName.style.display = 'none';
                $nameErrors.style.display = 'none';
                $nameErrors.innerHTML = '';
                validationErrors = false;
                break;
        }

    })

    /* SELECT CATEGORY ONINPUT
     */
    $categorySelect.addEventListener('input', () => {
        //Evita que se seleccione el select con value ''
        if($categorySelect.selectedIndex == 0){
            $categorySelect.classList.remove('is-valid');
            $categorySelect.classList.add('is-invalid');
            $categoryErrors.style.display = 'block';
            $categoryErrors.innerHTML = 'Selecciona una categoría';
            validationErrors = true;
        }else{
            $categorySelect.classList.remove('is-invalid');
            $categorySelect.classList.add('is-valid');
            $categoryErrors.style.display = 'none';
            $categoryErrors.innerHTML = '';
            validationErrors = false;
        }

        //Manejar error de categorias no coincidentes
        switch($subcategorySelect.selectedIndex > 0 && $subcategorySelect.selectedIndex < 6){
            case $categorySelect.selectedIndex != 0:
                if($categorySelect.selectedIndex != 1){
                    $categorySelect.classList.remove('is-valid');
                    $categorySelect.classList.add('is-invalid');
                    $categoryErrors.style.display = 'block';
                    $categoryErrors.innerHTML = 'Las categorías no coinciden';
                    $subcategorySelect.classList.remove('is-valid');
                    $subcategorySelect.classList.add('is-invalid');
                    $subcategoryErrors.style.display = 'block';
                    $subcategoryErrors.innerHTML = 'La categorías no coinciden';
                    validationErrors = true;
                }else{
                    $subcategorySelect.classList.remove('is-invalid');
                    $subcategorySelect.classList.add('is-valid');
                    $subcategoryErrors.style.display = 'none';
                    $subcategoryErrors.innerHTML = '';
                    $categorySelect.classList.remove('is-invalid');
                    $categorySelect.classList.add('is-valid');
                    $categoryErrors.style.display = 'none';
                    $categoryErrors.innerHTML = '';
                    validationErrors = false;
                }
                break;
            default:
                break;
        }

        switch($subcategorySelect.selectedIndex > 5 && $subcategorySelect.selectedIndex < 11){
            case $categorySelect.selectedIndex != 0:
                if($categorySelect.selectedIndex != 2){
                    $categorySelect.classList.remove('is-valid');
                    $categorySelect.classList.add('is-invalid');
                    $categoryErrors.style.display = 'block';
                    $categoryErrors.innerHTML = 'Las categorías no coinciden';
                    $subcategorySelect.classList.remove('is-valid');
                    $subcategorySelect.classList.add('is-invalid');
                    $subcategoryErrors.style.display = 'block';
                    $subcategoryErrors.innerHTML = 'La categorías no coinciden';
                    validationErrors = true;
                }else{
                    $subcategorySelect.classList.remove('is-invalid');
                    $subcategorySelect.classList.add('is-valid');
                    $subcategoryErrors.style.display = 'none';
                    $subcategoryErrors.innerHTML = '';
                    $categorySelect.classList.remove('is-invalid');
                    $categorySelect.classList.add('is-valid');
                    $categoryErrors.style.display = 'none';
                    $categoryErrors.innerHTML = '';
                    validationErrors = false;
                }
                break;
            default:
                break;
        }

        switch($subcategorySelect.selectedIndex > 10 && $subcategorySelect.selectedIndex < 15){
            case $categorySelect.selectedIndex != 0:
                if($categorySelect.selectedIndex != 3){
                    $categorySelect.classList.remove('is-valid');
                    $categorySelect.classList.add('is-invalid');
                    $categoryErrors.style.display = 'block';
                    $categoryErrors.innerHTML = 'Las categorías no coinciden';
                    $subcategorySelect.classList.remove('is-valid');
                    $subcategorySelect.classList.add('is-invalid');
                    $subcategoryErrors.style.display = 'block';
                    $subcategoryErrors.innerHTML = 'La categorías no coinciden';
                    validationErrors = true;
                }else{
                    $subcategorySelect.classList.remove('is-invalid');
                    $subcategorySelect.classList.add('is-valid');
                    $subcategoryErrors.style.display = 'none';
                    $subcategoryErrors.innerHTML = '';
                    $categorySelect.classList.remove('is-invalid');
                    $categorySelect.classList.add('is-valid');
                    $categoryErrors.style.display = 'none';
                    $categoryErrors.innerHTML = '';
                    validationErrors = false;
                }
                break;
            default:
                break;
        }

        switch($subcategorySelect.selectedIndex > 14 && $subcategorySelect.selectedIndex < 18){
            case $categorySelect.selectedIndex != 0:
                if($categorySelect.selectedIndex != 4){
                    $categorySelect.classList.remove('is-valid');
                    $categorySelect.classList.add('is-invalid');
                    $categoryErrors.style.display = 'block';
                    $categoryErrors.innerHTML = 'Las categorías no coinciden';
                    $subcategorySelect.classList.remove('is-valid');
                    $subcategorySelect.classList.add('is-invalid');
                    $subcategoryErrors.style.display = 'block';
                    $subcategoryErrors.innerHTML = 'La categorías no coinciden';
                    validationErrors = true;
                }else{
                    $subcategorySelect.classList.remove('is-invalid');
                    $subcategorySelect.classList.add('is-valid');
                    $subcategoryErrors.style.display = 'none';
                    $subcategoryErrors.innerHTML = '';
                    $categorySelect.classList.remove('is-invalid');
                    $categorySelect.classList.add('is-valid');
                    $categoryErrors.style.display = 'none';
                    $categoryErrors.innerHTML = '';
                    validationErrors = false;
                }
                break;
            default:
                break;
        }

        switch($subcategorySelect.selectedIndex > 17 && $subcategorySelect.selectedIndex < 41){
            case $categorySelect.selectedIndex != 0:
                if($categorySelect.selectedIndex != 5){
                    $categorySelect.classList.remove('is-valid');
                    $categorySelect.classList.add('is-invalid');
                    $categoryErrors.style.display = 'block';
                    $categoryErrors.innerHTML = 'Las categorías no coinciden';
                    $subcategorySelect.classList.remove('is-valid');
                    $subcategorySelect.classList.add('is-invalid');
                    $subcategoryErrors.style.display = 'block';
                    $subcategoryErrors.innerHTML = 'La categorías no coinciden';
                    validationErrors = true;
                }else{
                    $subcategorySelect.classList.remove('is-invalid');
                    $subcategorySelect.classList.add('is-valid');
                    $subcategoryErrors.style.display = 'none';
                    $subcategoryErrors.innerHTML = '';
                    $categorySelect.classList.remove('is-invalid');
                    $categorySelect.classList.add('is-valid');
                    $categoryErrors.style.display = 'none';
                    $categoryErrors.innerHTML = '';
                    validationErrors = false;
                }
                break;
            default:
                break;
        }

        switch($subcategorySelect.selectedIndex > 40){
            case $categorySelect.selectedIndex != 0:
                if($categorySelect.selectedIndex != 6){
                    $categorySelect.classList.remove('is-valid');
                    $categorySelect.classList.add('is-invalid');
                    $categoryErrors.style.display = 'block';
                    $categoryErrors.innerHTML = 'Las categorías no coinciden';
                    $subcategorySelect.classList.remove('is-valid');
                    $subcategorySelect.classList.add('is-invalid');
                    $subcategoryErrors.style.display = 'block';
                    $subcategoryErrors.innerHTML = 'La categorías no coinciden';
                    validationErrors = true;
                }else{
                    $subcategorySelect.classList.remove('is-invalid');
                    $subcategorySelect.classList.add('is-valid');
                    $subcategoryErrors.style.display = 'none';
                    $subcategoryErrors.innerHTML = '';
                    $categorySelect.classList.remove('is-invalid');
                    $categorySelect.classList.add('is-valid');
                    $categoryErrors.style.display = 'none';
                    $categoryErrors.innerHTML = '';
                    validationErrors = false;
                }
                break;
            default:
                break;
        }
    })

    $categorySelect.addEventListener('blur', () => {
        if($categorySelect.selectedIndex == 0){
            $categorySelect.classList.remove('is-valid');
            $categorySelect.classList.add('is-invalid');
            $categoryErrors.style.display = 'block';
            $categoryErrors.innerHTML = 'Selecciona una categoría';
            validationErrors = true;
        }else{
            $categorySelect.classList.remove('is-invalid');
            $categorySelect.classList.add('is-valid');
            $categoryErrors.style.display = 'none';
            $categoryErrors.innerHTML = '';
            validationErrors = false;
        }

        switch($subcategorySelect.selectedIndex > 0 && $subcategorySelect.selectedIndex < 6){
            case $categorySelect.selectedIndex != 0:
                if($categorySelect.selectedIndex != 1){
                    $categorySelect.classList.remove('is-valid');
                    $categorySelect.classList.add('is-invalid');
                    $categoryErrors.style.display = 'block';
                    $categoryErrors.innerHTML = 'Las categorías no coinciden';
                    $subcategorySelect.classList.remove('is-valid');
                    $subcategorySelect.classList.add('is-invalid');
                    $subcategoryErrors.style.display = 'block';
                    $subcategoryErrors.innerHTML = 'La categorías no coinciden';
                    validationErrors = true;
                }else{
                    $subcategorySelect.classList.remove('is-invalid');
                    $subcategorySelect.classList.add('is-valid');
                    $subcategoryErrors.style.display = 'none';
                    $subcategoryErrors.innerHTML = '';
                    $categorySelect.classList.remove('is-invalid');
                    $categorySelect.classList.add('is-valid');
                    $categoryErrors.style.display = 'none';
                    $categoryErrors.innerHTML = '';
                    validationErrors = false;
                }
                break;
            default:
                break;
        }

        switch($subcategorySelect.selectedIndex > 5 && $subcategorySelect.selectedIndex < 11){
            case $categorySelect.selectedIndex != 0:
                if($categorySelect.selectedIndex != 2){
                    $categorySelect.classList.remove('is-valid');
                    $categorySelect.classList.add('is-invalid');
                    $categoryErrors.style.display = 'block';
                    $categoryErrors.innerHTML = 'Las categorías no coinciden';
                    $subcategorySelect.classList.remove('is-valid');
                    $subcategorySelect.classList.add('is-invalid');
                    $subcategoryErrors.style.display = 'block';
                    $subcategoryErrors.innerHTML = 'La categorías no coinciden';
                    validationErrors = true;
                }else{
                    $subcategorySelect.classList.remove('is-invalid');
                    $subcategorySelect.classList.add('is-valid');
                    $subcategoryErrors.style.display = 'none';
                    $subcategoryErrors.innerHTML = '';
                    $categorySelect.classList.remove('is-invalid');
                    $categorySelect.classList.add('is-valid');
                    $categoryErrors.style.display = 'none';
                    $categoryErrors.innerHTML = '';
                    validationErrors = false;
                }
                break;
            default:
                break;
        }

        switch($subcategorySelect.selectedIndex > 10 && $subcategorySelect.selectedIndex < 15){
            case $categorySelect.selectedIndex != 0:
                if($categorySelect.selectedIndex != 3){
                    $categorySelect.classList.remove('is-valid');
                    $categorySelect.classList.add('is-invalid');
                    $categoryErrors.style.display = 'block';
                    $categoryErrors.innerHTML = 'Las categorías no coinciden';
                    $subcategorySelect.classList.remove('is-valid');
                    $subcategorySelect.classList.add('is-invalid');
                    $subcategoryErrors.style.display = 'block';
                    $subcategoryErrors.innerHTML = 'La categorías no coinciden';
                    validationErrors = true;
                }else{
                    $subcategorySelect.classList.remove('is-invalid');
                    $subcategorySelect.classList.add('is-valid');
                    $subcategoryErrors.style.display = 'none';
                    $subcategoryErrors.innerHTML = '';
                    $categorySelect.classList.remove('is-invalid');
                    $categorySelect.classList.add('is-valid');
                    $categoryErrors.style.display = 'none';
                    $categoryErrors.innerHTML = '';
                    validationErrors = false;
                }
                break;
            default:
                break;
        }

        switch($subcategorySelect.selectedIndex > 14 && $subcategorySelect.selectedIndex < 18){
            case $categorySelect.selectedIndex != 0:
                if($categorySelect.selectedIndex != 4){
                    $categorySelect.classList.remove('is-valid');
                    $categorySelect.classList.add('is-invalid');
                    $categoryErrors.style.display = 'block';
                    $categoryErrors.innerHTML = 'Las categorías no coinciden';
                    $subcategorySelect.classList.remove('is-valid');
                    $subcategorySelect.classList.add('is-invalid');
                    $subcategoryErrors.style.display = 'block';
                    $subcategoryErrors.innerHTML = 'La categorías no coinciden';
                    validationErrors = true;
                }else{
                    $subcategorySelect.classList.remove('is-invalid');
                    $subcategorySelect.classList.add('is-valid');
                    $subcategoryErrors.style.display = 'none';
                    $subcategoryErrors.innerHTML = '';
                    $categorySelect.classList.remove('is-invalid');
                    $categorySelect.classList.add('is-valid');
                    $categoryErrors.style.display = 'none';
                    $categoryErrors.innerHTML = '';
                    validationErrors = false;
                }
                break;
            default:
                break;
        }

        switch($subcategorySelect.selectedIndex > 17 && $subcategorySelect.selectedIndex < 41){
            case $categorySelect.selectedIndex != 0:
                if($categorySelect.selectedIndex != 5){
                    $categorySelect.classList.remove('is-valid');
                    $categorySelect.classList.add('is-invalid');
                    $categoryErrors.style.display = 'block';
                    $categoryErrors.innerHTML = 'Las categorías no coinciden';
                    $subcategorySelect.classList.remove('is-valid');
                    $subcategorySelect.classList.add('is-invalid');
                    $subcategoryErrors.style.display = 'block';
                    $subcategoryErrors.innerHTML = 'La categorías no coinciden';
                    validationErrors = true;
                }else{
                    $subcategorySelect.classList.remove('is-invalid');
                    $subcategorySelect.classList.add('is-valid');
                    $subcategoryErrors.style.display = 'none';
                    $subcategoryErrors.innerHTML = '';
                    $categorySelect.classList.remove('is-invalid');
                    $categorySelect.classList.add('is-valid');
                    $categoryErrors.style.display = 'none';
                    $categoryErrors.innerHTML = '';
                    validationErrors = false;
                }
                break;
            default:
                break;
        }

        switch($subcategorySelect.selectedIndex > 40){
            case $categorySelect.selectedIndex != 0:
                if($categorySelect.selectedIndex != 6){
                    $categorySelect.classList.remove('is-valid');
                    $categorySelect.classList.add('is-invalid');
                    $categoryErrors.style.display = 'block';
                    $categoryErrors.innerHTML = 'Las categorías no coinciden';
                    $subcategorySelect.classList.remove('is-valid');
                    $subcategorySelect.classList.add('is-invalid');
                    $subcategoryErrors.style.display = 'block';
                    $subcategoryErrors.innerHTML = 'La categorías no coinciden';
                    validationErrors = true;
                }else{
                    $subcategorySelect.classList.remove('is-invalid');
                    $subcategorySelect.classList.add('is-valid');
                    $subcategoryErrors.style.display = 'none';
                    $subcategoryErrors.innerHTML = '';
                    $categorySelect.classList.remove('is-invalid');
                    $categorySelect.classList.add('is-valid');
                    $categoryErrors.style.display = 'none';
                    $categoryErrors.innerHTML = '';
                    validationErrors = false;
                }
                break;
            default:
                break;
        }
    })

    $categorySelect.addEventListener('change', () => {
        if($categorySelect.selectedIndex == 0){
            $categorySelect.classList.remove('is-valid');
            $categorySelect.classList.add('is-invalid');
            $categoryErrors.style.display = 'block';
            $categoryErrors.innerHTML = 'Selecciona una categoría';
            validationErrors = true;
        }else{
            $categorySelect.classList.remove('is-invalid');
            $categorySelect.classList.add('is-valid');
            $categoryErrors.style.display = 'none';
            $categoryErrors.innerHTML = '';
            validationErrors = false;
        }

        switch($subcategorySelect.selectedIndex > 0 && $subcategorySelect.selectedIndex < 6){
            case $categorySelect.selectedIndex != 0:
                if($categorySelect.selectedIndex != 1){
                    $categorySelect.classList.remove('is-valid');
                    $categorySelect.classList.add('is-invalid');
                    $categoryErrors.style.display = 'block';
                    $categoryErrors.innerHTML = 'Las categorías no coinciden';
                    $subcategorySelect.classList.remove('is-valid');
                    $subcategorySelect.classList.add('is-invalid');
                    $subcategoryErrors.style.display = 'block';
                    $subcategoryErrors.innerHTML = 'La categorías no coinciden';
                    validationErrors = true;
                }else{
                    $subcategorySelect.classList.remove('is-invalid');
                    $subcategorySelect.classList.add('is-valid');
                    $subcategoryErrors.style.display = 'none';
                    $subcategoryErrors.innerHTML = '';
                    $categorySelect.classList.remove('is-invalid');
                    $categorySelect.classList.add('is-valid');
                    $categoryErrors.style.display = 'none';
                    $categoryErrors.innerHTML = '';
                    validationErrors = false;
                }
                break;
            default:
                break;
        }

        switch($subcategorySelect.selectedIndex > 5 && $subcategorySelect.selectedIndex < 11){
            case $categorySelect.selectedIndex != 0:
                if($categorySelect.selectedIndex != 2){
                    $categorySelect.classList.remove('is-valid');
                    $categorySelect.classList.add('is-invalid');
                    $categoryErrors.style.display = 'block';
                    $categoryErrors.innerHTML = 'Las categorías no coinciden';
                    $subcategorySelect.classList.remove('is-valid');
                    $subcategorySelect.classList.add('is-invalid');
                    $subcategoryErrors.style.display = 'block';
                    $subcategoryErrors.innerHTML = 'La categorías no coinciden';
                    validationErrors = true;
                }else{
                    $subcategorySelect.classList.remove('is-invalid');
                    $subcategorySelect.classList.add('is-valid');
                    $subcategoryErrors.style.display = 'none';
                    $subcategoryErrors.innerHTML = '';
                    $categorySelect.classList.remove('is-invalid');
                    $categorySelect.classList.add('is-valid');
                    $categoryErrors.style.display = 'none';
                    $categoryErrors.innerHTML = '';
                    validationErrors = false;
                }
                break;
            default:
                break;
        }

        switch($subcategorySelect.selectedIndex > 10 && $subcategorySelect.selectedIndex < 15){
            case $categorySelect.selectedIndex != 0:
                if($categorySelect.selectedIndex != 3){
                    $categorySelect.classList.remove('is-valid');
                    $categorySelect.classList.add('is-invalid');
                    $categoryErrors.style.display = 'block';
                    $categoryErrors.innerHTML = 'Las categorías no coinciden';
                    $subcategorySelect.classList.remove('is-valid');
                    $subcategorySelect.classList.add('is-invalid');
                    $subcategoryErrors.style.display = 'block';
                    $subcategoryErrors.innerHTML = 'La categorías no coinciden';
                    validationErrors = true;
                }else{
                    $subcategorySelect.classList.remove('is-invalid');
                    $subcategorySelect.classList.add('is-valid');
                    $subcategoryErrors.style.display = 'none';
                    $subcategoryErrors.innerHTML = '';
                    $categorySelect.classList.remove('is-invalid');
                    $categorySelect.classList.add('is-valid');
                    $categoryErrors.style.display = 'none';
                    $categoryErrors.innerHTML = '';
                    validationErrors = false;
                }
                break;
            default:
                break;
        }

        switch($subcategorySelect.selectedIndex > 14 && $subcategorySelect.selectedIndex < 18){
            case $categorySelect.selectedIndex != 0:
                if($categorySelect.selectedIndex != 4){
                    $categorySelect.classList.remove('is-valid');
                    $categorySelect.classList.add('is-invalid');
                    $categoryErrors.style.display = 'block';
                    $categoryErrors.innerHTML = 'Las categorías no coinciden';
                    $subcategorySelect.classList.remove('is-valid');
                    $subcategorySelect.classList.add('is-invalid');
                    $subcategoryErrors.style.display = 'block';
                    $subcategoryErrors.innerHTML = 'La categorías no coinciden';
                    validationErrors = true;
                }else{
                    $subcategorySelect.classList.remove('is-invalid');
                    $subcategorySelect.classList.add('is-valid');
                    $subcategoryErrors.style.display = 'none';
                    $subcategoryErrors.innerHTML = '';
                    $categorySelect.classList.remove('is-invalid');
                    $categorySelect.classList.add('is-valid');
                    $categoryErrors.style.display = 'none';
                    $categoryErrors.innerHTML = '';
                    validationErrors = false;
                }
                break;
            default:
                break;
        }

        switch($subcategorySelect.selectedIndex > 17 && $subcategorySelect.selectedIndex < 41){
            case $categorySelect.selectedIndex != 0:
                if($categorySelect.selectedIndex != 5){
                    $categorySelect.classList.remove('is-valid');
                    $categorySelect.classList.add('is-invalid');
                    $categoryErrors.style.display = 'block';
                    $categoryErrors.innerHTML = 'Las categorías no coinciden';
                    $subcategorySelect.classList.remove('is-valid');
                    $subcategorySelect.classList.add('is-invalid');
                    $subcategoryErrors.style.display = 'block';
                    $subcategoryErrors.innerHTML = 'La categorías no coinciden';
                    validationErrors = true;
                }else{
                    $subcategorySelect.classList.remove('is-invalid');
                    $subcategorySelect.classList.add('is-valid');
                    $subcategoryErrors.style.display = 'none';
                    $subcategoryErrors.innerHTML = '';
                    $categorySelect.classList.remove('is-invalid');
                    $categorySelect.classList.add('is-valid');
                    $categoryErrors.style.display = 'none';
                    $categoryErrors.innerHTML = '';
                    validationErrors = false;
                }
                break;
            default:
                break;
        }

        switch($subcategorySelect.selectedIndex > 40){
            case $categorySelect.selectedIndex != 0:
                if($categorySelect.selectedIndex != 6){
                    $categorySelect.classList.remove('is-valid');
                    $categorySelect.classList.add('is-invalid');
                    $categoryErrors.style.display = 'block';
                    $categoryErrors.innerHTML = 'Las categorías no coinciden';
                    $subcategorySelect.classList.remove('is-valid');
                    $subcategorySelect.classList.add('is-invalid');
                    $subcategoryErrors.style.display = 'block';
                    $subcategoryErrors.innerHTML = 'La categorías no coinciden';
                    validationErrors = true;
                }else{
                    $subcategorySelect.classList.remove('is-invalid');
                    $subcategorySelect.classList.add('is-valid');
                    $subcategoryErrors.style.display = 'none';
                    $subcategoryErrors.innerHTML = '';
                    $categorySelect.classList.remove('is-invalid');
                    $categorySelect.classList.add('is-valid');
                    $categoryErrors.style.display = 'none';
                    $categoryErrors.innerHTML = '';
                    validationErrors = false;
                }
                break;
            default:
                break;
        }
    })

    $subcategorySelect.addEventListener('input', () => {
        if($subcategorySelect.selectedIndex == 0){
            $subcategorySelect.classList.remove('is-valid');
            $subcategorySelect.classList.add('is-invalid');
            $subcategoryErrors.style.display = 'block';
            $subcategoryErrors.innerHTML = 'Selecciona una Subcategoría';
            validationErrors = true;
        }else{
            $subcategorySelect.classList.remove('is-invalid');
            $subcategorySelect.classList.add('is-valid');
            $subcategoryErrors.style.display = 'none';
            $subcategoryErrors.innerHTML = '';
            validationErrors = false;
        }

        switch($categorySelect.selectedIndex == 1){
            case $subcategorySelect.selectedIndex != 0:
                if($subcategorySelect.selectedIndex < 1 || $subcategorySelect.selectedIndex > 5){
                    $subcategorySelect.classList.remove('is-valid');
                    $subcategorySelect.classList.add('is-invalid');
                    $subcategoryErrors.style.display = 'block';
                    $subcategoryErrors.innerHTML = 'Las categorías no coinciden';
                    $categorySelect.classList.remove('is-valid');
                    $categorySelect.classList.add('is-invalid');
                    $categoryErrors.style.display = ' block';
                    $categoryErrors.innerHTML = 'Las categorías no coinciden';
                    validationErrors = true;
                }else{
                    $categorySelect.classList.remove('is-invalid');
                    $categorySelect.classList.add('is-valid');
                    $categoryErrors.style.display = 'none';
                    $categoryErrors.innerHTML = '';
                    $subcategorySelect.classList.remove('is-invalid');
                    $subcategorySelect.classList.add('is-valid');
                    $subcategoryErrors.style.display = 'none';
                    $subcategoryErrors.innerHTML = '';
                    validationErrors = false;
                }
                break;
            default:
                break;
        }

        switch($categorySelect.selectedIndex == 2){
            case $subcategorySelect.selectedIndex != 0:
                if($subcategorySelect.selectedIndex < 6 || $subcategorySelect.selectedIndex > 10){
                    $subcategorySelect.classList.remove('is-valid');
                    $subcategorySelect.classList.add('is-invalid');
                    $subcategoryErrors.style.display = 'block';
                    $subcategoryErrors.innerHTML = 'Las categorías no coinciden';
                    $categorySelect.classList.remove('is-valid');
                    $categorySelect.classList.add('is-invalid');
                    $categoryErrors.style.display = ' block';
                    $categoryErrors.innerHTML = 'Las categorías no coinciden';
                    validationErrors = true;
                }else{
                    $categorySelect.classList.remove('is-invalid');
                    $categorySelect.classList.add('is-valid');
                    $categoryErrors.style.display = 'none';
                    $categoryErrors.innerHTML = '';
                    $subcategorySelect.classList.remove('is-invalid');
                    $subcategorySelect.classList.add('is-valid');
                    $subcategoryErrors.style.display = 'none';
                    $subcategoryErrors.innerHTML = '';
                    validationErrors = false;
                }
                break;
            default:
                break;
        }

        switch($categorySelect.selectedIndex == 3){
            case $subcategorySelect.selectedIndex != 0:
                if($subcategorySelect.selectedIndex < 11 || $subcategorySelect.selectedIndex > 14){
                    $subcategorySelect.classList.remove('is-valid');
                    $subcategorySelect.classList.add('is-invalid');
                    $subcategoryErrors.style.display = 'block';
                    $subcategoryErrors.innerHTML = 'Las categorías no coinciden';
                    $categorySelect.classList.remove('is-valid');
                    $categorySelect.classList.add('is-invalid');
                    $categoryErrors.style.display = ' block';
                    $categoryErrors.innerHTML = 'Las categorías no coinciden';
                    validationErrors = true;
                }else{
                    $categorySelect.classList.remove('is-invalid');
                    $categorySelect.classList.add('is-valid');
                    $categoryErrors.style.display = 'none';
                    $categoryErrors.innerHTML = '';
                    $subcategorySelect.classList.remove('is-invalid');
                    $subcategorySelect.classList.add('is-valid');
                    $subcategoryErrors.style.display = 'none';
                    $subcategoryErrors.innerHTML = '';
                    validationErrors = false;
                }
                break;
            default:
                break;
        }

        switch($categorySelect.selectedIndex == 4){
            case $subcategorySelect.selectedIndex != 0:
                if($subcategorySelect.selectedIndex < 15 || $subcategorySelect.selectedIndex > 17){
                    $subcategorySelect.classList.remove('is-valid');
                    $subcategorySelect.classList.add('is-invalid');
                    $subcategoryErrors.style.display = 'block';
                    $subcategoryErrors.innerHTML = 'Las categorías no coinciden';
                    $categorySelect.classList.remove('is-valid');
                    $categorySelect.classList.add('is-invalid');
                    $categoryErrors.style.display = ' block';
                    $categoryErrors.innerHTML = 'Las categorías no coinciden';
                    validationErrors = true;
                }else{
                    $categorySelect.classList.remove('is-invalid');
                    $categorySelect.classList.add('is-valid');
                    $categoryErrors.style.display = 'none';
                    $categoryErrors.innerHTML = '';
                    $subcategorySelect.classList.remove('is-invalid');
                    $subcategorySelect.classList.add('is-valid');
                    $subcategoryErrors.style.display = 'none';
                    $subcategoryErrors.innerHTML = '';
                    validationErrors = false;
                }
                break;
            default:
                break;
        }

        switch($categorySelect.selectedIndex == 5){
            case $subcategorySelect.selectedIndex != 0:
                if($subcategorySelect.selectedIndex < 18 || $subcategorySelect.selectedIndex > 40){
                    $subcategorySelect.classList.remove('is-valid');
                    $subcategorySelect.classList.add('is-invalid');
                    $subcategoryErrors.style.display = 'block';
                    $subcategoryErrors.innerHTML = 'Las categorías no coinciden';
                    $categorySelect.classList.remove('is-valid');
                    $categorySelect.classList.add('is-invalid');
                    $categoryErrors.style.display = ' block';
                    $categoryErrors.innerHTML = 'Las categorías no coinciden';
                    validationErrors = true;
                }else{
                    $categorySelect.classList.remove('is-invalid');
                    $categorySelect.classList.add('is-valid');
                    $categoryErrors.style.display = 'none';
                    $categoryErrors.innerHTML = '';
                    $subcategorySelect.classList.remove('is-invalid');
                    $subcategorySelect.classList.add('is-valid');
                    $subcategoryErrors.style.display = 'none';
                    $subcategoryErrors.innerHTML = '';
                    validationErrors = false;
                }
                break;
            default:
                break;
        }

        switch($categorySelect.selectedIndex == 6){
            case $subcategorySelect.selectedIndex != 0:
                if($subcategorySelect.selectedIndex < 41){
                    $subcategorySelect.classList.remove('is-valid');
                    $subcategorySelect.classList.add('is-invalid');
                    $subcategoryErrors.style.display = 'block';
                    $subcategoryErrors.innerHTML = 'Las categorías no coinciden';
                    $categorySelect.classList.remove('is-valid');
                    $categorySelect.classList.add('is-invalid');
                    $categoryErrors.style.display = ' block';
                    $categoryErrors.innerHTML = 'Las categorías no coinciden';
                    validationErrors = true;
                }else{
                    $categorySelect.classList.remove('is-invalid');
                    $categorySelect.classList.add('is-valid');
                    $categoryErrors.style.display = 'none';
                    $categoryErrors.innerHTML = '';
                    $subcategorySelect.classList.remove('is-invalid');
                    $subcategorySelect.classList.add('is-valid');
                    $subcategoryErrors.style.display = 'none';
                    $subcategoryErrors.innerHTML = '';
                    validationErrors = false;
                }
                break;
            default:
                break;
        }
    })

    $subcategorySelect.addEventListener('blur', () => {
        if($subcategorySelect.selectedIndex == 0){
            $subcategorySelect.classList.remove('is-valid');
            $subcategorySelect.classList.add('is-invalid');
            $subcategoryErrors.style.display = 'block';
            $subcategoryErrors.innerHTML = 'Selecciona una Subcategoría';
            validationErrors = true;
        }else{
            $subcategorySelect.classList.remove('is-invalid');
            $subcategorySelect.classList.add('is-valid');
            $subcategoryErrors.style.display = 'none';
            $subcategoryErrors.innerHTML = '';
            validationErrors = false;
        }

        switch($categorySelect.selectedIndex == 1){
            case $subcategorySelect.selectedIndex != 0:
                if($subcategorySelect.selectedIndex < 1 || $subcategorySelect.selectedIndex > 5){
                    $subcategorySelect.classList.remove('is-valid');
                    $subcategorySelect.classList.add('is-invalid');
                    $subcategoryErrors.style.display = 'block';
                    $subcategoryErrors.innerHTML = 'Las categorías no coinciden';
                    $categorySelect.classList.remove('is-valid');
                    $categorySelect.classList.add('is-invalid');
                    $categoryErrors.style.display = ' block';
                    $categoryErrors.innerHTML = 'Las categorías no coinciden';
                    validationErrors = true;
                }else{
                    $categorySelect.classList.remove('is-invalid');
                    $categorySelect.classList.add('is-valid');
                    $categoryErrors.style.display = 'none';
                    $categoryErrors.innerHTML = '';
                    $subcategorySelect.classList.remove('is-invalid');
                    $subcategorySelect.classList.add('is-valid');
                    $subcategoryErrors.style.display = 'none';
                    $subcategoryErrors.innerHTML = '';
                    validationErrors = false;
                }
                break;
            default:
                break;
        }

        switch($categorySelect.selectedIndex == 2){
            case $subcategorySelect.selectedIndex != 0:
                if($subcategorySelect.selectedIndex < 6 || $subcategorySelect.selectedIndex > 10){
                    $subcategorySelect.classList.remove('is-valid');
                    $subcategorySelect.classList.add('is-invalid');
                    $subcategoryErrors.style.display = 'block';
                    $subcategoryErrors.innerHTML = 'Las categorías no coinciden';
                    $categorySelect.classList.remove('is-valid');
                    $categorySelect.classList.add('is-invalid');
                    $categoryErrors.style.display = ' block';
                    $categoryErrors.innerHTML = 'Las categorías no coinciden';
                    validationErrors = true;
                }else{
                    $categorySelect.classList.remove('is-invalid');
                    $categorySelect.classList.add('is-valid');
                    $categoryErrors.style.display = 'none';
                    $categoryErrors.innerHTML = '';
                    $subcategorySelect.classList.remove('is-invalid');
                    $subcategorySelect.classList.add('is-valid');
                    $subcategoryErrors.style.display = 'none';
                    $subcategoryErrors.innerHTML = '';
                    validationErrors = false;
                }
                break;
            default:
                break;
        }

        switch($categorySelect.selectedIndex == 3){
            case $subcategorySelect.selectedIndex != 0:
                if($subcategorySelect.selectedIndex < 11 || $subcategorySelect.selectedIndex > 14){
                    $subcategorySelect.classList.remove('is-valid');
                    $subcategorySelect.classList.add('is-invalid');
                    $subcategoryErrors.style.display = 'block';
                    $subcategoryErrors.innerHTML = 'Las categorías no coinciden';
                    $categorySelect.classList.remove('is-valid');
                    $categorySelect.classList.add('is-invalid');
                    $categoryErrors.style.display = ' block';
                    $categoryErrors.innerHTML = 'Las categorías no coinciden';
                    validationErrors = true;
                }else{
                    $categorySelect.classList.remove('is-invalid');
                    $categorySelect.classList.add('is-valid');
                    $categoryErrors.style.display = 'none';
                    $categoryErrors.innerHTML = '';
                    $subcategorySelect.classList.remove('is-invalid');
                    $subcategorySelect.classList.add('is-valid');
                    $subcategoryErrors.style.display = 'none';
                    $subcategoryErrors.innerHTML = '';
                    validationErrors = false;
                }
                break;
            default:
                break;
        }

        switch($categorySelect.selectedIndex == 4){
            case $subcategorySelect.selectedIndex != 0:
                if($subcategorySelect.selectedIndex < 15 || $subcategorySelect.selectedIndex > 17){
                    $subcategorySelect.classList.remove('is-valid');
                    $subcategorySelect.classList.add('is-invalid');
                    $subcategoryErrors.style.display = 'block';
                    $subcategoryErrors.innerHTML = 'Las categorías no coinciden';
                    $categorySelect.classList.remove('is-valid');
                    $categorySelect.classList.add('is-invalid');
                    $categoryErrors.style.display = ' block';
                    $categoryErrors.innerHTML = 'Las categorías no coinciden';
                    validationErrors = true;
                }else{
                    $categorySelect.classList.remove('is-invalid');
                    $categorySelect.classList.add('is-valid');
                    $categoryErrors.style.display = 'none';
                    $categoryErrors.innerHTML = '';
                    $subcategorySelect.classList.remove('is-invalid');
                    $subcategorySelect.classList.add('is-valid');
                    $subcategoryErrors.style.display = 'none';
                    $subcategoryErrors.innerHTML = '';
                    validationErrors = false;
                }
                break;
            default:
                break;
        }

        switch($categorySelect.selectedIndex == 5){
            case $subcategorySelect.selectedIndex != 0:
                if($subcategorySelect.selectedIndex < 18 || $subcategorySelect.selectedIndex > 40){
                    $subcategorySelect.classList.remove('is-valid');
                    $subcategorySelect.classList.add('is-invalid');
                    $subcategoryErrors.style.display = 'block';
                    $subcategoryErrors.innerHTML = 'Las categorías no coinciden';
                    $categorySelect.classList.remove('is-valid');
                    $categorySelect.classList.add('is-invalid');
                    $categoryErrors.style.display = ' block';
                    $categoryErrors.innerHTML = 'Las categorías no coinciden';
                    validationErrors = true;
                }else{
                    $categorySelect.classList.remove('is-invalid');
                    $categorySelect.classList.add('is-valid');
                    $categoryErrors.style.display = 'none';
                    $categoryErrors.innerHTML = '';
                    $subcategorySelect.classList.remove('is-invalid');
                    $subcategorySelect.classList.add('is-valid');
                    $subcategoryErrors.style.display = 'none';
                    $subcategoryErrors.innerHTML = '';
                    validationErrors = false;
                }
                break;
            default:
                break;
        }

        switch($categorySelect.selectedIndex == 6){
            case $subcategorySelect.selectedIndex != 0:
                if($subcategorySelect.selectedIndex < 41){
                    $subcategorySelect.classList.remove('is-valid');
                    $subcategorySelect.classList.add('is-invalid');
                    $subcategoryErrors.style.display = 'block';
                    $subcategoryErrors.innerHTML = 'Las categorías no coinciden';
                    $categorySelect.classList.remove('is-valid');
                    $categorySelect.classList.add('is-invalid');
                    $categoryErrors.style.display = ' block';
                    $categoryErrors.innerHTML = 'Las categorías no coinciden';
                    validationErrors = true;
                }else{
                    $categorySelect.classList.remove('is-invalid');
                    $categorySelect.classList.add('is-valid');
                    $categoryErrors.style.display = 'none';
                    $categoryErrors.innerHTML = '';
                    $subcategorySelect.classList.remove('is-invalid');
                    $subcategorySelect.classList.add('is-valid');
                    $subcategoryErrors.style.display = 'none';
                    $subcategoryErrors.innerHTML = '';
                    validationErrors = false;
                }
                break;
            default:
                break;
        }
    })

    $subcategorySelect.addEventListener('change', () => {
        if($subcategorySelect.selectedIndex == 0){
            $subcategorySelect.classList.remove('is-valid');
            $subcategorySelect.classList.add('is-invalid');
            $subcategoryErrors.style.display = 'block';
            $subcategoryErrors.innerHTML = 'Selecciona una Subcategoría';
            validationErrors = true;
        }else{
            $categorySelect.classList.remove('is-invalid');
            $categorySelect.classList.add('is-valid');
            $categoryErrors.style.display = 'none';
            $categoryErrors.innerHTML = '';
            $subcategorySelect.classList.remove('is-invalid');
            $subcategorySelect.classList.add('is-valid');
            $subcategoryErrors.style.display = 'none';
            $subcategoryErrors.innerHTML = '';
            validationErrors = false;
        }

        switch($categorySelect.selectedIndex == 1){
            case $subcategorySelect.selectedIndex != 0:
                if($subcategorySelect.selectedIndex < 1 || $subcategorySelect.selectedIndex > 5){
                    $subcategorySelect.classList.remove('is-valid');
                    $subcategorySelect.classList.add('is-invalid');
                    $subcategoryErrors.style.display = 'block';
                    $subcategoryErrors.innerHTML = 'Las categorías no coinciden';
                    $categorySelect.classList.remove('is-valid');
                    $categorySelect.classList.add('is-invalid');
                    $categoryErrors.style.display = ' block';
                    $categoryErrors.innerHTML = 'Las categorías no coinciden';
                    validationErrors = true;
                }else{
                    $categorySelect.classList.remove('is-invalid');
                    $categorySelect.classList.add('is-valid');
                    $categoryErrors.style.display = 'none';
                    $categoryErrors.innerHTML = '';
                    $subcategorySelect.classList.remove('is-invalid');
                    $subcategorySelect.classList.add('is-valid');
                    $subcategoryErrors.style.display = 'none';
                    $subcategoryErrors.innerHTML = '';
                    validationErrors = false;
                }
                break;
            default:
                break;
        }

        switch($categorySelect.selectedIndex == 2){
            case $subcategorySelect.selectedIndex != 0:
                if($subcategorySelect.selectedIndex < 6 || $subcategorySelect.selectedIndex > 10){
                    $subcategorySelect.classList.remove('is-valid');
                    $subcategorySelect.classList.add('is-invalid');
                    $subcategoryErrors.style.display = 'block';
                    $subcategoryErrors.innerHTML = 'Las categorías no coinciden';
                    $categorySelect.classList.remove('is-valid');
                    $categorySelect.classList.add('is-invalid');
                    $categoryErrors.style.display = ' block';
                    $categoryErrors.innerHTML = 'Las categorías no coinciden';
                    validationErrors = true;
                }else{
                    $categorySelect.classList.remove('is-invalid');
                    $categorySelect.classList.add('is-valid');
                    $categoryErrors.style.display = 'none';
                    $categoryErrors.innerHTML = '';
                    $subcategorySelect.classList.remove('is-invalid');
                    $subcategorySelect.classList.add('is-valid');
                    $subcategoryErrors.style.display = 'none';
                    $subcategoryErrors.innerHTML = '';
                    validationErrors = false;
                }
                break;
            default:
                break;
        }

        switch($categorySelect.selectedIndex == 3){
            case $subcategorySelect.selectedIndex != 0:
                if($subcategorySelect.selectedIndex < 11 || $subcategorySelect.selectedIndex > 14){
                    $subcategorySelect.classList.remove('is-valid');
                    $subcategorySelect.classList.add('is-invalid');
                    $subcategoryErrors.style.display = 'block';
                    $subcategoryErrors.innerHTML = 'Las categorías no coinciden';
                    $categorySelect.classList.remove('is-valid');
                    $categorySelect.classList.add('is-invalid');
                    $categoryErrors.style.display = ' block';
                    $categoryErrors.innerHTML = 'Las categorías no coinciden';
                    validationErrors = true;
                }else{
                    $categorySelect.classList.remove('is-invalid');
                    $categorySelect.classList.add('is-valid');
                    $categoryErrors.style.display = 'none';
                    $categoryErrors.innerHTML = '';
                    $subcategorySelect.classList.remove('is-invalid');
                    $subcategorySelect.classList.add('is-valid');
                    $subcategoryErrors.style.display = 'none';
                    $subcategoryErrors.innerHTML = '';
                    validationErrors = false;
                }
                break;
            default:
                break;
        }

        switch($categorySelect.selectedIndex == 4){
            case $subcategorySelect.selectedIndex != 0:
                if($subcategorySelect.selectedIndex < 15 || $subcategorySelect.selectedIndex > 17){
                    $subcategorySelect.classList.remove('is-valid');
                    $subcategorySelect.classList.add('is-invalid');
                    $subcategoryErrors.style.display = 'block';
                    $subcategoryErrors.innerHTML = 'Las categorías no coinciden';
                    $categorySelect.classList.remove('is-valid');
                    $categorySelect.classList.add('is-invalid');
                    $categoryErrors.style.display = ' block';
                    $categoryErrors.innerHTML = 'Las categorías no coinciden';
                    validationErrors = true;
                }else{
                    $categorySelect.classList.remove('is-invalid');
                    $categorySelect.classList.add('is-valid');
                    $categoryErrors.style.display = 'none';
                    $categoryErrors.innerHTML = '';
                    $subcategorySelect.classList.remove('is-invalid');
                    $subcategorySelect.classList.add('is-valid');
                    $subcategoryErrors.style.display = 'none';
                    $subcategoryErrors.innerHTML = '';
                    validationErrors = false;
                }
                break;
            default:
                break;
        }

        switch($categorySelect.selectedIndex == 5){
            case $subcategorySelect.selectedIndex != 0:
                if($subcategorySelect.selectedIndex < 18 || $subcategorySelect.selectedIndex > 40){
                    $subcategorySelect.classList.remove('is-valid');
                    $subcategorySelect.classList.add('is-invalid');
                    $subcategoryErrors.style.display = 'block';
                    $subcategoryErrors.innerHTML = 'Las categorías no coinciden';
                    $categorySelect.classList.remove('is-valid');
                    $categorySelect.classList.add('is-invalid');
                    $categoryErrors.style.display = ' block';
                    $categoryErrors.innerHTML = 'Las categorías no coinciden';
                    validationErrors = true;
                }else{
                    $categorySelect.classList.remove('is-invalid');
                    $categorySelect.classList.add('is-valid');
                    $categoryErrors.style.display = 'none';
                    $categoryErrors.innerHTML = '';
                    $subcategorySelect.classList.remove('is-invalid');
                    $subcategorySelect.classList.add('is-valid');
                    $subcategoryErrors.style.display = 'none';
                    $subcategoryErrors.innerHTML = '';
                    validationErrors = false;
                }
                break;
            default:
                break;
        }

        switch($categorySelect.selectedIndex == 6){
            case $subcategorySelect.selectedIndex != 0:
                if($subcategorySelect.selectedIndex < 41){
                    $subcategorySelect.classList.remove('is-valid');
                    $subcategorySelect.classList.add('is-invalid');
                    $subcategoryErrors.style.display = 'block';
                    $subcategoryErrors.innerHTML = 'Las categorías no coinciden';
                    $categorySelect.classList.remove('is-valid');
                    $categorySelect.classList.add('is-invalid');
                    $categoryErrors.style.display = ' block';
                    $categoryErrors.innerHTML = 'Las categorías no coinciden';
                    validationErrors = true;
                }else{
                    $categorySelect.classList.remove('is-invalid');
                    $categorySelect.classList.add('is-valid');
                    $categoryErrors.style.display = 'none';
                    $categoryErrors.innerHTML = '';
                    $subcategorySelect.classList.remove('is-invalid');
                    $subcategorySelect.classList.add('is-valid');
                    $subcategoryErrors.style.display = 'none';
                    $subcategoryErrors.innerHTML = '';
                    validationErrors = false;
                }
                break;
            default:
                break;
        }
    })

    $colorSelect.addEventListener('input', () => {
        if($colorSelect.selectedIndex == 0){
            $colorSelect.classList.remove('is-valid');
            $colorSelect.classList.add('is-invalid');
            $colorErrors.style.display = 'block';
            $colorErrors.innerHTML = 'Selecciona un color';
            validationErrors = true;
        }else{
            $colorSelect.classList.remove('is-invalid');
            $colorSelect.classList.add('is-valid');
            $colorErrors.style.display = 'none';
            $colorErrors.innerHTML = '';
            validationErrors = false;
        }
    })

    $colorSelect.addEventListener('blur', () => {
        if($colorSelect.selectedIndex == 0){
            $colorSelect.classList.remove('is-valid');
            $colorSelect.classList.add('is-invalid');
            $colorErrors.style.display = 'block';
            $colorErrors.innerHTML = 'Selecciona un color';
            validationErrors = true;
        }else{
            $colorSelect.classList.remove('is-invalid');
            $colorSelect.classList.add('is-valid');
            $colorErrors.style.display = 'none';
            $colorErrors.innerHTML = '';
            validationErrors = false;
        }
    })

    $colorSelect.addEventListener('change', () => {
        if($colorSelect.selectedIndex == 0){
            $colorSelect.classList.remove('is-valid');
            $colorSelect.classList.add('is-invalid');
            $colorErrors.style.display = 'block';
            $colorErrors.innerHTML = 'Selecciona un color';
            validationErrors = true;
        }else{
            $colorSelect.classList.remove('is-invalid');
            $colorSelect.classList.add('is-valid');
            $colorErrors.style.display = 'none';
            $colorErrors.innerHTML = '';
            validationErrors = false;
        }
    })


    $brandSelect.addEventListener('input', () => {
        if($brandSelect.selectedIndex == 0){
            $brandSelect.classList.remove('is-valid');
            $brandSelect.classList.add('is-invalid');
            $brandErrors.style.display = 'block';
            $brandErrors.innerHTML = 'Selecciona una marca';
            validationErrors = true;
        }else{
            $brandSelect.classList.remove('is-invalid');
            $brandSelect.classList.add('is-valid');
            $brandErrors.style.display = 'none';
            $brandErrors.innerHTML = '';
            validationErrors = false;
        }
    })

    $brandSelect.addEventListener('blur', () => {
        if($brandSelect.selectedIndex == 0){
            $brandSelect.classList.remove('is-valid');
            $brandSelect.classList.add('is-invalid');
            $brandErrors.style.display = 'block';
            $brandErrors.innerHTML = 'Selecciona una marca';
            validationErrors = true;
        }else{
            $brandSelect.classList.remove('is-invalid');
            $brandSelect.classList.add('is-valid');
            $brandErrors.style.display = 'none';
            $brandErrors.innerHTML = '';
            validationErrors = false;
        }
    })

    $brandSelect.addEventListener('change', () => {
        if($brandSelect.selectedIndex == 0){
            $brandSelect.classList.remove('is-valid');
            $brandSelect.classList.add('is-invalid');
            $brandErrors.style.display = 'block';
            $brandErrors.innerHTML = 'Selecciona una marca';
            validationErrors = true;
        }else{
            $brandSelect.classList.remove('is-invalid');
            $brandSelect.classList.add('is-valid');
            $brandErrors.style.display = 'none';
            $brandErrors.innerHTML = '';
            validationErrors = false;
        }
    })

    $inputDescription.addEventListener('keyup', () => {
        switch (true) {
            case !$inputDescription.value.trim():
                $inputDescription.classList.remove('is-valid');
                $inputDescription.classList.add('is-invalid');
                $descriptionErrors.style.display = 'block';
                $descriptionErrors.innerHTML = 'Ingresa una descripción';
                validationErrors = true;
                break;
            case $inputDescription.value.length > 0 && $inputDescription.value.length < 20:
                $inputDescription.classList.remove('is-valid');
                $inputDescription.classList.add('is-invalid');
                $descriptionErrors.style.display = 'block';
                $descriptionErrors.innerHTML = 'La descripción debe contener al menos 20 caracteres';
                validationErrors = true;
                break;
            default:
                $inputDescription.classList.remove('is-invalid');
                $inputDescription.classList.add('is-valid');
                $descriptionErrors.style.display = 'none';
                $descriptionErrors.innerHTML = '';
                validationErrors = false;
                break;
        }
    })

    $inputDescription.addEventListener('blur', () => {
        switch (true) {
            case !$inputDescription.value.trim():
                $inputDescription.classList.remove('is-valid');
                $inputDescription.classList.add('is-invalid');
                $descriptionErrors.style.display = 'block';
                $descriptionErrors.innerHTML = 'Ingresa una descripción';
                validationErrors = true;
                break;
            case $inputDescription.value.length > 0 && $inputDescription.value.length < 20:
                $inputDescription.classList.remove('is-valid');
                $inputDescription.classList.add('is-invalid');
                $descriptionErrors.style.display = 'block';
                $descriptionErrors.innerHTML = 'La descripción debe contener al menos 20 caracteres';
                validationErrors = true;
                break;
            default:
                $inputDescription.classList.remove('is-invalid');
                $inputDescription.classList.add('is-valid');
                $descriptionErrors.style.display = 'none';
                $descriptionErrors.innerHTML = '';
                validationErrors = false;
                break;
        }
    })

    $inputPrice.addEventListener('keyup', () => {
        switch(true){
            case !$inputPrice.value.trim() || $inputPrice.value < 1:
                $inputPrice.classList.remove('is-valid');
                $inputPrice.classList.add('is-invalid');
                $faCheckPrice.style.display = 'none';
                $faCrossPrice.style.display = 'block';
                $priceErrors.style.display = 'block';
                $priceErrors.innerHTML = 'Ingresa un precio';
                validationErrors = true;
                break;
            default:
                $inputPrice.classList.remove('is-invalid');
                $inputPrice.classList.add('is-valid');
                $faCheckPrice.style.display = 'block';
                $faCrossPrice.style.display = 'none';
                $priceErrors.style.display = 'none';
                $priceErrors.innerHTML = '';
                validationErrors = false;
                break;
        }
    })

    $inputPrice.addEventListener('blur', () => {
        switch(true){
            case !$inputPrice.value.trim() || $inputPrice.value < 1:
                $inputPrice.classList.remove('is-valid');
                $inputPrice.classList.add('is-invalid');
                $faCheckPrice.style.display = 'none';
                $faCrossPrice.style.display = 'block';
                $priceErrors.style.display = 'block';
                $priceErrors.innerHTML = 'Ingresa un precio';
                validationErrors = true;
                break;
            default:
                $inputPrice.classList.remove('is-invalid');
                $inputPrice.classList.add('is-valid');
                $faCheckPrice.style.display = 'block';
                $faCrossPrice.style.display = 'none';
                $priceErrors.style.display = 'none';
                $priceErrors.innerHTML = '';
                validationErrors = false;
                break;
        }
    })

    $inputDiscount.addEventListener('keyup', () => {
        switch(true){
            case !$inputDiscount.value.trim():
                $inputDiscount.classList.remove('is-valid');
                $inputDiscount.classList.add('is-invalid');
                $faCheckDiscount.style.display = 'none';
                $faCrossDiscount.style.display = 'block';
                $discountErrors.style.display = 'block';
                $discountErrors.innerHTML = 'Ingresa un descuento (0-99)';
                validationErrors = true;
                break;
            case $inputDiscount.value < 0:
                $inputDiscount.classList.remove('is-valid');
                $inputDiscount.classList.add('is-invalid');
                $faCheckDiscount.style.display = 'none';
                $faCrossDiscount.style.display = 'block';
                $discountErrors.style.display = 'block';
                $discountErrors.innerHTML = 'Ingresa un descuento (0-99)';
                validationErrors = true;
                break;
            case $inputDiscount.value > 99:
                $inputDiscount.classList.remove('is-valid');
                $inputDiscount.classList.add('is-invalid');
                $faCheckDiscount.style.display = 'none';
                $faCrossDiscount.style.display = 'block';
                $discountErrors.style.display = 'block';
                $discountErrors.innerHTML = 'Ingresa un descuento (0-99)';
                validationErrors = true;
                break;
            default:
                $inputDiscount.classList.remove('is-invalid');
                $inputDiscount.classList.add('is-valid');
                $faCheckDiscount.style.display = 'block';
                $faCrossDiscount.style.display = 'none';
                $discountErrors.style.display = 'none';
                $discountErrors.innerHTML = '';
                validationErrors = false;
                break;
        }
    })

    $inputDiscount.addEventListener('blur', () => {
        switch(true){
            case !$inputDiscount.value.trim():
                $inputDiscount.classList.remove('is-valid');
                $inputDiscount.classList.add('is-invalid');
                $faCheckDiscount.style.display = 'none';
                $faCrossDiscount.style.display = 'block';
                $discountErrors.style.display = 'block';
                $discountErrors.innerHTML = 'Ingresa un descuento (0-99)';
                validationErrors = true;
                break;
            case $inputDiscount.value < 0:
                $inputDiscount.classList.remove('is-valid');
                $inputDiscount.classList.add('is-invalid');
                $faCheckDiscount.style.display = 'none';
                $faCrossDiscount.style.display = 'block';
                $discountErrors.style.display = 'block';
                $discountErrors.innerHTML = 'Ingresa un descuento (0-99)';
                validationErrors = true;
                break;
            case $inputDiscount.value > 99:
                $inputDiscount.classList.remove('is-valid');
                $inputDiscount.classList.add('is-invalid');
                $faCheckDiscount.style.display = 'none';
                $faCrossDiscount.style.display = 'block';
                $discountErrors.style.display = 'block';
                $discountErrors.innerHTML = 'Ingresa un descuento (0-99)';
                validationErrors = true;
                break;
            default:
                $inputDiscount.classList.remove('is-invalid');
                $inputDiscount.classList.add('is-valid');
                $faCheckDiscount.style.display = 'block';
                $faCrossDiscount.style.display = 'none';
                $discountErrors.style.display = 'none';
                $discountErrors.innerHTML = '';
                validationErrors = false;
                break;
        }
    })


    $inputFile.addEventListener('change', (e) => {
        console.log($inputFile.files);
        console.log($inputFile.value)
        let allowedExtensions = /(.jpg|.jpeg|.png|.gif|.webp)$/i
        if($inputFile.files.length > 4){
            $fileErrors.style.display = 'block';
            $fileErrors.innerHTML = 'Máximo 4 Imágenes';
            $inputFile.value = "";
        }
        let fileLength = $inputFile.files.length;

        for(let i = 0; i < $inputFile.files.length; i++){
            let file = $inputFile.files[i];
            let fileName = file.name;
            if(!allowedExtensions.test(fileName)){
                $fileErrors.style.display = 'block';
                $fileErrors.innerHTML = 'Solo archivos .jpg - .jpeg - .png - .gif - .webp';
                $inputFile.value = "";
            }else{
                
                $fileErrors.innerHTML = '';
            }
        }

        if($inputFile.files.length < 5){
            let images = [];
            $imgPreview.innerHTML = '';
            for(i = 0; i < $inputFile.files.length; i++){
                images.push({
                    "name": $inputFile.files[i].name,
                    "url": URL.createObjectURL($inputFile.files[i]),
                    "file": $inputFile.files[i],
                })
            }

            images.forEach((i) => {
                $imgPreview.innerHTML += `
                <img src="`+ i.url +`" alt="Image">
                `
            })
        }
    })
    




    $form.addEventListener('submit', (e) => {
        e.preventDefault();

        let error = false;

        if(!$inputName.value.trim()){
            $inputName.classList.remove('is-valid');
            $inputName.classList.add('is-invalid');
            $faCheckName.style.display = 'none';
            $faCrossName.style.display = 'block';
            $nameErrors.style.display = 'block';
            $nameErrors.innerHTML = 'El campo es obligatorio'
            error = true;
        }

        if($categorySelect.selectedIndex == 0){
            $categorySelect.classList.remove('is-valid');
            $categorySelect.classList.add('is-invalid');
            $categoryErrors.style.display = 'block';
            $categoryErrors.innerHTML = 'Selecciona una categoría';
            error = true;
        }

        if($subcategorySelect.selectedIndex == 0){
            $subcategorySelect.classList.remove('is-valid');
            $subcategorySelect.classList.add('is-invalid');
            $subcategoryErrors.style.display = 'block';
            $subcategoryErrors.innerHTML = 'Selecciona una subcategoría';
            error = true;
        }

        if($colorSelect.selectedIndex == 0){
            $colorSelect.classList.remove('is-valid');
            $colorSelect.classList.add('is-invalid');
            $colorErrors.style.display = 'block';
            $colorErrors.innerHTML = 'Selecciona una color';
            error = true;
        }

        if($brandSelect.selectedIndex == 0){
            $brandSelect.classList.remove('is-valid');
            $brandSelect.classList.add('is-invalid');
            $brandErrors.style.display = 'block';
            $brandErrors.innerHTML = 'Selecciona una marca';
            error = true;
        }

        if(!$inputDescription.value.trim()){
            $inputDescription.classList.remove('is-valid');
            $inputDescription.classList.add('is-invalid');
            $descriptionErrors.style.display = 'block';
            $descriptionErrors.innerHTML = 'Ingresa una descripción';
            $inputDescription.value = '';
            error = true;
        }

        if(!$inputPrice.value.trim() || $inputPrice.value < 1){
            $inputPrice.classList.remove('is-valid');
            $inputPrice.classList.add('is-invalid');
            $faCheckPrice.style.display = 'none';
            $faCrossPrice.style.display = 'block';
            $priceErrors.style.display = 'block';
            $priceErrors.innerHTML = 'Ingresa un precio';
            error = true;
        }

        if(!$inputPrice.value.trim() || $inputPrice.value < 1){
            $inputDiscount.classList.remove('is-valid');
            $inputDiscount.classList.add('is-invalid');
            $faCheckDiscount.style.display = 'none';
            $faCrossDiscount.style.display = 'block';
            $discountErrors.style.display = 'block';
            $discountErrors.innerHTML = 'Ingresa un descuento (Entre 0 y 99)';
            error = true;
        }

        if($inputFile.files.length > 4){
            $fileErrors.innerHTML = 'Máximo 4 Imágenes';
            $inputFile.value = "";
        }

        console.log(error);
        console.log(validationErrors);



        if(!error && !validationErrors ){
            $form.submit();
        }

    })

}