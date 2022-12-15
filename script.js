import characterData from './data.js'
import Character from './Character.js'

document.getElementById('attack-button').addEventListener('click', attack)

const wizard = new Character(characterData.hero)
const orc = new Character(characterData.monster)

function render() {
   document.getElementById('hero').innerHTML = wizard.getCharacterHtml()
   document.getElementById('monster').innerHTML = orc.getCharacterHtml()
}

function attack() {
   wizard.takeDamage(orc.currentDiceScore)
   orc.takeDamage(wizard.currentDiceScore)
   // wizard.getDiceHtml() //he adds these lines in the recording but i don't think they are necessary? 
   // orc.getDiceHtml()
  render()
}

render();
