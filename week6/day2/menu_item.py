import psycopg2
from dotenv import load_dotenv
import os

load_dotenv(encoding='latin1', verbose=True)

def execute_query(query):
    with psycopg2.connect(host=os.getenv('HOSTNAME'),
                          user=os.getenv('USER'),
                          password=os.getenv('PASSWORD'),
                          database=os.getenv('DATABASE')) as conn:
        with conn.cursor() as cursor:
            cursor.execute(query)
            try:
                return cursor.fetchall()
            except Exception as e:
                print(e)

class MenuItem:
    def __init__(self, name: str, price: int):
        self.name = name
        self.price = price

        self.id = self.save()


    def save(self):
        if not execute_query(f"select * from menu_items where item_name = '{self.name}'"):
            execute_query(f"INSERT INTO menu_items (item_name, item_price) VALUES ('{self.name}', {self.price})")
        return execute_query(f"select item_id from menu_items where item_name = '{self.name}'")[0][0]

    def update(self):
        if not execute_query(f"select * from menu_items where item_id = {self.id}"):
            self.save()
        execute_query(f"update menu_items set item_name = '{self.name}', item_price = {self.price} where item_id = '{self.id}'")

    def delete(self):
        if execute_query(f"select * from menu_items where item_id = {self.id}"):
            execute_query(f"delete from menu_items where item_id = {self.id}")

class MenuManager:
    @staticmethod
    def get_by_name(item_name):
        result = execute_query(f"select * from menu_items where item_name = '{item_name}'")
        if result:
            return MenuItem(result[0][1], result[0][2])

    def all_items(self):
        response = execute_query(f"select * from menu_items")
        if response:
            result = []
            for row in response:
                result.append(MenuItem(row[1], row[2]))
            return result
