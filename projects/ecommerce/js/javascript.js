function navbarToggle(){
    const navbar = document.querySelector('.navbar')
    const bars = document.querySelector('.navbar .burger .fa-bars')
    const close = document.querySelector('.navbar .burger .fa-times')
    bars.classList.toggle('hidden')
    close.classList.toggle('hidden')
    navbar.classList.toggle('active')
}





