# Exercise 1
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

dictionary = dict(zip(keys, values))

# Exercise 2
family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

total = 0
for value in family.values():
    if value < 3:
        pass
    elif value < 12:
        total += 10
    else:
        total += 15

print(total)

# Exercise 3
brand = {"name": "Zara",
         "creation_date": 1975,
         "creator_name": "Amancio Ortega Gaona",
         "type_of_clothes": ['men', 'women', 'children', 'home'],
         "international_competitors": ['Gap', 'H&M', 'Benetton'],
         "number_stores": 7000,
         "major_color": {"France": ['blue'],
                         "Spain": ['red'],
                         "US": ['pink', 'green']}
         }

brand['number_stores'] = 2
print(f"Our clients are: {', '.join(brand['type_of_clothes'])}")
brand["country_creation "] = 'Spain'
if isinstance(brand["international_competitors"], list):
    brand["international_competitors"].append('Desigual')
del brand["creation_date"]
print(brand["international_competitors"][-1])
print(', '.join(brand["major_color"]["US"]))
print(len(brand))
print(', '.join(brand.keys()))

more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000
}
brand.update(more_on_zara)
print(brand["number_stores"])

# Exercise 4
users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]

dictionary1 = {name: number for number, name in enumerate(users)}
dictionary2 = {number: name for number, name in enumerate(users)}
dictionary3 = {name: number for number, name in enumerate(sorted(users))}

dictionary4 = {name: number for number, name in enumerate([name for name in users
                                                           if 'i' in name])}
dictionary5 = {name: number for number, name in enumerate([name for name in users
                                                           if name[0] == 'M' or name[0] == 'P'])}
