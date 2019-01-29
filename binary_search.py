
def binary_search(target_num, searched_list):
    """

    :param target_num: Is supposed to be int and exists in searched_list.
    :param searched_list: Is supposed to be all int and sorted.
    :Output: Output at which number in the list the target number exists.
    """

    result = 0
    left = 0
    right = len(searched_list) - 1

    while left <= right:
        middle_num = (left + right) // 2
        if searched_list[middle_num] == target_num:
            result = middle_num
            break
        elif searched_list[middle_num] > target_num:
            right = middle_num - 1
        else:
            left = middle_num + 1

    if result is None:
        print('target_num({}) is not exist in the list'.format(target_num,))
    else:
        print('target exists at the {} position of the list.'.format(str(result+1)))


