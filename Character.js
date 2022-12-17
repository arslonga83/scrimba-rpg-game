import { getDicePlaceholderHtml, getDiceRollArray, getPercentage } from './utils.js'

export default class Character {
  constructor(data) {
    Object.assign(this, data)

    this.diceHtml = getDicePlaceholderHtml(this.diceCount);
  
    this.maxHealth = this.health
  }
 

  getHealthBarHtml()  {
    const percent = getPercentage(this.health, this.maxHealth)
    return `<div class="health-bar-outer">
              <div class="health-bar-inner ${percent <= 25 ? 'danger' : ''}" 
              style="width: ${percent}%">
              </div>
            </div>`
  }
  
  getCharacterHtml() {
     const { name, avatar, health, diceHtml } = this
     const healthBar = this.getHealthBarHtml()
     return `
        <div class="character-card">
           <h4 class="name"> ${name} </h4>
           <img class="avatar" src="${avatar}"/>
           <p class="health">health: <b> ${health} </b></p>
           ${healthBar}
           <div class="dice-container">${diceHtml}</div>
        </div>   
        `
  }

  setDiceHtml() {
    this.currentDiceScore = getDiceRollArray(this.diceCount)
    this.diceHtml = this.currentDiceScore.map(num => {
      return `<div class="dice">${num}</div>`
    }).join('')
  }

  takeDamage(attackScoreArray) {
    const totalAttackScore = attackScoreArray.reduce((a, b) => a + b)
    this.health -= totalAttackScore
    if (this.health <= 0) {
      this.health = 0;
      this.dead = true;
    }
  }  
}