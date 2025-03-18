# Exercise 1
word = input("PLease enter a word: ")
dictionary = dict()
for i in range(len(word)):
    if word[i] in dictionary.keys():
        dictionary[word[i]].append(i)
    else:
        dictionary[word[i]] = [i]
print(dictionary)

# Exercise 2
items_purchase = {
  "Phone": "$999",
  "Speakers": "$300",
  "Laptop": "$5,000",
  "PC": "$1200"
}

wallet = "$1"

wallet = int(wallet.replace("$", ""))
items_purchase = {item: int(cost.replace('$', '').replace(',',''))
                  for item, cost in items_purchase.items()}

available = []
for item, cost in items_purchase.items():
    if cost <= wallet:
        available.append(item)
        wallet -= cost

print(sorted(available) if available else 'Nothing')