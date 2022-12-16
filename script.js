import characterData from './data.js'
import Character from './Character.js'

document.getElementById('attack-button').addEventListener('click', attack)

let monstersArray = ["orc", "demon", "goblin"];

const wizard = new Character(characterData.hero)
let monster = getNewMonster()

function getNewMonster() {
   const nextMonsterData = characterData[monstersArray.shift()]
   return nextMonsterData ? new Character(nextMonsterData) : {}
}

function render() {
   document.getElementById('hero').innerHTML = wizard.getCharacterHtml()
   document.getElementById('monster').innerHTML = monster.getCharacterHtml()
}

function attack() {
   wizard.getDiceHtml()
   monster.getDiceHtml()
   wizard.takeDamage(monster.currentDiceScore)
   monster.takeDamage(wizard.currentDiceScore)
   render()
   if (wizard.dead) {
      endGame()
   } else if (monster.dead) {
      if (monstersArray.length > 0) {
         monster = getNewMonster()
         render()
      } else endGame()
   }
}

function endGame() {
   const endMessage = !wizard.dead ? 'The Wizard Wins' 
      : !monster.dead ? 'The Orc is Victorious' 
      : 'No Victors - All Creatures Are Dead'
   const endEmoji = !wizard.dead ? '🔮' : '☠️';
   document.body.innerHTML = `
      <div class="end-game">
         <h2>Game Over</h2>
         <h3>${endMessage}</h3>
         <p class="end-emoji">${endEmoji}</p>
      </div>`
}

render();
