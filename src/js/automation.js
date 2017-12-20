// const answerContainer = document.querySelector('.device__answers'),
const answers = document.querySelectorAll('.device__answers div')
//   lastPost        = document.querySelector('.post:last-child')
const test = document.querySelector('.device__answersText')
var contentAppImage = document.querySelectorAll('.device__contentAppImage')
const emojis = document.querySelector('.device__answersEmoji')
const textSection = document.querySelector('.device__answersText'),
       gifSection = document.querySelector('.device__answersGif'),
     emojiSection = document.querySelector('.device__answersEmoji')

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
  console.log('wait')

  setTimeout(function() {
    wrapper.parentNode.removeChild(wrapper);
  }, 500)
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
          console.log(`current message : ${messageContent}`)

          // Creates the element to append in device__content
          let div = document.createElement("DIV")
          div.classList.add('device__contentAppMessage')
          div.classList.add('post')
          let p = document.createElement("P")
          let text = document.createTextNode(messageContent)
          p.appendChild(text)
          let hour = document.createElement("DIV")
          let time = document.createTextNode(this.story[this.i][this.j].date.hour)
          hour.appendChild(time)
          hour.classList.add('hour')
          div.appendChild(p)
          div.appendChild(hour)

          let _this = this

          setTimeout(function() {

            _this.deviceContent.appendChild(div)

            // Scroll window to see last messages if they're hidden
            scroll()

          }, 2005)

          // Set the next message id
          this.nextMessage = (this.j +=1)

        }

        // App message > GIF
        else if ( this.story[this.i][this.j].type == 'gif' ) {
          console.log(`type : gif`)

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

          let _this = this
          
          setTimeout(function() {

            _this.deviceContent.appendChild(div)

            // Scroll window to see last messages if they're hidden
            scroll()

          }, 2005)

          // Set the next message id
          this.nextMessage = (this.j +=1)

        }

        // App message > EMOJI
        else if ( this.story[this.i][this.j].type == 'emoji' ) {
          console.log(`type : emoji`)

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

          }, 2005)

          // Set the next message id
          this.nextMessage = (this.j +=1)

        }
      }


      // // Displays an automatic message
      // else if ( this.story[this.i][this.j].category == 'autoAnswer' ) {

      //   // Stop messages displaying
      //   this.playState = "pause"

      //   console.log("auto")
      //   //document.querySelector('.device__contentTypeAnswerWrapper').classList.remove('displayNone')

      //   // Stock current context
      //   let _this = this
        
      //   // Get element to append message in it
      //   //let p = document.querySelector('.device__contentTypeAnswerWrapper--messageArea')

      //   // Get the current message to display
      //   let messageContent = this.story[this.i][this.j].content

      //   // Create text node and append it in device
      //   let text = document.createTextNode(messageContent)
      //   p.appendChild(text)

      //   // Stock send button
      //   let button = document.querySelector('.device__answersTextInput')

      //   button.addEventListener('click', () => {
      //     removeAnswers()
      //     // Creates the element to append in device__content
      //     let div = document.createElement("DIV")
      //     div.classList.add('device__contentAnswerMessage')
      //     let p = document.createElement("P")
      //     let text = document.createTextNode(messageContent)
      //     p.appendChild(text)
      //     div.appendChild(p)
      //     this.deviceContent.appendChild(div)

      //     let deleteType = document.querySelector('.device__contentTypeAnswerWrapper--messageArea')
      //     deleteType.innerHTML = ""
      //     document.querySelector('.device__contentTypeAnswerWrapper').classList.add('displayNone')
      //     this.playState = "play"
      //     setTimeout(function() {
      //       _this.displayAppMessages(_this.j+=1)
      //     }, 2000)

      //   })

      //   // Scroll window to see last messages if they're hidden
      //   scroll()
      // }


      // Displays choices beetween multiple messages to append them on click in device
      else if ( this.story[this.i][this.j].choices && this.story[this.i][this.j].category == "answer" && this.story[this.i][this.j].type == "text" ) {
      
        displayAnswers()

        console.log(`I am the first`)
        // Stop messages displaying
        this.playState = "pause"

        let textAnswers = document.querySelector('.device__answersText')
        let x = this.story[this.i][this.j].choices
        console.log(x)

        for( let i = 0 ; i < x ; i++ ){
          console.log(`this is choice : ${i}`)
          let div = document.createElement("DIV")
          div.classList.add('device__answersTextInput')
          let p = document.createElement("P")
          let text = document.createTextNode(this.story[this.i][this.j+i].content)
          p.appendChild(text)
          div.appendChild(p)
          let arrow = document.createElement("DIV")
          arrow.classList.add('icon-right-arrow')
          div.appendChild(arrow)
          console.log(div)

          // Stock chapter and/or next message to recuperate in callback
          this.nextChapter = this.story[this.i][this.j+i].chapterTarget
          this.nextMessage = this.story[this.i][this.j+i].messageTarget
          
          textAnswers.appendChild(div)

          let _this = this
          let a = this.nextChapter
          let b = this.nextMessage
          let currentChapter = this.i
          let currentMessage = this.j+i
          div.addEventListener('click', () => {
            console.log('change chapter')
            console.log(a)
            console.log(b)
            //console.log(currentChapter)
            //console.log(currentMessage)

            // Stock current context
            let _this = this

            // Creates the element to append in device__content
            let container = document.createElement("DIV")
            container.classList.add('device__contentRight')
            container.classList.add('post')
            let message = document.createElement("DIV")
            message.classList.add('device__contentAnswerMessage')
            let p = document.createElement("P")
            let text = document.createTextNode(_this.story[currentChapter][currentMessage].content)
            let hour = document.createElement("DIV")
            let time = document.createTextNode(this.story[this.i][this.j].date.hour)
            message.appendChild(hour)
            hour.appendChild(time)
            hour.classList.add('hour')
            p.appendChild(text)
            message.appendChild(p)
            container.appendChild(message)
            
            this.deviceContent.appendChild(container)

            removeAnswers()
            this.playState = "play"
            setTimeout(function() {
              _this.i = a
              _this.j = b
              _this.displayAppMessages(a,b)
              console.log(`next message : ${a}-${b}`)
            }, 2000)

          })
        }
      }


      // Displays smileys answer
      else if ( this.story[this.i][this.j].type == "smiley" && this.story[this.i][this.j].category == "answer" ) {
        console.log(`this is a smiley`)
        this.playState = "pause"
        console.log(this.playState)
        let smileyAnswers = document.querySelector('.device__answersEmoji')
        let x = this.story[this.i][this.j].choices

        displayAnswersEmoji()

        if( this.story[this.i][this.j].choices == 3 ) {
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
  
            let _this = this
            let a = this.nextChapter
            let b = this.nextMessage
            let currentChapter = this.i
            let currentMessage = this.j+i
            div.addEventListener('click', () => {
              console.log('change chapter')
              console.log(a)
              console.log(b)
              //console.log(currentChapter)
              //console.log(currentMessage)
  
              // Stock current context
              let _this = this
  
              // Creates the element to append in device__content
              let container = document.createElement("DIV")
              container.classList.add('device__contentRight')
              container.classList.add('post')
              let message = document.createElement("DIV")
              message.classList.add('device__contentAnswerMessage')
              let img = document.createElement("IMG")
              img.src = this.story[this.i][this.j+i].src
              let hour = document.createElement("DIV")
              let time = document.createTextNode(this.story[this.i][this.j].date.hour)
              message.appendChild(hour)
              hour.appendChild(time)
              hour.classList.add('hour')
              message.appendChild(img)
              container.appendChild(message)
              this.deviceContent.appendChild(container)
              

              // displayAnswersEmoji()
              removeEmojis()
              scroll()
  
              _this.playState = "play"
              console.log(_this.playState)
              // setTimeout(function() {
              //   _this.i = a
              //   _this.j = b
              //   _this.displayAppMessages(a,b)
              //   console.log(`next message : ${a}-${b}`)
              // }, 2000)
  
            })
          }
        }
      }


      // Displays GIF answer
      else if ( this.story[this.i][this.j].type == "gif" && this.story[this.i][this.j].category == "answer" ) {
        console.log(`this is a GIF`)
        this.playState = "pause"
        console.log(this.playState)
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
              console.log('change chapter')
              console.log(a)
              console.log(b)
              //console.log(currentChapter)
              //console.log(currentMessage)
  
              // Stock current context
              let _this = this
  
              // Creates the element to append in device__content
              let message = document.createElement("DIV")
              message.classList.add('device__contentAnswerImage')
              message.classList.add('post')
              let img = document.createElement("IMG")
              img.src = this.story[this.i][this.j+i].src
              let hour = document.createElement("DIV")
              let time = document.createTextNode(this.story[this.i][this.j].date.hour)
              message.appendChild(hour)
              hour.appendChild(time)
              hour.classList.add('hour')
              message.appendChild(img)
              let overlay = document.createElement("DIV")
              overlay.classList.add('overlay')
    
              let full = document.createElement("P")
    
              let icon = document.createElement("DIV")
              icon.classList.add('icon-close')
              message.appendChild(overlay)
              message.appendChild(full)
              message.appendChild(icon)

              this.deviceContent.appendChild(message)

              // displayAnswersEmoji()
              displayAnswersGif()
              removeGif()
              scroll()
  
              _this.playState = "pause"
              console.log(_this.playState)
              // setTimeout(function() {
              //   _this.i = a
              //   _this.j = b
              //   _this.displayAppMessages(a,b)
              //   console.log(`next message : ${a}-${b}`)
              // }, 2000)
  
            })
          }
        }
      }

      else {
        console.log("fini")
        let _this = this
        console.log(_this)
        this.i++
        setTimeout(function() {
          _this.displayAppMessages(_this.j=0)
        }, 1500)
      }
    }

    // Re-execute display function after a determined delay to display next app message
    if ( this.playState == "play" ) {
      // Stock context
      let _this = this

      setTimeout(function() {
        _this.displayAppMessages(_this.nextChapter,_this.nextMessage)
        _this.i = _this.nextChapter
        _this.j = _this.nextMessage
        console.log( `smiley ; ${_this.nextChapter}` )
        console.log(_this.j)
      }, 1000)
    }

    function scroll (context) {
      let body = document.body
      // let windowHeight = window.innerHeight
      let scrollValue = body.scrollHeight
      window.scrollTo(0, scrollValue)
    }
  }

}
