import Test from './test';
import * as Scenario from './scenario.json';
import Automation from './automation';

let test = new Test();
const scenario = Scenario

// Instanciates app automation class in charge of handling every app interaction or event
const automation = new Automation(scenario.step1[1].content)
// LaunchApp is the method to execute to start app 
automation.launchApp()

// Console tests
console.log(scenario)
console.log('yes')
