import random


class Card:
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value

class Deck:
    def __init__(self):
        self.cards = []

        for suit in ('Hearts', 'Diamonds', 'Clubs', 'Spades'):
            for value in ('A','2','3','4','5','6','7','8','9','10','J','Q','K'):
                self.cards.append(Card(suit, value))

    def shuffle(self):
        if len(self.cards) == 52:
            random.shuffle(self.cards)

    def deal(self):
        return self.cards.pop()


