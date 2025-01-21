const mobile_btn = document.getElementById('mobile-btn')
const mobile_menu = document.getElementById('mobile-menu')
let mobileIcon = mobile_btn.querySelector('i')

mobile_btn.addEventListener('click',()=>{
    mobile_menu.classList.toggle("active")
    mobileIcon.classList.toggle("fa-x")
})  