const burguer = document.getElementById('burguer')
const ul_itens = document.querySelector('.ul_itens')
burguer.addEventListener('click',()=>{
    ul_itens.classList.toggle('active')
    console.log(ul_itens)
})