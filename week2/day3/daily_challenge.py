import random

list_of_numbers = [random.randint(0, 10000) for _ in range(20000)]

target_number = 3728

for i in range(len(list_of_numbers) - 1):
    for j in range(len(list_of_numbers[i + 1:])):
        if list_of_numbers[i] + list_of_numbers[j] == target_number:
            print(f"{list_of_numbers[i]} and {list_of_numbers[j]} sums to the target_number {target_number}")
