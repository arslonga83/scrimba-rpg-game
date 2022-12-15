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
   render()
   if (wizard.dead || orc.dead) {
      endGame()
   }
}

function endGame() {
   const endMessage = !wizard.dead ? 'The Wizard Wins' 
      : !orc.dead ? 'The Orc is Victorious' 
      : 'No Victors - All Creatures Are Dead'
   console.log(endMessage)
}

render();
