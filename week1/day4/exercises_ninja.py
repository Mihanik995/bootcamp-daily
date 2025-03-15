import random
from math import sqrt

# Exercise 1
user_numbers = input("Enter a few numbers separated by comma: ")
results = []
for number in user_numbers.split(","):
    results.append(str(sqrt(2 * 50 * int(number) / 30)))
print(','.join(results))

# Exercise 2
list_of_lists = [[3, 47, 99, -80, 22, 97, 54, -23, 5, 7],
                 [44, 91, 8, 24, -6, 0, 56, 8, 100, 2],
                 [3, 21, 76, 53, 9, -82, -3, 49, 1, 76],
                 [18, 19, 2, 56, 33, 17, 41, -63, -82, 1]]
current_list = random.choice(list_of_lists)

print(f"Current list: {current_list}")
print(f"Descending order: {current_list.sort(reverse=True)}")
print(f"Sum: {sum(current_list)}")
print(f"The first and the last: {[current_list[0], current_list[-1]]}")
print(f"Values over 50: {[value for value in current_list if value > 50]}")
print(f"Values under 10: {[value for value in current_list if value < 10]}")
print(f"No duplicates: {set(current_list)}, length: {len(set(current_list))}")
print(f"Average: {sum(current_list) / len(current_list)}")
print(f"Max: {max(current_list)}")
print(f"Min: {min(current_list)}")

# Exercise 3
string = ""
