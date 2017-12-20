const headerContentBtn = document.querySelector('.device__settingsRestart--btn')
console.log(headerContentBtn)

headerContentBtn.addEventListener('mouseover', function(e)
{
    let parentOffset = headerContentBtn.getBoundingClientRect(),
    relX = e.clientX - parentOffset.left,
    relY = e.clientY - parentOffset.top;
    console.log(relX)
    let span = document.querySelector('.device__settingsRestart--btn span')
    console.log(span)
    span.style.top = relY + "px"
    span.style.left = relX + "px"
})