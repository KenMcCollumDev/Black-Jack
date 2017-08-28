var blackJackCLIModule = (function(){
	return {
	    newGame: function () 
			{
				console.log("\n\n\n\nAce of Spades Black Jack\n		                  \n           A\n          AAA\n         AAAAA\n       AAAAAAAAA              \n     AAAAAAAAAAAAA\n    AAAAAAAAAAAAAAA    \n   AAAAAAAAAAAAAAAAA    \n   AAAAAAAAAAAAAAAAA  \n    AAAAAAAAAAAAAAA\n      AAAAAAAAAAA        \n        AAAAAAA             \n          AAA \n          AAA            \n         AAAAA             \n        AAAAAAA              \n\n2017-08-26 Ken McCollum                      \n\n\n\n");
		
				var readline = require('readline');
				var readLineInterface = readline.createInterface({
					input: process.stdin,
					output: process.stdout
					}); //close readline
				//interface


				readLineInterface.question("How many players, son?  (Enter a number between 2 and 10 inclusive).   \n >> $        ", function(players) 
					{  
						engineModule.blackJack(players);
					});
		
   			}// closes newGame()
		}// closes return

	})(); //closes module

blackJackCLIModule.newGame();






