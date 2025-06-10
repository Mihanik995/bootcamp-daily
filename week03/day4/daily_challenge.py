import math


class Circle:
    def __init__(self, radius=0.0, diameter=0.0):
        self.radius = radius if radius > 0 else diameter / 2
        self.area = radius * radius * math.pi

    def __str__(self):
        return f'Circle with radius {self.radius}, area {self.area}'

    def __add__(self, other):
        if isinstance(other, type(self)):
            new_circle_area = self.area + other.area
            new_circle_radius = math.sqrt(new_circle_area / math.pi)
            return Circle(radius=new_circle_radius)

    def __lt__(self, other):
        if isinstance(other, type(self)):
            return self.radius < other.radius
        raise TypeError('incomparable values')

    def __le__(self, other):
        if isinstance(other, type(self)):
            return self.radius <= other.radius
        raise TypeError('incomparable values')

    def __eq__(self, other):
        if isinstance(other, type(self)):
            return self.radius == other.radius
        raise TypeError('incomparable values')

    def __ne__(self, other):
        if isinstance(other, type(self)):
            return self.radius != other.radius
        raise TypeError('incomparable values')

    def __gt__(self, other):
        if isinstance(other, type(self)):
            return self.radius > other.radius
        raise TypeError('incomparable values')

    def __ge__(self, other):
        if isinstance(other, type(self)):
            return self.radius >= other.radius
        raise TypeError('incomparable values')


circles = [
    Circle(radius=1.0),
    Circle(radius=2.0),
    Circle(radius=2.0),
    Circle(radius=3.5),
    Circle(radius=1.5),
]


def compare(a, b):
    if a < b:
        print(f"{a} < {b}")
    elif a == b:
        print(f"{a} == {b}")
    else:
        print(f"{a} > {b}")


for circle in circles:
    print(circle)

for circle in circles:
    for another_circle in circles:
        if id(circle) != id(another_circle):
            compare(circle, another_circle)

circles.sort()
for circle in circles:
    print(circle)
