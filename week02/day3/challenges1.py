# Exercise 1
from math import sqrt

list_ = list(range(1, 6))
index = 2

list_.insert(index, 'X')

# Exercise 2
string = """Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
officia deserunt mollit anim id est laborum."""

print(string.count(' '))

# Exercise 3
uppercase = 0
lowercase = 0

for char in string:
    if char.isupper():
        uppercase += 1
    elif char.islower():
        lowercase += 1

print(uppercase)
print(lowercase)


# Exercise 4
def my_sum(values: list[int]) -> int:
    sum = 0
    for value in values:
        sum += value
    return sum


# Exercise 5
def find_max(values: list[int]) -> int:
    max_value = values[0]
    for value in values:
        if value > max_value:
            max_value = value
    return max_value


# Exercise 6
def factorial(n: int) -> int:
    if n == 0:
        return 1
    else:
        return n * factorial(n - 1)


# Exercise 7
def list_count(values: list, element) -> int:
    count = 0
    for value in values:
        if value == element:
            count += 1
    return count


# Exercise 8
def norm(values: list[int]):
    sum = 0
    for value in values:
        sum += value ** 2
    return sqrt(sum)


# Exercise 9
def is_mono(values: list) -> bool:
    if values == sorted(values):
        return True
    if values == sorted(values, reverse=True):
        return True
    return False


# Exercise 10
def longest_word(values: list[str]) -> str:
    longest = values[0]
    for value in values:
        if len(value) > len(longest):
            longest = value
    return longest


# Exercise 11
def in_two(values: list):
    integers = []
    strings = []
    for value in values:
        if isinstance(value, int):
            integers.append(value)
        elif isinstance(value, str):
            strings.append(value)
    return integers, strings


# Exercise 12
def is_palindrome(string_: str) -> bool:
    if string_ == string_[::-1]:
        return True
    return False


# Exercise 13
def sum_over(sentence: str, k: int) -> int:
    sum = 0
    for word in sentence.split():
        if len(word) > k:
            sum += 1
    return sum


# Exercise 14
def dict_avg(dictionary: dict) -> int:
    sum = 0
    for value in dictionary.values():
        sum += value
    return sum / len(dictionary)


# ...
# Exercise 18
def type_count(*args):
    result = dict()
    for arg in args:
        if type(arg) in result.keys():
            result[arg] += 1
        else:
            result[arg] = 1
    return result


# Exercise 19
def split(string_: str, symbol=' ') -> list:
    result = []
    while symbol in string_:
        for i in range(len(string_)):
            if string_[i] == symbol:
                result.append(string_[:i])
                string_ = string_[i + 1:]
                break
    if string_:
        result.append(string_)
    return result

print(split(string))
print(split(string, symbol='.'))
