const ATTACK_VALUE = 10;
const STRONG_ATTACK = 17;
const MONSTER_ATTACK = 14;
const HEAL_VALUE = 20;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function endRound(){
    const monsterDamage = dealPlayerDamage(MONSTER_ATTACK);
    currentPlayerHealth -= monsterDamage;


    if(currentMonsterHealth <= 0 && currentPlayerHealth > 0){
        alert('MONSTER FUCKING DIED')
    }else if(currentPlayerHealth <= 0 && currentMonsterHealth > 0){
        alert('YOU FREAKING DIED')
    }else if(currentMonsterHealth <= 0 && currentMonsterHealth <= 0){
        alert('DRAW')
    }
}

function monsterAttack(mode){
    let maxDamage;
    if(mode === 'ATTACK'){
        maxDamage = ATTACK_VALUE;
    }else if(mode === 'STRONG_ATTACK'){
        maxDamage = STRONG_ATTACK;
    }

    const damage = dealMonsterDamage(STRONG_ATTACK);
    currentMonsterHealth -= damage;
    endRound();
}

function attackHandler(){
    monsterAttack('ATTACK');
 
}

function strongAttackHandler(){

    monsterAttack('STRONG_ATTACK');
}
function healPlayerHandler(){
    let healValue;
    if(currentPlayerHealth >= chosenMaxLife - HEAL_VALUE){
        alert("You can't heal more than your max initial health");
        healValue = chosenMaxLife - currentPlayerHealth;
    }
    increasePlayerHealth(HEAL_VALUE);
    currentPlayerHealth += HEAL_VALUE;
    endRound();

}


attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);