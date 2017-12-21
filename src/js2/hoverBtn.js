const headerContentBtn = document.querySelector('.home__headerContent--intro .btn')

headerContentBtn.addEventListener('mouseover', function(e)
{
    let parentOffset = headerContentBtn.getBoundingClientRect(),
    relX = e.clientX - parentOffset.left,
    relY = e.clientY - parentOffset.top;
    let span = document.querySelector('.home__headerContent--intro .btn span')
    span.style.top = relY + "px"
    span.style.left = relX + "px"
})