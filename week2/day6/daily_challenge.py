class Farm:
    def __init__(self, name):
        self.name = name
        self.animals = dict()

    def add_animal(self, animal, count=1):
        if animal in self.animals.keys():
            self.animals[animal] += count
        else:
            self.animals[animal] = count

    def get_info(self):
        result = f"{self.name}'s farm\n\n"
        for animal, count in self.animals.items():
            result += f"{animal} : {count}\n"
        result += "\n       E-I-E-I-0!"
        return result

macdonald = Farm("McDonald")
macdonald.add_animal('cow',5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
print(macdonald.get_info())