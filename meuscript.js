const mobile_btn = document.getElementById('mobile-btn')
const mobile_menu = document.getElementById('mobile-menu')
let mobileIcon = mobile_btn.querySelector('i')

mobile_btn.addEventListener('click',()=>{
    mobile_menu.classList.toggle("active")
    mobileIcon.classList.toggle("fa-x")
})  

const cards = document.querySelectorAll('.cards')
const card_modal = document.getElementById('card_modal')

cards.forEach((item)=>{
    item.addEventListener('click',()=>{
        if(window.innerWidth >1200){
        card_modal.style.display = 'block'
    }else {
        window.location.href = 'estoques_motos.html'
    }
    })
})

card_modal.addEventListener('click',(e)=>{
    if(e.target === card_modal){
        card_modal.style.display = 'none'
    }
})