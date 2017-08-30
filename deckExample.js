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
		"1",
		"2",
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

var deck = new Deck()
console.log(deck)



		function Card(suit,value)
		{
			this.suit = suit
			this.value = value
		}
		function deckOf52()
			{
				this.SUIT_LIST = [
					"clubs",
					"diamonds",
					"hearts",
					"spades",
					];
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
					];
				this.cardList = [];

				this.makeDeck = function()
					{
						//Create each card
						//Add each card to the cardList
						for (var suitCounter = 0; suitCounter < this.SUIT_LIST.length; suitCounter++)
							{
								for (var valueCounter = 0; valueCounter < this.VALUE_LIST.length; valueCounter++)
									{
										var suit = this.SUIT_LIST[suitCounter];
										var value = this.VALUE_LIST[valueCounter];
										var card = new Card(suit,value);
										this.cardList.push(card);
									}
							}
					}
		deck = this.makeDeck(); console.log("made deck");
		return deck;

gameEngine.makeDeck();
