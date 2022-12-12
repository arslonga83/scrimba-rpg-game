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
   let diceHtml = '';

   for (let i = 0; i < diceCount; i++) {
      diceHtml += `<div class="dice">${dice[i]}</div>`
   }

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
