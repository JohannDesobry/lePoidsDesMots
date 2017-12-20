const burger = document.querySelector('.home__headerContent--burger'),
      burgerBar = document.querySelectorAll('.home__headerContent--burger div'),
      burgerContent = document.querySelector('.home__headerContent--burgerContent')

burger.addEventListener('click', (e) =>
{
    e.preventDefault()
    for (let i = 0; i < burgerBar.length; i++)
    {
        burgerBar[i].classList.toggle("change")
    }
    burgerContent.classList.toggle("is-active")
})
