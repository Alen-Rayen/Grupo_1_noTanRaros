window.onload = () => {

    let searchForm = document.querySelector('#searchForm');

    let inputSearch = document.querySelector('#search');


    searchForm.addEventListener('submit', (e) => {
        if(inputSearch.value.length < 1){
            e.preventDefault()
        }
    })
    
}