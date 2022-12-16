import { getDicePlaceholderHtml, getDiceRollArray, getPercentage } from './utils.js'

export default function Character(data) {
  Object.assign(this, data)

  this.diceArray = getDicePlaceholderHtml(this.diceCount);

  this.maxHealth = this.health
  
  this.getCharacterHtml = function() {
     const { id, name, avatar, health, diceCount, diceArray } = this
     const diceHtml = this.getDiceHtml(diceCount)
     return `
        <div class="character-card">
           <h4 class="name"> ${name} </h4>
           <img class="avatar" src="${avatar}"/>
           <p class="health">health: <b> ${health} </b></p>
           <div class="dice-container">${diceArray}</div>
        </div>   
        `
  }

  this.getDiceHtml = function(diceCount) {
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
    console.log(this.name, getPercentage(this.health, this.maxHealth))
  }  
}