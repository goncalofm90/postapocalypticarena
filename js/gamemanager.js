let gameManager = {
    setGameStart: function(playerType){
        this.resetPlayer(playerType);
        this.setPreFight();
    },
    // CREATE PLAYER STATS
    resetPlayer: function(playerType){
        switch (playerType) {
            case "Jacob":
                player = new Player(playerType, 1000, 5, 9, 6, 5, 5);
                break;
            case "Tyler":
                player = new Player(playerType, 800, 6, 7, 5, 7, 6);
                break;
            case "Alexander":
                player = new Player(playerType, 750, 10, 5, 7, 7, 6);
                break;
            case "Helen":
                player = new Player(playerType, 700, 8, 5, 5, 5, 10);
                break;
            case "Iris":
                player = new Player(playerType, 700, 7, 6, 6, 7, 6);
                break;
        }
        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML = '<img src="./images/' + playerType.toLowerCase() + '.jpg" class="img-avatar"><div><h3>' + playerType + '</h3><p class="health-player">Health:' + player.health + '</p><p>Ability Points:' + player.abilityPoints + '</p><p>Strength:' + player.strength + '</p><p>Agility:' + player.agility + '</p><p>Dexterity:' + player.dexterity + '</p><p>Accuracy:' + player.accuracy + '</p></div>';
    },
    setPreFight: function(){
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getArena = document.querySelector(".arena");
        getHeader.innerHTML = '<p>Task: Explore the New Land</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="gameManager.setFight()">Explore</a>';
        getArena.style.visibility = "visible";
    },
    setFight: function(){
         let getHeader = document.querySelector(".header");
         let getActions = document.querySelector(".actions");
         let getEnemy = document.querySelector(".enemy");
         //Create enemy
         let enemy00 = new Enemy("Hellspawn", 800, 5, 5,7,4,2);
         let enemy01 = new Enemy("Seahorror", 500, 2, 3,2,1,3);
         let enemy02 = new Enemy("Spiderking", 1200, 6, 6, 5,5,5);
         let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(3));
         switch (chooseRandomEnemy) {
             case 0:
                 enemy = enemy00;
                 break;
             case 1:
                 enemy = enemy01;
                 break;
             case 2:
                 enemy = enemy02;
                 break;  
         }
         //PLAYER ACTIONS
         getHeader.innerHTML = '<p>You have encountered an enemy!</p>';
         getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="playerMoves.calcAttack()">Attack</a>';
         getEnemy.innerHTML = '<img src="./images/' + enemy.enemyType.toLowerCase() + '.jpg" class="img-avatar"><div><h3>' + enemy.enemyType + '</h3><p class="health-enemy">Health:' + enemy.health + '</p><p>Ability Points:' + enemy.abilityPoints + '</p><p>Strength:' + enemy.strength + '</p><p>Agility:' + enemy.agility + '</p><p>Dexterity:' + enemy.dexterity + '</p><p>Accuracy:' + enemy.accuracy + '</p></div>';
    }
}