# Exercise 1
print("Hello world\n" * 4, "I love python\n" * 4, sep='')

# Exercise 2
month_number = int(input("Please enter the month number (1 to 12): "))
if month_number in [12, 1, 2]:
    print("It's winter")
elif month_number in [3, 4, 5]:
    print("It's spring")
elif month_number in [6, 7, 8]:
    print("It's summer")
elif month_number in [9, 10, 11]:
    print("It's autumn")
else:
    print("Invalid month number")
