import { getDicePlaceholderHtml, getDiceRollArray, getPercentage } from './utils.js'



export default function Character(data) {
  Object.assign(this, data)

  this.diceArray = getDicePlaceholderHtml(this.diceCount);

  this.maxHealth = this.health

  this.getHealthBarHtml = () => {
    const percent = getPercentage(this.health, this.maxHealth)
    return `<div class="health-bar-outer">
              <div class="health-bar-inner ${percent <= 25 ? 'danger' : ''}" 
              style="width: ${percent}%">
              </div>
            </div>`
  }
  
  this.getCharacterHtml = function() {
     const { name, avatar, health, diceArray } = this
     const healthBar = this.getHealthBarHtml()
     return `
        <div class="character-card">
           <h4 class="name"> ${name} </h4>
           <img class="avatar" src="${avatar}"/>
           <p class="health">health: <b> ${health} </b></p>
           ${healthBar}
           <div class="dice-container">${diceArray}</div>
        </div>   
        `
  }

  this.getDiceHtml = function() {
    this.currentDiceScore = getDiceRollArray(this.diceCount)
    this.diceArray = this.currentDiceScore.map(num => {
      return `<div class="dice">${num}</div>`
    }).join('')
  }


  this.takeDamage = function(attackScoreArray) {
    const totalAttackScore = attackScoreArray.reduce((a, b) => a + b)
    this.health -= totalAttackScore
    if (this.health <= 0) {
      this.health = 0;
      this.dead = true;
    }
  }  
}