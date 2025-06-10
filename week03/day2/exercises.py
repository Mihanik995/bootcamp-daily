import random


# Exercise 1
class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())


class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'


class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'


class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'


class Siamese(Cat):
    pass


all_cats = [
    Bengal('Barsik', 5),
    Chartreux('Murzik', 7),
    Siamese('Sphinx', 8)
]
sara_pets = Pets(all_cats)
sara_pets.walk()


# Exercise 2
class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f'{self.name} is barking'

    def run_speed(self):
        return self.weight / self.age * 10

    def fight(self, another_dog):
        if self.weight * self.run_speed() > another_dog.weight * another_dog.run_speed():
            return f'{self.name} wins'
        else:
            return f'{another_dog.name} wins'


dogs = [
    Dog('Barbos', 6, 24),
    Dog('Balbes', 7, 16),
    Dog('Mazay', 9, 31)
]

for dog in dogs:
    dog.bark()
    for another_dog in dogs:
        if another_dog != dog:
            print(dog.fight(another_dog))


# Exercise 3
# let's just pretend this is a new file, and I did "from week03.day2.exercises import Dog"
class PetDog(Dog):
    def __init__(self, name, age, weight, trained=False):
        super().__init__(name, age, weight)
        self.trained = trained

    def train(self):
        self.bark()
        self.trained = True

    def play(self, *args):
        dog_names = list(args)
        dog_names.append(self.name)
        print(f"{', '.join(dog_names)} are playing together")

    def do_a_trick(self):
        if self.trained:
            tricks = [
                f"{self.name} does a barrel roll",
                f"{self.name} stands on his back legs",
                f"{self.name} shakes your hand",
                f"{self.name} plays dead"
            ]
            print(random.choice(tricks))


# Exercise 4
class Family:
    def __init__(self, members: list[dict], last_name):
        self.members = members
        self.last_name = last_name

    def born(self, **kwargs):
        self.members.append(dict(**kwargs))
        print("new family member was born! Congrats!")

    def is_18(self, name):
        for member in self.members:
            if name in member.values() and member['age'] > 18:
                return True
        return False

    def family_presentation(self):
        print(f"{self.last_name} family")
        for member in self.members:
            print("---------------------------")
            for key, value in member.items():
                print(f"{key} : {value}")


family = Family([
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False}
], 'Shnaider')

family.born(name='Yosi', age=0, gender='Male', is_child=True)
print(family.is_18('Michael'))
print(family.is_18('Yosi'))
family.family_presentation()


# Exercise 5
class TheIncredibles(Family):
    def __init__(self, members: list[dict], last_name):
        super().__init__(members, last_name)

    def use_power(self, name):
        for member in self.members:
            if name in member.values():
                if member['age'] < 18:
                    raise Exception("You are too young.")
                else:
                    print(f"{member['name']} {member['power']}")

    def incredible_presentation(self):
        print("Here is our powerful family!")
        super().family_presentation()


super_family = TheIncredibles([
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False, 'power': 'fly', 'incredible_name': 'MikeFly'},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False, 'power': 'read minds',
     'incredible_name': 'SuperWoman'}
], "Parker")
super_family.incredible_presentation()
super_family.born(name='Baby Jack', age=0, gender='Male', is_child=True, power='Unknown power')
super_family.incredible_presentation()
