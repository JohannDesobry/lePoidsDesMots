export default class Automation {
  constructor(story) {
    this.story = story
  }

  launchApp() {
    console.log(`${this.story} app launched my dear`)

    // Get app element to append messages in scenario
    const content = document.querySelector('.device__content')

    // Create generic App message element
    let i = 0
    // let appMessage = document.createElement('div')
    // let textnode = `${this.story}.step${key}[${i}].content}`

    // On page load roam scenario
    window.onload = () =>
    {
      console.log(`content loaded`)
      
      // Display messages in scenario
      for(const key in story)
      {
        console.log(bar)
        // for(let i = 0; i < story.stepkey.length; i++)
        // {
        //   console.log(bar)
        // }
        //(scenario.step1[1].content)
        //content.appendChild
      }
    }
  }
}