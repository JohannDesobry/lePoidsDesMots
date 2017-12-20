import Test from './test';
import * as Scenario from './scenario.json';
import Automation from './automation';
import Answers from './answers';
import Settings from './settings';
import ImageFullScreen from './imgFullScreen';


let test = new Test();
const scenario = Scenario

// Instanciates app automation class in charge of handling every app interaction or event
const automation = new Automation(scenario,0,0,0,0,0,0)
// LaunchApp is the method to execute to start app 
//automation.launchApp()
automation.displayAppMessages(0,0)

// Console tests
