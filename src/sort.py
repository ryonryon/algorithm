
def asc_dec_sort(array):
    for i in range(0, len(array)//2-1):
        for j in range(i+1, len(array)//2):
            if array[i] > array[j]:
                temp = array[i]
                array[i] = array[j]
                array[j] = temp
    
    for k in range(len(array)//2,len(array)-1):
        for l in range(k+1,len(array)):
            if array[k] < array[l]:
                temp = array[k]
                array[k] = array[l]
                array[l] = temp
    return array

def marge_sorted_lists(array_a, array_b):
    array_c = []
    array_a_len = len(array_a)
    array_b_len = len(array_b)
    
    if array_a_len <+ array_b_len:
        loop_len = array_a_len
    elif array_a_len > array_b_len:
        loop_len = array_b_len
    
    for i in range(0, loop_len):
        if array_a[i] <= array_b[i]:
            array_c.append(array_a[i])
            array_c.append(array_b[i])
        else:
            array_c.append(array_b[i])
            array_c.append(array_a[i])
    
    if array_a_len < array_b_len:
        array_c.extend(array_b[i+1:])
    elif array_a_len > array_b_len:
        array_c.extend(array_a[i+1:])
    return array_c

def change_negative_int_to_zero(array):
    for i in range(0, len(array)):
        if array[i] < 0:
            array[i] = 0
    return array



