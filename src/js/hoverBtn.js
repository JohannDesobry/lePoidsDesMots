const headerContentBtn = document.querySelector('.device__settingsRestart--btn')

headerContentBtn.addEventListener('mouseover', function(e)
{
    let parentOffset = headerContentBtn.getBoundingClientRect(),
    relX = e.clientX - parentOffset.left,
    relY = e.clientY - parentOffset.top;
    let span = document.querySelector('.device__settingsRestart--btn span')
    span.style.top = relY + "px"
    span.style.left = relX + "px"
})