import Typed from 'typed.js';

// const answerContainer = document.querySelector('.device__answers'),
const answers = document.querySelectorAll('.device__answers div')
//   lastPost        = document.querySelector('.post:last-child')
const test = document.querySelector('.device__answersText')
// const timeHeader = document.querySelector('.device__headerStatus--time p')
// console.log(`timeHeader : ${timeHeader}`)
// var contentAppImage = document.querySelectorAll('.device__contentAppImage')
// const audioNotif = document.querySelector('audio')
// const player = document.querySelector('.player')
const notifSound = document.querySelector('.notif')
const sentSound = document.querySelector('.send')

const emojis = document.querySelector('.device__answersEmoji')
const textSection = document.querySelector('.device__answersText'),
       gifSection = document.querySelector('.device__answersGif'),
     emojiSection = document.querySelector('.device__answersEmoji')


const day = document.querySelector('.device__day')
const dayP = document.querySelector('.device__day p')

function removeDay ()
{
    setTimeout(() => {
        day.style.opacity = 0
    }, 1000);

    setTimeout(() => {
        day.style.display = 'none'
    }, 1200);
}

function removeDay2 ()
{
    setTimeout(() => {
        day.style.opacity = 0
    }, 1500);

    setTimeout(() => {
        day.style.display = 'none'
    }, 1700);
}

function addDay ()
{
    setTimeout(() => {
        day.style.opacity = 1
    }, 100);

    setTimeout(() => {
        day.style.display = 'flex'
    }, 200);
}

removeDay()

function displayAnswers() 
{
	if (!test.classList.contains('is-active'))
  {
    test.classList.add('is-active')
  }
}

function writingApp() {
  let device = document.querySelector('.device__content')
  let wrapper = document.createElement("DIV")
  wrapper.classList.add('device__contentPreAppMessage')
  let circle1 = document.createElement("DIV")
  circle1.classList.add('device__contentPreAppMessage--circle1')
  let circle2 = document.createElement("DIV")
  circle2.classList.add('device__contentPreAppMessage--circle2')
  let circle3 = document.createElement("DIV")
  circle3.classList.add('device__contentPreAppMessage--circle3')
  wrapper.appendChild(circle1)
  wrapper.appendChild(circle2)
  wrapper.appendChild(circle3)

  device.appendChild(wrapper)

  setTimeout(function() {
    wrapper.parentNode.removeChild(wrapper);
  }, 1000)
}


function removeAnswers() 
{
	if (test.classList.contains('is-active'))
  {
    test.classList.remove('is-active')
    let remove = document.querySelector('.device__answersText')
    let nodes = document.querySelectorAll('.device__answersTextInput')
    for( let i = 0 ; i < nodes.length ; i++ ) {
      remove.removeChild(nodes[i])
    }
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

function removeEmojis() 
{
	if (emojis.classList.contains('is-active'))
  {
    emojis.classList.remove('is-active')
    let remove = document.querySelector('.device__answersEmoji')
    let nodes = document.querySelectorAll('.device__answersEmojiInput')
    for( let i = 0 ; i < nodes.length ; i++ ) {
      remove.removeChild(nodes[i])
    }
  }
}

function removeGif() 
{
  let remove = document.querySelector('.device__answersGif')
  let nodes = document.querySelectorAll('.device__answersGifInput')
  for( let i = 0 ; i < nodes.length ; i++ ) {
    remove.removeChild(nodes[i])
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

export default class Automation {
  constructor(story,i,j,currentChapter,currentMessage,nextChapter,nextMessage) {
    this.story = story
    this.i = i
    this.j = j
    this.currentChapter = currentChapter
    this.currentMessage = currentMessage
    this.nextChapter = nextChapter
    this.nextMessage = nextMessage
    this.chapters = Object.keys(this.story).length
    this.deviceContent = document.querySelector('.device__content')
    this.playState = "play"
  }


  // Displays the messages in device
  displayAppMessages(currentChapter,currentMessage) {
    if( this.i < this.chapters-1 ) {

      // if app supposed to send a message
      if ( this.story[this.i][this.j].category == 'app' ) {

        // App message > TEXT
        if ( this.story[this.i][this.j].type == 'text' ) {

          // waiting message animation
          writingApp()

          // Get the current message to display
          let messageContent = this.story[this.i][this.j].content

          // Creates the element to append in device__content
          let div = document.createElement("DIV")
          div.classList.add('device__contentAppMessage')
          div.classList.add('post')
          let p = document.createElement("P")
          let text = document.createTextNode(messageContent)
          // p.appendChild(text)
          let hour = document.createElement("DIV")
          let time = document.createTextNode(this.story[this.i][this.j].date.hour)
          hour.appendChild(time)
          hour.classList.add('hour')
          div.appendChild(p)
          div.appendChild(hour)

          // Stock chapter and/or next message to recuperate in callback
          this.nextChapter = this.story[this.i][this.j].chapterTarget
          this.nextMessage = this.story[this.i][this.j].messageTarget

          let _this = this

          setTimeout(function() {

            _this.deviceContent.appendChild(div)
            let typed = new Typed(p, {
              strings: [messageContent],
              typeSpeed: 10,
              showCursor: false
            });
            // Scroll window to see last messages if they're hidden
            scroll()
            notifSound.play()

          }, 1100)
          
          // timeHeader.innerHTML = this.story[this.i][this.j].date.hour

          this.playState = "play"
        }

        // App message > GIF
        else if ( this.story[this.i][this.j].type == 'gif' ) {

          // waiting message animation
          writingApp()

          // Creates the element to append in device__content
          let div = document.createElement("DIV")
          div.classList.add('device__contentAppImage')
          div.classList.add('post')
          let img = document.createElement("IMG")
          img.src = this.story[this.i][this.j].src
          div.appendChild(img)
          let hour = document.createElement("DIV")
          let time = document.createTextNode(this.story[this.i][this.j].date.hour)
          hour.appendChild(time)
          hour.classList.add('hour')
          div.appendChild(hour)
          let overlay = document.createElement("DIV")
          overlay.classList.add('overlay')

          let full = document.createElement("P")

          let icon = document.createElement("DIV")
          icon.classList.add('icon-close')
          div.appendChild(overlay)
          div.appendChild(full)
          div.appendChild(icon)

          div.addEventListener('click', function() {
            if (!div.classList.contains('fullScreen'))
            {
              div.classList.add('fullScreen')
            }
            else 
            {
              div.classList.remove('fullScreen')
            }
          })

          let _this = this
          
          setTimeout(function() {

            _this.deviceContent.appendChild(div)

            // Scroll window to see last messages if they're hidden
            scroll()
            notifSound.play()

          }, 2005)
          // timeHeader.innerHTML = this.story[this.i][this.j].date.hour

          // Set the next message id
          this.nextMessage = (this.j +=1)

        }

        // App message > EMOJI
        else if ( this.story[this.i][this.j].type == 'emoji' ) {

          // waiting message animation
          writingApp()

          // Creates the element to append in device__content
          let div = document.createElement("DIV")
          div.classList.add('device__contentAppMessage')
          div.classList.add('post')
          let img = document.createElement("IMG")
          img.src = this.story[this.i][this.j].src
          div.appendChild(img)
          let hour = document.createElement("DIV")
          let time = document.createTextNode(this.story[this.i][this.j].date.hour)
          hour.appendChild(time)
          hour.classList.add('hour')
          div.appendChild(hour)
          //this.deviceContent.appendChild(div)

          let _this = this
          
          setTimeout(function() {

            _this.deviceContent.appendChild(div)

            // Scroll window to see last messages if they're hidden
            scroll()
            notifSound.play()

          }, 2005)
          // timeHeader.innerHTML = this.story[this.i][this.j].date.hour
          notifSound.play()

          // Stock chapter and/or next message to recuperate in callback
          this.nextChapter = this.story[this.i][this.j].chapterTarget
          this.nextMessage = this.story[this.i][this.j].messageTarget

        }

        // App > IMAGE
        else if ( this.story[this.i][this.j].type == "image" ) {

          writingApp()

          let wrapper = document.createElement("DIV")
          wrapper.classList.add('device__contentAppImage')
          wrapper.classList.add('post')
          let img = document.createElement("IMG")
          img.src = this.story[this.i][this.j].src
          wrapper.appendChild(img)
          let hour = document.createElement("DIV")
          hour.classList.add('hour')
          let time = document.createTextNode(this.story[this.i][this.j].date.hour)
          hour.appendChild(time)
          wrapper.appendChild(hour)
          let overlay = document.createElement("DIV")
          overlay.classList.add('overlay')
          wrapper.appendChild(overlay)
          let p = document.createElement("P")
          let text = document.createTextNode("VOIR EN GRAND")
          p.appendChild(text)
          wrapper.appendChild(p)
          let icon = document.createElement("DIV")
          icon.classList.add('icon-close')
          wrapper.appendChild(icon)

          wrapper.addEventListener('click', function() {
            if (!wrapper.classList.contains('fullScreen'))
            {
              wrapper.classList.add('fullScreen')
            }
            else 
            {
              wrapper.classList.remove('fullScreen')
            }
          })

          let _this = this
          
          setTimeout(function() {

            _this.deviceContent.appendChild(wrapper)

            // Scroll window to see last messages if they're hidden
            scroll()
            notifSound.play()

          }, 1100)

          // timeHeader.innerHTML = this.story[this.i][this.j].date.hour

          // Stock chapter and/or next message to recuperate in callback
          this.nextChapter = this.story[this.i][this.j].chapterTarget
          this.nextMessage = this.story[this.i][this.j].messageTarget
        
        }
        // END app > message > IMAGE
      }
      // END app > messages


      // user > answer > choices
      else if ( this.story[this.i][this.j].choices && this.story[this.i][this.j].category == "answer" && this.story[this.i][this.j].type == "text" ) {
      
        displayAnswers()

        // Stop messages displaying
        this.playState = "pause"

        let textAnswers = document.querySelector('.device__answersText')
        let x = this.story[this.i][this.j].choices

        for( let i = 0 ; i < x ; i++ ){
          let div = document.createElement("DIV")
          div.classList.add('device__answersTextInput')
          let p = document.createElement("P")
          let text = document.createTextNode(this.story[this.i][this.j+i].content)
          p.appendChild(text)
          div.appendChild(p)
          let arrow = document.createElement("DIV")
          arrow.classList.add('icon-right-arrow')
          div.appendChild(arrow)
          

          // Stock chapter and/or next message to recuperate in callback
          this.nextChapter = this.story[this.i][this.j+i].chapterTarget
          this.nextMessage = this.story[this.i][this.j+i].messageTarget
          
          textAnswers.appendChild(div)
          
          let a = this.nextChapter
          let b = this.nextMessage
          let currentChapter = this.i
          let currentMessage = this.j+i
    
          let _this = this
          div.addEventListener('click', () => {

            // Creates the element to append in device__content
            let container = document.createElement("DIV")
            container.classList.add('device__contentRight')
            container.classList.add('post')
            let message = document.createElement("DIV")
            message.classList.add('device__contentAnswerMessage')
            let p = document.createElement("P")
            let msg = _this.story[currentChapter][currentMessage].content
            let text = document.createTextNode(_this.story[currentChapter][currentMessage].content)
            let hour = document.createElement("DIV")
            let time = document.createTextNode(_this.story[_this.i][_this.j].date.hour)
            message.appendChild(hour)
            hour.appendChild(time)
            hour.classList.add('hour')
            // p.appendChild(text)
            message.appendChild(p)
            container.appendChild(message)
            sentSound.play()
            if (_this.story[_this.i][_this.j].correct)
            {
              container.classList.add('correct')
            }
            this.deviceContent.appendChild(container)
            let typed = new Typed(p, {
              strings: [msg],
              typeSpeed: 10,
              showCursor: false
            });
            // timeHeader.innerHTML = this.story[this.i][this.j].date.hour

            removeAnswers()
            setTimeout(function() {
              _this.i = a
              _this.j = b

              _this.playState = "play"

              _this.displayAppMessages(a,b)
              // audioNotif.play()
              //_this.playState = "play"

            }, 2000)

          })
        }
      }

      // user > ANSWERS
      else if ( this.story[this.i][this.j].category == "answer" ) {

        // Answer > TEXT
        if ( this.story[this.i][this.j].type == "text" ) {

          if ( this.story[this.i][this.j].auto == "true" ) {

            // Creates the element to append in device__content
            let container = document.createElement("DIV")
            container.classList.add('device__contentRight')
            container.classList.add('post')
            let message = document.createElement("DIV")
            message.classList.add('device__contentAnswerMessage')
            let p = document.createElement("P")
            let msg = this.story[currentChapter][currentMessage].content
            let text = document.createTextNode(this.story[currentChapter][currentMessage].content)
            let hour = document.createElement("DIV")
            let time = document.createTextNode(this.story[this.i][this.j].date.hour)
            message.appendChild(hour)
            hour.appendChild(time)
            hour.classList.add('hour')
            // p.appendChild(text)
            message.appendChild(p)
            container.appendChild(message)
            

            this.deviceContent.appendChild(container)

            sentSound.play()

            let typed = new Typed(p, {
              strings: [msg],
              typeSpeed: 10,
              showCursor: false
            });
            // timeHeader.innerHTML = this.story[this.i][this.j].date.hour

            // Stock chapter and/or next message to recuperate in callback
            this.nextChapter = this.story[this.i][this.j].chapterTarget
            this.nextMessage = this.story[this.i][this.j].messageTarget
          }

          // text > CHOICES
          // else if ( this.story[this.i][this.j].choices ) {
          //   console.log("choice")
          // }

        // if( this.story[this.i][this.j].choices == 3 ) {
        //   for( let i = 0 ; i < x ; i++ ){
        //     let div = document.createElement("DIV")
        //     div.classList.add('device__answersEmojiInput')
        //     let img = document.createElement("IMG")
        //     img.src = this.story[this.i][this.j+i].src
        //     div.appendChild(img)
  
        //     // Stock chapter and/or next message to recuperate in callback
        //     this.nextChapter = this.story[this.i][this.j+i].chapterTarget
        //     this.nextMessage = this.story[this.i][this.j+i].messageTarget
            
        //     smileyAnswers.appendChild(div)
  
        //     let _this = this
        //     let a = this.nextChapter
        //     let b = this.nextMessage
        //     let currentChapter = this.i
        //     let currentMessage = this.j+i
        //     div.addEventListener('click', () => {
        //       console.log('change chapter')
        //       console.log(a)
        //       console.log(b)
        //       //console.log(currentChapter)
        //       //console.log(currentMessage)
  
        //       // Stock current context
        //       let _this = this
  
        //       // Creates the element to append in device__content
        //       let container = document.createElement("DIV")
        //       container.classList.add('device__contentRight')
        //       container.classList.add('post')
        //       let message = document.createElement("DIV")
        //       message.classList.add('device__contentAnswerMessage')
        //       let img = document.createElement("IMG")
        //       img.src = this.story[this.i][this.j+i].src
        //       let hour = document.createElement("DIV")
        //       let time = document.createTextNode(this.story[this.i][this.j].date.hour)
        //       message.appendChild(hour)
        //       hour.appendChild(time)
        //       hour.classList.add('hour')
        //       message.appendChild(img)
        //       container.appendChild(message)
        //       this.deviceContent.appendChild(container)
        //       timeHeader.innerHTML = this.story[this.i][this.j].date.hour
        //     })
        //   }
        // }

          // text > AUTO
          else if ( this.story[this.i][this.j].auto ) {
            this.playState = "pause"
          }
        }
        // END Answers > TEXT

        // Answer > EMOJI
        else if ( this.story[this.i][this.j].type == "smiley" ) {
          this.playState = "pause"
          let smileyAnswers = document.querySelector('.device__answersEmoji')
          let x = this.story[this.i][this.j].choices
  
          displayAnswersEmoji()
  
          if( this.story[this.i][this.j].choices ) {
            for( let i = 0 ; i < x ; i++ ){
              let div = document.createElement("DIV")
              div.classList.add('device__answersEmojiInput')
              let img = document.createElement("IMG")
              img.src = this.story[this.i][this.j+i].src
              div.appendChild(img)
    
              // Stock chapter and/or next message to recuperate in callback
              this.nextChapter = this.story[this.i][this.j+i].chapterTarget
              this.nextMessage = this.story[this.i][this.j+i].messageTarget
              
              smileyAnswers.appendChild(div)
    
              let a = this.nextChapter
              let b = this.nextMessage
              let currentChapter = this.i
              let currentMessage = this.j+i

              
              // Creates the element to append in device__content
              let container = document.createElement("DIV")
              container.classList.add('device__contentRight')
              container.classList.add('post')
              let message = document.createElement("DIV")
              message.classList.add('device__contentAnswerMessage')
              let image = document.createElement("IMG")
              image.src = this.story[this.i][this.j+i].src
              image.classList.add('emoji_msg')
              let hour = document.createElement("DIV")
              let time = document.createTextNode(this.story[this.i][this.j].date.hour)
              message.appendChild(hour)
              hour.appendChild(time)
              hour.classList.add('hour')
              message.appendChild(image)
              container.appendChild(message)

              // Stock current context
              let _this = this

              div.addEventListener('click', () => {
    
                // Creates the element to append in device__content
                
                this.deviceContent.appendChild(container)
                sentSound.play()
  
                // displayAnswersEmoji()
                removeEmojis()
                scroll()
    
                _this.playState = "play"

                setTimeout(function() {
                  _this.i = a
                  _this.j = b
                  _this.displayAppMessages(a,b)
                }, 2000)
    
              })
            }
          }
        }
        // END Answer > SMILEY

        // Answer > GIF
        else if ( this.story[this.i][this.j].type == "gif" ) {
          this.playState = "pause"
          let gifAnswers = document.querySelector('.device__answersGif')
          //let x = this.story[this.i][this.j].choices

          displayAnswersGif()

          if( this.story[this.i][this.j].choices) {
            let x = this.story[this.i][this.j].choices
            for( let i = 0 ; i < x ; i++ ){
              let div = document.createElement("DIV")
              div.classList.add('device__answersGifInput')
              let img = document.createElement("IMG")
              img.src = this.story[this.i][this.j+i].src
              div.appendChild(img)
    
              // Stock chapter and/or next message to recuperate in callback
              this.nextChapter = this.story[this.i][this.j+i].chapterTarget
              this.nextMessage = this.story[this.i][this.j+i].messageTarget
              
              gifAnswers.appendChild(div)
              let _this = this
              let a = this.nextChapter
              let b = this.nextMessage
              let currentChapter = this.i
              let currentMessage = this.j+i


              div.addEventListener('click', () => {
                
    
                // Creates the element to append in device__content
                let message = document.createElement("DIV")
                message.classList.add('device__contentAnswerImage')
                message.classList.add('post')
                let image = document.createElement("IMG")
                image.src = _this.story[_this.i][_this.j+i].src
                let hour = document.createElement("DIV")
                let time = document.createTextNode(_this.story[_this.i][_this.j].date.hour)
                message.appendChild(hour)
                hour.appendChild(time)
                hour.classList.add('hour')
                message.appendChild(image)
                let overlay = document.createElement("DIV")
                overlay.classList.add('overlay')
      
                let full = document.createElement("P")
      
                let icon = document.createElement("DIV")
                icon.classList.add('icon-close')
                message.appendChild(overlay)
                message.appendChild(full)
                message.appendChild(icon)

                message.addEventListener('click', function() {
                  if (!message.classList.contains('fullScreen'))
                  {
                    message.classList.add('fullScreen')
                  }
                  else 
                  {
                    message.classList.remove('fullScreen')
                  }
                })

                this.deviceContent.appendChild(message)
                sentSound.play()
                // timeHeader.innerHTML = this.story[this.i][this.j].date.hour

                // displayAnswersEmoji()
                displayAnswersGif()
                removeGif()
                scroll()
    
                _this.playState = "play"
                setTimeout(function() {
                  _this.i = a
                  _this.j = b
                  _this.displayAppMessages(a,b)
                }, 2000)
    
              })
            }

          }
        }
        // END Answer > GIF

        // Answer > IMAGE
        else if ( this.story[this.i][this.j].type == "image" ) {

          this.playState = "pause"

          let wrapper = document.createElement("DIV")
          wrapper.classList.add('device__contentAnswerImage')
          wrapper.classList.add('post')
          let img = document.createElement("IMG")
          img.src = this.story[this.i][this.j].src
          wrapper.appendChild(img)
          let hour = document.createElement("DIV")
          hour.classList.add('hour')
          let time = document.createTextNode(this.story[this.i][this.j].date.hour)
          hour.appendChild(time)
          wrapper.appendChild(hour)
          let overlay = document.createElement("DIV")
          overlay.classList.add('overlay')
          wrapper.appendChild(overlay)
          let p = document.createElement("P")
          let text = document.createTextNode("VOIR EN GRAND")
          p.appendChild(text)
          wrapper.appendChild(p)
          let icon = document.createElement("DIV")
          icon.classList.add('icon-close')
          wrapper.appendChild(icon)

          wrapper.addEventListener('click', function() {
            if (!wrapper.classList.contains('fullScreen'))
            {
              wrapper.classList.add('fullScreen')
            }
            else 
            {
              wrapper.classList.remove('fullScreen')
            }
          })

          let _this = this
          
          setTimeout(function() {

            _this.deviceContent.appendChild(wrapper)

            // Scroll window to see last messages if they're hidden
            scroll()

          }, 100)

          scroll()

          // Stock chapter and/or next message to recuperate in callback
          this.nextChapter = this.story[this.i][this.j].chapterTarget
          this.nextMessage = this.story[this.i][this.j].messageTarget
        
        }
        // END Answer > IMAGE

      }
      // END Answers display 

      else if ( this.story[this.i][this.j].category == "transition" )
      {

        addDay()
        removeDay2()

        dayP.innerHTML = this.story[this.i][this.j].content

        // Stock chapter and/or next message to recuperate in callback
        this.nextChapter = this.story[this.i][this.j].chapterTarget
        this.nextMessage = this.story[this.i][this.j].messageTarget

      }

      else if ( this.story[this.i][this.j].category == "end" )
      {

        addDay()
        removeDay2()


        let allCorrects = document.querySelectorAll('.correct')
        let finalScore = 0
        for ( let i = 0 ; i < allCorrects.length ; i++) {
          finalScore += 1
        }
        //let lastname = localStorage.getItem("1")
  

        localStorage.setItem("1", finalScore)
        let lastname = localStorage.getItem("1")

        dayP.innerHTML = this.story[this.i][this.j].content

        const SAMUEL = document.querySelectorAll('.device__contentAnswerMessage')


        setTimeout(function() {

          document.location.href = 'ending.html';

        }, 1500)

        this.playState = "pause"

      }
      
    }


    // Re-execute display function after a determined delay to display next app message
    if ( this.playState == "play" ) {

      this.i = this.nextChapter
      this.j = this.nextMessage
      // Stock context
      let _this = this

      setTimeout(function() {
        _this.displayAppMessages(_this.nextChapter,_this.nextMessage)
        _this.i = _this.nextChapter
        _this.j = _this.nextMessage
      }, 2300)
    }

    function scroll (context) {
      let body = document.body
      // let windowHeight = window.innerHeight
      let scrollValue = body.scrollHeight
      window.scrollTo(0, scrollValue)
    }

    // let listAnswers = JSON.stringify(this.story)
    // window.localStorage.setItem(1, listAnswers)
    // let tested = JSON.parse(window.localStorage.getItem(1))
    // console.log(tested)
    // console.log("tested")
  }

}
