const hero = {
   id: 'hero',
   name: 'Wizard',
   avatar: 'images/wizard.png',
   health: '60',
   dice: '6'
}

const monster = {
   id: 'monster', 
   name: 'Orc',
   avatar: 'images/orc.png',
   health: '10', 
   dice: '4'
}

function renderCharacter(data) {
   const { id, name, avatar, health, dice } = data;
   document.getElementById(id).innerHTML += `
      <div class="character-card">
         <h4 class="name"> ${name} </h4>
         <img class="avatar" src="${avatar}"/>
         <p class="health">health: <b> ${health} </b></p>
         <div class="dice-container"><div class="dice"> ${dice} </div></div>
      </div>   
`
}

renderCharacter(hero)
renderCharacter(monster)
