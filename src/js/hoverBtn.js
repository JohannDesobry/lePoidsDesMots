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

const volBox = document.querySelector('.device__settingsAudioContent--vol')

volBox.addEventListener('mouseover', function(e)
{
    let parentOffset = volBox.getBoundingClientRect(),
    relX = e.clientX - parentOffset.left,
    relY = e.clientY - parentOffset.top;
    let span = document.querySelector('.device__settingsAudioContent--vol span')
    span.style.top = relY + "px"
    span.style.left = relX + "px"
})

const musBox = document.querySelector('.device__settingsAudioContent--music')

musBox.addEventListener('mouseover', function(e)
{
    let parentOffset = musBox.getBoundingClientRect(),
    relX = e.clientX - parentOffset.left,
    relY = e.clientY - parentOffset.top;
    let span = document.querySelector('.device__settingsAudioContent--music span')
    span.style.top = relY + "px"
    span.style.left = relX + "px"
})

const vibBox = document.querySelector('.device__settingsAudioContent--vibrator')

vibBox.addEventListener('mouseover', function(e)
{
    let parentOffset = vibBox.getBoundingClientRect(),
    relX = e.clientX - parentOffset.left,
    relY = e.clientY - parentOffset.top;
    let span = document.querySelector('.device__settingsAudioContent--vibrator span')
    span.style.top = relY + "px"
    span.style.left = relX + "px"
})
