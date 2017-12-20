// Activate block answer + calcul scroll

const answers = document.querySelectorAll('.device__answers div')

const textSection = document.querySelector('.device__answersText'),
      gifSection = document.querySelector('.device__answersGif'),
      emojiSection = document.querySelector('.device__answersEmoji')

function displayAnswersText() 
{
     if (!textSection.classList.contains('is-active'))
     {
        for (let i = 0; i < answers.length; i++)
        {
            answers[i].classList.remove('is-active')
        }
        textSection.classList.add('is-active')
     }
     else 
     {
        textSection.classList.remove('is-active')
     }
}

function displayAnswersGif() 
{
     if (!gifSection.classList.contains('is-active'))
     {
        for (let i = 0; i < answers.length; i++)
        {
            answers[i].classList.remove('is-active')
        }
        gifSection.classList.add('is-active')
     }
     else 
     {
        gifSection.classList.remove('is-active')
     }
}

function displayAnswersEmoji() 
{
     if (!emojiSection.classList.contains('is-active'))
     {
        for (let i = 0; i < answers.length; i++)
        {
            answers[i].classList.remove('is-active')
        }
        emojiSection.classList.add('is-active')
     }
     else 
     {
        emojiSection.classList.remove('is-active')
     }
}

const footerText = document.querySelector('.device__footerText'),
      footerGif = document.querySelector('.device__footerGif'),
      footerEmoji = document.querySelector('.device__footerEmoji')

footerText.addEventListener('click', function()
{
    displayAnswersText()
})

footerGif.addEventListener('click', function()
{
    displayAnswersGif()
})

footerEmoji.addEventListener('click', function()
{
    displayAnswersEmoji()
})