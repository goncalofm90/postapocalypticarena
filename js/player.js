let player;

function Player(playerType, health, abilityPoints, strength, agility, dexterity, accuracy){
    this.playerType  = playerType; 
    this.health = health;
    this.abilityPoints = abilityPoints;
    this.strength = strength;
    this.agility = agility;
    this.dexterity = dexterity;
    this.accuracy = accuracy;
};

let playerMoves = {
    calcAttack: function(){
        //DETERMINE WHO ATTACKS FIRST
        let getPlayerAgility = player.agility;
        let getEnemyAgility = enemy.agility;
           //PLAYER ATTACK
           let playerAttack = function () {
               let calcBaseDamage;
               if (player.abilityPoints > 0) {
                   calcBaseDamage = player.strength * player.abilityPoints;
               } else {
                   calcBaseDamage = player.strength * player.agility;
               }
               let offsetDamage = Math.floor(Math.random() * Math.floor(10));
               let calcOutputDamage = calcBaseDamage + offsetDamage;
               //Number of Hits
               let numberOfHits = Math.floor(Math.random() * Math.floor(player.accuracy)) + 1;
               let attackValues = [calcOutputDamage, numberOfHits];
               return attackValues;
           }

           //ENEMY ATTACK
           let enemyAttack = function () {
               let calcBaseDamage;
               if (enemy.abilityPoints > 0) {
                   calcBaseDamage = enemy.strength * enemy.abilityPoints;
               } else {
                   calcBaseDamage = enemy.strength * enemy.agility;
               }
               let offsetDamage = Math.floor(Math.random() * Math.floor(10));
               let calcOutputDamage = calcBaseDamage + offsetDamage;
               //Number of Hits
               let numberOfHits = Math.floor(Math.random() * Math.floor(enemy.accuracy)) + 1;
               let attackValues = [calcOutputDamage, numberOfHits];
               return attackValues;
           }
           //GET PLAYER AND ENEMY HEALTH 
           let getPlayerHealth = document.querySelector(".health-player");
           let getEnemyHealth = document.querySelector(".health-enemy");
           //INITIATE ATTACKS
           if (getPlayerAgility >= getEnemyAgility) {
               let playerAttackValues = playerAttack();
               let totalDamage = playerAttackValues[0] * playerAttackValues[1];
               enemy.health = enemy.health - totalDamage;
               alert("You hit " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times");
               if (enemy.health <= 0) {
                   alert("You have survived for now.Refresh the browser to keep exploring the New Land, wanderer.")
                   getPlayerHealth.innerHTML = "Health: " + player.health;
                   getEnemyHealth.innerHTML = "Health: 0";
               } else {
                   getEnemyHealth.innerHTML = "Health: " + enemy.health;
                   //ENEMY ATTACKS
                   let enemyAttackValues = enemyAttack();
                   let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
                   player.health = player.health - totalDamage;
                   alert("The monster hit " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times");
                   if (player.health <= 0) {
                       alert("You have been consumed by the dangers of the New Land Wanderer, refresh the browser to explore again.")
                       getPlayerHealth.innerHTML = "Health: 0";
                       getEnemyHealth.innerHTML = "Health: " + enemy.health;
                   } else {
                       getPlayerHealth.innerHTML = "Health: " + player.health;

                   }
               }
           }else if (getEnemyAgility >= getPlayerAgility) {
               let enemyAttackValues = enemyAttack();
               let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
               player.health = player.health - totalDamage;
               alert("The monster hit " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times");
               if (player.health <= 0) {
                   alert("You have been consumed by the dangers of the New Land Wanderer, refresh the browser to explore again.")
                   getEnemyHealth.innerHTML = "Health: " + enemy.health;
                   getPlayerHealth.innerHTML = "Health: 0";
               } else {
                   getPlayerHealth.innerHTML = "Health: " + player.health;
                   //PLAYER ATTACKS
                   let playerAttackValues = playerAttack();
                   let totalDamage = playerAttackValues[0] * enemyAttackValues[1];
                   enemy.health = enemy.health - totalDamage;
                   alert("You hit " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times");
                   if (enemy.health <= 0) {
                       alert("You have survived for now.Refresh the browser to keep exploring the New Land, wanderer.")
                       getEnemyHealth.innerHTML = "Health: 0";
                       getPlayerHealth.innerHTML = "Health: " + player.health;
                   } else {
                       getEnemyHealth.innerHTML = "Health: " + enemy.health;

                   }
               }
           }
    }
}
 
    
     
