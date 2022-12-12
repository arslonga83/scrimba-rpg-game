const hero = {
   id: 'hero',
   name: 'Wizard',
   avatar: 'images/wizard.png',
   health: 60,
   dice: [3, 1, 4],
   diceCount: 3
}

const monster = {
   id: 'monster', 
   name: 'Orc',
   avatar: 'images/orc.png',
   health: 10, 
   dice: [2],
   diceCount: 1
}

function renderCharacter(data) {
   const { id, name, avatar, health, dice, diceCount } = data;
  
   const diceHtml = dice.map((die) => {
      return `<div class="dice">${die}</div>`
   }).join('')

   document.getElementById(id).innerHTML += `
      <div class="character-card">
         <h4 class="name"> ${name} </h4>
         <img class="avatar" src="${avatar}"/>
         <p class="health">health: <b> ${health} </b></p>
         <div class="dice-container">${diceHtml}</div>
      </div>   
`
}

renderCharacter(hero)
renderCharacter(monster)
