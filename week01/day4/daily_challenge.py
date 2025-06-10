# Exercise 1
number = int(input("Enter a number: "))
length = int(input("Enter a length: "))

result_list = []
for i in range(length):
    result_list.append(number * (i + 1))
print(result_list)

# Exercise 2
string = input("Enter a word: ")
char_list = list(string)

i = 0
while i < len(char_list):
    if i == len(char_list) - 1:
        break
    if char_list[i] == char_list[i + 1]:
        char_list.pop(i + 1)
    else:
        i += 1

print(''.join(char_list))
