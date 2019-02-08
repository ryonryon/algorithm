class PostApocalypticWorld:
    def __init__(self, fam_num):
        self.family_num = fam_num
        self.boys_total_num = 0
        self.girls_total_num = 0
        self.girls_ratio = 0
    
    def calculat_girls_ratio(self):
        self.girls_ratio = (self.girls_total_num / (self.girls_total_num + self.boys_total_num)) * 100


def giving_birth(fam_num):

    half_of_baby = round(fam_num / 2)
    p_a_world.boys_total_num += half_of_baby
    p_a_world.girls_total_num += half_of_baby

    print('{} of family give birth'.format(fam_num))
    print('{} of boys and {} of girls are birth'.format(half_of_baby, half_of_baby))

def print_ratio():
    print('total girls:', p_a_world.girls_total_num)
    print('total boys:', p_a_world.boys_total_num)
    print('new generation ratio: {} % girls'.format(p_a_world.girls_ratio))
    print('')


def generation_ratio(family_num):
    
    giving_birth(family_num)
    
    family_num = round(family_num - family_num / 2)
    p_a_world.calculat_girls_ratio()

    print_ratio()

    if family_num > 0:
        generation_ratio(family_num)

# families in the countory are 1000
family_number = 1000

# make object from PostApocalypticWorld class
p_a_world = PostApocalypticWorld(family_number)

# run 
generation_ratio(p_a_world.family_num)