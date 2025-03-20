def draw_board(board: list[list[str]]):
    print('***************')
    print('*             *')
    print(f'*  {board[0][0]} | {board[0][1]} | {board[0][2]}  *')
    print(f'* ---|---|--- *')
    print(f'*  {board[1][0]} | {board[1][1]} | {board[1][2]}  *')
    print(f'* ---|---|--- *')
    print(f'*  {board[2][0]} | {board[2][1]} | {board[2][2]}  *')
    print('*             *')
    print('***************')

def ask_a_position():
    row = int(input('Enter row number: '))
    column = int(input('Enter column number: '))
    return row-1, column-1

def make_a_move(player, board: list[list[str]]):
    row, column = ask_a_position()
    while row > len(board) or column > len(board) or board[row][column] != ' ':
        print('Invalid move')
        row, column = ask_a_position()
    board[row][column] = player

def check_win(board: list[list[str]]) -> str:
    for i in range(len(board)):
        if board[i][0] == board[i][1] == board[i][2] != ' ':
            return board[i][0]
        if board[0][i] == board[1][i] == board[2][i] != ' ':
            return board[0][i]
    if board[0][0] == board[1][1] == board[2][2] != ' ':
        return board[0][0]
    if board[0][2] == board[1][1] == board[2][0] != ' ':
        return board[0][2]
    return ' '



board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
]

player1 = 'X'
player2 = 'O'

print('Welcome to Tic Tac Toe!')
draw_board(board)

current_player = player1
winner = check_win(board)
while winner == ' ':
    print(f"Player {current_player} makes a move!")
    make_a_move(current_player, board)
    draw_board(board)
    if current_player == player1:
        current_player = player2
    else:
        current_player = player1
    winner = check_win(board)

print(f'Player {winner} won! Thank you for playing!')