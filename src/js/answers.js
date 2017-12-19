// Activate block answer + calcul scroll

// const answerContainer = document.querySelector('.device__answers'),
const answers = document.querySelectorAll('.device__answers div')
    //   lastPost        = document.querySelector('.post:last-child')
const test = document.querySelector('.device__answersText')

console.log(answers)

function displayAnswers() 
{
     if (!test.classList.contains('is-active'))
     {
        console.log('contient pas')
        test.classList.add('is-active')
     }
}

// displayAnswers()