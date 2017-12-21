const reset = document.querySelector('.device__solutionBtn--validate')

reset.addEventListener('mouseover', function(e)
{
    let parentOffset = reset.getBoundingClientRect(),
    relX = e.clientX - parentOffset.left,
    relY = e.clientY - parentOffset.top;
    let span = document.querySelector('.device__solutionBtn--validate span')
    span.style.top = relY + "px"
    span.style.left = relX + "px"
})