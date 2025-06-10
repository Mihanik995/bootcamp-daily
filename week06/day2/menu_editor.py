from week06.day2.menu_item import MenuManager, MenuItem


def add_item_to_menu():
    try:
        name = input("Please insert item's name: ")
        price = int(input("Please insert item's price: "))
        MenuItem(name, price).save()
        print("Item added")
    except ValueError:
        print("Invalid input")


def remove_item_from_menu():
    name = input("Please insert item's name: ")
    result = MenuManager.get_by_name(name)
    if result:
        result.delete()
        print("Item deleted")
    else:
        print("Alas, I found nothing like this")

def update_item_from_menu():
    name = input("Please insert item's name: ")
    result = MenuManager.get_by_name(name)
    if result:
        print(result)
        new_name = input("Please insert item's new name (insert blank to leave as it is): ")
        new_price = int(input("Please insert item's new price (insert blank to leave as it is): "))
        result.update(name=new_name if new_name else result.name,
                      price=new_price if new_price else result.price)
        print("Item updated")

    else:
        print("Alas, I found nothing like this")


def view_an_item():
    result = MenuManager.get_by_name(input("Please insert item's name: "))
    if result:
        print(result)
    else:
        print("Alas, I found nothing like this")

def show_restaurant_menu():
    for item in MenuManager.all_items():
        print(item)


def show_user_menu():
    print('Hello customer!')
    while True:
        try:
            user_input = input(f'''
    Please choose an option:
    1. View an Item (V)
    2. Add an Item (A)
    3. Delete an Item (D)
    4. Update an Item (U)
    5. Show the Menu (S)
    6. Quit
    ''')
            match int(user_input):
                case 1:
                    view_an_item()
                case 2:
                    add_item_to_menu()
                case 3:
                    remove_item_from_menu()
                case 4:
                    update_item_from_menu()
                case 5:
                    show_restaurant_menu()
                case 6:
                    show_user_menu()
                    break
                case _:
                    print('I have no such option')
        except ValueError:
            print("I need a number")
