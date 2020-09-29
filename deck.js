//Deck.js
class Card {
    constructor(rank, suit) {
        this.rank = rank;
        this.suit = suit;
    }
    getRank() {
        return this.rank;
    }
    getSuit() {
        return this.suit;
    }
}
class CardCollection {
    constructor(label) {
        this.label = label;
        this.cards = []; 
    }
    getLabel() {
        return this.label;
    }
    addCard(card) {
        this.cards.push(card);
    }
    popCard() {
        return this.cards.pop();
    }
    popCard2() {
        let card = this.cards.pop();
        return card;
    }
    getCard(i) {
        return this.cards[i];
    }
    empty() {
        return this.cards.length === 0;
    }
    last() {
        let i = this.cards.length;
        return this.cards[i];
    }
    deal(that, n) {
        for (let i = 0; i < n; i++) {
            let card = this.cards.pop();
            that.addCard(card);
        }
    }
    dealAll(that) {
        let n = this.cards.length;
        this.deal(that, n);
    }
}

class Deck extends CardCollection {

    constructor(label) {
        super(label);
        const suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
        const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

        for (let suit in suits) {
            for (let value in values) {
                this.cards.push(new Card(values[value], suits[suit]));
           }
        }

    }
    
    shuffle() {
        const cards = this.cards;
        let m = cards.length, i;
      
        while (m) {
          i = Math.floor(Math.random() * m--);
      
          [cards[m], cards[i]] = [cards[i], cards[m]];
        }
      
        return this;
      }
}

class Hand extends CardCollection {

    constructor(label) {
        super(label);
    }

    display() {
        for (let i = 0; i < this.cards.length; i++) {
            console.log(this.cards[i]);
        }
        console.log();
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.hand = new Hand(name);
    }
    getName() {
        return this.name;
    }
    getHand() {
        return this.hand;
    }
    play(eights, prev) {
        let card = this.searchForMatch(prev);
        if (card === null) {
            card = this.drawForMatch(eights, prev);
        }
        return card;
    }
    
    searchForMatch(prev) {
        for (let i = 0; i < this.hand.length; i++) {
            let card = this.hand.getCard(i);
                if (this.cardMatches(card, prev)) {
                    return this.hand.popCard2();
               }
        }
        return null;
    }
    drawForMatch(eights, prev) {
        while (true) {
            let card = eights.draw();
            console.log(this.name + " draws " + card);
            if (this.cardMatches(card, prev)) {
                return card;
            }
            this.hand.addCard(card);
        }
    }
    
    static cardMatches(card1, card2) {
        if (card1.getSuit() == card2.getSuit()) {
            return true;
        }
        if (card1.getRank() == card2.getRank()) {
            return true;
        }
        if (card1.getRank() == 8) {
            return true;
        }
        return false;
    }
    
    score() {
        let sum = 0;
        for (let i = 0; i < this.hand.size(); i++) {
            let card = this.hand.getCard(i);
            let rank = card.getRank();
            if (rank == 8) {
                sum -= 20;
            } else if (rank > 10) {
                sum -= 10;
            } else {
                sum -= rank;
            }
        }
        return sum;
    }
    display() {
        this.hand.display();
    }
    displayScore() {
        console.log(this.name + " has " + this.score() + " points ");
    }
}
class Eights {
    constructor() {
         this.deck = new Deck("Deck");
         this.deck.shuffle();
         let handSize = 5;

         this.one = new Player("Allen");
         this.deck.deal(one.hand, handSize);

         this.two = new Player("Chris");
         this.deck.deal(two.hand, handSize);

         this.discardPile = new Hand("Discards");
         this.deck.deal(discardPile, 1);

         this.drawPile = new Hand("Draw pile");
         this.deck.dealAll(drawPile);

    }

    isDone() {
        return this.one.getHand().empty() || this.two.hand.empty();
    }
    
    reshuffle() {
        let prev = this.discardPile.popCard();
        this.discardPile.dealAll(drawPile);
        this.discardPile.addCard(prev);
        this.drawPile.shuffle();
    }
    draw() {
        if (this.drawPile.empty()) {
            reshuffle();
        }
        return this.drawPile.popCard();
    }
    nextPlayer(current) {
        if (current == this.one) {
            return this.two;
        } else {
            return this.one;
        }
    }
    
    displayState() {
        this.one.display();
        this.two.display();
        this.discardPile.display();
        console.log("Draw pile:");
        console.log(drawPile.length + " cards");
    }
    takeTurn(player) {
        let prev = this.discardPile.last();
        let next = player.play(this, prev);
        this.discardPile.addCard(next);
    
        console.log(player.name + " plays " + next);
        console.log();
    }
    
    playGame() {
        let player = this.one;

    // keep playing until there's a winner
        while (!this.isDone()) {
            this.displayState();
            this.waitForUser();
            this.takeTurn(player);
            player = this.nextPlayer(player);
        }

    // display the final score
        this.one.displayScore();
        this.two.displayScore();
    }
}

let deck = new Deck("Deck");
deck.shuffle();

let hand = new Hand("Hand");
deck.deal(hand, 5);
hand.display();

let drawPile = new Hand("Draw Pile");
deck.dealAll(drawPile);
console.log("Draw Pile has " + drawPile.cards.length + " cards ");