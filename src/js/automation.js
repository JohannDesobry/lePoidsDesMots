// const answerContainer = document.querySelector('.device__answers'),
const answers = document.querySelectorAll('.device__answers div')
//   lastPost        = document.querySelector('.post:last-child')
const test = document.querySelector('.device__answersText')
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

      // if app supposed to send another message execute display function again with delay
      if ( this.story[this.i][this.j].category == 'app' ) {

        // Stock the current chapter length
        //let chapterLength = Object.keys(this.story[this.i]).length
        //console.log(`${chapterLength} taille current table`)

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
        this.deviceContent.appendChild(div)

        // Set the next message id
        this.nextMessage = (this.j +=1)

        // Scroll window to see last messages if they're hidden
        scroll()
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
            let message = document.createElement("DIV")
            message.classList.add('device__contentAnswerMessage')
            let p = document.createElement("P")
            let text = document.createTextNode(_this.story[currentChapter][currentMessage].content)
            p.appendChild(text)
            message.appendChild(p)
            this.deviceContent.appendChild(message)

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
              let message = document.createElement("DIV")
              message.classList.add('device__contentAnswerMessage')
              let img = document.createElement("IMG")
              img.src = this.story[this.i][this.j+i].src
              message.appendChild(img)
              this.deviceContent.appendChild(message)

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
              message.classList.add('device__contentAnswerMessage')
              let img = document.createElement("IMG")
              img.src = this.story[this.i][this.j+i].src
              message.appendChild(img)
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
      let scrollValue = body.scrollHeight
      window.scrollTo(0, scrollValue)
      console.log(`scrolling : ${scrollValue}`)
    }
  }

}
