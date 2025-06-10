def decode(matrix: str):
    new_string = ''

    matrix_list = matrix.split('\n')
    for i in range(len(matrix_list[0])):
        for row in matrix_list:
            new_string += row[i]

    for letter in new_string:
        if not letter.isalpha():
            new_string = new_string.replace(letter, ' ')

    return ' '.join(new_string.split())


matrix = """7ii
Tsx
h%?
i #
sM 
$a 
#t%
^r!"""

print(decode(matrix))
