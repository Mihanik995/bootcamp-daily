from io import TextIOWrapper


class AnagramChecker:
    def __init__(self, filename = 'sowpods.txt'):
        with open(filename, 'r') as file:
            self.words = file.read().split()

    def is_valid_word(self, word: str) -> bool:
        if word.upper() in self.words:
            return True
        return False

    @staticmethod
    def is_anagram(word: str, word2: str) -> bool:
        word_list = sorted(list(word))
        word2_list = sorted(list(word2))
        if word_list == word2_list and word != word2:
            return True
        return False

    def get_anagrams(self, word):
        anagrams = []
        for _word in self.words:
            if self.is_anagram(word, _word):
                anagrams.append(_word)
        return anagrams

