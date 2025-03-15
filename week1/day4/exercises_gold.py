import random
import time

# Exercise 1

list = [1, 2, 3]
another_list = ['a', 'b', 'c']

another_list.extend(list)

# Exercise 2
for i in range(1500, 2500):
    if i % 5 == 0 and i % 7 == 0:
        print(i)

# Exercise 3
names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']

user_name = input('Enter your name: ')
if user_name in names:
    print(names.index(user_name))

# Exercise 4
numbers_list = []
for i in range(3):
    numbers_list.append(int(input('Enter a number: ')))
print(f"The greatest number is: {max(numbers_list)}")

# Exercise 5
alphabet = ''
for i in range(ord('a'), ord('z') + 1):
    alphabet += chr(i)

for letter in alphabet:
    if letter in ['a', 'e', 'y', 'u', 'i', 'o']:
        print(f"{letter} is vowel")
    else:
        print(f"{letter} is consonant")

# Exercise 6
words = []
for i in range(7):
    words.append(input("Enter a word: "))

letter = input('Enter a letter: ')[0]

for word in words:
    if letter in word:
        print(f"Index of the letter '{letter}' in the word '{word}' is {word.index(letter)}")
    else:
        print(f"There is no letter '{letter}' in the word '{word}'")

# Exercise 7
list = range(1000000)
print(min(list))
print(max(list))

start_time = time.time()
print(sum(list))
end_time = time.time()
print(f"Python solver it for {end_time - start_time} seconds")

# Exercise 8
user_input = input('Enter anything, separated by comma: ')

user_list = user_input.split(',')
print(user_list)

user_tuple = tuple(user_list)
print(user_tuple)

# Exercise 9
total_games = 0
total_wins = 0

while True:
    user_number = input("Enter a number from 1 to 9 or 'q' to quit: ")
    random_number = random.randint(1, 9)

    if user_number == 'q':
        break

    total_games += 1
    if int(user_number) == random_number:
        total_wins += 1
        print("You win")
    else:
        print("Good luck next time")

print(f"You won {total_wins} times in {total_games} games")
