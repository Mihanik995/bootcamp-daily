# Exercise 1
my_fav_numbers = {1, 3, 7, 13}

my_fav_numbers.add(5)
my_fav_numbers.add(37)

my_fav_numbers.remove(5)

friend_fav_numbers = {2, 4, 8, 16}

our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)

# Exercise 2
# No

# Exercise 3
basket = ["Banana", "Apples", "Oranges", "Blueberries"]

basket.pop(0)
basket.remove("Oranges")
basket.append("Kiwi")
basket.insert(0, "Apples")
basket.count("Apples")
basket.clear()
print(basket)

# Exercise 4
list = []
for i in range(8):
    new_number = 1.5 + i / 2
    if new_number == int(new_number):
        list.append(int(new_number))
    else:
        list.append(new_number)

# Exercise 5
for i in range(20):
    print(i + 1)

i_list = range(20)
for i in i_list:
    if i_list.index(i) % 2 == 0:
        print(i)

# Exercise 6
my_name = "mikhail"
while True:
    user_name = input("Enter your name: ")
    if user_name.lower() == my_name:
        break

# Exercise 7
user_favorite_fruits = input("Enter your favorite fruits (print them in one line, separated by space): ")
user_favorite_fruits_list = user_favorite_fruits.split()
new_fruit = input("Enter a fruit: ")
if new_fruit in user_favorite_fruits_list:
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy")

# Exercise 8
user_toppings = []
while True:
    new_topping = input("Enter a topping: ")
    if new_topping == 'quit':
        break
    user_toppings.append(new_topping.capitalize())
    print(f"The {new_topping} will be added to the pizza")

print("Your toppings:")
for topping in user_toppings:
    print(topping)
print(f"Pizza price: {10 + len(user_toppings) * 2.5}")

# Exercise 9
family_ages = input("Enter an age each family member, separated by space: ")
family_ages_list = family_ages.split()
result_price = 0
for age in family_ages_list:
    if int(age) < 3:
        result_price += 0
    elif int(age) <= 12:
        result_price += 10
    else:
        result_price += 15
print(f"The total price for your tickets is {result_price}")

teenagers_list = input("Enter a name of each teenager, separated by space: ").split()
for teenager in teenagers_list:
    age = input(f"{teenager}, enter your age: ")
    if 16 < int(age) < 21:
        teenagers_list.remove(teenager)
print(f"Teenagers allowed to watch the movie: {', '.join(teenagers_list)}")

# Exercise 10
sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich",
                   "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")

finished_sandwiches = []
for sandwich in sandwich_orders.copy():
    finished_sandwiches.append(sandwich)
    sandwich_orders.remove(sandwich)

for sandwich in finished_sandwiches:
    print(f"I made your {sandwich}")
