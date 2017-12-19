// const answerContainer = document.querySelector('.device__answers'),
const answers = document.querySelectorAll('.device__answers div')
//   lastPost        = document.querySelector('.post:last-child')
const test = document.querySelector('.device__answersText')

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
        div.appendChild(p)
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


      // Displays a choices beetween multiple messages to append them on click in device
      else if ( this.story[this.i][this.j].choices ) {

        displayAnswers()

        console.log(`I am the first`)
        // Stop messages displaying
        this.playState = "pause"

        let textAnswers = document.querySelector('.device__answersText')
        let x = this.story[this.i][this.j].choices
        console.log(x)
        //let index = 0

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
          
          // // Get target of message to display on click
          // let target = this.story[this.i][this.j].target

          // let callback = 'waw'
          // console.log(callback)
          // callback.addEventListener('click', () => {
          //   console.log('change chapter')
          //   // this.i += 1
          //   // this.displayAppMessages(0)
          // })
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
            console.log(currentChapter)
            console.log(currentMessage)

            // Stock current context
            let _this = this
            

            //displayAnswers()
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
              _this.displayAppMessages(a,b)
            }, 2000)

          })
        }
      }

        // let answers = document.querySelectorAll('.device__answersBar')
        // console.log(answers)

        // for (let i = 0; i < answers.length; i++) {
        //   let callback = answers[i]
        //   callback.addEventListener('click', () => {
        //     console.log('change chapter')
        //     // this.i += 1
        //     // this.displayAppMessages(0)
        //   })
        // }

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

      // Stock context
      let _this = this

      // Re-execute display function after a determined delay to display next app message
      if ( this.playState == "play" ) {
        setTimeout(function() {
          _this.displayAppMessages(_this.nextChapter,_this.nextMessage)
        }, 1000)
        //console.log(`j: ${this.j}`)
      }


      // else if ( j = chapterLength ) {
      //   this.i+=1
      //   console.log(this.i++)
      //   // setInterval(function() {
      //   //   _this.displayAppMessages(j=0)
      //   // }, 1500)
      //   this.displayAppMessages(j=0)
      // }
      //this.displayAppMessages(j+=1)
    

    function scroll (context) {
      let body = document.body
      let scrollValue = body.scrollHeight
      window.scrollTo(0, scrollValue)
      console.log(`scrolling : ${scrollValue}`)
    }

  }

  // launchApp() {
  //   // Get app element to append messages in scenario
  //   const deviceContent = document.querySelector('.device__content')

  //   // Length of the Json file
  //   const storyLength = Object.keys(this.story).length
  //   console.log(`${this.chapters} taille JSon`)

  //   // On page load roam scenario
  //   window.onload = () => { 
  //     // Display messages in scenario

  //     // Stock current element
  //     let _this = this
  //     let step = 0
      
      // setInterval(function(step) {
      //   if(_this.story[_this.i].category == "Tom") {
      //     let x = _this.story[step][_this.i].content
      //     console.log(`${x} yeah baby`)
      //     let a = document.createElement("DIV")
      //     a.classList.add('device__contentAppMessage')
      //     let b = document.createElement("P")
      //     let c = document.createTextNode(_this.story[_this.i].content)
      //     b.appendChild(c)
      //     a.appendChild(b)
      //     content.appendChild(a) 
      //     _this.i+=1
      //   }
  //       else if (_this.story[_this.i].category == "answer") {
  //         let x = _this.story[_this.i].content
  //         console.log(`${x} yeah baby`)
  //         let a = document.createElement("DIV")
  //         a.classList.add('device__contentAnswerMessage')
  //         let b = document.createElement("P")
  //         let c = document.createTextNode(_this.story[_this.i].content)
  //         b.appendChild(c)
  //         a.appendChild(b)
  //         content.appendChild(a) 
  //         _this.i+=1
  //       }
  //     }, 1500)
  //   }
  //
}