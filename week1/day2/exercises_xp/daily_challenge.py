from random import sample

user_sentence = input("Please enter your sentence. It should be precisely 10 symbols: ")

if len(user_sentence) < 10:
    print("String is not long enough")
elif len(user_sentence) > 10:
    print("String is too long")
else:
    print("Perfect string")

    print()
    print(user_sentence[0])
    print(user_sentence[-1])

    print()
    for i in range(len(user_sentence)):
        print(user_sentence[:i+1])

    print()
    print(''.join(sample(user_sentence, len(user_sentence))))

