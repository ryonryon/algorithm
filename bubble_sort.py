
def bubble_sort(sort_list):

    for i in range(len(sort_list)):

        j = 0
        k = len(sort_list) - (i + 1)

        while j < k:

            if sort_list[j] > sort_list[j+1]:
                temp_var = sort_list[j]
                sort_list[j] = sort_list[j+1]
                sort_list[j+1] = temp_var

            j += 1

    return sort_list


sorted_list = bubble_sort([1, 56, 78, 46, 7, 83, 8, 3, 83, 83, 94994, 3, 9, 94, 9, 97, 5, 6, 4, 3, 6, 8])
print(sorted_list)
