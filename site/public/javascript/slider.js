window.onload = () => {

    let searchForm = document.querySelector('#searchForm');

    let inputSearch = document.querySelector('#search');


    searchForm.addEventListener('submit', (e) => {
        if(inputSearch.value.length < 1){
            e.preventDefault()
        }
    })

    let elem = document.querySelectorAll('.main-carousel');


    for(let i=0; i < elem.length; i++){
        let galleryElem = elem[i]
        let flkty = new Flickity(galleryElem, {
            contain: true,
            cellAlign: 'center',
            wrapAround: true,
            freeScroll: true,
        })
    }
}