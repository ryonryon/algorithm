inventory = {
    'gold' : 500,
    'pouch' : ['flint', 'twine', 'gemstone'],
    'backpack' : ['xylophone','dagger', 'bedroll','bread loaf']
}

# Exercise1
inventory['pocket'] = ['seashell', 'strange', 'berry', 'lint']
inventory['backpack'].sort()
inventory['backpack'].remove('dagger')
inventory['gold'] = 50

# Exercise2
print('Exercise2')

prices = {
    "banana": 4,
    "apple": 2,
    "orange": 1.5,
    "pear": 3
}
stock = {
    "banana": 6,
    "apple": 0,
    "orange": 32,
    "pear": 15
}

for key, value in prices.items():
    print(key,':',value)

total = 0

for key in prices:
    total += prices[key] * stock[key]


# Exercise3
print('Exercise3')

groceries = ["banana","orange", "apple"]
stock = {
    "banana": 6,
    "apple": 0,
    "orange": 32,
    "pear": 15
}

prices = {
    "banana": 4,
    "apple": 2,
    "orange": 1.5,
    "pear": 3
}

def compute_bill(food:list):
    total = 0
    for i in food:
        if stock[key] > 0:
            total +=prices[i]
            stock[key] -= - 1
    return total


print(compute_bill(groceries))

