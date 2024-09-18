//sticky navbar

const navbar = document.querySelector('nav')

window.addEventListener('scroll', ()=>{
    if (scrollY > 30) {
        navbar.classList.add('active')
    }else{
        navbar.classList.remove('active')
    }
})