const reset = document.querySelector('.device__solutionBtn--validate')

if (reset)
{
    reset.addEventListener('mouseover', function(e)
    {
        let parentOffset = reset.getBoundingClientRect(),
        relX = e.clientX - parentOffset.left,
        relY = e.clientY - parentOffset.top;
        let span = document.querySelector('.device__solutionBtn--validate span')
        span.style.top = relY + "px"
        span.style.left = relX + "px"
    })
}

const day = document.querySelector('.device__day')

if (day)
{

function removeDay ()
{
    setTimeout(() => {
        day.style.opacity = 0
    }, 1000);

    setTimeout(() => {
        day.style.display = 'none'
    }, 1200);
}

removeDay()
}

/**
 * 
 * Results page
 * 
 */

const shareStory = document.querySelector('.device__resultsContent--btn')

if (shareStory)
{
    shareStory.addEventListener('mouseover', function(e)
    {
        let parentOffset = shareStory.getBoundingClientRect(),
        relX = e.clientX - parentOffset.left,
        relY = e.clientY - parentOffset.top;
        let span = document.querySelector('.device__resultsContent--btn span')
        span.style.top = relY + "px"
        span.style.left = relX + "px"
    })
}
 