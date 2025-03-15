import datetime

user_birthdate = input("Enter your birthdate (DD/MM/YYYY): ")
user_birthdate = datetime.datetime.strptime(user_birthdate, "%d/%m/%Y").year
today = datetime.date.today().year
diff = today - user_birthdate
candles = diff % 10
if candles == 0:
    candles = 10
underlines = int((10 - candles) / 2)

print(f"       _{'_' * underlines}{'i' * candles}{'_' * underlines}_\n" \
      "      |:H:a:p:p:y:|\n" \
      "    __|___________|__\n" \
      "   |^^^^^^^^^^^^^^^^^|\n" \
      "   |:B:i:r:t:h:d:a:y:|\n"
      "   |                 |\n" \
      "   ~~~~~~~~~~~~~~~~~~~\n")
