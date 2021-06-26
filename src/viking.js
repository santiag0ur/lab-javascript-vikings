// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return (this.strength);
    }
    receiveDamage(damage){
        this.health = this.health - damage;
    }
}

// Viking
class Viking extends Soldier{
    constructor (name, health, strength){
super (health, strength);
this.name = name;
    }
    receiveDamage(damage){
    this.health = this.health - damage;    
    if (this.health > 0){
    return (`${this.name} has received ${damage} points of damage`);    
    }
    else {
    return (`${this.name} has died in act of combat`);
    }
    }
    battleCry (){
        return ('Odin Owns You All!');
    }
    
}

// Saxon
class Saxon extends Soldier{
attack(){
return (this.strength);
}
receiveDamage(damage){
    this.health = this.health - damage;    
    if (this.health > 0){
    return (`A Saxon has received ${damage} points of damage`);    
    }
    else {
    return (`A Saxon has died in combat`);
    }
}
}

// War
class War {
    constructor(){
this.vikingArmy = [];
this.saxonArmy = [];
    }
    addViking(viking){
    this.vikingArmy.push (viking);    
    }
    addSaxon(saxon){
    this.saxonArmy.push(saxon);
    }
    
    
    vikingAttack(){
        let randomViking = this.vikingArmy[this.vikingArmy.length * Math.random << 0];
        let randomSaxon = this.saxonArmy[this.saxonArmy.length * Math.random << 0];
        randomSaxon.receiveDamage(randomViking.attack());
        for (let i=0; i < this.saxonArmy.length; i++){
            if (this.saxonArmy[i].health < 0){
            saxonArmy.splice(i, i + 1); 
            }
        }
        

    }
    saxonAttack(){
        let randomViking = this.vikingArmy[this.vikingArmy.length * Math.random << 0];
        let randomSaxon = this.saxonArmy[this.saxonArmy.length * Math.random << 0];
        randomViking.receiveDamage(randomSaxon.attack());
        for (let i=0; i < this.vikingArmy.length; i++){
            if (this.vikingArmy[i].health < 0){
            vikingArmy.splice(i, i + 1); 
            }
        }    
    }
    showStatus(){}
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
