
def is_palindlome(word):
    for i in range(0, len(word)//2):
        if word[i] != word[len(word)- i - 1]:
            return False
    return True

def is_unique(word):
    for i in range(len(word)):
        for j in range(i+1, len(word)):
            if word[i] == word[j]:
                return False
    return True

def compare_word(word1, word2):
    if len(word1) != len(word2):
        return False
    
    for i in range(0, len(word1)):
        if word1[i] != word2[len(word2) - i - 1]:
            return False
    return True

def is_palindlome_int(integer):

    int_list = []
    while integer != 0:
        int_list.append(integer % 10)
        integer = integer // 10
    
    for i in range(0, len(int_list)//2):
        if int_list[i] != int_list[len(int_list) - i - 1]:
            return False
    return True