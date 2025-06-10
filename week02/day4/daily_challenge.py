# Challenge 1
user_string = input('Please enter a few words separated by comma: ')
sorted_string = ','.join([word for word in sorted(user_string.split(','))])
print(sorted_string)

# Challenge 2
def longest_word(words: str) -> str:
    words = words.split()
    longest_word = words[0]
    for word in words:
        if len(word) > len(longest_word):
            longest_word = word

    return longest_word

print(longest_word("Margaret's toy is a pretty doll."))
print(longest_word("A thing of beauty is a joy forever."))
print(longest_word("Forgetfulness is by all means powerless!"))
