window.onload = () => {
    let form = document.querySelector('.avatarForm');

    let inputFile = document.querySelector('#avatar');

    let allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i

    inputFile.addEventListener('change', () => {
        if(allowedExtensions.test(inputFile.files[0].name)){
            form.submit();
        }else{
            inputFile.value = '';
        }
    })
}