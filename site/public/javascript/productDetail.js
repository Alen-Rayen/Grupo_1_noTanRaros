window.onload = () => {
    let mainPhoto = document.querySelector('.photo-1');

    let miniPhoto1 = document.querySelector('#photo1');
    let miniPhoto2 = document.querySelector('#photo2');
    let miniPhoto3 = document.querySelector('#photo3');
    let miniPhoto4 = document.querySelector('#photo4');

    miniPhoto1.onclick = () => {
        let mySrc = miniPhoto1.src;
        mainPhoto.src = mySrc;
    }

    miniPhoto2.onclick = (e) => {
        let mySrc = miniPhoto2.src;
        mainPhoto.src = mySrc;
    }

    miniPhoto3.onclick = () => {
        let mySrc = miniPhoto3.src;
        mainPhoto.src = mySrc;
    }

    miniPhoto4.onclick = () => {
        let mySrc = miniPhoto4.src;
        mainPhoto.src = mySrc;
    }
}