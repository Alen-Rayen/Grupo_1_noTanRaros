window.onload = () => {
    console.log('Hola')

    let searchForm = document.querySelector('#searchForm');

    let inputSearch = document.querySelector('#search');


    searchForm.addEventListener('submit', (e) => {
        if(inputSearch.value.length <= 0){
            e.preventDefault()
        }
    })
    
}