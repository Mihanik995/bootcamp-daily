import random

import requests

from week06.day2.menu_item import execute_query

response = requests.get('https://restcountries.com/v3.1/all')
items = response.json()
random.shuffle(items)

execute_query("drop table if exists countries; create table countries (id serial primary key, name varchar, capital pg_catalog.varchar, flag varchar, subregion varchar, population int)")
for item in items[:10]:
    try:
        name = item['name']['common']
    except KeyError:
        name = None
    try:
        capital = item['capital'][0]
    except KeyError:
        capital = None
    try:
        flag = item['flag']
    except KeyError:
        flag = None
    try:
        subregion = item['subregion']
    except KeyError:
        subregion = None
    try:
        population = item['population']
    except KeyError:
        population = None
    execute_query(f"insert into countries (name, capital, flag, subregion, population) "
                  f"values ('{name}', '{capital}', '{flag}', '{subregion}',{population})")