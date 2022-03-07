window.onload = () => {
    let $email = document.querySelectorAll('#userEmail');

    const mediaQuery = window.matchMedia('(max-width: 400px)');

    if(mediaQuery.matches){
        $email.forEach(email => {
            if(email.innerText.length > 15){
                email.innerText = `${email.innerText.substr(0,14)}...`; 
            }
        })
    }
}