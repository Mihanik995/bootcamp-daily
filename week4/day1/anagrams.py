from week4.day1.anagram_checker import AnagramChecker

print("Hello there!\n"
      "Welcome to Anagram Checker!")
while True:
    try:
        user_choice = int(input("Select an option:\n"
                                "1. Find anagrams for a word.\n"
                                "2. Quit\n"))
    except ValueError:
        print("Please enter a number.")
        continue
    match user_choice:
        case 1:
            checker = AnagramChecker()
            word = input("Enter a word: ").upper()
            if checker.is_valid_word(word):
                anagrams = checker.get_anagrams(word)
                print(f"YOUR WORD :”{word}”\n"
                      "this is a valid English word.\n"
                      f"Anagrams for your word: {', '.join(anagrams) if anagrams else None}.")
            else:
                print('The input is invalid.')
        case 2:
            break
        case _:
            print("Sorry, I didn't understand that.")
