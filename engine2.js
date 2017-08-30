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

function arrangeDeck(gameDeck)
	{
		
	}

function shuffleDeck(gameDeck)
	{
		console.log("helloe shuffle");
		this.gameDeck;
		//Mathy.randomizeArrayPositions(gameDeck);

		for (var suitCounter = 0; suitCounter < 4; suitCounter++)
			{
			//	console.log("gameDeck[suitCounter]", gameDeck[suitCounter]);  // this is undefined
			//	console.log("gameDeck[suitCounter]", gameDeck[suitCounter]);

				for (var valueCounter = 0; valueCounter < 12; valueCounter++)
					{
//NOTE THE CARDS ARE ALL STILL UNDEFINED BY ANY METHOD OF ACCESS.  YET THEY EXIST.
				console.log("gameDeck[suitCounter]", gameDeck[suitCounter][valueCounter].suit.value);	//undefined
					}
			}
/*
		for (var suitCounter = 0; suitCounter < 4; suitCounter++)
			{	
				//console.log(gameDeck[suitCounter]);
				for (var valueCounter = 0; valueCounter < 12; valueCounter++)
					{
						//console.log(gameDeck[suitCounter][valueCounter]);
					}
			}
*/

		return gameDeck;
	}
shuffleDeck(gameDeck);
console.log("shuffleDeck: suitCounter: ", suitCounter, ", valueCounter: ", valueCounter, gameDeck.suit, ", card value: " /*, gameDeck[suitCounter][valueCounter], ", card suit: " , gameDeck[suitCounter][valueCounter].suit, ", card value: ", gameDeck[suitCounter][valueCounter].value*/);
		//console.log("flag 1 ", gameDeck);

