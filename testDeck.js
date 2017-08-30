(function () {
    
    function Card (rank, suit) {
        
        this.rank = rank;
        this.suit = suit;
        
    };
    
    function Deck() {
        
        this.deck = new Array();
        
        this.makeDeck = makeDeck;
        this.shuffle = shuffle;
        this.deal = deal;
    }
    function makeDeck() {
        
        var ranks = new Array("A", "2", "3", "4", "5", "6", "7", "8", "9", "10",
                        "J", "Q", "K");
        var suits = new Array("Clubs", "Diamonds", "Hearts", "Spades");
        
        this.deck = new Array(52);
        
        var i, j;
        for (i = 0; i < 4; i++) {
            for (j = 0; j < 13; j++) {
                this.deck[i*ranks.length + j] = new Card(ranks[j], suits[i]);
            }
        }
    };
    
    function shuffle() {
        var i, j, temp;
        var n = 10;
        for (i = 0; i < n; i++) {
            for (j = 0; j < this.deck.length; j++) {
                k = Math.floor(Math.random() * this.deck.length);
                temp = this.deck[j];
                this.deck[j] = this.deck[k];
                this.deck[k] = temp;
            }
        }
    };
    
    function deal() {
        
        if (this.deck.length > 0) {
            return this.deck.shift();
        }
        else return null;
    };
    
    var deck = new Deck();
    
    deck.makeDeck();
    deck.shuffle();
    for (i = 0; i < 2; i++) {
        for (j = 0; j < 4; j++) {
            var Card;
            Card = deck.deal();
            //document.write(JSON.stringify(Card));
        }
    }
        
    
} ());
