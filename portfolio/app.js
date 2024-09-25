//sticky navbar

const navbar = document.querySelector('nav')
const themeheading = document.querySelector('.theme-colors h2')

window.addEventListener('scroll', ()=>{
    if (scrollY > 30) {
        navbar.classList.add('active')
        themeheading.classList.add('active')
    }else{
        navbar.classList.remove('active')
        themeheading.classList.remove('active')
    }
})

//scroll top bar

const scrolltotop = document.querySelector('.scrolltop a')

window.addEventListener('scroll',()=>{
    if(scrollY > 1000){
        scrolltotop.classList.add('active')
    }else{
        scrolltotop.classList.remove('active')
    }
})

//toggle dark/light mode

const moon = document.querySelector('.bx-moon')
const sun = document.querySelector('.bx-sun')

moon.addEventListener('click',()=>{
    document.body.classList.add('darkmode')
    moon.style.display = 'none'
    sun.style.display = 'block'
})
sun.addEventListener('click',()=>{
    document.body.classList.remove('darkmode')
    sun.style.display = 'none'
    moon.style.display = 'block'
})

//color picker
const colorpicker = document.querySelectorAll('.colorpicker')

colorpicker[0].addEventListener('click',()=>{ 
    document.body.classList.add('clr1')
    document.body.classList.remove('clr2','clr3','clr4')
})
colorpicker[1].addEventListener('click',()=>{ 
    document.body.classList.add('clr2')
    document.body.classList.remove('clr1','clr3','clr4')
})
colorpicker[2].addEventListener('click',()=>{ 
    document.body.classList.add('clr3')
    document.body.classList.remove('clr2','clr1','clr4')
})
colorpicker[3].addEventListener('click',()=>{ 
    document.body.classList.add('clr4')
    document.body.classList.remove('clr2','clr3','clr1')
})

//show/hide toggle nav list-items for responsive layout
const listitems= document.querySelector('nav ul')

function listItems(){
    listitems.classList.toggle('listitems')
}