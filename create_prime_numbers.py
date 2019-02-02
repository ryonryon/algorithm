
# This is not right way
def create_prime_numbers(num):
    list_num = [i for i in range(2,num+1)]

    def kurukuru(list_numbers):
        for j in range(0, len(list_numbers)):
            for k in range(j+1, len(list_numbers)):#while文に変えられる
                if list_numbers[k] % list_numbers[j] == 0:
                    del list_numbers[k]
                    return True
        return False

    while True:
        if kurukuru(list_num) is False:
            break
    return list_num

print(create_prime_numbers(1000))