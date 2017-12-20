// Answer Image

const contentAnswerImage = document.querySelectorAll('.device__contentAnswerImage')

for (let i = 0; i < contentAnswerImage.length; i++)
{
    contentAnswerImage[i].addEventListener('click', function()
    {
        if (!contentAnswerImage[i].classList.contains('fullScreen'))
        {
            contentAnswerImage[i].classList.add('fullScreen')
        }
        else 
        {
            contentAnswerImage[i].classList.remove('fullScreen')
        }
    })
}

// App Image

const contentAppImage = document.querySelectorAll('.device__contentAppImage')

for (let i = 0; i < contentAppImage.length; i++)
{
    contentAppImage[i].addEventListener('click', function()
    {
        console.log('çacliquedeouf')
        if (!contentAppImage[i].classList.contains('fullScreen'))
        {
            contentAppImage[i].classList.add('fullScreen')
        }
        else 
        {
            contentAppImage[i].classList.remove('fullScreen')
        }
    })
}
