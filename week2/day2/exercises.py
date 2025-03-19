# Exercise 1
import random
from unittest import case


def what_i_learn():
    print("I learn Python")

what_i_learn()

# Exercise 2
def favorite_book(title):
    print(f"One of my favorite books is {title}")

favorite_book("Lord of the Rings")

# Exercise 3
def describe_city(city, country='Israel'):
    print(f"{city} is in {country}")

describe_city("Tel Aviv")
describe_city('London', 'England')

# Exercise 4
def compare_with_random(number):
    random_number = random.randint(1, 100)
    if not 1 <= number <= 100:
        print(f"I need a number between 1 and 100")
    elif number == random_number:
        print(f"Your number is equal to the random number!")
    else:
        print(f"Your number {number} is not equal to the random number {random_number}")

compare_with_random(-1)
compare_with_random(25)

# Exercise 5
def make_shirt(size='L', text='I love Python'):
    print(f"The size of the shirt is {size} and the text is {text}")

make_shirt()
make_shirt('M')
make_shirt(text='I love JavaScript')

# Exercise 6
magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

def show_magicians(magicians: list):
    print(", ".join(magicians))

def make_great(magicians: list):
    return [f"the Great {magician}" for magician in magicians]

show_magicians(make_great(magician_names))

# Exercise 7
def get_random_temp(season):
    match season:
        case 'spring':
            return random.randint(5, 30)
        case 'summer':
            return random.randint(20, 40)
        case 'fall':
            return random.randint(-5, 25)
        case 'winter':
            return random.randint(-20, 0)

def main():
    season = input("What season is it right now? ")
    temp = get_random_temp(season)
    print(f"The temperature right now is {temp} degrees Celsius.")
    if temp < 0:
        print("Brrr, that’s freezing! Wear some extra layers today")
    elif temp < 16:
        print("Quite chilly! Don’t forget your coat")
    elif temp < 23:
        print("The weather is perfect. Enjoy!")
    elif temp < 32:
        print("It's quite hot outside. Perfect weather for a beach day!")
    else:
        print("It's hot like hell! You better stay under air conditioner")

# Exercise 8
data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]

def ask_question(round: dict):
    user_answer = input(round["question"])
    if user_answer == round["answer"]:
        return 0
    else:
        return user_answer

def show_wrong_answers(answers: list):
    print(f"You made {len(answers)} wrong answers: {", ".join(answers)}")

wrong_answers = []
for round in data:
    user_answer = ask_question(round)
    if user_answer:
        wrong_answers.append(user_answer)
show_wrong_answers(wrong_answers)