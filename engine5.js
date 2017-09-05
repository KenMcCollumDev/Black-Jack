var Mathy = require ("./libMathy.js");

//item 2.  shuffle the deck
function Card(suit,value)
	{
	this.suit = suit
	this.value = value
	}

function Deck()
	{
		this.SUIT_LIST = 
			[
			"clubs",
			"diamonds",
			"hearts",
			"spades",
			]
		this.VALUE_LIST = 
			[
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
	
		this.make = function()
		{
			//Create each card
			//Add each card to the card_list
			for (var suit_index = 0; suit_index < this.SUIT_LIST.length; suit_index++)
			{
				for (var value_index = 0; value_index < this.VALUE_LIST.length; value_index++)
				{
					var suit = this.SUIT_LIST[suit_index]
					var value = this.VALUE_LIST[value_index]
					var card = new Card(suit,value)
					this.card_list.push(card)
				}
			}
		}
	this.make()
	}

//console.log("hello: ", gameDeck.card_list)  // this works

//console.log(this);
shuffle = function(gameDeck)
{
	var gameDeck = new Deck();
	console.log("I am alive and well");
	Mathy.randomizeArrayPositions(gameDeck.card_list);	//this works too
	//console.log("gameDeck[suitCounter]", gameDeck.card_list);  
	return gameDeck;
}

var ClassPlayer = function() 
	{
    this.name = "";
    this.nealer = false;
    this.human = false;
	this.dealOrder = 0;
    this.hand = 
		{ 
		shownCards: [],  //@check the comma
		hiddenCards: []
		}
	}

var player1 = new ClassPlayer();
console.log("hello player 1" + player1);





shuffle();

