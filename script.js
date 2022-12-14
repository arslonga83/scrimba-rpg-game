function getDiceRollArray(diceCount) {
   return new Array(diceCount).fill(0).map(() => {
      return Math.floor(Math.random() * 6) + 1
   })
}

const hero = {
   id: 'hero',
   name: 'Wizard',
   avatar: 'images/wizard.png',
   health: 60,
   diceCount: 3
}

const monster = {
   id: 'monster', 
   name: 'Orc',
   avatar: 'images/orc.png',
   health: 10, 
   diceCount: 1
}

function Character(data) {
   Object.assign(this, data)

   this.getCharacterHtml = function() {
      const { id, name, avatar, health, diceCount } = this
      const diceHtml = this.getDiceHtml(diceCount)
      return `
         <div class="character-card">
            <h4 class="name"> ${name} </h4>
            <img class="avatar" src="${avatar}"/>
            <p class="health">health: <b> ${health} </b></p>
            <div class="dice-container">${diceHtml}</div>
         </div>   
         `
   }

   this.getDiceHtml = function(diceCount) {
      return getDiceRollArray(diceCount).map((num) => {
         return `<div class="dice">${num}</div>`
      }).join('')
   }
}

const wizard = new Character(hero)
const orc = new Character(monster)

function render() {
   document.getElementById(wizard.id).innerHTML = wizard.getCharacterHtml()
   document.getElementById(orc.id).innerHTML = orc.getCharacterHtml()
}

render();
