window.onload = () => {
    let elem = document.querySelector('.main-carousel');

    let flkty = new Flickity(elem, {
        cellAlign: 'center',
        wrapAround: true,
        rightToLeft: true,
        fade: true
    })
}