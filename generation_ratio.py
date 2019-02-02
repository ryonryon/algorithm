
import math

class PostApocalypticWorld:
    def __init__(self, fam_num):
        self.family_num = fam_num
        self.boys_num = 0
        self.girls_num = 0
        self.girls_ratio = 0
    
    def calculation_girls_ratio(self):
        self.girls_ratio = (self.girls_num / (self.girls_num + self.boys_num)) * 100

def generation_ratio(family_num):
    
    p_a_world.girls_num += round(family_num / 2)
    p_a_world.boys_num += round(family_num / 2)

    print('{} of family give birth'.format(family_num))
    print('{} of boys are birth and {} of girls are birth'.format(round(family_num / 2), round(family_num / 2)))
    
    family_num = round(family_num - family_num / 2)
    p_a_world.calculation_girls_ratio()
    
    print('total girls:', p_a_world.girls_num)
    print('total boys:', p_a_world.boys_num)
    print('new generation ratio is {} %'.format(p_a_world.girls_ratio))
    print('')

    if family_num > 0:
        generation_ratio(family_num)

family_number = 1000
p_a_world = PostApocalypticWorld(family_number)

generation_ratio(p_a_world.family_num)

p_a_world.calculation_girls_ratio()