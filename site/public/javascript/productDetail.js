window.onload = () => {
    let mainPhoto = document.querySelector('.photo-1');

    let miniPhoto1 = document.querySelector('#photo1');
    let miniPhoto2 = document.querySelector('#photo2');
    let miniPhoto3 = document.querySelector('#photo3');
    let miniPhoto4 = document.querySelector('#photo4');
    let mediaQuery1 = window.matchMedia('(max-width: 425px)');
    let mediaQuery2 = window.matchMedia('(min-width: 425px) and (max-width: 767px)');
    let mediaQuery3 = window.matchMedia('(min-width: 768px) and (max-width: 899px)');
    let mediaQuery4 = window.matchMedia('(min-width: 900px) and (max-width: 1140px)');
    let mediaQuery5 = window.matchMedia('(min-width: 1140px) and (max-width: 1440px)');

    mainPhoto.onclick = () => {

        switch(true){
            case mediaQuery1.matches:
                if(mainPhoto.style.transform == 'scale(1.15)'){
                    mainPhoto.style.transform = 'scale(1)'
                }else{
                    mainPhoto.style.transform = 'scale(1.15)'
                }
                break;
            case mediaQuery2.matches:
                if(mainPhoto.style.transform == 'scale(1.1)'){
                    mainPhoto.style.transform = 'scale(1)'
                }else{
                    mainPhoto.style.transform = 'scale(1.1)'
                }
                break;
            case mediaQuery3.matches:
                if(mainPhoto.style.transform == 'scale(1.25)'){
                    mainPhoto.style.transform = 'scale(1)';
                }else{
                    mainPhoto.style.transform = 'scale(1.25)';
                }
                break;
            case mediaQuery4.matches:
                if(mainPhoto.style.transform == 'scale(1.2)'){
                    mainPhoto.style.transform = 'scale(1)';
                }else{
                    mainPhoto.style.transform = 'scale(1.2)';
                }
                break;
            case mediaQuery5.matches:
                if(mainPhoto.style.transform == 'scale(1.15)'){
                    mainPhoto.style.transform = 'scale(1)';
                }else{
                    mainPhoto.style.transform = 'scale(1.15)';
                }
                break;
            default:
                if(mainPhoto.style.transform == 'scale(1.27)'){
                    mainPhoto.style.transform = 'scale(1)';
                }else{
                    mainPhoto.style.transform = 'scale(1.27)';
                }
                break;
        }
        
    }

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