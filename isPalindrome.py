word = input('Enter a word: ')

def is_palindrome(word):
    for i in range(0, len(word)//2):
        if word[i] != word[len(word)- i - 1]:
            print("Not Palindrome")
            return False
    
    return True

print(is_palindrome(word))