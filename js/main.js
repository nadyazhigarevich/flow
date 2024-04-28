const burger = document.querySelector('.header__burger')
let isBurgerOpen = false

burger.addEventListener('click', () => {
    isBurgerOpen = !isBurgerOpen
    if (isBurgerOpen) {
        burger.classList.add('header__burger-active')
        document.querySelector('.header__right').style.display = 'block' 
    } else {
        burger.classList.remove('header__burger-active')
        document.querySelector('.header__right').style.display = 'none' 
    }
})