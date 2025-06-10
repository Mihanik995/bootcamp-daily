# Exercise 1
class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __str__(self):
        return f'{self.amount} {self.currency}'

    def __repr__(self):
        return self.__str__()

    def __int__(self):
        return self.amount

    def __add__(self, other):
        if isinstance(other, type(self)):
            if self.currency != other.currency:
                raise TypeError(f'Cannot add between Currency type {self.currency} and {other.currency}')
            return self.amount + other.amount
        elif isinstance(other, int):
            return self.amount + other
        else:
            raise TypeError

    def __iadd__(self, other):
        if isinstance(other, type(self)):
            if self.currency != other.currency:
                raise TypeError(f'Cannot add between Currency type {self.currency} and {other.currency}')
            return Currency(self.currency, self.amount + other.amount)
        elif isinstance(other, int):
            return Currency(self.currency, self.amount + other)
        else:
            raise TypeError


c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

print(str(c1))
print(int(c1))
print(repr(c1))
print(c1 + 5)
print(c1 + c2)

print(c1)
c1 += 5
print(c1)

c1 += c2
print(c1)

try:
    print(c1 + c3)
except TypeError as e:
    print(f"TypeError: {e}")


# Exercise 2
from week03.day4.func import summ

summ(3, 5)

# Exercise 3
import random
import string

result = ''
for i in range(5):
    result += random.choice(string.ascii_letters)

# Exercise 4
import datetime

def today():
    print(datetime.date.today())

# Exercise 5
def from_january_1st():
    full_result = datetime.datetime(datetime.datetime.now().year + 1, 1, 1) - datetime.datetime.now()
    print(f"The 1st of January is in {full_result} hours")

# Exercise 6
def minutes_of_life(birth_date: datetime.datetime):
    length = datetime.datetime.now() - birth_date
    print(int(length.total_seconds() / 60))

# Exercise 7
from faker import Faker

def fill_with_fake_users(_list: list[dict], users_required: int):
    for _ in range(users_required):
        _list.append({
            'name': Faker().name(),
            'address': Faker().address(),
            'language_code': Faker().language_code(),
        })
