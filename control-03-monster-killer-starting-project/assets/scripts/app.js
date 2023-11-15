const ATTACK_VALUE = 10;
const STRONG_ATTACK = 17;
const MONSTER_ATTACK = 20;
const HEAL_VALUE = 20;
const MODE_ATTACK = 'ATTACK';
const MODE_STRONG_ATTACK = 'STRONG_ATTACK';
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTAR_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';

const setLife = prompt('Maximum Life: ', '100');

let chosenMaxLife = parseInt(setLife);
let battleLog = [];
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

if(setLife === isNaN && setLife <= 0 ){
    chosenMaxLife = 100;
}

function writeToLog(ev, val, monsterHealth, playerHealth){
    let logEntry = {
        event: ev,
        value: val,
        finalMonsterHelth: monsterHealth,
        finalPlayerHealth: playerHealth

    };

    switch(ev){
        case LOG_EVENT_PLAYER_ATTACK:
            logEntry.target = 'MONSTER'
            battleLog.push(logEntry);
            break;
        case LOG_EVENT_PLAYER_STRONG_ATTACK:
            logEntry.target = 'MONSTER'
            break;
        case LOG_EVENT_MONSTER_ATTACK:
            logEntry.target = 'PLAYER'
            break;
        case LOG_EVENT_PLAYER_HEAL:
            logEntry.target = 'PLAYER'
            break;
        case LOG_EVENT_GAME_OVER:
            logEntry = {
                event: ev,
                value: val,
                finalMonsterHelth: monsterHealth,
                finalPlayerHealth: playerHealth
        
            };
            break;
        default:
            battleLog.push(logEntry);
    }
    
    battleLog.push(logEntry);

}
adjustHealthBars(chosenMaxLife);

function reset(){
    currentMonsterHealth = chosenMaxLife;
    currentPlayerHealth = chosenMaxLife;
    resetGame(chosenMaxLife);    
}

function endRound(){
    const initialPlayerLife = currentPlayerHealth;
    const monsterDamage = dealPlayerDamage(MONSTER_ATTACK);
    currentPlayerHealth -= monsterDamage;
    writeToLog(LOG_EVENT_MONSTER_ATTACK, dealPlayerDamage, currentMonsterHealth, currentPlayerHealth);

    if(currentPlayerHealth <= 0 && hasBonusLife){
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = initialPlayerLife;
        setPlayerHealth(initialPlayerLife)
        alert('SECOND CHANCE!');
    }

    if(currentMonsterHealth <= 0 && currentPlayerHealth > 0){
        alert('YOU WIN!');
        writeToLog(LOG_EVENT_GAME_OVER, 'PLAYER WON', currentMonsterHealth, currentPlayerHealth);
        reset();
    }else if(currentPlayerHealth <= 0 && currentMonsterHealth > 0){
        alert('YOU LOSE!');
        writeToLog(LOG_EVENT_GAME_OVER, 'MONSTER WON', currentMonsterHealth, currentPlayerHealth);

        reset();
    }else if(currentMonsterHealth <= 0 && currentMonsterHealth <= 0){
        alert('DRAW');
        writeToLog(LOG_EVENT_GAME_OVER, 'DRAW', currentMonsterHealth, currentPlayerHealth);

        reset();
    }

}

function monsterAttack(mode){
    //just for praticing ternary operation
    let maxDamage = mode === MODE_ATTACK ? ATTACK_VALUE : STRONG_ATTACK;
    let logEvent;
    if(mode === MODE_ATTACK){
        maxDamage = ATTACK_VALUE;
        logEvent = LOG_EVENT_PLAYER_ATTACK;
    }else if(mode === MODE_STRONG_ATTACK){
        logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;

        maxDamage = STRONG_ATTACK;
    }

    const damage = dealMonsterDamage(STRONG_ATTACK);
    currentMonsterHealth -= damage;
    writeToLog(logEvent, damage, currentMonsterHealth, currentPlayerHealth);

    endRound();
}

function attackHandler(){
    monsterAttack(MODE_ATTACK);
 
}

function strongAttackHandler(){
    monsterAttack(MODE_STRONG_ATTACK);
}
function healPlayerHandler(){
    let healValue;
    if(currentPlayerHealth >= chosenMaxLife - HEAL_VALUE){
        alert("You can't heal more than your max initial health");
        healValue = chosenMaxLife - currentPlayerHealth;
        
    }else{
        healValue = HEAL_VALUE;
    }
    increasePlayerHealth(HEAL_VALUE);
    currentPlayerHealth += HEAL_VALUE;
    writeToLog(LOG_EVENT_PLAYER_HEAL, healValue, currentMonsterHealth, currentPlayerHealth);

    endRound();

}

function printLogHandler(){
    console.log(battleLog);
}
attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', printLogHandler);