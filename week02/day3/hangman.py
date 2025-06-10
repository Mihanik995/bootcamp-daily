import random


def draw_hangman(hangman_progress: int):
    hangman = [""" 
    ____
    |/   |
    |   
    |    
    |    
    |    
    |
    |_____
    """,
               """
                ____
               |/   |
               |   (_)
               |    
               |    
               |    
               |
               |_____
               """,
               """
                ____
               |/   |
               |   (_)
               |    |
               |    |    
               |    
               |
               |_____
               """,
               f"""
                ____
               |/   |
               |   (_)
               |   \\|
               |    |
               |    
               |
               |_____
               """,
               """
                ____
               |/   |
               |   (_)
               |   \\|/
               |    |
               |    
               |
               |_____
               """,
               """
                ____
               |/   |
               |   (_)
               |   \\|/
               |    |
               |   / 
               |
               |_____
               """,
               """
                ____
               |/   |
               |   (_)
               |   \\|/
               |    |
               |   / \\
               |
               |_____
               """,
               """
                ____
               |/   |
               |   (_)
               |   /|\\
               |    |
               |   | |
               |
               |_____
               
               Good luck next time!
               """]
    print(hangman[hangman_progress])


wordslist = ['correction', 'childish', 'beach', 'python', 'assertive', 'interference', 'complete', 'share',
             'credit card', 'rush', 'south']
word = random.choice(wordslist)

hangman_progress = 0
user_word = '*' * len(word)

print("Welcome to Hangman!")
draw_hangman(hangman_progress)

while hangman_progress < 7:
    print(f"Your word: {user_word}")
    user_guess = input('Try to guess a letter: ')
    if user_guess not in word:
        hangman_progress += 1
        draw_hangman(hangman_progress)
        continue
    for i in range(len(word)):
        if word[i] == user_guess:
            user_word = user_word[:i] + user_guess + user_word[i + 1:]
    if user_word == word:
        print(f'You won! The word was: {user_word}')
        break
