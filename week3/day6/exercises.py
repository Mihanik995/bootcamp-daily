# Exercise 1
import random

def get_words_from_file(filename = 'sowpods.txt'):
    with open(filename, 'r') as f:
        word_list = f.read().split()
        return word_list

def get_random_sentence(length, word_list = get_words_from_file()):
    sentence_words = []
    for _ in range(length):
        sentence_words.append(random.choice(word_list).lower())
    return ' '.join(sentence_words)

def main():
    print("""Hello there!
This script generates the random sentence with length of your choice (between 2 and 20).
How long would you like to generate?
""")
    while True:
        try:
            user_length = int(input())
            if user_length < 2 or user_length > 20:
                print('Please enter a number between 2 and 20')
            else:
                print(get_random_sentence(user_length))
                break
        except ValueError:
            print('Please enter a number.')


main()

# Exercise 2
import json


sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

_dict = json.loads(sampleJson)

print(_dict['company']['employee']['payable']['salary'])
_dict['company']['employee']['birth_date'] = '01.01.1970'

with open('_.json', 'w') as f:
    f.write(json.dumps(_dict))
