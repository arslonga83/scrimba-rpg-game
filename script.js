function getDiceRollArray(diceCount) {
   return new Array(diceCount).fill(0).map(() => {
      return Math.floor(Math.random() * 6) + 1
   })
}

function getDiceHtml(diceCount) {
   return getDiceRollArray(diceCount).map((num) => {
      return `<div class="dice">${num}</div>`
   }).join('')
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
   this.id = data.id
   this.name = data.name
   this.avatar = data.avatar
   this.health = data.health
   this.diceCount = data.diceCount

   this.getCharacterHtml = function() {
      const { id, name, avatar, health, diceCount } = this
      const diceHtml = getDiceHtml(diceCount)
      document.getElementById(id).innerHTML += `
      <div class="character-card">
         <h4 class="name"> ${name} </h4>
         <img class="avatar" src="${avatar}"/>
         <p class="health">health: <b> ${health} </b></p>
         <div class="dice-container">${diceHtml}</div>
      </div>   
`
   }
}

const wizard = new Character(hero)
const orc = new Character(monster)

wizard.getCharacterHtml()
orc.getCharacterHtml()
