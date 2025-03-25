# Exercise 1
class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age


cats = [Cat("Cat 1", 5), Cat("Cat 2", 6), Cat("Cat 3", 3)]

oldest = cats[0]
for cat in cats:
    if cat.age > oldest.age:
        oldest = cat
print(f"The oldest cat is {oldest.name}, and is {oldest.age} years old.")


# Exercise 2
class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height

    def bark(self):
        print(f"{self.name} does woof!")

    def jump(self):
        print(f"{self.name} jumps {self.height * 2} cm high!.")


davids_dog = Dog("Rex", 50)
print(davids_dog.name)
print(davids_dog.height)
davids_dog.bark()
davids_dog.jump()

sarahs_dog = Dog("Teacup", 20)
print(sarahs_dog.name)
print(sarahs_dog.height)
sarahs_dog.bark()
sarahs_dog.jump()

print(sarahs_dog.name if sarahs_dog.height > davids_dog.height else davids_dog.name)


# Exercise 3
class Song:
    def __init__(self, lyrics: list):
        self.lyrics = lyrics

    def sing_me_a_song(self):
        for sentence in self.lyrics:
            print(sentence)


stairway = Song(["There’s a lady who's sure",
                 "all that glitters is gold",
                 "and she’s buying a stairway to heaven"])

stairway.sing_me_a_song()


# Exercise 4
class Zoo:
    def __init__(self, name):
        self.name = name
        self.animals = []

    def add_animal(self, animal):
        self.animals.append(animal) if animal not in self.animals else None

    def get_animals(self):
        print(', '.join(self.animals))

    def sell_animal(self, animal):
        self.animals.remove(animal) if animal in self.animals else None

    def sort_animals(self):
        result = dict()
        for animal in self.animals:
            if animal[0].capitalize() in result.keys():
                result[animal[0].capitalize()].append(animal)
            else:
                result[animal[0].capitalize()] = [animal]
        return result

    def get_groups(self):
        sorted_animals = self.sort_animals()
        for letter, animals in sorted_animals.items():
            print(f"{letter}: {', '.join(animals)}")

new_york_zoo = Zoo("New York Zoo")

new_york_zoo.add_animal('Ape')
new_york_zoo.add_animal('Bat')
new_york_zoo.add_animal('Cat')
new_york_zoo.add_animal('Tiger')
new_york_zoo.add_animal('Bear')

new_york_zoo.get_animals()
new_york_zoo.get_groups()

new_york_zoo.sell_animal('Bear')

new_york_zoo.get_animals()
new_york_zoo.get_groups()
