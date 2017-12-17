export default class Automation {
  constructor(story) {
    this.story = story
  }

  launchApp() {
    // Get app element to append messages in scenario
    const content = document.querySelector('.device__content')

    // Create generic App message element
    
    // let appMessage = document.createElement('div')
    // let textnode = `${this.story}.step${key}[${i}].content}`

    // On page load roam scenario
    window.onload = () =>
    {
      console.log(`content loaded`)
      
      // Display messages in scenario
      for(const key in this.story)
      {
        if(this.story[key].content) {
          let x = this.story[key].content
          console.log(`${x} yeah baby`)
        }
      }
    }
  }
}