var Mathy = require ("./libMathy.js");

//item 2.  shuffle the deck
function Card(suit,value){
	this.suit = suit
	this.value = value
	}

function Deck(){
	this.SUIT_LIST = [
		"clubs",
		"diamonds",
		"hearts",
		"spades",
		]
	this.VALUE_LIST = [
					"A",
					"2",
					"3",
					"4",
					"5",
					"6",
					"7",
					"8",
					"9",
					"J",
					"Q",
					"K",
		]
	this.card_list = []
	
	this.make = function(){
		//Create each card
		//Add each card to the card_list
		for (var suit_index = 0; suit_index < this.SUIT_LIST.length; suit_index++){
			for (var value_index = 0; value_index < this.VALUE_LIST.length; value_index++){
				var suit = this.SUIT_LIST[suit_index]
				var value = this.VALUE_LIST[value_index]
				var card = new Card(suit,value)
				this.card_list.push(card)
				}
			}
		}
	this.make()
	}

var gameDeck = new Deck()
//console.log(gameDeck)

//console.log(this);

function shuffleDeck(gameDeck)
	{

		console.log("flag 1 " + gameDeck);
		this.gameDeck;
		Mathy.randomizeArrayPositions(gameDeck);
/*
		for (var suitCounter = 0; suitCounter < 4; suitCounter++)
			{
				for (var valueCounter = 0; valueCounter < 12; valueCounter++)
					{
						console.log(gameDeck.suit + gameDeck.value);
					}
			}
*/
		for (var suitCounter = 0; suitCounter < 4; suitCounter++)
			{	
				//console.log(gameDeck[suitCounter]);
				for (var valueCounter = 0; valueCounter < 12; valueCounter++)
					{
						//console.log(gameDeck[suitCounter][valueCounter]);
					}
			}



		return gameDeck;
	}
//@ask joseph why is Mathy.randomizeArrayPositions(gameDeck) not a function?  It is set up in accordance with all the module stuff I pissed around with.  
shuffleDeck(gameDeck);
//console.log("hello " + gameDeck);
Mathy.randomizeArrayPositions(gameDeck);
console.log(gameDeck)
var abc = [1,2,3,4,5,6,7,8,9,0];
//Mathy.randomizeArrayPositions(abc);
console.log(abc);
// @I need a function to convert the game deck into an array.  then I can sort on it. 


/*
		//item 3.  create players
	function player()
		{
			name: "",
			hand: [],
			bet: 0		
		}
	var playerArray = [];

	this.makePlayers = function()
		{	
			
		}

	function dealCards(limit)
		{
			for (dealCounter = 0; dealCounter = players; dealCounter++ )
				{
					
				}
		}
*/



/*
	function deal(){
		for (dealCounter = 0; dealCounter = players; dealCounter++)
			{
				player[dealCounter] = new player;	
				player[dealCounter].name = "Player" + dealCounter;
				//just do a deck.push
//@				player.hand = deckof52[]
				player[dealCounter].bet 
			}
		player[0].name = "Dealer";
		player[1].name = "Human";
		}
	return {
    blackJack: function (players) {
		console.log("there are " + players + " players.");
		gameDeck = this.deckOf52(); //@check this
		this.deal();	
    }
*/





