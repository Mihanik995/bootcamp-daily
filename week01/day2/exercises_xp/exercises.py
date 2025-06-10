import random

# Exercise 1
print("Hello world\nHello world\nHello world\nHello world")

# Exercise 2
print((99 ** 3) * 8)

# Exercise 3
# 5 < 3 -> False
# 3 == 3 -> True
# 3 == "3" -> False
# "3" > 3 -> TypeError
# "Hello" == "hello" -> False

# Exercise 4
computer_brand = 'MSI'
print(f"I have a {computer_brand} computer")

# Exercise 5
name = 'Mikhail'
age = 29
shoe_size = 42.5
info = f"Name's {name}, I'm {age} years old, my shoe size is {shoe_size}"
print(info)

# Exercise 6
a = random.randint(1, 100)
b = random.randint(1, 100)
if a > b:
    print("Hello World")

# Exercise 7
user_number = int(input("Enter your number: "))
if user_number % 2 == 0:
    print("It's even")
else:
    print("It's odd")

# Exercise 8
my_name = 'Mikhail'
user_name = input("Enter your name: ")
if my_name == user_name:
    print("Wow, we have same names!")
else:
    print(f"Nice to meet you, {user_name}. I'm {my_name}")

# Exercise 9
user_height = int(input("Enter your height: "))
if user_height > 145:
    print("You're high enough to ride a roller coaster")
else:
    print("You need to grow up a little to ride a roller coaster")
