function toggleNavbar(){
    const header = document.querySelector('.header')
    header.classList.toggle('active')
}

let lastScrollY = window.scrollY
window.addEventListener('scroll', function(){
    const body = this.document.getElementById('body')
    const scroll = document.querySelector('.header')
    if (lastScrollY < window.scrollY){
        scroll.classList.add('scrolledDown')
        scroll.classList.remove('scrolledUp')
    }
    else{
        scroll.classList.remove('scrolledDown')
        scroll.classList.add('scrolledUp')
    }
    lastScrollY = this.window.scrollY
})
